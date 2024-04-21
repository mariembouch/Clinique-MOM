import React,{ useRef ,useState,useEffect} from 'react';
import "./MedicalRecordCard.css";
import pic from"../../component/pic/medical-report.png"
import axios from 'axios' ;
 
function MedicalRecordCard({ name, code, hashlist,onClose }) {
  const [cidirm, setCidirm] = useState('');


  const fileInputRef = useRef(null);
 // Function to handle file selection
 const handleFileUpload = () => {
  // Trigger click event on file input element
  fileInputRef.current.click();
};

// Function to handle file selection
const handleFileChange = async (event) => {
  const selectedFile = event.target.files[0];
  console.log("Selected file:", selectedFile);
  try {
    const formData = new FormData();
    formData.append('file', selectedFile);

    const response = await axios.post(
      'https://api.pinata.cloud/pinning/pinFileToIPFS',
      formData,
      {
        headers: {
          'Content-Type': 'multipart/form-data',
          'pinata_api_key': '9aeac8ef7886c69a9b84',
          'pinata_secret_api_key': '3ff2178888a7a95d98cdf18d2259367db8ed897b3a81f0ebc73a3c56fc2e93ba'
        }
      }
    );
    console.log("File uploaded successfully. IPFS hash:", response.data.IpfsHash);
    alert("Le fichier a été correctement stocké dans Pinata IPFS.");
    const CID = response.data.IpfsHash;
    // Call the function to update CID in the database
    const updateResponse = await axios.put(`http://localhost:5000/updateCidirm/${code}`, { cidirm:CID });
    alert("Le fichier a été correctement stocké dans Pinata IPFS.");
    console.log(updateResponse);
  } catch (error) {
    console.error("Error uploading file to Pinata IPFS:", error);
    alert("Une erreur s'est produite lors du stockage du fichier dans Pinata IPFS. Veuillez réessayer plus tard.")
  }
};



const handleGetFileByCID = async () => {
  try {
    // Fetch the file from the IPFS gateway using the input CID
    const fileUrl = `https://gateway.pinata.cloud/ipfs/${cidirm}`;
    window.open(fileUrl, '_blank');
  } catch (error) {
    console.error('Error fetching file from Pinata IPFS:', error);
  }
};






useEffect(() => {
  const fetchCidirm = async () => {
    try {
      const response = await axios.get(`http://localhost:5000/getCidirm/${code}`);
      setCidirm(response.data.cidirm);
      console.log(response);
    } catch (error) {
      console.error('Error fetching cidirm:', error);
      // Gérer les erreurs de manière appropriée, par exemple en affichant un message d'erreur à l'utilisateur
    }
  };

  fetchCidirm();
}, [code]);

  return (
    <>
    <div className='modal1'>
      <div  className='overlay1'>
      <div className='modal-content1 d_flex'>
            
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
          <strong>Add files:</strong> {hashlist}
        </div>
        <div className='button f_flex '>

        <button className='btn_shadow' onClick={handleFileUpload }>
                  IRM 
                </button>
                <input type="file" ref={fileInputRef} style={{ display: "none" }} onChange={handleFileChange} />


                <button className='btn_shadow'>
                  Scanner
                </button>

                <p>CIDIRM: {cidirm}</p>

                </div>

                <div>
          <strong>Show files:</strong> {hashlist}
        </div>
        <div className='button f_flex '>

                <button className='btn_shadow'  onClick={handleGetFileByCID} >
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
