
import { useEffect, useRef, useState } from "react";

const emptyForm = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  department: "IT",
  city: "",
  role: "",
};

function EmployeeForm({ onSave, editingEmployee, onCancel }) {
  const [form, setForm] = useState(emptyForm);
  const nameRef = useRef(null);

  useEffect(() => {
    if (editingEmployee) {
      setForm({ ...emptyForm, ...editingEmployee });
    } else {
      setForm(emptyForm);
    }

    nameRef.current?.focus();
  }, [editingEmployee]);

  function handleChange(event) {
    setForm({
      ...form,
      [event.target.name]: event.target.value,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();

    onSave({
      ...form,
      id: editingEmployee?.id ?? Date.now(),
    });

    setForm(emptyForm);
    nameRef.current?.focus();
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <h2>{editingEmployee ? "Edit Employee" : "Add Employee"}</h2>

      <label>
        First Name
        <input
          ref={nameRef}
          name="firstName"
          value={form.firstName}
          onChange={handleChange}
          required
          minLength={2}
        />
      </label>

      <label>
        Last Name
        <input
          name="lastName"
          value={form.lastName}
          onChange={handleChange}
          required
          minLength={1}
        />
      </label>

      <label>
        Email
        <input
          type="email"
          name="email"
          value={form.email}
          onChange={handleChange}
          required
        />
      </label>

      <label>
        Phone
        <input
          name="phone"
          value={form.phone}
          onChange={handleChange}
          required
          pattern="[0-9+() -]{7,20}"
          title="Enter a valid phone number"
        />
      </label>

      <label>
        Department
        <select
          name="department"
          value={form.department}
          onChange={handleChange}
        >
          <option>IT</option>
          <option>HR</option>
          <option>Finance</option>
          <option>Marketing</option>
        </select>
      </label>

      <label>
        City
        <input
          name="city"
          value={form.city}
          onChange={handleChange}
          required
        />
      </label>

      <label>
        Role
        <input
          name="role"
          value={form.role}
          onChange={handleChange}
          required
        />
      </label>

      <div>
        <button className="primary-button" type="submit">
          {editingEmployee ? "Update Employee" : "Save Employee"}
        </button>

        {editingEmployee && (
          <button
            className="secondary-button"
            type="button"
            onClick={onCancel}
          >
            Cancel
          </button>
        )}
      </div>
    </form>
  );
}

export default EmployeeForm;
