import "./App.css";
import { useState } from "react";
import Axios from "axios";

function App() {
  const [name, setName] = useState("");
  const [info, setInfo] = useState(null);

  const getInfo = () => {
    Axios.get(`https://api.agify.io?name=${name}`).then((res) => {
      console.log(res.data);
      setInfo(res.data);
    });
  };

  return (
    <div div className="App" >
      <input onChange={(e) => setName(e.target.value)} />
      <button onClick={getInfo}> Predict Age </button>
      {/* Amazaing syntax in js if variable is not null then only access it property == variable?.property */}
      <p>Name: {info?.name} Age: {info?.age}</p>
    </div>
  );
}

export default App;