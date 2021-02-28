import './App.css';
import Form from './Components/Form'
import Box from './Components/Box'

function App() {
  const [box, setBox] = setState({
    colors: [],
  });

  return (
    <div className="App">
      <div className="container">
          <h1 className="display-4 my-3">Box Generator</h1>
          <Form setBox = {setBox} box = {box} />
          <div className='row'>
            {box.colors.map((color) => (
              <Box color={color} />
            ))}
          </div>
      </div>
    </div>
  );
}

export default App;
