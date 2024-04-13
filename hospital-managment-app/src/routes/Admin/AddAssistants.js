import React, { useState, useEffect } from "react";
import axios from 'axios';
import { loadBlockchainData } from "../../Web3helpers";
import "./AddAssistant.css";
export default function AddAssistant() {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [assistants, setAssistants] = useState([]);
    const [invalidAddresses, setInvalidAddresses] = useState([]);
    const [selectedAddress, setSelectedAddress] = useState('');

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

    const addAssistant = async () => {
        try {
            const { contract } = await loadBlockchainData();
            if (contract) {
                const [selectedAccount] = await window.ethereum.request({ method: 'eth_requestAccounts' });
                await contract.methods.createAssistant(selectedAddress, username, email, password).send({ from: selectedAccount });
                alert("Assistant added successfully!");
    
                // Update the validity of the selected address in MongoDB
                await axios.put(`http://localhost:5000/makeValidDataModel1/${selectedAddress}`);
    
                // Log the added assistant's data
                console.log("Assistant added successfully. Assistant Data:", {
                    address: selectedAddress,
                    username,
                    email,
                    password
                });
    
                // Update the list of assistants
                setAssistants([...assistants, { username, email, password }]);
            } else {
                console.error("Unable to fetch contract data.");
            }
        } catch (error) {
            console.error(error.message);
        }
    };
    
    return (
        <>
        <div className='all'>
        <div className="form-container">
            <div className="sel">
                <h2>Add Assistant</h2>
                <label >Choose an address:</label>
                <select id="addressSelect" value={selectedAddress} onChange={handleAddressChange}>
                    <option value="">Select an address</option>
                    {invalidAddresses.map(address => (
                        <option key={address._id} value={address.Address}>{address.Address}</option>
                    ))}
                </select>
            </div>
            <label  >Username</label>
            <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
            <label  >Email</label>
            <input  value={email} onChange={(e) => setEmail(e.target.value)} />
            <label  >Password</label>
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
            <button onClick={addAssistant} type="submit" >Add Assistant</button>
            <br />

            </div>
            <div className="photo"
     style={{
            backgroundImage: `url(${require("../../component/pic/AA.jpg")})`,
            }}>
   </div>
   </div>
   <div className='table'>
            <h2>List of Assistants:</h2>

            <table >
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Password</th>
           
          </tr>
        </thead>
        <tbody>
        {assistants.map((assistant, index) => (
            <tr  key={index} >
              <td> {assistant.username}</td>
              <td>{assistant.email}</td>
              <td>{assistant.password}</td>
             


            </tr>
          ))}
        </tbody>
      </table>
      </div>

          
        </>
    );
}
