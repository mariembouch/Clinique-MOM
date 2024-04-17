import React from 'react';
import "./MedicalRecordCard.css";

function MedicalRecordCard({ name, code, hashlist,onClose }) {
  return (
    <>
    <div className='modal1'>
      <div  className='overlay1'>
      <div className='modal-content1 d_flex'>
            <div className='modal-img1 left'>
              <img src="../pic" alt='' />
            </div>
            <div className='modal-text1 right'>

        <button className='close-modal btn_shadow'onClick={onClose}>
                <i class='fas fa-times'></i>
              </button>
        <h3>Medical Record</h3>
        <div>
          <strong>Name:</strong> {name}
        </div>
        <div>
          <strong>Code:</strong> {code}
        </div>
        <div>
          <strong>files:</strong> {hashlist}
        </div>
        <div className='button f_flex '>

                <button className='btn_shadow'>
                  IRM 
                </button>
                <button className='btn_shadow'>
                  Scanner
                </button>
                </div>
              <div>
          <strong>Temperature:</strong> {hashlist}
        </div>
              <table>
        <thead>
          <tr>
            <th>date </th>
            <th>temperature</th>
         
          </tr>
        </thead>
        <tbody>
            <tr >
              <td></td>
              <td></td>
              
            


            </tr>
            <tr >
              <td></td>
              <td></td>
              
            


            </tr>
            <tr >
              <td></td>
              <td></td>
              
            


            </tr>
            <tr >
              <td></td>
              <td></td>
              
            


            </tr>  <tr >
              <td></td>
              <td></td>
              
            


            </tr>
        </tbody>
      </table>
       
        {/* Add more medical record details here */}
      </div>
    </div>
    </div>
    </div>

    </>
  );
}

export default MedicalRecordCard;
