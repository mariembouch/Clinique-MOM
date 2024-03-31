import "./Assistant.css"; // You can style your login page in Login.css
import Header from "../../component/Head/Header"
import Write from "./Write"
import AllData from "./AllData"

const Assistant = () => {
 

  return (
    <>

    <Header />
    <div className="login-container">
      <h2>hello assistant </h2>
     <Write/>
     <AllData/>
    </div>
    </>
  );
};

export default Assistant ;
