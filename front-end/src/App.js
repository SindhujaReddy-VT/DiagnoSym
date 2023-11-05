import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Login from "./components/login_component";
import SignUp from "./components/signup_component";
import Home from "./components/home";
import Questionnaire from "./components/questionnaire";
import UserDetails from './components/userDetails';
import Prediction from "./components/prediction";


function App() {
  const isLoggedIn = window.localStorage.getItem("loggedIn");
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route
            exact
            path="/"
            element={isLoggedIn === "true" ? <Home /> : <Home />}
          />
          
          <Route path="/sign-in" element={<Login />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/home" element = {<Home/>} />
          <Route path="/questionnaire" element = {<Questionnaire/>} />
          <Route path="/user-details" element={<UserDetails />} />
          <Route path="/prediction" element={<Prediction />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App; 