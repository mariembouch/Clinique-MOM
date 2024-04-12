import React from 'react';
import Header from '../../component/Head/Header';
import Write from "./Write";
import AllData from './AllData';
import SideBar from "../../component/SideBar/SideBar"

const Assistants = () => {
    

  

    

    return (
        <>
           
            <div className="login-container">
            <Header />
            <SideBar />

            <h2>Hello assistants</h2>

            <Write/>

            <AllData/>
                {/* Add content for assistants here */}
               
            </div>
        </>
    );
};



export default Assistants;
