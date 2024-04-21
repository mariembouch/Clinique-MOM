import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "../routes/HomePage/HomePage.js";
import Doctors from "../routes/Doctors/Doctor.js"
import Admin from "../routes/Admin/Admin.js"
import Client from "../routes/Clients/Client.js"
import Assistants from "../routes/Assistant/Assistant.js"
import Ambulance from "../routes/Ambulance/Ambulance.js"
import SignIn from  "../routes/Login/Connexion.js" 
import Loginmongo from  "../routes/Login/loginmongo.js" 
import Tem from "../routes/Clients/Tem.js"

import "./Controller.css";


import "./Controller.css";


const Controller = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/doctors" element={<Doctors />} /> {/* Route for doctors */}
        <Route path="/patients" element={< Client/>} /> {/* Route for patients */}
        <Route path="/assistants" element={<Assistants />} /> {/* Route for assistants */}
        <Route path="/Admin" element={<Admin />} /> {/* Route for admin */}
        <Route path="/Ambulance" element={<Ambulance />} /> {/* Route for ambulance */}
        <Route path="/Tem" element={<Tem />} /> {/* Route for ambulance */}

        <Route path="/Loginmongo" element={<Loginmongo />} /> {/* Route for ambulance */}

          <Route path="/SignIn" element={<SignIn/>} />
      </Routes>
    </Router>
  );
};

export default Controller;


/*<Route path="/doctors" element={email ? <Doctors /> : <Navigate to="/signIn" />} />
<Route path="/assistants" element={email ? <Assistants /> : <Navigate to="/signIn" />} />
 <Route exact path="/Login" element={<SignInB />} />
        <Route path="/loginmongo" element={<Loginmongo/>}/>
        <Route path="/LoginAll" element={<Carousel/>}/>
        import SignInB from "../routes/Login/Login.js"
import Loginmongo from "../routes/Login/loginmongo.js"
import Carousel from "../routes/Login/LoginAll.js"
|| path === '/assistants' || path === '/doctors' || path==='patients'
*/