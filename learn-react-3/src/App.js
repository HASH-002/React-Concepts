import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState, createContext } from "react";
import { Home } from "./pages/Home";
import { Profile } from "./pages/Profile";
import { Contact } from "./pages/Contact";
import Navbar from "./Navbar";

/*
  Context Api: Keep all react States in one place and every compoenent inside it, can access it.
  1. Create a context using createContext() method. We create a Global Context, picturise it as a Store,
  where we keep all our states.
  2. Create a Provider, which will provide the states you need to paas on to all the components.
  3. Use the useContext hook to access the states from the context. 
*/

export const AppContext = createContext(); // Create a context here

function App() {
  const [userName, setUserName] = useState("Hasan");

  return (
    <div className="App">
      {/* Wrap all the components inside the Provider, so that all the components can access the states */}
      <AppContext.Provider value={{ userName, setUserName }}>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<h1>You are on wrong page</h1>} />
          </Routes>
        </Router>
      </AppContext.Provider>
    </div>
  );
}

export default App;