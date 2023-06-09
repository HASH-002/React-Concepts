import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { useState } from "react";
import { Profile } from "./pages/Profile";
import { Contact } from "./pages/Contact";
import Navbar from "./Navbar";

/*
StateManagement Concept in React:
  Props Drilling -> When a parent passes props to child and then child passes it to another child and so on finally,
  some child uses it. This is called props drilling. There might be intermediate components that don't use the props
  but they are simply passing it. Inorder to solve this problem we use state management using Context API

  Current Scene shows why we need Context API.
*/
function App() {

  const [userName, setUserName] = useState("Hasan");
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home userName={userName} />} />
          <Route path="/profile" element={<Profile userName={userName} setUserName={setUserName} />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<h1>You are on wrong page</h1>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;