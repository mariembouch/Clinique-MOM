import React, { useState, useEffect } from 'react';
import { loadPatientsData } from '../../Web3';
import "./PatientTable.css";
import MedicalRecordCard from './MedicalRecordCard'; // Import the MedicalRecordCard component

function PatientTable() {
  const [patients, setPatients] = useState([]);
  const [selectedPatient, setSelectedPatient] = useState(null);

  useEffect(() => {
    const fetchPatients = async () => {
      try {
        const patientData = await loadPatientsData();
        setPatients(patientData);
      } catch (error) {
        console.error('Error fetching patient data:', error);
      }
    };

    fetchPatients();
  }, []);

  const handleMedicalRecordClick = (name, code,hashList) => {
    // Set the selected patient when the medical record button is clicked
    setSelectedPatient({ name, code,hashList });
  };

  const handleCloseCard = () => {
    // Close the medical record card
    setSelectedPatient(null);
  };

  return (
    <div className='all123'>
      <h2>Patients</h2>
      <div className='ta'>
        <table>
          <thead>
            <tr>
              <th>Code</th>
              <th>Name</th>

              <th>Medical Record</th>

            </tr>
          </thead>
          <tbody>
            {patients.map((patient, index) => (
              <tr key={index}>
                <td>{patient.code}</td>
                <td>{patient.name}</td>

                <td>
                  <button onClick={() => handleMedicalRecordClick(patient.name, patient.code,patient.hashList)} className='btn_shadow'>Open</button>
                </td>

              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {/* Conditionally render the MedicalRecordCard when a patient is selected */}
      {selectedPatient && (
        <MedicalRecordCard
          name={selectedPatient.name}
          code={selectedPatient.code}
          hashList={selectedPatient.hashList}
          onClose={handleCloseCard}
        />
      )}
    </div>
  );
}

export default PatientTable;
