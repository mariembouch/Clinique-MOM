import React, { useState, useEffect } from "react";
import axios from 'axios';
import { loadBlockchainData } from "../../Web3helpers";

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
        <div>
            <h3>Add Assistant</h3>
            <div>
                <h2>Address Selector</h2>
                <label htmlFor="addressSelect">Choose an address:</label>
                <select id="addressSelect" value={selectedAddress} onChange={handleAddressChange}>
                    <option value="">Select an address</option>
                    {invalidAddresses.map(address => (
                        <option key={address._id} value={address.Address}>{address.Address}</option>
                    ))}
                </select>
            </div>

            <label>Username:</label>
            <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
            <label>Email:</label>
            <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} />
            <label>Password:</label>
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
            <button onClick={addAssistant}>Add Assistant</button>
            <br />
            <h4>List of Assistants:</h4>
            <ul>
                {assistants.map((assistant, index) => (
                    <li key={index}>
                        {`Name: ${assistant.username}, Email: ${assistant.email}, Password: ${assistant.password}`}
                    </li>
                ))}
            </ul>
            <br />
        </div>
    );
}
