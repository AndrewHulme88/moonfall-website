import { Link, NavLink } from "react-router-dom";
import Logo from '../assets/images/FullLogo_Transparent_NoBuffer.png';

const Navbar = () => {
  return (
    <nav className="bg-gray-900 text-white w-full fixed top-0 left-0 shadow-md z-10">
      <div className="max-w-6xl mx-auto flex items-center justify-between p-4">
        <div className="text-2xl font-bold">
          <Link to="/"><img src={Logo} alt="Moonfall Software Logo" className="h-12 w-auto" /></Link>
        </div>
        <div className="space-x-6">
          <NavLink to="/" className={({ isActive }) => isActive ? "text-blue-400" : "hover:text-blue-400"}>Home</NavLink>
          <NavLink to="/software" className={({ isActive }) => isActive ? "text-blue-400" : "hover:text-blue-400"}>Software</NavLink>
          {/* <NavLink to="/games" className={({ isActive }) => isActive ? "text-blue-400" : "hover:text-blue-400"}>Games</NavLink> */}
          <NavLink to="/about" className={({ isActive }) => isActive ? "text-blue-400" : "hover:text-blue-400"}>About</NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
