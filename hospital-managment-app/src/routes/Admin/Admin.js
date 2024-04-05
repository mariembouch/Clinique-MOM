import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useWeb3 } from '../../Web3helpers.js';
import Header from '../../component/Head/Header';
import AddAssistants from '../Admin/AddAssistants.js';
import AddDoctors from '../Admin/AddDoctors.js';
import Profile from '../../component/Profile/Profile';
import AddDeleteTableRows from '../../component/table/AddDeleteTableRows.js';
import AddAddressForm from './AddAddressForm.js';
import AllData from './AllData.js';

const Admin = () => {
    const [authenticated, setAuthenticated] = useState(false);
    const navigate = useNavigate();
    const { web3Data, loading } = useWeb3();

    useEffect(() => {
        const checkAuthentication = async () => {
            if (!loading && web3Data && web3Data.accounts) {
                const email = localStorage.getItem('email');
                const account = localStorage.getItem('account');
                const adminAddress = localStorage.getItem('adminAddress'); // Vous devez stocker l'adresse de l'administrateur lors de la connexion
                if (email && account && web3Data.accounts[0].toLowerCase() === adminAddress.toLowerCase()) {
                    setAuthenticated(true);
                } else {
                    navigate('/signIn'); // Rediriger vers la page de connexion si l'utilisateur n'est pas authentifié en tant qu'administrateur
                }
            }
        };
        checkAuthentication();
    }, [loading, web3Data, navigate]);

    const logout = () => {
        localStorage.removeItem('email');
        localStorage.removeItem('account');
        localStorage.removeItem('adminAddress'); // Supprimez également l'adresse de l'administrateur lors de la déconnexion
        setAuthenticated(false);
        navigate('/signIn');
    };

    if (!authenticated) {
        return null; // Vous pouvez également afficher un message d'erreur ou une page de chargement ici
    }

    return (
        <>
            <Header />
            <br />
            <br />
            <br />
            <br />
            <div className="admin-container">
                <div className="content">
                    <Profile />
                    <br />
                    <br />
                </div>
            </div>
            <AddDeleteTableRows />
            <div>
                <h4>Welcome home</h4>
                <h3>Your account: {localStorage.getItem('account')}</h3>
                <h3>Your email: {localStorage.getItem('email')}</h3>
                <AddAssistants />
                <AddDoctors />
                <AllData />
                <AddAddressForm />
                <button style={button} onClick={logout}>
                    Log out
                </button>
            </div>
        </>
    );
};

const button = {
    width: 100,
    padding: 10,
    borderRadius: 5,
    margin: 10,
    cursor: 'pointer',
    fontSize: 17,
    color: 'white',
    backgroundColor: 'blue',
    border: 'none',
};

export default Admin;
