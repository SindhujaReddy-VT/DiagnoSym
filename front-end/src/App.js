import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Login from '../src/components/login_component'
import SignUp from '../src/components/signup_component'
import Home from "../src/components/home"
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";


import UserDetails from "./components/userDetails";

function App() {
  return (
      <div className="App">
        <Login />
        <SignUp />
          <Home />
          </div>
       
  );
}

export default App;