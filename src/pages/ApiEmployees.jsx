
import useFetchData from "../hooks/useFetchData";

function ApiEmployees() {
  const {
    data: employees,
    loading,
    error,
  } = useFetchData("https://jsonplaceholder.typicode.com/users");

  return (
    <div>
      <div className="page-heading">
        <p className="eyebrow">API INTEGRATION</p>
        <h1>Team Directory</h1>
        <p>Employee-style profiles loaded from an external API.</p>
      </div>

      {loading && <p>Loading team members...</p>}

      {error && <p className="success-message">{error}</p>}

      {!loading && !error && (
        <div className="department-grid">
          {employees.map((employee) => (
            <article className="profile-card" key={employee.id}>
              <h2>{employee.name}</h2>
              <p><strong>Username:</strong> {employee.username}</p>
              <p><strong>Email:</strong> {employee.email}</p>
              <p><strong>Phone:</strong> {employee.phone}</p>
              <p><strong>Website:</strong> {employee.website}</p>
              <p><strong>City:</strong> {employee.address.city}</p>
              <p><strong>Company:</strong> {employee.company.name}</p>
            </article>
          ))}
        </div>
      )}
    </div>
  );
}

export default ApiEmployees;
