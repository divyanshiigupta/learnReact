import logo from './logo.svg';
import './App.css';
import Form from './components/Form';
import Box from './components/Box';

function App() {
  return (
    <div className="App">
      <Form/>
      <Box name="divyanshi" age={11} color="red"/>
      <Box name="chirag" age={4} color="green"/>
    </div>
  );
}

export default App;
