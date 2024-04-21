const fileInputRef = useRef(null);

  // Function to handle file selection
  const handleFileUpload = () => {
    // Trigger click event on file input element
    fileInputRef.current.click();
  };

  // Function to handle file selection
  const handleFileChange = async (event) => {
    // Access the selected file(s) here
    const selectedFile = event.target.files[0];
    console.log("Selected file:", selectedFile);
    // You can handle the selected file(s) as needed, such as uploading to a server
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
      // You can now use the IPFS hash to retrieve the file or display it in your application
      alert("Le fichier a été correctement stocké dans Pinata IPFS.");
    
      

    } catch (error) {
      console.error("Error uploading file to Pinata IPFS:", error);
      alert("Une erreur s'est produite lors du stockage du fichier dans Pinata IPFS. Veuillez réessayer plus tard.")

    }
  };