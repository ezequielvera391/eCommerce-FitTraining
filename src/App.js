import './App.css';
import NavBar from './components/NavBar/NavBar';
import { ThemeProvider } from '@mui/material/styles';
import {theme} from './helpers/Theme'

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <NavBar/>
      </div>
    </ThemeProvider>
  );
}

export default App;