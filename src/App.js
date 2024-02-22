import './App.css';
import ComponentWithState from './components/ComponentWithState';
import FirstComponent, { consoleLogFunction } from './components/FirstComponent'
import SecondComponent from './components/SecondComponent';
import IncrementCount from './components/CountIncrements';

function App() { //Component example   JSX
  const name = 'Murod'
  consoleLogFunction()
  return (
    <div className="App">
      Hello World, My name is {name}
      <FirstComponent />
      <SecondComponent />
      <ComponentWithState />
      <IncrementCount />
    </div>
  );
}

export default App;
