import "./App.css";
import { useToggle } from "./useToggle";

/*
  Custom Hook  
  What are Hooks ?
  * Hooks are always called at higher level of component and not inside the function.
  * Hooks are functions
  * Hooks are good for reusing
  * They are also good for abstracting logic
*/

function App() {

  /*
    !!! Very Imp
    When you return [a,b .. ] from function
    you can rename a,b as you want like here in useToggle
    
    But when your function returns {a, b} object then it cannot,
    because the js will expect property names to be aligned.
    You can offcourse rename it as a:new_name
  */

  const [isVisible, toggle] = useToggle();
  return (
    <div className="App">
      <button onClick={toggle}>{isVisible ? "Hide" : "Show"}</button>
      {isVisible && <h1>Hidden Text</h1>}
    </div>
  );
}

export default App;