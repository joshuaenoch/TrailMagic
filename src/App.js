import Navbar from "./components/Navbar.js";
import Home from "./components/Home.js";
import List from "./components/List.js";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="container">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/list" element={<List />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;