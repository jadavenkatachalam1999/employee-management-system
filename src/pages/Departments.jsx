import { Link, Route, Routes, useParams } from "react-router-dom";

const departments = [
  { name: "IT", description: "Technology and software development." },
  { name: "HR", description: "Recruitment and employee support." },
  { name: "Finance", description: "Budgets and financial operations." },
  { name: "Marketing", description: "Branding and customer engagement." },
];

function Departments() {
  return (
    <div>
      <div className="page-heading">
        <p className="eyebrow">OUR TEAMS</p>
        <h1>Departments</h1>
        <p>Explore the teams that keep our company moving.</p>
      </div>

      <div className="department-grid">
        {departments.map((department) => (
          <Link
            className="department-card"
            key={department.name}
            to={department.name.toLowerCase()}
          >
            <h2>{department.name}</h2>
            <p>{department.description}</p>
            <span>Explore department →</span>
          </Link>
        ))}
      </div>

      <Routes>
        <Route
          path=":department"
          element={<DepartmentDetails />}
        />
      </Routes>
    </div>
  );
}

function DepartmentDetails() {
  const { department } = useParams();

  const selected = departments.find(
    (item) => item.name.toLowerCase() === department
  );

  return (
    <section className="profile-card">
      <h2>{selected ? selected.name : "Department"}</h2>
      <p>{selected?.description || "Department not found."}</p>
    </section>
  );
}
export default Departments;