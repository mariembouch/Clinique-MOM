import React, { useState, useEffect } from "react";
import { useWeb3 } from "../../Web3helpers";

export default function AddDoctor() {
    const [add, setAdd] = useState("");
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [doctors, setDoctors] = useState([]);

    const { web3Data } = useWeb3();

    const addUser = async () => {
        try {
            const [selectedAccount] = await window.ethereum.request({ method: 'eth_requestAccounts' });
            await web3Data.auth.methods.createUser(add,username, email, password, "doctors").send({ from: selectedAccount });
            alert("User added successfully!");
        } catch (error) {
            console.error(error.message);
        }
    };

 
   

    return (
        <div>
            <h3>Add doctors</h3>
            <label>Address metamask</label>
            <input type="text" value={add} onChange={(e) => setAdd(e.target.value)} />
            <label>Username:</label>
            <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
            <label>Email:</label>
            <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} />
            <label>Password:</label>
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
            <button onClick={addUser}>Add doctors</button>
            <br />
            <h4>List of Doctors:</h4>
            <ul>
                {doctors.map((doctor, index) => (
                    <li key={index}>
                        {`Name: ${doctor.username}, Email: ${doctor.email}, Password: ${doctor.password}`}
                    </li>
                ))}
            </ul>
            <br />
        </div>
    );
}
