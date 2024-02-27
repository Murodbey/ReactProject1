import './App.css';
// import ComponentWithState from './components/ComponentWithState';
import FirstComponent, { consoleLogFunction } from './components/FirstComponent'
import SecondComponent from './components/SecondComponent';
import IncrementCount from './components/CountIncrements';
import ComponentWithProps from './components/ComponentWithProps';
import TableMain from './components/TableRelatedComponents/TableMain';
import { tableData } from './database/data1';
import Button from './components/ButtonComponent/ButtonMain'

const globalVar = 14

function App() { //Component example   JSX
  const name = 'Murod'
  const myCar = 'Moskvich'
  consoleLogFunction()
  return (
    <div className="App">
      Hello World, My name is {name}
      <FirstComponent />
      <SecondComponent />
      {/* <ComponentWithState /> */}
      <IncrementCount />
      <br />
      <ComponentWithProps myName={name} someGlobalVar={globalVar} otadanQoganMowinBu={myCar} />
      <br />
      <TableMain tableData={tableData} />
      <br />
      <Button styleName='primary' />
      <br />
      <Button styleName='secondary' />
      <br />
      <Button styleName='tertiary' />
    </div>
  );
}

export default App;
