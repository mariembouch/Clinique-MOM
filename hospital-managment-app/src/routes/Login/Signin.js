import React, { useState, useEffect } from "react";
import { loadBlockchainData, loadWeb3 } from "../../Web3helpers.js";
import { useNavigate } from "react-router-dom";

export default function SignIn() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const [accounts, setAccounts] = useState(null);
    const [auth, setAuth] = useState(null);
    const [adminAddress, setAdminAddress] = useState("");
    const [adminEmail, setAdminEmail] = useState("");
    const [adminPassword, setAdminPassword] = useState("");
    const [doctorAddress, setDoctorAddress] = useState(""); // Initialize doctorAddress as null
    const [doctorPassword, setDoctorPassword] = useState("");
    const [assistantAddress, setAssistantAddress] = useState("");
    const [assistantPassword, setAssistantPassword] = useState("");

    const loadAccounts = async () => {
        try {
            const { auth, accounts } = await loadBlockchainData();
            setAccounts(accounts);
            setAuth(auth);
            console.log("Accounts:", accounts[0]);
            loadAddresses();
        } catch (error) {
            console.error("Error loading accounts:", error);
        }
    };

    const loadAddresses = async () => {
        if (auth) {
            try {
                const adminAddress = await auth.methods.getAdminAddress().call();
                const adminEmail = await auth.methods.getEmailAdmin().call();
                const adminPassword = await auth.methods.getPasswordAdmin().call();
                setAdminAddress(adminAddress);
                setAdminEmail(adminEmail);
                setAdminPassword(adminPassword);
                console.log("Admin Address:", adminAddress);
                console.log("Admin Email:", adminEmail);
                console.log("Admin Password:", adminPassword);
            } catch (error) {
                console.error("Error loading addresses:", error);
            }
                let doctorAddress;
                let doctorPassword;
                try {
                    doctorAddress = await auth.methods.getDoctorAddress(email).call();
                    console.log( doctorAddress);

                    doctorPassword = await auth.methods.getDoctorPassword(email).call();
                } catch (error) {
                    console.log("Doctor not found:", error);
                }
                setDoctorAddress(doctorAddress );
                setDoctorPassword(doctorPassword );
    
                let assistantAddress;
                let assistantPassword;
                try {
                    assistantAddress = await auth.methods.getAssistantAddress(email).call();

                    assistantPassword = await auth.methods.getAssistantPassword(email).call();
                } catch (error) {
                    console.log("Assistant not found:", error);
                }
                setAssistantAddress(assistantAddress );
                setAssistantPassword(assistantPassword);
            
        }
    };
    

    const login = async () => {
        if (!email || !password) {
            alert("Please fill all details");
            return;
        }
    
        try {
            if (adminAddress && accounts[0].toLowerCase() === adminAddress.toLowerCase()) {
                console.log(adminAddress && accounts[0].toLowerCase() === adminAddress.toLowerCase());
                if (email === adminEmail && password === adminPassword) {
                    localStorage.setItem("email", email);
                    localStorage.setItem("account", accounts[0]);
                    localStorage.setItem('adminAddress', adminAddress);
                    navigate("/Admin");
                    return;
                }
            } else if (accounts[0].toLowerCase() === doctorAddress.toLowerCase()) {
                if (password === doctorPassword) {
                    localStorage.setItem("email", email);
                    localStorage.setItem("account", accounts[0]);
                    navigate("/Doctors");
                    return;
                }
            } 

            else if (accounts[0].toLowerCase() === assistantAddress.toLowerCase()) {
                if (password === assistantPassword) {
                    localStorage.setItem("email", email);
                    localStorage.setItem("account", accounts[0]);
                    navigate("/Assistants");
                    return;
                }
            }
            console.log( doctorAddress);
            console.log( accounts[0] );
            console.log(  assistantAddress);

            console.log( accounts[0].toLowerCase() === doctorAddress.toLowerCase());
            console.log( accounts[0].toLowerCase() === assistantAddress.toLowerCase());

    
        } catch (error) {
            console.error(error.message);
            alert("An error occurred. Please try again.");
        }
    };
    

    useEffect(() => {
        loadWeb3();
    }, []);

    useEffect(() => {
        loadAccounts();
    }, []);

    return (
        <div style={rootDiv}>
            <input
                style={input}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email"
                type="text"
            />
            <input
                style={input}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
                type="password"
            />
            <button style={button} onClick={login}>
                {" "}
                Sign In
            </button>
        </div>
    );
}

const rootDiv = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    height: "100vh",
};

const input = {
    width: 300,
    padding: 10,
    margin: 10,
    borderRadius: 10,
    outline: "none",
    border: "2px solid grey",
    fontSize: 17,
};

const button = {
    width: 325,
    padding: 10,
    borderRadius: 10,
    margin: 10,
    cursor: "pointer",
    fontSize: 17,
    color: "white",
    backgroundColor: "blue",
    border: "none",
};
