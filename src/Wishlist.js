import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';

function Wishlist(props) {
  return(
    <div>
      {props.wishlistDetails.length === 0 ?
        <Typography>No games in wishlist. To add a game, go to the All Games tab!</Typography>
      : <List>
        {props.wishlistDetails.map(game => 
          <ListItem key={game.steam_appid}>
            <Typography>{game.name}</Typography>
            <Typography>Price: {game.package_groups[0].subs[0].price_in_cents_with_discount/100}</Typography>
            <Typography>Discount: {game.package_groups[0].subs[0].percent_savings}%</Typography>
            <ListItemButton onClick={() => props.handleRemoveFromWishlist(game.steam_appid)}>Remove from Wishlist</ListItemButton>
          </ListItem>
        )}
      </List>
      }
    </div>  
  );
}

export default Wishlist;
