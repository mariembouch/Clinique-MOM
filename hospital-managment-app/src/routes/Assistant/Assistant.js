import React from 'react';
import Header from '../../component/Head/Header';
import Write from "./Write";
import AllData from './AllData';
import Profile from '../../component/Profile/Profile';

const Assistants = () => {
    

  

    

    return (
        <>
           
            <div className="login-container">
            <Header />
            <Profile />

            <h2>WELLCOME!</h2>

            <Write/>
<br/>
<br/>
<br/>
<br/>

            <AllData/>
                {/* Add content for assistants here */}
               
            </div>
        </>
    );
};



export default Assistants;
