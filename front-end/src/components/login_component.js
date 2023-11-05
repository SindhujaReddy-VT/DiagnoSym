import React, {useState } from "react";
import Logo from '../logo/logo_v3.png'
import Typewriter from './Typewriter'; // Make sure to adjust the path
import '../css/login.css';


export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    console.log(email, password);
    fetch("http://127.0.0.1:8000/sign-in/", {
      method: "POST",
      crossDomain: true,
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        email,
        password,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data, "userRegister");
        if (data.status == "ok") {
          alert("login successful");
          window.localStorage.setItem("token", data.data);
          window.localStorage.setItem("loggedIn", true);
          window.localStorage.setItem("email", email );
          window.location.href = "./home";
        }
      });
  }

  return (
    <div className="container">
      <div className="card">
        <div className="card-content">
          <img className="site-logo" alt="site-logo" src={Logo} />
          <h2 className="title-caption">Discover Your Health Journey with DiagnoSym</h2>
          <p className="type-write">
            <Typewriter text="Empower yourself to self-diagnose symptoms, receive precise predictions, connect with specialized doctors, and access personalized health precautions. Your journey to better health begins here with DiagnoSym." />
          </p>
        </div>
      </div>
<div className="auth-form">
        <form onSubmit={handleSubmit}>
          <h1>Login</h1>
          <div className="mb-3">
            <label>Email address</label>
            <input
              type="email"
              className="form-control"
              placeholder="Enter email"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="mb-3">
            <label>Password</label>
            <input
              type="password"
              className="form-control"
              placeholder="Enter password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <div className="mb-3">
            <div className="custom-control custom-checkbox">
              <input
                type="checkbox"
                className="custom-control-input"
                id="customCheck1"
              />
              <label className="custom-control-label" htmlFor="customCheck1">
                Remember me
              </label>
            </div>
          </div>

          <div className="d-grid">
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </div>
          <p className="forgot-password text-right">Not registered?
            <a href="/sign-up">Sign Up</a>
          </p>
        </form>
      </div>
    </div>
    
  );
}