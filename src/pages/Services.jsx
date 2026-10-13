import { NavLink, Outlet } from "react-router-dom";

function Services() {
  return (
    <div className="page">

      <h1>Our Services</h1>

      <p>
        Select one of our services below.
      </p>

      <div className="nested-menu">

        <NavLink to="web">
          Web Development
        </NavLink>

        <NavLink to="app">
          App Development
        </NavLink>

        <NavLink to="uiux">
          UI/UX Design
        </NavLink>

      </div>

      <div className="nested-content">

        <Outlet />

      </div>

    </div>
  );
}

export default Services;