import "./Doctor.css"; // You can style your login page in Login.css
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useWeb3 } from '../../Web3helpers.js';
import Header from "../../component/Head/Header"
import SideBar from "../../component/SideBar/SideBar"
<SideBar/>

const Doctor = () => {
  const [authenticated, setAuthenticated] = useState(false);
  const navigate = useNavigate();
  const { web3Data, loading } = useWeb3();

  useEffect(() => {
      const checkAuthentication = async () => {
          if (!loading && web3Data && web3Data.accounts) {
              const email = localStorage.getItem('email');
              const account = localStorage.getItem('account');
              const doctorAddress = localStorage.getItem('doctorAddress'); // Vous devez stocker l'adresse du médecin lors de la connexion
              if (email && account && web3Data.accounts[0].toLowerCase() === doctorAddress.toLowerCase()) {
                  setAuthenticated(true);
              } else {
                  navigate('/signIn'); // Rediriger vers la page de connexion si l'utilisateur n'est pas authentifié en tant que médecin
              }
          }
      };
      checkAuthentication();
  }, [loading, web3Data, navigate]);

  const logout = () => {
      localStorage.removeItem('email');
      localStorage.removeItem('account');
      localStorage.removeItem('doctorAddress'); // Supprimez également l'adresse du médecin lors de la déconnexion
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
              <h2>Hello doctors</h2>
              {/* Ajoutez ici le contenu de la page des médecins */}
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

export default Doctor;