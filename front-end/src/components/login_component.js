import React, { useState } from "react";
import '../css/login.css';
import Header2 from '../components/header_plain';
import Footer from '../components/footer';
import Bgimage from '../images/ls.png';

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    console.log(username, password);
    fetch("http://127.0.0.1:8000/sign-in/", {
      method: "POST",
      crossDomain: true,
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        username,
        password,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data, "userRegister");
        if (data.status === "ok") {
          alert("login successful");
          window.localStorage.setItem("token", data.data);
          window.localStorage.setItem("loggedIn", true);
          window.localStorage.setItem("username", username);
          window.location.href = "./home";
        }
      });
  }

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
              <h1 className="login-header">Login</h1>
              <div className="form-group">
                <label htmlFor="username" className="input-label">Username</label>
                <input
                  type="text"
                  id="username"
                  className="form-control"
                  placeholder="Enter username"
                  onChange={(e) => setUsername(e.target.value)}
                />
              </div>

              <div className="form-group">
                <label htmlFor="password" className="input-label">Password</label>
                <input
                  type="password"
                  id="password"
                  className="form-control"
                  placeholder="Enter password"
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>

              <div className="form-group custom-checkbox">
                <input
                  type="checkbox"
                  className="custom-control-input"
                  id="customCheck1"
                />
                <label className="custom-control-label-1" htmlFor="customCheck1">
                  Remember me
                </label>
              </div>

              <div className="d-grid">
                <button type="submit" className="btn login-button">
                  Submit
                </button>
              </div>
              <p className="forgot-password text-right">Not registered? <a href="/sign-up">Sign Up</a></p>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
