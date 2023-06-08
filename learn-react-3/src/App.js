import "./App.css";
import { useEffect, useState } from "react";
import Axios from "axios";

function App() {
  const [catfact, setCatfact] = useState("");

  /*
    * This will be called every time when we update the state (here catfact, setCatfact)
    * So it will go for infinite time, without setState it would have been called twice as
    because of StrcitMode.
    * But because of updating it will be rendered infinite times.
  */
  // Axios.get("https://catfact.ninja/fact").then((res) => {
  //     setCatfact(res.data.fact);
  //   });

  useEffect(() => {
    getCatFact();
  }, []);

  const getCatFact = () => {
    Axios.get("https://catfact.ninja/fact").then((res) => {
      setCatfact(res.data.fact);
    });
  };

  return (
    <div div className="App" >
      <button onClick={getCatFact}> Generate Cat Fact </button>
      <p>{catfact}</p>
    </div>
  );
}

export default App;