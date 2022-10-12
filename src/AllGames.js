import { useState } from 'react';
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

function AllGames(props) {
  const [loaded, setLoaded] = useState(10);
  const [search, setSearch] = useState("");

  function handleLoadMore() {
    if (props.allGames.length - loaded < 10) {
      setLoaded(props.allGames.length);
    } else {
      setLoaded(prev => prev + 10);
    }
  }

  function handleSearchChange(event) {
    setSearch(event.target.value);
    setLoaded(10);
  }
  
  const filteredGames = props.allGames.filter(game => game.name.toLowerCase().includes(search.toLowerCase()));

  return (
    <div>
      <TextField id="standard-basic" label="Search for a game!" variant="standard" value={search} onChange={handleSearchChange}/>
      <List>
        {filteredGames.slice(0, loaded).map(game => 
          <ListItem key={game.appid}>
            <Typography>{game.name}</Typography>
            <ListItemButton onClick={() => props.handleAddToWishlist(game.appid)}>Add to Wishlist</ListItemButton>
          </ListItem>
        )}
      </List>
      { filteredGames.length - loaded > 0 ? <Button onClick={handleLoadMore}>{filteredGames.length - loaded} more...</Button>
      : <div></div>
      }
      
    </div>
    
  );
}

export default AllGames;
