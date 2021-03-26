import './App.css';
import React from 'react';
import Main from "./components/Main";
import Detail from './components/Detail';
import {Router} from '@reach/router';

function App() {
  return (
    <div className="App">
        <h1>Product Manager</h1>
        <br />
        <Router>
          <Main path = "/" />
          <Detail path = "/:id" />
        </Router>
    </div>
  );
}

export default App;
