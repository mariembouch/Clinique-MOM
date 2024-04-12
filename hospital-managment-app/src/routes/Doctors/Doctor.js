import "./Doctor.css"; // You can style your login page in Login.css

import Header from "../../component/Head/Header"
import GetAllAccounts from "./GetAllAccounts.js"

const Doctor = () => {

  

  return (
      <>
          <Header />
          <GetAllAccounts/>
          <div className="login-container">
              <h2>Hello doctors</h2>
              {/* Ajoutez ici le contenu de la page des médecins */}
              
          </div>
      </>
  );
};

const button = {
  width: 100,
  padding: 10,
  borderRadius: 5,
  margin: 10,
  cursor: 'pointer',
  fontSize: 17,
  color: 'white',
  backgroundColor: 'blue',
  border: 'none',
};

export default Doctor;