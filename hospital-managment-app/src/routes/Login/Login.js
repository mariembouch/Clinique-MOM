import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { loadBlockchainData } from "../../Web3helpers.js";

export default function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const [contract, setContract] = useState(null);
  const [account, setAccount] = useState(null); // Ajouter le state pour stocker l'adresse du compte

  useEffect(() => {
    const fetchData = async () => {
      const { contract, account } = await loadBlockchainData();
      setContract(contract);
      setAccount(account); // Mettre à jour le state avec l'adresse du compte
    };
    fetchData();
  }, []);

  const login = async (event) => {
    event.preventDefault(); // Empêche la soumission du formulaire par défaut

    if (!email || !password ) {
      alert("Please fill all details");
      return;
    }

    try {
      const role = await contract.methods.VerifyRole(email, password).call({ from: account });
      console.log(role);
      if (role === "admin") {
        localStorage.setItem("email", email);
        navigate("/Admin");
      } else if (role === "doctor") {
        localStorage.setItem("email", email);
        navigate("/Doctors");
      } else if (role === "assistant") {
        localStorage.setItem("email", email);
        navigate("/assistants");
      } else {
        alert("Invalid email or password");
      }
    } catch (error) {
      console.error(error.message);
      alert("An error occurred. Please try again.");
    }
  };

  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
      <form onSubmit={login}> {/* Enveloppez les champs d'entrée avec un formulaire */}
        <input
          style={{ margin: "5px", padding: "5px" }}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          type="text"
        />
        <input
          style={{ margin: "5px", padding: "5px" }}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          type="password"
        />
        <button style={{ margin: "5px", padding: "5px" }} type="submit">
          {" "}
          Sign In
        </button>
      </form>
    </div>
  );
}
