import './App.css';
import Home from './components/Home';
import { Router } from '@reach/router';
import Number from './components/Number';
import Hello from './components/Hello';
import Hellobluered from './components/Hellobluered'

function App() {
  return (
    <div className="App">
      <Router>
        <Home path = "/home"/>
        <Number number="4" path="/4" />
        <Hello word="hello" path="/hello" />
        <Hellobluered word="hello" color="blue" bgColor="red" path="/hello/blue/red" />
      </Router>

    </div>
  );
}

export default App;
