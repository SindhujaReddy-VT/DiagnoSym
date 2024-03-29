import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from "./components/login_component";
import SignUp from "./components/signup_component";
import Home from "./components/home";
import Questionnaire from "./components/questionnaire";
import UserDetails from './components/userDetails';
import Precautions from './components/precautions';
import Prediction from "./components/prediction";
import Feedback from "./components/feedback";
import Main from "./components/main";
import DoctorsRecommendation from "./components/doctors_recommendation";
import DoctorsProfile from "./components/doctors_profile";
import Preventive from "./components/preventive_measure";
import PastRecords from "./components/past_records";

function App() {
  const isLoggedIn = window.localStorage.getItem("loggedIn");
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route
            exact
            path="/"
            element={isLoggedIn === "true" ? <Main /> : <Main />}
          />
          
          <Route path="/sign-in" element={<Login />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/home" element = {<Home/>} />
          <Route path="/questionnaire" element={<Questionnaire />} />
          <Route path="/prediction/:disease/:accuracy" element={<Prediction />} />
          <Route path="/user-details" element={<UserDetails />} />
          <Route path="/precautions" element={<Precautions />} />
          <Route path="/feedback" element={<Feedback />} />
          <Route path="/main" element={<Main />} />
          <Route path="/doctors_recommendation" element={<DoctorsRecommendation />} />
          <Route path="/doctors_profile/:id" element={<DoctorsProfile />} />
          <Route path="/preventive_measure" element={<Preventive />} />
          <Route path="/api/past_records/:username" element={<PastRecords />} />

        </Routes>
      </div>
    </Router>
  );
}

export default App; 