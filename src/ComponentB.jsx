
import { useSelector } from "react-redux";

function ComponentB() {
  const formData = useSelector(
    (state) => state.form.formData
  );

  return (
    <div className="display-card">
      <h2>Submitted Employee Details</h2>

      {!formData ? (
        <p className="empty-message">
          No data submitted yet.
          Please fill out the form.
        </p>
      ) : (
        <div className="details">
          <p>
            <strong>Name:</strong> {formData.name}
          </p>

          <p>
            <strong>Email:</strong> {formData.email}
          </p>

          <p>
            <strong>Phone:</strong> {formData.phone}
          </p>

          <p>
            <strong>City:</strong> {formData.city}
          </p>

          <p>
            <strong>Role:</strong> {formData.role}
          </p>
        </div>
      )}
    </div>
  );
}

export default ComponentB;