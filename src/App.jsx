import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Home from "./pages/home";
import Home from "./pages/home/Home"; // Explicit import of the actual file

import About from "./pages/about";
import Contact from "./pages/contact";
import Account from "./pages/account";
import Dashboard from "./pages/dashboard";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/account/*" element={<Account />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </Router>
  );
}

export default App;