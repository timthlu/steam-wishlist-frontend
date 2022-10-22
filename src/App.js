import Header from './Header.js';
import AllGames from './AllGames.js';
import Wishlist from './Wishlist.js';
import Box from '@mui/material/Box';
import { useState, useEffect } from 'react';

function App() {
  const [page, setPage] = useState(0);
  const [games, setGames] = useState([]);
  const [wishlist, setWishlist] = useState([]);
  const [wishlistDetails, setWishlistDetails] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/games")
      .then((response) => response.json())
      .then((response) => setGames(response));
  }, []);

  useEffect(() => {
    queryWishlistDetails();
  }, [wishlist]);

  useEffect(() => {
    const interval = window.setInterval(queryWishlistDetails, 86400000);
    return clearInterval(interval);
  }, []);
  
  async function queryWishlistDetails() {
    let ret = [];
    for (let i = 0; i < wishlist.length; i++) {
      const response = await fetch("http://localhost:3000/games/" + wishlist[i]);
      ret = [...ret, await response.json()];
    }

    setWishlistDetails(ret);

    //do a desktop notification for all discounted games
  }

  function handleSwitchPage(key) {
    if (key === 0 && page !== 0) {
      setPage(0);
    } else if (key === 1 && page !== 1) {
      setPage(1);
    }
  }

  function handleAddToWishlist(id) {
    setWishlist(prev => [...prev, id]);
  }

  function handleRemoveFromWishlist(id) {
    setWishlist(prev => prev.filter(gameId => gameId !== id));
  }
  
  return (
    <div>
      <Header handleSwitchPage={handleSwitchPage} />

      <Box sx={{padding: '100px', overflow: 'auto'}}>
        {page === 0 ? 
          <Wishlist wishlistDetails={wishlistDetails} handleRemoveFromWishlist={handleRemoveFromWishlist}/> 
          : <AllGames allGames={games} wishlist={wishlist} handleAddToWishlist={handleAddToWishlist}/>
        }
      </Box>
      
    </div>
  );
}

export default App;
