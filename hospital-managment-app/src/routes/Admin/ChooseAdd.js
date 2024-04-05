import React, { useState, useEffect } from 'react';
import axios from 'axios';

function ChooseAdd() {
  const [invalidAddresses, setInvalidAddresses] = useState([]);
  const [selectedAddress, setSelectedAddress] = useState('');

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

 
  return (
    <div>
      <h2>Address Selector</h2>
      <label htmlFor="addressSelect">Choose an address:</label>
      <select id="addressSelect" value={selectedAddress} onChange={handleAddressChange}>
        <option value="">Select an address</option>
        {invalidAddresses.map(address => (
          <option key={address._id} value={address._id}>{address.Address}</option>
        ))}
      </select>
      </div>

  );
}

export default ChooseAdd;
