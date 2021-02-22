
import './App.css';
import UserForm from './Components/UserForm';
import React, {useState} from 'react';

function App() {

const [state, setState] = useState({
  firstName: "",
  lastName: "",
  email: "",
  confirmPassword: "",
  password: ""
})


  return (
    <div className="App">

      <UserForm inputs = {state} setInputs = {setState}/>

    </div>
  );
}

export default App;
