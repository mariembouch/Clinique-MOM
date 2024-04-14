import React, { useState, useEffect } from "react";
import axios from 'axios';
import { loadBlockchainData } from "../../Web3helpers";

export default function AddDoctor() {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [doctors] = useState([]);
    const [invalidAddresses, setInvalidAddresses] = useState([]);
    const [selectedAddress, setSelectedAddress] = useState('');
    const [service, setService] = useState(""); // Nouveau champ pour le service

    useEffect(() => {
        const fetchInvalidAddresses = async () => {
            try {
                const response = await axios.get('http://localhost:5000/invalidAddresses');
                setInvalidAddresses(response.data);
            } catch (error) {
                console.error('Error fetching invalid addresses:', error);
            }
        };

        fetchInvalidAddresses();
    }, []);

    const handleAddressChange = (e) => {
        const selectedValue = e.target.value;
        setSelectedAddress(selectedValue);
    };

    const addDoctor = async () => {
        try {
            const { contract } = await loadBlockchainData();
            if (contract) {
                const [selectedAccount] = await window.ethereum.request({ method: 'eth_requestAccounts' });
                await contract.methods.createDoctor(selectedAddress, username, email, password, service).send({ from: selectedAccount });
                alert("Doctor added successfully!");

                // Log the data stored in the blockchain
                console.log(selectedAccount);
                console.log("Doctor details stored in the blockchain:", selectedAddress);
                console.log("Username:", username);
                console.log("Email:", email);
                console.log("Password:", password);
                console.log("Service:", service); // Log du service

                // Update the validity of the selected address in MongoDB
                await axios.put(`http://localhost:5000/makeValidDataModel1/${selectedAddress}`);
            } else {
                console.error("Unable to fetch contract data.");
            }
        } catch (error) {
            console.error(error.message);
        }
    };

    return (
        <>
        <div className='all' id="adddo">
        <div className="form-container">
            <div className="sel">
                <h2>Add Doctors</h2>
                <label htmlFor="addressSelect">Choose an address:</label>
                <select id="addressSelect" value={selectedAddress} onChange={handleAddressChange}>
                    <option value="">Select an address</option>
                    {invalidAddresses.map(address => (
                        <option key={address._id} value={address.Address}>{address.Address}</option>
                    ))}
                </select>
            </div>

            <label>Username</label>
            <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
            <label>Email</label>
            <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} />
            <label>Password</label>
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
            <label>Service</label>
            <input type="text" value={service} onChange={(e) => setService(e.target.value)} /> 
            <button onClick={addDoctor} type="submit" >Add Doctor</button>
            <br />
            </div>
            <div className="photo"
     style={{
            backgroundImage: `url(${require("../../component/pic/DD.png")})`,
            }}>
   </div>
   </div>


   <div className='table'>
            <h2>List of Doctors:</h2>

            <table >
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Password</th>
           
          </tr>
        </thead>
        <tbody>
        {doctors.map((doctor, index) => (
            <tr  key={index} >
              <td> {doctor.username}</td>
              <td>{doctor.email}</td>
              <td>{doctor.password}</td>
             


            </tr>
          ))}
        </tbody>
      </table>
      </div>

           
            </>
    );
}
