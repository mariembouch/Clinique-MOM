import Web3 from "web3";
import AuthContract from "./contracts/Auth.json";

const loadBlockchainData = async () => {
  try {
    if (window.ethereum) {
      window.web3 = new Web3(window.ethereum);
      await window.ethereum.enable();

      const web3 = window.web3;
      const accounts = await web3.eth.getAccounts(); // Obtenir les comptes MetaMask

      const networkId = await web3.eth.net.getId();
      const deployedNetwork = AuthContract.networks[networkId];
      const contract = new web3.eth.Contract(
        AuthContract.abi,
        deployedNetwork && deployedNetwork.address
      );

      return { web3, contract, account: accounts[0] }; // Retourne uniquement le premier compte
    } else {
      console.error("MetaMask n'est pas installé !");
      return { web3: null, contract: null, account: null };
    }
  } catch (error) {
    console.error("Erreur lors du chargement des données de la blockchain :", error);
    return { web3: null, contract: null, account: null };
  }
};

export { loadBlockchainData };
