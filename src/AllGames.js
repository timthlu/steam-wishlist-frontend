import { useState } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

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
  
  const filteredGames = props.allGames.filter(game => game.name.toLowerCase().includes(search.toLowerCase()))
    .filter(game => !props.wishlist.includes(game.appid));

  return (
    <div>
      <TextField id="standard-basic" label="Search for a game!" variant="standard" value={search} onChange={handleSearchChange}/>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell sx={{fontWeight: 'bold'}}>Game</TableCell>
            <TableCell />
          </TableRow>
        </TableHead>
        <TableBody>
          {filteredGames.slice(0, loaded).map(game => 
            <TableRow>
              <TableCell>{game.name}</TableCell>
              <TableCell>
                <Button onClick={() => props.handleAddToWishlist(game.appid)}>Add to Wishlist</Button>
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
      { filteredGames.length - loaded > 0 ? <Button onClick={handleLoadMore}>{filteredGames.length - loaded} more...</Button>
      : <div></div>
      }
      
    </div>
    
  );
}

export default AllGames;
