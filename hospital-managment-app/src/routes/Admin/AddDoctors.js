import React, { useState, useEffect } from "react";
import { useWeb3 } from "../../Web3helpers";

export default function AddDoctor() {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [doctors, setDoctors] = useState([]);

    const { web3Data } = useWeb3();

    const addUser = async () => {
        try {
            const [selectedAccount] = await window.ethereum.request({ method: 'eth_requestAccounts' });
            await web3Data.auth.methods.createUser(username, email, password, "doctors").send({ from: selectedAccount });
            alert("User added successfully!");
            fetchDoctors(); // Fetch updated list of doctors after adding a new doctor
        } catch (error) {
            console.error(error.message);
        }
    };

    const fetchDoctors = async () => {
        try {
            const totalUsers = await web3Data.auth.methods.userCount().call();
            const doctorsArray = [];
    
            for (let i = 1; i <= totalUsers; i++) {
                const user = await await web3Data.auth.methods.usersList().call();
                if (user.role === "doctors") {
                    doctorsArray.push(user);
                }
            }
    
            setDoctors(doctorsArray);
        } catch (error) {
            console.error(error.message);
        }
    };
   
     
    useEffect(() => {
        if (web3Data && web3Data.auth) {
            fetchDoctors(); // Fetch doctors when component mounts
        }
    }, [web3Data]);

    // This useEffect will re-fetch doctors whenever "doctors" state changes
    useEffect(() => {
        fetchDoctors();
    }, [doctors]);

    return (
        <div>
            <h3>Add doctors</h3>
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
