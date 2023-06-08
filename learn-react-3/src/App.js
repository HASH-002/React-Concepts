import "./App.css";
import { useState } from "react";
import { Text } from "./Text";

/*
  Component Lifecycle 
  1. Mounting --> When a component appears on screen
  2. Updating --> Rerendering of component
  3. Unmounting --> When a component disappears from screen
*/

function App() {
  const [showText, setShowText] = useState(false);

  return (
    <div className="App">
      <button
        onClick={() => {
          setShowText(!showText);
        }}
      >
        Show Text
      </button>
      {/* When Text appears (mounting) and when text disappears (unmounting) */}
      {showText && <Text />}
    </div>
  );
}

export default App;