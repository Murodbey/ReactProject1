import './App.css';
import FirstComponent from './components/FirstComponent'

function App() { //Component example   JSX
  const name = 'Murod'
  return (
    <div className="App">
      Hello World, My name is {name}
      <FirstComponent/>
    </div>
  );
}

export default App;
