import React, { useState } from 'react';
import '../css/signup.css';
import Header2 from '../components/header_plain';
import Footer from '../components/footer';
import Bgimage from '../images/ls.png';

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
        gender,
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
    <div className="whole-container"
      style={{
        backgroundImage: `url(${Bgimage})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <Header2 />
      <div className="main-container-login">
        <div className="login-container">
          <div className="auth-form">
            <form onSubmit={handleSubmit}>
              <h1>Sign Up</h1>
              <div className="form-group">
                <label>First Name</label>
                <input
                  type="text"
                  className="input-control"
                  placeholder="First name"
                  onChange={(e) => setFname(e.target.value)}
                />
              </div>

              <div className="form-group">
                <label>Last Name</label>
                <input
                  type="text"
                  className="input-control"
                  placeholder="Last name"
                  onChange={(e) => setLname(e.target.value)}
                />
              </div>

              <div className="form-group">
                <label>Username</label>
                <input
                  type="text"
                  className="input-control"
                  placeholder="Username"
                  onChange={(e) => setUname(e.target.value)}
                />
              </div>

              <div className="form-group">
                <label htmlFor="gender" className='gender'>Gender:</label>
                <select
                  className="input-control"
                  id="gender"
                  name="gender"
                  onChange={(e) => setGender(e.target.value)}
                >
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div className="form-group">
                <label>Email address</label>
                <input
                  type="email"
                  className="input-control"
                  placeholder="Enter email"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>

              <div className="form-group">
                <label>Password</label>
                <input
                  type="password"
                  className="input-control"
                  placeholder="Enter password"
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>

              <div className="d-grid">
                <button type="submit" className="btn btn-primary sign-up-button">
                  Sign Up
                </button>
              </div>
              <p className="forgot-password text-right">
                Already registered <a href="/sign-in">sign in?</a>
              </p>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
