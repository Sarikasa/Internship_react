import React, { useState } from 'react';

function Homepage() {
  const [loginData, setLoginData] = useState({
    username: '',
    password: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setLoginData({
      ...loginData,
      [name]: value,
    });
  };

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    // Add your login logic here or leave it as a placeholder.
    console.log('Login Data:', loginData);
  };

  return (
    <div className="homepage">
      <header>
        <h1>Welcome to Internship</h1>
        <p>
          The Internship program offers a unique opportunity for individuals to gain hands-on experience
          in their chosen field. This Internship promises to be a stepping stone towards personal and
          professional growth, providing a platform to develop skills, build a network, and make a meaningful impact.
        </p>
        <h3>Sarika(4MH20IS081)</h3>
      </header>
      <main>
        <section className="internship-list">
          <h2>Available Internships</h2>
          <ul>
            <li>Software Engineering Internship</li>
            <li>Marketing Internship</li>
            <li>Graphic Design Internship</li>
          </ul>
        </section>
        <section className="login">
          <h2>Login</h2>
          <form onSubmit={handleLoginSubmit}>
            <div className="form-group">
              <label htmlFor="username">Username:</label>
              <input
                type="text"
                id="username"
                name="username"
                value={loginData.username}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password:</label>
              <input
                type="password"
                id="password"
                name="password"
                value={loginData.password}
                onChange={handleInputChange}
                required
              />
            </div>
            <button type="submit">Login</button>
          </form>
        </section>
        
      </main>
      <footer>
        <p>&copy; 2023 Internship</p>
        <p>For more details:</p>
        Email: internship@gmail.com<br></br>
       Contact: 9876543210
      </footer>
    </div>
  );
}

export default Homepage;