import Typography from '@mui/material/Typography';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Button from '@mui/material/Button';

function Wishlist(props) {
  return(
    <div>
      {props.wishlistDetails.length === 0 ?
        <Typography>No games in wishlist. To add a game, go to the All Games tab!</Typography>
      : <Table>
        <TableHead>
          <TableRow>
            <TableCell sx={{fontWeight: 'bold'}}>Game</TableCell>
            <TableCell sx={{fontWeight: 'bold'}}>Price (CAD)</TableCell>
            <TableCell sx={{fontWeight: 'bold'}}>Discount</TableCell>
            <TableCell />
          </TableRow>
        </TableHead>
        <TableBody>
          {props.wishlistDetails.map(game => 
            <TableRow>
              <TableCell>{game.name}</TableCell>
              <TableCell>${game.package_groups[0].subs[0].price_in_cents_with_discount/100}</TableCell>
              <TableCell>{game.package_groups[0].subs[0].percent_savings}%</TableCell>
              <TableCell>
                <Button onClick={() => props.handleRemoveFromWishlist(game.steam_appid)}>Remove from Wishlist</Button>
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
      }
    </div>  
  );
}

export default Wishlist;
