
import { useState } from "react";
import { useDispatch } from "react-redux";
import { saveFormData } from "./redux/formSlice";

function ComponentA() {
  const dispatch = useDispatch();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    city: "",
    role: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(saveFormData(formData));

    setFormData({
      name: "",
      email: "",
      phone: "",
      city: "",
      role: "",
    });
  };

  return (
    <div className="form-card">
      <h2>Employee Registration</h2>
      <p>Enter your details below</p>

      <form onSubmit={handleSubmit}>
        <label>Name</label>
        <input
          type="text"
          name="name"
          placeholder="Enter your name"
          value={formData.name}
          onChange={handleChange}
          required
        />

        <label>Email</label>
        <input
          type="email"
          name="email"
          placeholder="Enter your email"
          value={formData.email}
          onChange={handleChange}
          required
        />

        <label>Phone Number</label>
        <input
          type="tel"
          name="phone"
          placeholder="Enter your phone number"
          value={formData.phone}
          onChange={handleChange}
          required
        />

        <label>City</label>
        <input
          type="text"
          name="city"
          placeholder="Enter your city"
          value={formData.city}
          onChange={handleChange}
          required
        />

        <label>Role</label>
        <select
          name="role"
          value={formData.role}
          onChange={handleChange}
          required
        >
          <option value="">Select Role</option>
          <option value="Frontend Developer">
            Frontend Developer
          </option>
          <option value="Backend Developer">
            Backend Developer
          </option>
          <option value="UI/UX Designer">
            UI/UX Designer
          </option>
          <option value="Tester">Tester</option>
        </select>

        <button type="submit">Submit Details</button>
      </form>
    </div>
  );
}

export default ComponentA;