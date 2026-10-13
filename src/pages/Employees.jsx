
import { useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import EmployeeForm from "../components/EmployeeForm";

function Employees() {
  const [employees, setEmployees] = useState([]);
  const [search, setSearch] = useState("");
  const [editingEmployee, setEditingEmployee] = useState(null);
  const [showForm, setShowForm] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();

  const page = Math.max(
    1,
    Number.parseInt(searchParams.get("page") || "1", 10) || 1
  );
  const pageSize = 5;

  useEffect(() => {
    const saved = JSON.parse(
      localStorage.getItem("employees") || "[]"
    );
    setEmployees(saved);
  }, []);

  function saveEmployees(updatedEmployees) {
    setEmployees(updatedEmployees);
    localStorage.setItem("employees", JSON.stringify(updatedEmployees));
  }

  function handleSave(employee) {
    const updated = editingEmployee
      ? employees.map((item) =>
          item.id === employee.id ? employee : item
        )
      : [...employees, employee];

    saveEmployees(updated);
    setEditingEmployee(null);
    setShowForm(false);
  }

  function handleDelete(id) {
    if (window.confirm("Delete this employee?")) {
      saveEmployees(employees.filter((item) => item.id !== id));
    }
  }

  const filtered = employees.filter((employee) =>
    `${employee.firstName} ${employee.lastName} ${employee.department}`
      .toLowerCase()
      .includes(search.toLowerCase())
  );

  const totalPages = Math.max(1, Math.ceil(filtered.length / pageSize));
  const currentPage = Math.min(page, totalPages);
  const visibleEmployees = filtered.slice(
    (currentPage - 1) * pageSize,
    currentPage * pageSize
  );

  function changePage(nextPage) {
    setSearchParams({ page: String(nextPage) });
  }

  return (
    <div>
      <div className="page-heading">
        <p className="eyebrow">PEOPLE DIRECTORY</p>
        <h1>Employees</h1>
        <p>Manage your team's employee records.</p>
      </div>

      <div className="toolbar">
        <input
          placeholder="Search by name or department..."
          value={search}
          onChange={(event) => {
            setSearch(event.target.value);
            setSearchParams({ page: "1" });
          }}
        />

        <button
          className="primary-button"
          onClick={() => {
            setEditingEmployee(null);
            setShowForm(!showForm);
          }}
        >
          + Add Employee
        </button>
      </div>

      {showForm && (
        <EmployeeForm
          onSave={handleSave}
          editingEmployee={editingEmployee}
          onCancel={() => {
            setEditingEmployee(null);
            setShowForm(false);
          }}
        />
      )}

      <p>Total employees: {filtered.length}</p>

      {visibleEmployees.length === 0 ? (
        <div className="empty-state">
          <h3>No employees found</h3>
          <p>Add an employee or try a different search.</p>
        </div>
      ) : (
        <div className="table-wrapper">
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Department</th>
                <th>Details</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {visibleEmployees.map((employee) => (
                <tr key={employee.id}>
                  <td>{employee.firstName} {employee.lastName}</td>
                  <td>{employee.email}</td>
                  <td>{employee.department}</td>
                  <td>
                    <Link to={`/employees/${employee.id}`}>View</Link>
                  </td>
                  <td>
                    <button
                      onClick={() => {
                        setEditingEmployee(employee);
                        setShowForm(true);
                      }}
                    >
                      Edit
                    </button>{" "}
                    <button onClick={() => handleDelete(employee.id)}>
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      <div className="toolbar">
        <button
          className="secondary-button"
          disabled={currentPage === 1}
          onClick={() => changePage(currentPage - 1)}
        >
          Previous
        </button>

        <span>Page {currentPage} of {totalPages}</span>

        <button
          className="secondary-button"
          disabled={currentPage === totalPages}
          onClick={() => changePage(currentPage + 1)}
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default Employees;
