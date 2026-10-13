
import { useEffect, useState } from "react";

function Dashboard() {
  const [stats, setStats] = useState({
    employees: 0,
    departments: 4,
    active: 0,
  });

  useEffect(() => {
    const savedEmployees = JSON.parse(
      localStorage.getItem("employees") || "[]"
    );

    setStats({
      employees: savedEmployees.length,
      departments: 4,
      active: savedEmployees.length,
    });
  }, []);

  return (
    <div>
      <div className="page-heading">
        <p className="eyebrow">OVERVIEW</p>
        <h1>Dashboard</h1>
        <p>Welcome to your Employee Management System.</p>
      </div>

      <div className="stats-grid">
        <div className="stat-card">
          <span>Total Employees</span>
          <h2>{stats.employees}</h2>
          <p>Registered employees</p>
        </div>

        <div className="stat-card">
          <span>Departments</span>
          <h2>{stats.departments}</h2>
          <p>Teams across the company</p>
        </div>

        <div className="stat-card">
          <span>Active Employees</span>
          <h2>{stats.active}</h2>
          <p>Currently listed employees</p>
        </div>
      </div>

      <section className="welcome-card">
        <p className="eyebrow">STAFFSPHERE</p>
        <h2>Manage your team in one place.</h2>
        <p>
          Add employee records, explore departments, and manage
          your workforce through one simple dashboard.
        </p>
      </section>
    </div>
  );
}

export default Dashboard;
