import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';

function MyGames(props) {
  return(
    <div>
      {props.wishlist.length === 0 ?
        <Typography>No games in wishlist. To add a game, go to the All Games tab!</Typography>
      : <List>
        {props.wishlist.map(game => 
          <ListItem key={game.appid}>
            <Typography>{game.name}</Typography>
            <ListItemButton onClick={() => props.handleRemoveFromWishlist(game)}>Remove from Wishlist</ListItemButton>
          </ListItem>
        )}
      </List>
      }
    </div>  
  );
}

export default MyGames;
