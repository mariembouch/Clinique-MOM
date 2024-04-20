import React from 'react';
import "./MedicalRecordCard.css";
import pic from"../../component/pic/medical-report.png"
function MedicalRecordCard() {
  return (
    <>
    <div className='modal1'>
      <div  className='overlay1'>
      <div className='modal-content1 d_flex'>
           
            <div className='modal-text1 right'>

     
        <h3>Medical Record</h3>
        <div>
          <strong>Name:</strong> ons
        </div>
        <div>
          <strong>Code:</strong> 244565464646464
        </div>
        <div>
          <strong>files:</strong> 
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
          <strong>Temperature:</strong> 
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
              <td>15/4/2024</td>
              <td>40</td>
              
            


            </tr>
            <tr >
              <td>15/4/2024</td>
              <td>41</td>
              
            


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
