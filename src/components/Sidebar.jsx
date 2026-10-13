
import { NavLink } from "react-router-dom";

function Sidebar() {
  return (
    <aside className="sidebar">
      <h3 className="sidebar-title">MAIN MENU</h3>

      <NavLink to="/" end className="nav-link">
        Dashboard
      </NavLink>

      <NavLink to="/employees" className="nav-link">
        Employees
      </NavLink>

      <NavLink to="/departments" className="nav-link">
        Departments
      </NavLink>

      <NavLink to="/services" className="nav-link">
        Services
      </NavLink>

      <NavLink to="/about" className="nav-link">
        About
      </NavLink>
    </aside>
  );
}

export default Sidebar;
