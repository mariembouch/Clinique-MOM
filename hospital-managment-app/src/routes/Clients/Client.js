import "./Client.css"; // You can style your login page in Login.css
import Header from "../../component/Head/Header"
import SideBar from "../../component/SideBar/SideBar"
import Profile from "../../component/Profile/Profile"
import React, { useEffect, useState } from 'react';
import MedicalRecordCard from "./MedicalRecordCard"

const Client = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Retrieve user information from localStorage
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);
 

  return (
    <>


    <Header />
    <SideBar/>
    <Profile/>
<MedicalRecordCard/>

    <div className="login-container">

    </div>
    </>
  );
};

export default Client;
