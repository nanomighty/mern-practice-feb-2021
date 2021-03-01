import React, {useState} from 'react';
import './App.css';
import Tabs from './Components/Tabs';

function App() {

  const [items] = useState([
    {
      label: "Tab 1",
      content: "Tab 1 content is showing here"
    },
    {
      label: "Tab 2",
      content: "Tab 2 content is showing here"
    },
    {
      label: "Tab 3",
      content: "Tab 3 content is showing here"
    }
  ]);

  const [indx, setIndx] = useState(0);

  return (
    <div className="App">

    <Tabs 
    items = {items} 
    indx = {indx}
    setIndx = {setIndx}  
    />

    </div>
  );
}

export default App;
