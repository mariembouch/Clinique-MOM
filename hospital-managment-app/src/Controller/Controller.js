import React from "react";
import { BrowserRouter as Router, Route, Routes ,Navigate} from "react-router-dom";
import HomePage from "../routes/HomePage/HomePage.js";
import Doctors from "../routes/Doctors/Doctor.js"
import Admin from "../routes/Admin/Admin.js"
import Patients from "../routes/Clients/Client.js"
import Assistants from "../routes/Assistant/Assistant.js"
import Ambulance from "../routes/Ambulance/Ambulance.js"
import SignIn from "../routes/Login/Signin.js"
import SignUp from "../routes/Login/Signup.js"


import "./Controller.css";

const email = localStorage.getItem("email");

const Controller = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/doctors" element={<Doctors />} /> {/* Route for doctors */}
        <Route path="/patients" element={<Patients />} /> {/* Route for patients */}
        <Route path="/assistants" element={<Assistants />} /> {/* Route for assistants */}
        <Route path="/admin" element={<Admin />} /> {/* Route for admin */}
        <Route path="/Ambulance" element={<Ambulance />} /> {/* Route for ambulance */}
        <Route exact path="/signIn" element={<SignIn />} />
	  	  <Route path="/Signup" element={<SignUp />} />
        <Route
          path="/Admin"
          element={email ? <Admin /> : <Navigate to="/signIn" />}
        />
      </Routes>
    </Router>
  );
};

export default Controller;
