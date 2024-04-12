import React, { useState, useEffect } from "react";
import { loadBlockchainData  } from "../../Web3helpers.js";

export default function GetAllAccounts() {
  const [accounts, setAccounts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { contract } = await loadBlockchainData ();
        if (contract) {
          // Calling the getAllAccounts function from the Auth contract
          const accounts = await contract.methods.getAllAccounts().call();
          setAccounts(accounts);
        } else {
          console.error("Unable to fetch contract data.");
        }
      } catch (error) {
        console.error(error.message);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h3>All Accounts:</h3>
      <ul>
        {accounts.map((account, index) => (
          <li key={index}>
            <p>Address: {account.adr}</p>
            <p>Email: {account.email}</p>
            <p>Password: {account.pwd}</p>
            <p>Role: {account.role}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
