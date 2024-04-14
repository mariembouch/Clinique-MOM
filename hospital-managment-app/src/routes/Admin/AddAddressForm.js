import React, { useState } from 'react';
import axios from 'axios';
import "../Assistant/Write.css"

function AddressSelector() {
  const [newAddress, setNewAddress] = useState('');
  const [newKey, setNewKey] = useState('');

 


  

  const handleNewAddressChange = (e) => {
    const value = e.target.value;
    setNewAddress(value);
  };

  const handleNewKeyChange = (e) => {
    const value = e.target.value;
    setNewKey(value);
  };

  const handleSaveNewAddress = async () => {
    if (!newAddress || !newKey) return; // Exit if newAddress or newKey is empty
    try {
      await axios.post('http://localhost:5000/writeDataModel1', { Address: newAddress, Key: newKey, valid: 0 });
      console.log('New address saved successfully:', newAddress);
      setNewAddress(''); // Clear the input fields after saving
      setNewKey('');
    } catch (error) {
      console.error('Error saving new address:', error);
    }
  };

  return (
    <>
    <div className='all'id='addadr'>

    <div className='form-container'>
   <h2>Add Addresses</h2>
      <label htmlFor="newAddress">New Address</label>
      <input type="text" id="newAddress" value={newAddress} onChange={handleNewAddressChange} placeholder="Enter a new address" />
      <br />
      <label htmlFor="newKey">New Key</label>
      <input type="text" id="newKey" value={newKey} onChange={handleNewKeyChange} placeholder="Enter a new key" />
      <br />
      <button onClick={handleSaveNewAddress} type="submit">Save New Address</button>
      <br />
    </div>
                <div className="photo"
         style={{
                backgroundImage: `url(${require("../../component/pic/th.png")})`,
                }}>
       </div>
       </div>
       </>
  );
}

export default AddressSelector;
