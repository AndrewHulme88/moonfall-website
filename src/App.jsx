import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Games from "./pages/Games";
import Software from "./pages/Software";
import About from "./pages/About";

function App() {
  return (
    <Router>
      <Navbar />
      <div className="pt-16 px-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/games" element={<Games />} />
          <Route path="/software" element={<Software />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
