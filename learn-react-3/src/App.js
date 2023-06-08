import "./App.css";
import { useState } from "react";

function App() {

  /*
  FETCH FUNCTION
  Fetch function maybe before javascript was there was used to get data from apis' 
  We use (then) since this returns a promise which is json format then we convert it to
  string and then use this data.
  */
  const getFact = () => {
    fetch("https://catfact.ninja/fact").then((res) => res.json()).then((data) => {
      console.log(data);
    });
  };

  return (
    <div className="App">
      <button onClick={getFact}> Generate Cat Fact </button>
      <p></p>
    </div>
  );
}

export default App;