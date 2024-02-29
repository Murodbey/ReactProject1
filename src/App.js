import './App.css';
import React, {useState} from 'react'
// import ComponentWithState from './components/ComponentWithState';
import FirstComponent, { consoleLogFunction } from './components/FirstComponent'
import SecondComponent from './components/SecondComponent';
import IncrementCount from './components/CountIncrements';
import ComponentWithProps from './components/ComponentWithProps';
import TableMain from './components/TableRelatedComponents/TableMain';
import { tableData } from './database/data1';
import Button from './components/ButtonComponent/ButtonMain'
import ComponentWithStateChange from './components/ComponentWithStateChange';

const globalVar = 14

function App() { //Component example   JSX
  const name = 'Murod'
  const myCar = 'Moskvich'
  consoleLogFunction()
  //        variable       ,   function to change variable     value
  const [hideSomeComponents, setHideSomeComponents] = useState(false)
  return (
    <div className="App">
      Hello World, My name is {name}
      <FirstComponent hidden={hideSomeComponents}/>
      <SecondComponent hidden={hideSomeComponents}/>
      {/* <ComponentWithState /> */}
      <IncrementCount hidden={hideSomeComponents} />
      <br />
      <ComponentWithProps myName={name} someGlobalVar={globalVar} otadanQoganMowinBu={myCar} />
      <br />
      <TableMain tableData={tableData} />
      <br />
      <Button hidden={hideSomeComponents} styleName='primary' />
      <br />
      <Button hidden={hideSomeComponents} styleName='secondary' />
      <br />
      <Button hidden={hideSomeComponents} styleName='tertiary' />
      <br />
      <ComponentWithStateChange toHide={setHideSomeComponents} hidden={hideSomeComponents}/>
    </div>
  );
}

export default App;
