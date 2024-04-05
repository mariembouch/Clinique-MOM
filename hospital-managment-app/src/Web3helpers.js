import { useState, useEffect } from "react";
import Web3 from "web3";
import Auth from "./contracts/Auth.json";

export const loadWeb3 = async () => {
  if (window.ethereum) {
    window.web3 = new Web3(window.ethereum);
    await window.ethereum.enable();
  } else if (window.web3) {
    window.web3 = new Web3(window.web3.currentProvider);
  } else {
    window.alert(
      "Non-Ethereum browser detected. You should consider trying MetaMask!"
    );
  }
};
export const loadBlockchainData = async () => {
  try {
    if (!window.ethereum) {
      throw new Error("MetaMask is not installed or not active.");
    }
    const web3 = new Web3(window.ethereum);
    // Load account
    const accounts = await web3.eth.requestAccounts();

    // Network ID
    const networkId = await web3.eth.net.getId();

    // Network data
    if (networkId && Auth.networks[networkId]) {
      const auth = new web3.eth.Contract(Auth.abi, Auth.networks[networkId].address);
      return { auth, accounts: accounts }; // Return accounts along with other data
    } else {
      throw new Error("Contract not deployed to detected network.");
    }
  } catch (error) {
    console.error(error.message);
    throw error;
  }
};


export const useWeb3 = () => {
  const [web3Data, setWeb3Data] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadWeb3Data = async () => {
      try {
        const data = await loadBlockchainData();
        setWeb3Data(data);
      } catch (error) {
        console.error(error.message);
      } finally {
        setLoading(false);
      }
    };

    loadWeb3Data();
  }, []);

  return { web3Data, loading };
};
