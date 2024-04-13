import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { loadBlockchainData } from '../../Web3'; // Assuming loadBlockchainData is exported from Web3.js

function ValidateButton({ patients }) {
  const [allData, setAllData] = useState([]);

  useEffect(() => {
    setAllData(patients);
  }, [patients]);

  const handleAddAllPatients = async () => {
    try {
      const { valid, accounts } = await loadBlockchainData();
      console.log('les accounts', accounts);

      // Format data for bulk addition
      const bulkPatients = allData.map(patient => [
        patient._id, // code
        patient.prenom, // name
        "0" // temperature, convert to string to pass validation
      ]);

      // Add all patients in a single transaction
      const stat = await valid.methods.addAllPatients(bulkPatients).send({ from: accounts });
      console.log('l etat de la trans', stat);

      // Update the valid field of all patients in MongoDB from 0 to 1
      await axios.put(`http://localhost:5000/validate/all`, { valid: 1 });

      // Reload the page to reflect the updated state
      // window.location.reload();
      alert('All patients added and validated successfully!');
    } catch (error) {
      console.error('Error while adding and validating all patients:', error);
    }
  };

  return (
    <div>
      <button onClick={handleAddAllPatients} type='submit'>Add and validate all patients </button>
    </div>
  );
}

export default ValidateButton;
