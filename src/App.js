import { Box } from '@mui/system';
import './App.css';
import CardComponent from './Card.js';

function App() {
  return (
    <Box sx={{ display: 'flex', justifyContent: 'center', alignItem: 'center', height: '100%' }}>
      <CardComponent />
    </Box>
  );
}

export default App;
