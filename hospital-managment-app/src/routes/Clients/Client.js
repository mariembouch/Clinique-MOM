import "./Client.css"; // You can style your login page in Login.css
import Header from "../../component/Head/Header"
import SideBar from "../../component/SideBar/SideBar"
import Profile from "../../component/Profile/Profile"
import React, { useEffect, useState } from 'react';
import MedicalRecordCard from "./MedicalRecordCard"
import { loadPatientByCode } from "../../Web3";
const Client = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Retrieve user information from localStorage
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);
  const testLoadPatientByCode = async () => {
    try {
      // Replace 'patientCode' with a valid patient code from your smart contract
      const patientCode = "6617d973260bd409cdd8a089";
  
      // Call the loadPatientByCode function
      const patient = await loadPatientByCode(patientCode);
  
      // Log the patient data
      console.log('Patient:', patient);
    } catch (error) {
      console.error('Error:', error);
    }
  };
  
  // Call the test function
  testLoadPatientByCode();

  return (
    <>
        <h2>Welcome, {user ? user._id : ''}</h2>


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
