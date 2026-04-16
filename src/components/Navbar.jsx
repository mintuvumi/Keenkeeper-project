import { NavLink } from "react-router-dom";
import { FaHome, FaClock, FaChartBar } from "react-icons/fa";

export default function Navbar() {
  const linkClass = ({ isActive }) =>
    isActive
      ? "btn btn-sm bg-green-600 text-white"
      : "btn btn-sm btn-ghost";

  return (
    <div className="sticky top-0 z-50 bg-base-100 flex justify-between p-4 shadow-lg">
      <h1 className="text-xl font-bold">KeenKeeper</h1>

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