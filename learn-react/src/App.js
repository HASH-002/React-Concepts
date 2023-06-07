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
  const [counter, setCounter] = useState(0);
  const increment = () => {
    setCounter(counter + 1);
  };

  return (
    <div className='App'>
      {counter} <button onClick={increment}>Increment</button>
    </div>
  );
}

export default App;