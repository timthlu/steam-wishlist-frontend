import AppBar from "@mui/material/AppBar";
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

function Header(props) {
  return (
    <AppBar position="static" sx={{ background: '#2a475e'}}>
      <Box sx={{padding: '100px', textAlign: 'center', background: '#171a21', color: 'white'}}>
        <Typography variant='h4'>
          Steam Wish List
        </Typography>
        <Typography variant='h6'>
          Homegrown with desktop notifications!
        </Typography>
      </Box>
      <Toolbar>
        <Button sx={{ color: '#fff', margin: 'auto' }} onClick={() => props.handleSwitchPage(0)}>My Games</Button>
        <Button sx={{ color: '#fff', margin: 'auto' }} onClick={() => props.handleSwitchPage(1)}>All Games</Button>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
