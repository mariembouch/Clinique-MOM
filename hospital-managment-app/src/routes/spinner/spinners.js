import React from 'react';
import './spinners.css'; 
import HomePage from '../routes/spinner';
import { useState,useEffect } from 'react';
import MoonLoader
from "react-spinners/MoonLoader";

const Spinners = () => {
    const [loading, setLoading] =useState(false)
useEffect(()=>{
setLoading(true)
setTimeout(()=>{
setLoading(false)
}, 5000)

},[])
  return (
    <div className="bg">
        {
            loading?
            <MoonLoader

            color={"#08ac5f"}
            loading={loading}
            size={150}
            aria-label="Loading Spinner"
            data-testid="loader"
          />:
        
<FullImg/>      }
    </div>
  );
};

export default Spinners;
