import React, { useState } from 'react';
import Logo from '../logo/logo_v3.png';
import '../css/signup.css';
import Typewriter from './Typewriter';

export default function SignUp() {
  const [first_name, setFname] = useState("");
  const [last_name, setLname] = useState("");
  const [email, setEmail] = useState("");
  const [username, setUname] = useState("");
  const [gender, setGender] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {

      e.preventDefault();

      console.log(first_name, last_name, email, password, username, gender);
      fetch("http://127.0.0.1:8000/sign-up/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          first_name,
          last_name,
          email,
          password,
          username,
          gender
        }),
      })
      .then((response) => response.json())
      .then((data) => {
        console.log(data, "userRegister");
        if (data.status === "Registration Successful") {
          alert("Registration Successful");
        } else {
          alert("Something went wrong");
        }
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  return (
    <div className="container">
      <div className="card">
        <div className="card-content">
          <img className="site-logo" alt="site-logo" src={Logo} />
          <div className="titlee">
          <h2 className="title-caption">Discover Your Health Journey with DiagnoSYM</h2>

          </div>
          
          <p className="type-write">
            <Typewriter text="Empower yourself to self-diagnose symptoms, receive precise predictions, connect with specialized doctors, and access personalized health precautions. Your journey to better health begins here with DiagnoSym." />
          </p>
        </div>
      </div>
      <div className="auth-form">
        <form onSubmit={handleSubmit}>
          <h1>Sign Up</h1>
          <div className="input-group">
            <label>First Name</label>
            <input
              type="text"
              className="form-control"
              placeholder="First name"
              onChange={(e) => setFname(e.target.value)}
            />
          </div>

          <div className="input-group">
            <label>Last Name</label>
            <input
              type="text"
              className="form-control"
              placeholder="Last name"
              onChange={(e) => setLname(e.target.value)}
            />
          </div>

          <div className="input-group">
            <label>Username</label>
            <input
              type="text"
              className="form-control"
              placeholder="Username"
              onChange={(e) => setUname(e.target.value)}
            />
          </div>

          <div className="input-group">
            <label htmlFor="gender">Gender:</label>
            <select
              className="form-control"
              id="gender"
              name="gender"
              onChange={(e) => setGender(e.target.value)}
            >
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
          </div>

          <div className="input-group">
            <label>Email address</label>
            <input
              type="email"
              className="form-control"
              placeholder="Enter email"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="input-group">
            <label>Password</label>
            <input
              type="password"
              className="form-control"
              placeholder="Enter password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <div className="d-grid">
            <button type="submit" className="btn btn-primary">
              Sign Up
            </button>
          </div>
          <p className="forgot-password text-right">
            Already registered <a href="/sign-in">sign in?</a>
          </p>
        </form>
      </div>
    </div>
  );
}