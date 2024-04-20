import "./Doctor.css"; // You can style your login page in Login.css
import GetAllAcoounts from "./GetAllAccounts"
import Header from "../../component/Head/Header"
import Profile from "../../component/Profile/Profile"
import PatientTable from "./PatientTable"
const Doctor = () => {

  

  return (
      <>
          <Header />
          <Profile/>
          <PatientTable/>
          <GetAllAcoounts/>
          <div className="login-container">
              
          </div>
      </>
  );
};



export default Doctor;