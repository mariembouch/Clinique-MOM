import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
//import AdminMenu from "../Admin/AdminMenu";
import { useWeb3 } from "../../Web3helpers.js";
import AddAssistants from "../Admin/AddAssistants.js";
import AddDoctors from "../Admin/AddDoctors.js";

import Header from "../../component/Head/Header"
import SideBar from "../../component/SideBar/SideBar"
import Profile from "../../component/Profile/Profile"
import AddDeleteTableRows  from "../../component/table/AddDeleteTableRows.js"

import AllData from "./AllData.js"

import "./Admin.css"; // You can style your admin page in Admin.css

const Admin = () => {
  const [collapsed, setCollapsed] = useState(false);

  const toggleCollapsed = () => {
    setCollapsed(!collapsed);
  };
 const email = localStorage.getItem("email");
  const account = localStorage.getItem("account");
  const navigate = useNavigate();
  const { web3Data, loading } = useWeb3();

  if (loading) {
    return <div>Loading...</div>; // or handle the loading state in your preferred way
  }

  if (!web3Data || !web3Data.accounts) {
    return <div>Error loading web3 data</div>;
  }

  return (
    <>
      <Header />
      <br></br>
         <br></br>
         <br></br>
         <br></br>
      <div className="admin-container">
        
       
        <div className="content">
          <Profile/>
         
         <br></br>
         <br></br>


        </div>
        
      </div>
      <AddDeleteTableRows />
      <div>
            <h4>welcome home  </h4>

      <h3>Your account: {account} </h3>
      <h3>Your email: {email} </h3>
      <AddAssistants/>
<AddDoctors/>
      <AllData/>
      <button
        style={button}
        onClick={() => {
          localStorage.removeItem("email");
          localStorage.removeItem("account");
          navigate("/signIn");
        }}
      >
        {""}
        Log out
      </button>
    </div>
    </>
  );
};
const button = {
  width: 100,
  padding: 10,
  borderRadius: 5,
  margin: 10,
  cursor: "pointer",
  fontSize: 17,
  color: "white",
  backgroundColor: "blue",
  border: "none",
};





export default Admin;
