import React, { useState } from 'react';
import axios from "axios";
import "./Write.css"; // Importer le fichier CSS

function Write() {
  const [patientData, setPatientData] = useState({
    prenom: "",
    nom: "",
    Email: "",
    CIN: "",
    Gender: "",
    Service:"",
    valid:""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPatientData({ ...patientData, [name]: value });
  };

  const saveData = async () => {
    try {
      const dataToSend = { ...patientData, valid: 0 }; // Inclure le champ valide
      await axios.post("http://localhost:5000/writetodatabase", dataToSend);
      alert("Data saved successfully");
      window.location.reload();

    } catch (error) {
      console.log("Error while saving data:", error.message);
    }
  };

  return (
    <>
    <div className='all' id='addap'>
    <div className="form-container">
      <h2>Add Patients</h2> {/* Titre "Add Patients" */}
      <input type="text" name="prenom" placeholder="prenom" value={patientData.prenom} onChange={handleChange} />
      <input type="text" name="nom" placeholder="nom" value={patientData.nom} onChange={handleChange} />
      <input type="text" name="Email" placeholder="Email" value={patientData.Email} onChange={handleChange} />
      <input type="text" name="CIN" placeholder="CIN" value={patientData.CIN} onChange={handleChange} />
      <input type="text" name="Gender" placeholder="Gender" value={patientData.Gender} onChange={handleChange} />
      <input type="text" name="Service" placeholder="Service" value={patientData.Service} onChange={handleChange} />

      <button onClick={saveData} type="submit">Save</button>
    </div>
     <div className="photo"
     style={{
            backgroundImage: `url(${require("../../component/pic/img1.jpg")})`,
            }}>
   </div>
   </div>
   </>
  );
}

export default Write;
