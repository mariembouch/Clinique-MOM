import "./Doctor.css"; // You can style your login page in Login.css

import Header from "../../component/Head/Header"
import Profile from "../../component/Profile/Profile"
import PatientTable from "./PatientTable"
const Doctor = () => {

  

  return (
      <>
          <Header />
          <Profile/>
          <PatientTable/>
          <div className="login-container">
              
          </div>
      </>
  );
};



export default Doctor;