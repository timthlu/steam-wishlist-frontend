import MenuBar from './Header.js';
import AllGames from './AllGames.js';
import MyGames from './MyGames.js';
import Box from '@mui/material/Box';
import { useState } from 'react';

function App() {
  const [page, setPage] = useState(0);
  
  function handleSwitchPage(key) {
    if (key === 0 && page !== 0) {
      setPage(0);
    } else if (key === 1 && page !== 1) {
      setPage(1);
    }
  }
  
  return (
    <div>
      <MenuBar handleSwitchPage={handleSwitchPage} />

      <Box sx={{padding: '100px', overflow: 'auto'}}>
        {page === 0 ? <MyGames /> : <AllGames />}
      </Box>
      
    </div>
  );
}

export default App;
