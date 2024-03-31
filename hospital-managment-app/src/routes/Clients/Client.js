import "./Client.css"; // You can style your login page in Login.css
import Header from "../../component/Head/Header"
import SideBar from "../../component/SideBar/SideBar"

const Client = () => {
 

  return (
    <>

    <Header />
    <SideBar/>

    <div className="login-container">
      <h2>Hello patient </h2>
     
    </div>
    </>
  );
};

export default Client;
