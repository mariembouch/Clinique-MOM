import Web3 from "web3";
import valid from "./contracts/ValidatePatient.json";

export const loadWeb3 = async () => {
  if (window.ethereum) {
    try {
      // Request account access if needed
      await window.ethereum.request({ method: 'eth_requestAccounts' });
      console.log('Accounts accessed successfully');
    } catch (error) {
      console.error('Error requesting accounts:', error);
      throw new Error('Error accessing Ethereum accounts');
    }
    window.web3 = new Web3(window.ethereum);
  } else {
    console.error('MetaMask not detected. Please install MetaMask extension.');
    throw new Error('MetaMask not detected');
  }
};
export const loadBlockchainData = async () => {
  try {
    await loadWeb3(); // Ensure web3 is loaded before proceeding

    const web3 = window.web3;
    // Load account
    const accounts = await web3.eth.getAccounts();
    // Network ID
    const networkId = await web3.eth.net.getId();
    
    // Network data
    if (networkId && valid.networks[networkId]) {
      const validContract = new web3.eth.Contract(valid.abi, valid.networks[networkId].address);
      console.log("smartContractAdr",valid.networks[networkId].address,networkId);
      
      return { valid: validContract, accounts: accounts[0] };
    } else {
      throw new Error('Unable to get network ID');
    }
  } catch (error) {
    console.error('Error loading blockchain data:', error);
    throw error;
  }
};

export const loadPatientsData = async () => {
  try {
    const { valid, accounts } = await loadBlockchainData();
    const { count, codes, names, temperatures, hashLists } = await valid.methods.getAllPatients().call({ from: accounts });
    const patients = [];
    for (let i = 0; i < count; i++) {
      const patient = {
        code: codes[i],
        name: names[i],
        temperature: temperatures[i],
        hashList: hashLists[i]
      };
      patients.push(patient);
    }
    return patients;
  } catch (error) {
    console.error('Error loading patients data:', error);
    throw error;
  }
};
export const loadPatientByCode = async (patientCode) => {
  try {
    const { valid, accounts } = await loadBlockchainData();
    const patientData = await valid.methods.getPatientByCode(patientCode).call({ from: accounts });
    const patient = {
      code: patientData[0],
      name: patientData[1],
      temperature: patientData[2],
      hashList: patientData[3]
    };
    return patient;
  } catch (error) {
    console.error('Error loading patient data by code:', error);
    throw error;
  }
};