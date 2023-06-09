import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { Home } from "./pages/Home";
import { Menu } from "./pages/Menu";
import { Contact } from "./pages/Contact";
import Navbar from "./Navbar";


/*
  * To access components of router dom parent Router tag is used
  * Routes are defined inside it and each route is defined using Route tag
  * These routes sets up the path for every component
  * Link are like anchor tag (<a/>) of html which are used to navigate to different routes  
*/
function App() {


  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<h1>You are on wrong page</h1>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;