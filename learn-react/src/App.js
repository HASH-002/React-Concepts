import './App.css';
import { useState } from 'react';

function App() {

  // React will render this UI component once
  // let counter = 0;

  // const increment = () => {
  //   counter = counter + 1;
  //   console.log(counter);
  // };

  /*
    --- While set function is called React will check variable from last state
    and this will trigger to re render UI if value of variable is chamged, this explains
    why there is a seperate function for a state variable to get changed.
  */
  // const [counter, setCounter] = useState(0);
  // const increment = () => {
  //   setCounter(counter + 1);
  // };


  // return (
  //   <div className='App'>
  //   {counter} <button onClick={increment}>Increment</button>
  //   </div>
  // );


  // Use cases of useState hook
  // Take Inputs

  // const [inputValue, setInputValue] = useState('');

  // const handleInputChange = (event) => {
  //   // console.log(event.target.value);
  //   setInputValue(event.target.value);
  // };

  // return (
  //   <div className='App'>
  //     <input type="text" onChange={handleInputChange} />
  //     {inputValue}
  //   </div>
  // );

  // !!!!!!!!!!!!!!!!!!!!!
  // EXAMPLE 1 - TOGGLE BUTTON
  // const [toggle, setToggle] = useState(true);
  // return (
  //   <div className='App'>
  //     <button onClick={() => { setToggle(!toggle); }}>Toggle</button>
  //     {toggle && <h1>HELLO THIS DEMONSTRATE TOGGLE BUTTON</h1>}
  //   </div>
  // );

  // EXAMPLE 2 - USE toggle button to change color of what we did previously

  // Exercise

  const [count, setCount] = useState(0);
  const increase = () => { setCount(count + 1); };
  const decrease = () => { setCount(count - 1); };
  const setToZero = () => { setCount(0); };

  return (
    <div className="App">
      <button onClick={increase}>Increase</button>
      <button onClick={decrease}>Decrease</button>
      <button onClick={setToZero}>Set to Zero</button>

      {count}
    </div>
  );
}

export default App;