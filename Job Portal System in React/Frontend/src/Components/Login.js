import React, { useState } from "react";
import "./Login.css"; // Import the CSS file for styling
import { useUser } from "./UserContext";
import { Link } from "react-router-dom"; // Import the Link component

const Login = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const { setUserData } = useUser();
  const [loggedIn, setLoggedIn] = useState(false); // Add loggedIn state

  const handleSubmit = (e) => {
    e.preventDefault();
    const student = { name, email };

    fetch("http://localhost:8080/portal/check-existence", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(student),
    })
      .then((response) => {
        if (response.ok) {
          return response.json(); // Parse the JSON response
        } else {
          alert("Wrong name and email!")
          throw new Error("User not found"); // Handle error response
        }
      })
      .then((userData) => {
        setUserData(userData);
        // Update user data in the context
        setLoggedIn(true); // Set loggedIn to true on successful login
        setName("");
        setEmail("");
      })
      .catch((error) => {
        console.error("Error:", error.message);
      });
  };

  return (
    <div className="login-container">
      <div className="login-card">
        {loggedIn ? (
          <Link className="linkingHome" to="/home">Go to Home</Link> // Render Home component after successful login
        ) : (
          <>
            <h1 className="login-title">Login</h1>
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Name:</label>
                <input
                  type="text"
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="input-field"
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email:</label>
                <input
                  type="text"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="input-field"
                />
              </div>
              <button type="submit" className="login-button">
                Login
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  );
};

export default Login;
