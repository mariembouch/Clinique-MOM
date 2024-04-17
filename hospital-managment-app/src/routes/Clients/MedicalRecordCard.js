import React from 'react';
import "./MedicalRecordCard.css";

function MedicalRecordCard() {
  return (
    <>
    <div className='modal1'>
      <div  className='overlay1'>
      <div className='modal-content1 d_flex'>
            <div className='modal-img1 left'>
              <img src="../pic" alt='' />
            </div>
            <div className='modal-text1 right'>

     
        <h3>Medical Record</h3>
        <div>
          <strong>Name:</strong> dfvdfv
        </div>
        <div>
          <strong>Code:</strong> zfdcsdc
        </div>
        <div>
          <strong>files:</strong> sdcsd
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
          <strong>Temperature:</strong> zdcsd
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
