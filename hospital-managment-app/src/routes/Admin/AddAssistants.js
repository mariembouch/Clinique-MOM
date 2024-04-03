import React, { useState, useEffect } from "react";
import { useWeb3 } from "../../Web3helpers";

export default function AddAssistant() {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [users, setUsers] = useState([]);

    const { web3Data } = useWeb3();

    const addUser = async () => {
        try {
            const [selectedAccount] = await window.ethereum.request({ method: 'eth_requestAccounts' });
            await web3Data.auth.methods.createUser(username, email, password, "assistants").send({ from: selectedAccount });
            alert("User added successfully!");
            fetchAssistants(); // Fetch updated list of assistants after adding a new one
        } catch (error) {
            console.error(error.message);
        }
    };

    const fetchAssistants = async () => {
        try {
            const totalUsers = await web3Data.auth.methods.userCount().call();
            const assistantsArray = [];

            for (let i = 1; i <= totalUsers; i++) {
                const user = await web3Data.auth.methods.usersList(i).call();
                if (user.role === "assistants") {
                    assistantsArray.push(user);
                }
            }

            setUsers(assistantsArray);
        } catch (error) {
            console.error(error.message);
        }
    };

    useEffect(() => {
        if (web3Data && web3Data.auth) {
            fetchAssistants(); // Fetch assistants when component mounts
        }
    }, [web3Data]);

    // This useEffect will re-fetch assistants whenever "users" state changes
    useEffect(() => {
        fetchAssistants();
    }, [users]);

    return (
        <div>
            <h3>Add assistants</h3>
            <label>Username:</label>
            <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
            <label>Email:</label>
            <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} />
            <label>Password:</label>
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
            <button onClick={addUser}>Add assistants</button>
            <br />
            <h4>List of assistants:</h4>
            <ul>
                {users.map((user, index) => (
                    <li key={index}>
                        {`Name: ${user.username}, Email: ${user.email}, Password: ${user.password}`}
                    </li>
                ))}
            </ul>
            <br />
        </div>
    );
}
