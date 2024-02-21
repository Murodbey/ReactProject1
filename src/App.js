import './App.css';
import FirstComponent from './components/FirstComponent'
import SecondComponent from './components/SecondComponent';

function App() { //Component example   JSX
  const name = 'Murod'
  return (
    <div className="App">
      Hello World, My name is {name}
      <FirstComponent />
      <SecondComponent />
    </div>
  );
}

export default App;
