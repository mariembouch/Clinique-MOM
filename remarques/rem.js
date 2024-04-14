import React, { useState, useEffect } from 'react';
import FormData from 'form-data';
import axios from 'axios';
import Web3 from 'web3'; // Importez Web3.js
import HashStorageContract from './contracts/HashStorage.json'; // Importez le fichier JSON du contrat

function App() {
  const [file, setFile] = useState();
  const [myipfsHash, setIPFSHASH] = useState('');
  const [cids, setCids] = useState([]);
  const [web3, setWeb3] = useState(null);
  const [accounts, setAccounts] = useState([]);
  const [contract, setContract] = useState(null);

  useEffect(() => {
    const init = async () => {
      // Initialisez Web3.js
      if (window.ethereum) {
        const web3Instance = new Web3(window.ethereum);
        await window.ethereum.enable();
        setWeb3(web3Instance);
      }
    };

    init();
  }, []);

  useEffect(() => {
    const loadBlockchainData = async () => {
      if (web3) {
        // Obtenez les comptes
        const accounts = await web3.eth.getAccounts();
        setAccounts(accounts);

        // Initialisez le contrat
        const networkId = await web3.eth.net.getId();
        const deployedNetwork = HashStorageContract.networks[networkId];
        const instance = new web3.eth.Contract(
          HashStorageContract.abi,
          deployedNetwork && deployedNetwork.address,
        );
        setContract(instance);
      }
    };

    loadBlockchainData();
  }, [web3]);

  const handleFile = async (fileToHandle) => {
    const formData = new FormData();
    formData.append("file", fileToHandle);

    const url = https://api.pinata.cloud/pinning/pinFileToIPFS;
    const response = await axios.post(
      url,
      formData,
      {
        maxContentLength: "Infinity",
        headers: {
          "Content-Type": multipart/form-data;boundary=${formData._boundary},
          'pinata_api_key': '9aeac8ef7886c69a9b84',
          'pinata_secret_api_key': '3ff2178888a7a95d98cdf18d2259367db8ed897b3a81f0ebc73a3c56fc2e93ba'
        }
      }
    );

    setIPFSHASH(response.data.IpfsHash);
    setCids([...cids, response.data.IpfsHash]);

    // Appel de la fonction storeHash du contrat
    if (contract) {
      await contract.methods.storeHash(cids.length, response.data.IpfsHash).send({ from: accounts[0] });
    }
  }

  const handleGetCidsFromPinata = async () => {
    const url = 'https://api.pinata.cloud/data/pinList?status=pinned';
    
    const response = await axios.get(url, {
      headers: {
        'pinata_api_key': '9aeac8ef7886c69a9b84',
        'pinata_secret_api_key': '3ff2178888a7a95d98cdf18d2259367db8ed897b3a81f0ebc73a3c56fc2e93ba'
      }
    });

    const fetchedCids = response.data.rows.map(row => row.ipfs_pin_hash);
    setCids(fetchedCids);
  }

  return (
    <div className="App">
      <input type="file" onChange={(event) => setFile(event.target.files[0])} />
      <button onClick={() => handleFile(file)}>Pin</button>
      <button onClick={handleGetCidsFromPinata}>Get CID from Pinata</button>

      <table>
        <thead>
          <tr>
            <th>CID</th>
          </tr>
        </thead>
        <tbody>
          {cids.map((cid, index) => (
            <tr key={index}>
              <td>{cid}</td>
            </tr>
          ))}
        </tbody>
      </table>

      {myipfsHash.length > 0 && <img height='200' src={`https://gateway.pinata.cloud/ipfs/${myipfsHash}`} alt='not loading' />}
    </div>
  );
}

export default App;