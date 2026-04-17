import { NavLink } from "react-router-dom";
import { FaHome, FaClock, FaChartBar } from "react-icons/fa";

// logo import
import logo from "../assets/logo.png";

export default function Navbar() {
  const linkClass = ({ isActive }) =>
    isActive
      ? "btn btn-sm bg-green-600 text-white"
      : "btn btn-sm btn-ghost";

  return (
    <div className="sticky top-0 z-50 bg-base-100 flex justify-between items-center p-4 shadow-lg">

      {/* Logo Image */}
        <div className="flex items-center gap-2">
          <img 
            src={logo} 
            alt="KeenKeeper Logo" 
            className="w-10 md:w-12 lg:w-14 h-auto"
          />
        </div>


      {/* Menu */}
      <div className="flex gap-2">
        <NavLink to="/" className={linkClass}>
          <FaHome /> Home
        </NavLink>

        <NavLink to="/timeline" className={linkClass}>
          <FaClock /> Timeline
        </NavLink>

        <NavLink to="/stats" className={linkClass}>
          <FaChartBar /> Stats
        </NavLink>
      </div>

    </div>
  );
}
