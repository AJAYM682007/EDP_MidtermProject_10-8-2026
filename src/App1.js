import './App.css';
import {useState} from 'react';

function App() {
  const [result, setResult] = useState("")
  const thisclick = (value)=> {
    setResult(result + value)
  }
  const calculate = ()=> {
    try {
      setResult(String(eval(result)))
    } catch(e) {
      setResult(0)
    }
    
  }
  return (
    <div className="App">
      <header className="App-header">
        <h1 className='mydiv'>{result}</h1>
        <table>
          <tr>
            <button onClick={()=>{thisclick(7)}}>7</button>
            <button onClick={()=>{thisclick(8)}}>8</button>
            <button onClick={()=>{thisclick(9)}}>9</button>
            <button onClick={()=>{setResult("")}}>C</button>
          </tr>
          <tr>
            <button onClick={()=>{thisclick(4)}}>4</button>
            <button onClick={()=>{thisclick(5)}}>5</button>
            <button onClick={()=>{thisclick(6)}}>6</button>
            <button onClick={()=>{thisclick("*")}}>*</button>
          </tr>
          <tr>
            <button onClick={()=>{thisclick(1)}}>1</button>
            <button onClick={()=>{thisclick(2)}}>2</button>
            <button onClick={()=>{thisclick(3)}}>3</button>
            <button onClick={()=>{thisclick("/")}}>/</button>
          </tr>
          <tr>
            <button onClick={()=>{thisclick("+")}}>+</button>
            <button onClick={()=>{thisclick("-")}}>-</button>
            <button onClick={()=>{thisclick(0)}}>0</button>
            <button onClick={calculate}>=</button>
          </tr>
        </table>
      </header>
    </div>
  );
}

export default App;
