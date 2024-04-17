import { useRef } from "react";
import "./LoginAll.css"; // Assuming you have a CSS file named styles.css for the styles
import React, { useState, useEffect } from "react";
import axios from "axios";
import { loadBlockchainData } from "../../Web3helpers.js";
import { useNavigate } from "react-router-dom";
   




const Carousel = () => {
  const slideRef = useRef(null);

  const nextSlide = () => {
    const items = slideRef.current.querySelectorAll(".item");
    slideRef.current.appendChild(items[0]);
  };

  const prevSlide = () => {
    const items = slideRef.current.querySelectorAll(".item");
    slideRef.current.prepend(items[items.length - 1]);
  };



//commune mongo et block

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");


//block only

  const navigate = useNavigate();
  const [contract, setContract] = useState(null);
  const [account, setAccount] = useState(null); // Ajouter le state pour stocker l'adresse du compte



//block only


  const login = async (event) => {
    event.preventDefault(); // Empêche la soumission du formulaire par défaut

    if (!email || !password ) {
      alert("Please fill all details");
      return;
    }

    try {
      const role = await contract.methods.VerifyRole(email, password).call({ from: account });
      console.log(role);
      if (role === "admin") {
        localStorage.setItem("email", email);
        navigate("/Admin");
      } else if (role === "doctor") {
        localStorage.setItem("email", email);
        navigate("/Doctors");
      } else if (role === "assistant") {
        localStorage.setItem("email", email);
        navigate("/assistants");
      } else {
        alert("Invalid email or password");
      }
    } catch (error) {
      console.error(error.message);
      alert("An error occurred. Please try again.");
    }
  };




//block only

  useEffect(() => {
    const fetchData = async () => {
      const { contract, account } = await loadBlockchainData();
      setContract(contract);
      setAccount(account); // Mettre à jour le state avec l'adresse du compte
    };
    fetchData();
  }, []);
 


  //mongo

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:5000/signin", {
        email,
        password,
      });
      const { user } = response.data;

      console.log(response.data);
      localStorage.setItem('user', JSON.stringify(user));

      // Redirigez l'utilisateur vers la page des patients si la connexion réussit
      window.location.href = "/patients";
    } catch (error) {
      console.error("Erreur lors de la connexion:", error.response.data.error);
      setError(error.response.data.error);
    }
  };





  return (
    <div className="pageLOG">
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
        integrity="sha512-iecdLmaskl7CVkqkXNQ/ZH/XLlvWZOJyj7Yy7tcenmpD1ypASozpmT/E0iPtmFIB46ZmdtAc9eNBvH0H/ZpiBw=="
        crossorigin="anonymous"
        referrerpolicy="no-referrer"
      />
      <div className="containerLOG">
        <div className="slide" ref={slideRef}>
          <div
            className="item"
            style={{
            backgroundImage: `url(${require("../../component/pic/img2.png")})`,
            }}
          >
            <div className="contentLOG">
                    <div className="name">
                      cher(e) membre MOM-clinique ,Bienvenue!
                    </div>
             
              <form className="formm" onSubmit={login}>
                    <div className="input">
                      <span>Email</span>
                      <input
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        type="text"
                        />                
                      </div>
                      <div className="input">
                        <span>Mot de passe</span>
                        <input
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                          type="password"
                        />                
                      </div>
                      <button type="submit">Se connecter</button>
               </form>{" "}
            </div>
          </div>



          <div
            className="item"
            style={{
           backgroundImage: `url(${require("../../component/pic/img1.png")})`,
            }}
            >

            <div className="contentLOG">
              <div className="name">Cher(e) patient(e), bienvenue ! </div>
           
              <form  className="formm" onSubmit={handleSubmit}>
                <div className="input">
                  <span>E-mail:</span>
                  <input
            type="text"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />                </div>
                <div className="input">
                  <span>Mot de passe</span>
                  <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />           
               </div>
                   <button type="submit">Se connecter</button>
              </form>      {error && <p style={{ color: "red" }}>{error}</p>}

            </div>
          </div>
          




          <div
            className="item"
            style={{
            backgroundImage: `url(${require("../../component/pic/img2.png")})`,
            }}
          >
            <div className="contentLOG">
              <div className="name">
                cher(e) membre MOM-clinique ,Bienvenue!
              </div>
             
              <form className="formm"  onSubmit={login}>
                <div className="input">
                  <span>Email</span>
                  <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="text"
        />                </div>
                <div className="input">
                  <span>Mot de passe</span>
                  <input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          type="password"
        />                </div>
                <button type="submit">Se connecter</button>
              </form>{" "}
            </div>
          </div> 


      <div
            className="item"
            style={{
              backgroundImage: `url(${require("../../component/pic/img1.png")})`,
            }}
            >

            <div className="contentLOG">
              <div className="name">Cher(e) patient(e), bienvenue ! </div>
           
              <form className="formm" onSubmit={handleSubmit}>
                <div className="input">
                  <span>E-mail:</span>
                  <input
            type="text"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />                </div>
                <div className="input">
                  <span>Mot de passe</span>
                  <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />           
               </div>
                   <button type="submit">Se connecter</button>
              </form>      {error && <p style={{ color: "red" }}>{error}</p>}

            </div>
          </div>
          







        </div>




        <div className="buttonLOG">
          <button className="prev" onClick={prevSlide}>
            <i className="fa-solid fa-arrow-left"></i>
          </button>
          <button className="next" onClick={nextSlide}>
            <i className="fa-solid fa-arrow-right"></i>
          </button>
        </div>


      </div>



    </div>
  );
};

export default Carousel;
