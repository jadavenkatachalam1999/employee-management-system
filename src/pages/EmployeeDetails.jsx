
import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";

function EmployeeDetails() {
  const { id } = useParams();
  const [employee, setEmployee] = useState(null);

  useEffect(() => {
    const savedEmployees = JSON.parse(
      localStorage.getItem("employees") || "[]"
    );

    const selectedEmployee = savedEmployees.find(
      (item) => String(item.id) === id
    );

    setEmployee(selectedEmployee || null);
  }, [id]);

  if (!employee) {
    return (
      <div className="empty-state">
        <h2>Employee not found</h2>
        <Link to="/employees">Back to Employees</Link>
      </div>
    );
  }

  return (
    <div>
      <div className="page-heading">
        <p className="eyebrow">EMPLOYEE PROFILE</p>
        <h1>
          {employee.firstName} {employee.lastName}
        </h1>
        <p>{employee.department}</p>
      </div>

      <section className="profile-card">
        <p><strong>Employee ID:</strong> {employee.id}</p>
        <p><strong>Email:</strong> {employee.email}</p>
        <p><strong>Phone:</strong> {employee.phone}</p>
        <p><strong>City:</strong> {employee.city}</p>
        <p><strong>Role:</strong> {employee.role}</p>
      </section>

      <Link className="secondary-button" to="/employees">
        Back to Employees
      </Link>
    </div>
  );
}

export default EmployeeDetails;
