import React, { useEffect, useState } from "react";
import { loadBlockchainData, loadWeb3 } from "../../Web3helpers.js";
import { useNavigate } from "react-router-dom";


export default function SignIn() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();


    const [accounts, setAccounts] = useState(null);
    const [auth, setAuth] = useState(null);
    const [adminAddress, setAdminAddress] = useState("");


    const loadAccounts = async () => {
        let { auth, accounts } = await loadBlockchainData();
        setAccounts(accounts);
        setAuth(auth);
        console.log("Accounts:", accounts);
        loadAdminAddress(); // Call loadAdminAddress after setting auth
    };


    const loadAdminAddress = async () => {
        if (auth) {
            const adminAddress = await auth.methods.getAdminAddress().call();
            setAdminAddress(adminAddress);
            console.log("Admin Address:", adminAddress);
        }
    };
   
    const login = async () => {
        if (!email || !password) {
            alert("Please fill all details");
            return;
        }
   
        try {
            console.log("Accounts:", accounts);
            console.log("Admin Address:", adminAddress);
           
            // Vérifier si l'utilisateur connecté avec MetaMask est l'administrateur
            if (accounts.toLowerCase() !== adminAddress.toLowerCase()) {
                alert("You are not authorized to log in as admin");
                return;
            }
   
            const res = await auth.methods.usersList(email).call();
           
          
   
            // Vérifier les informations d'identification de l'utilisateur
            if (res.password === password) {
                localStorage.setItem("email", email);
                localStorage.setItem("account", accounts);
                navigate("/Admin");
            } else {
                alert("Wrong password or please sign up");
            }
        } catch (error) {
            alert(error.message);
        }
    };
   


    useEffect(() => {
        loadWeb3();
    }, []);


    useEffect(() => {
        loadAccounts();
    }, []); // Removed loadAdminAddress from dependency array


    return (
        <div style={rootDiv}>
            <img
                src="https://tse3.mm.bing.net/th?id=OIP.HFnc7MYlX7VhdY-oW7F4YwHaE8&pid=Api&P=0&h=180"
                style={image}
                alt="health"
            />
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


const image = {
    width: 100,
    height: 100,
    objectFit: "contain",
};



