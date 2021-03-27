import './App.css';
import React from 'react';
import Main from "./components/Main";
import Detail from './components/Detail';
import Update from './components/Update';
import {Router} from '@reach/router';

function App() {
  return (
    <div className="App">
        <h1>Product Manager</h1>
        <br />
        <Router>
          <Main path = "/" />
          <Detail path = "/:_id" />
          <Update path = "/:_id/edit" />
        </Router>
    </div>
  );
}

export default App;
