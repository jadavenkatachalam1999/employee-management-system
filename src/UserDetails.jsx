import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

function UserDetails() {
  const { id } = useParams();

  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    setLoading(true);
    setUser(null);
    setError("");

    fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error("User Not Found");
        }

        return response.json();
      })
      .then((data) => {
        setUser(data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error.message);
        setLoading(false);
      });
  }, [id]);

  if (loading) {
    return <h2 className="message">Loading user details...</h2>;
  }

  if (error) {
    return (
      <div className="message">
        <h2>User Not Found</h2>

        <Link to="/users" className="back-button">
          Back to Users
        </Link>
      </div>
    );
  }

  return (
    <div className="details-container">
      <h2>User Details</h2>

      <div className="details-card">
        <p>ID: {user.id}</p>
        <p>Name: {user.name}</p>
        <p>Username: {user.username}</p>
        <p>Email: {user.email}</p>
        <p>Phone: {user.phone}</p>
        <p>Website: {user.website}</p>
        <p>City: {user.address.city}</p>

        <Link to="/users" className="back-button">
          Back to Users
        </Link>
      </div>
    </div>
  );
}

export default UserDetails;