import React, { useState, useEffect } from 'react';
import axios from 'axios';

function AddressSelector() {
  const [invalidAddresses, setInvalidAddresses] = useState([]);
  const [selectedAddress, setSelectedAddress] = useState('');
  const [newAddress, setNewAddress] = useState('');
  const [newKey, setNewKey] = useState('');

  useEffect(() => {
    const fetchInvalidAddresses = async () => {
      try {
        const response = await axios.get('http://localhost:5000/invalidAddresses');
        setInvalidAddresses(response.data);
      } catch (error) {
        console.error('Error fetching invalid addresses:', error);
      }
    };

    fetchInvalidAddresses();
  }, []);

  const handleAddressChange = async (e) => {
    const selectedValue = e.target.value;
    setSelectedAddress(selectedValue);
    try {
      await axios.put(`http://localhost:5000/makeValidDataModel1/${selectedValue}`);
      console.log('Address validity updated successfully:', selectedValue);
    } catch (error) {
      console.error('Error updating address validity:', error);
    }
  };

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
  );
}

export default AddressSelector;
