import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Games from "./pages/Games";
import Software from "./pages/Software";
import About from "./pages/About";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Router>
        <Navbar />
        <div className="pt-16 px-4 flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/games" element={<Games />} />
            <Route path="/software" element={<Software />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </div>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
