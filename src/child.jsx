
import React from 'react'
export default function Child({ name, city, age, email, phone }) {
  return (
    <div className="card">
      
         <p><strong>Name:</strong> {name}</p>
        <p><strong>City:</strong> {city}</p>
      <p><strong>Age:</strong> {age}</p>
      <p><strong>Email:</strong> {email}</p>
      <p><strong>Phone Number:</strong> {phone}</p>
    </div>
  );
}

