import logo from './logo.svg';
import './App.css';
import { ToDo } from './components/ToDo';
import { ChakraProvider } from '@chakra-ui/react'


function App() {


  return (
    <ChakraProvider>
        <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      <ToDo />
      </header>
    </div>
  </ChakraProvider>
  );
}

export default App;
