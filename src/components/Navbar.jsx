
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { toggleTheme } from "../redux/themeSlice";

function Navbar() {


  const dispatch = useDispatch();
  const darkMode = useSelector((state) => state.theme.darkMode);


  return (
    <header className="navbar">
      <NavLink to="/" className="logo">
        Staff<span>Sphere</span>
      </NavLink>

      <nav className="nav-links">
        <NavLink to="/">Dashboard</NavLink>
        <NavLink to="/employees">Employees</NavLink>
        <NavLink to="/departments">Departments</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/contact">Contact</NavLink>
        <NavLink to="/api-employees">API Directory</NavLink>
        <NavLink to="/tasks">Task Manager</NavLink>

         <button onClick={() => dispatch(toggleTheme())}>
              {darkMode ? "Light Mode" : "Dark Mode"}
         </button>
      </nav>
    </header>
  );
}

export default Navbar;
