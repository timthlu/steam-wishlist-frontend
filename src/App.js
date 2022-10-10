import MenuBar from './Header.js';
import AllGames from './AllGames.js';
import MyGames from './MyGames.js';
import Box from '@mui/material/Box';
import { useState, useEffect } from 'react';

function App() {
  const [page, setPage] = useState(0);
  const [games, setGames] = useState([]);
  const [wishlist, setWishlist] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/games")
      .then((response) => response.json())
      .then((response) => setGames(response));
  }, []);
  
  function handleSwitchPage(key) {
    if (key === 0 && page !== 0) {
      setPage(0);
    } else if (key === 1 && page !== 1) {
      setPage(1);
    }
  }

  function handleAddToWishlist(game) {
    setWishlist(prev => [...prev, game]);
    setGames(prev => prev.filter(g => g !== game));
  }

  function handleRemoveFromWishlist(game) {
    setWishlist(prev => prev.filter(g => g !== game));
    setGames(prev => [...prev, game]);
  }
  
  return (
    <div>
      <MenuBar handleSwitchPage={handleSwitchPage} />

      <Box sx={{padding: '100px', overflow: 'auto'}}>
        {page === 0 ? 
          <MyGames wishlist={wishlist} handleRemoveFromWishlist={handleRemoveFromWishlist}/> 
          : <AllGames allGames={games} handleAddToWishlist={handleAddToWishlist}/>
        }
      </Box>
      
    </div>
  );
}

export default App;
