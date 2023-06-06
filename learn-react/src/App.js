import './App.css';

function App() {
  const name = <h1>react</h1>;
  return (
    // <div className="App">
    //   {name}{name} // u called a variable/ function
    // </div>
    <GetNameComponent /> // u called a component
  );
}

// Javascript function
// Return anything or null
const GetName = () => {
  return "react";
};

// React component
// Always return UI stuff
// !!! Must start with capital letter otherwise file wont be compiled
const GetNameComponent = () => {
  return <h1>react</h1>;
};


export default App;