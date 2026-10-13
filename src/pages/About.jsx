
function About() {
  return (
    <div>
      <div className="page-heading">
        <p className="eyebrow">ABOUT US</p>
        <h1>About StaffSphere</h1>
        <p>A simple workspace for managing people and teams.</p>
      </div>

      <section className="profile-card">
        <h2>Our Purpose</h2>
        <p>
          StaffSphere helps organizations organize employee
          information, explore departments, and manage workforce
          records from a single application.
        </p>

        <h2>Our Features</h2>
        <ul>
          <li>Employee directory and profiles</li>
          <li>Department navigation</li>
          <li>Employee record management</li>
          <li>Responsive dashboard experience</li>
        </ul>
      </section>
    </div>
  );
}

export default About;
