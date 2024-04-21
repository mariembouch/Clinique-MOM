import React, { useState } from 'react';
import { setPatientTemperature } from '../../Web3'; // Importez la fonction setPatientTemperature de votre fichier web3.js

export default function SetTemperature() {
  const [patientCode, setPatientCode] = useState('');
  const [newTemperature, setNewTemperature] = useState('');

  const handlePatientCodeChange = (e) => {
    setPatientCode(e.target.value);
  };

  const handleTemperatureChange = (e) => {
    setNewTemperature(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await setPatientTemperature(patientCode, newTemperature);
      alert('Temperature set successfully for patient: ' + patientCode);
      // Réinitialisez les champs après la soumission réussie si nécessaire
      setPatientCode('');
      setNewTemperature('');
    } catch (error) {
      console.error('Error setting temperature for patient:', error);
      alert('Error setting temperature for patient: ' + error.message);
    }
  };

  return (
    <div>
      <h2>Set Patient Temperature</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Patient Code:
          <input type="text" value={patientCode} onChange={handlePatientCodeChange} />
        </label>
        <br />
        <label>
          New Temperature:
          <input type="text" value={newTemperature} onChange={handleTemperatureChange} />
        </label>
        <br />
        <button type="submit">Set Temperature</button>
      </form>
    </div>
  );
}
