import Navbar from "./components/Navbar.js";
import Home from "./components/Home.js";
import List from "./components/List.js";
import Forage from "./components/Forage.js"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="container">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/list" element={<List />} />
          <Route path="/forage" element={<Forage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;