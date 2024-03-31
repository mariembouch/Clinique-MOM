import React, { useState, useEffect } from "react";
import { useWeb3 } from "../../Web3helpers";

export default function AdminMenu() {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [users, setUsers] = useState([]);

    const { web3Data } = useWeb3();

    const addUser = async () => {
        try {
            // Get the selected account from MetaMask
            const [selectedAccount] = await window.ethereum.request({ method: 'eth_requestAccounts' });
    
            // Send transaction with the specified "from" address
            await web3Data.auth.methods
                .createUser(username, email, password)
                .send({ from: selectedAccount });
    
            alert("User added successfully!");
            fetchUsers();
        } catch (error) {
            console.error(error.message);
        }
    };
    

    const fetchUsers = async () => {
        try {
            const totalUsers = await web3Data.auth.methods.userCount().call();
            const usersArray = [];

            for (let i = 1; i <= totalUsers; i++) {
                const user = await web3Data.auth.methods.usersList(i).call();
                usersArray.push(user);
            }

            setUsers(usersArray);
        } catch (error) {
            console.error(error.message);
        }
    };

    useEffect(() => {
        if (web3Data && web3Data.auth) {
            fetchUsers(); // Fetch the list of users when the component mounts
        }
    }, [web3Data]);

 

    return (
        <div>
            <h3>Admin Menu</h3>
            <label>Username:</label>
            <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
            <label>Email:</label>
            <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} />
            <label>Password:</label>
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
            <button onClick={addUser}>Add User</button>
            <br />
            <h4>List of Users:</h4>
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
