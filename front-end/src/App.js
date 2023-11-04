import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Login from "./components/login_component";
import SignUp from "./components/signup_component";
import Home from "./components/home";
import Questionnaire from "./components/questionnaire";

function App() {
  const isLoggedIn = window.localStorage.getItem("loggedIn");
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route
            exact
            path="/"
            element={isLoggedIn === "true" ? <Questionnaire /> : <Questionnaire />}
          />
          <Route path="/sign-in" element={<Login />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/home" element = {<Home/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App; 