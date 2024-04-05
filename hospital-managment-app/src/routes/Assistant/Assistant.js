import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useWeb3 } from '../../Web3helpers.js';
import Header from '../../component/Head/Header';
import SideBar from '../../component/SideBar/SideBar';

const Assistants = () => {
    const [authenticated, setAuthenticated] = useState(false);
    const navigate = useNavigate();
    const { web3Data, loading } = useWeb3();

    useEffect(() => {
        const checkAuthentication = async () => {
            if (!loading && web3Data && web3Data.accounts) {
                const email = localStorage.getItem('email');
                const account = localStorage.getItem('account');
                const assistantAddress = localStorage.getItem('assistantAddress'); // Vous devez stocker l'adresse de l'assistante lors de la connexion
                if (email && account && web3Data.accounts[0].toLowerCase() === assistantAddress.toLowerCase()) {
                    setAuthenticated(true);
                } else {
                    navigate('/signIn'); // Rediriger vers la page de connexion si l'utilisateur n'est pas authentifié en tant qu'assistante
                }
            }
        };
        checkAuthentication();
    }, [loading, web3Data, navigate]);

    const logout = () => {
        localStorage.removeItem('email');
        localStorage.removeItem('account');
        localStorage.removeItem('assistantAddress'); // Supprimez également l'adresse de l'assistante lors de la déconnexion
        setAuthenticated(false);
        navigate('/signIn');
    };

    if (!authenticated) {
        return null; // Vous pouvez également afficher un message d'erreur ou une page de chargement ici
    }

    return (
        <>
            <Header />
            <SideBar />
            <div className="login-container">
                <h2>Hello assistants</h2>
                {/* Ajoutez ici le contenu de la page des assistantes */}
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

export default Assistants;
