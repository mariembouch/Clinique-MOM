import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../../component/Head/Header";

import "./Login.css";

const Login = () => {
  const [data, setData] = useState({
    email: "",
    pwd: "",
  });

  const InputEvent = (event) => {
    const { name, value } = event.target;
    setData((preVal) => ({
      ...preVal,
      [name]: value,
    }));
  };

  const navigate = useNavigate();
  const [selectedRole, setSelectedRole] = useState("");

  const handleCheckboxChange = (event) => {
    setSelectedRole(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    switch (selectedRole) {
      case "doctors":
        navigate("/doctors");
        break;
      case "patients":
        navigate("/patients");
        break;
      case "assistants":
        navigate("/assistants");
        break;
      case "admin":
        navigate("/admin");
        break;
      case "Ambulance":
        navigate("/Ambulance");
        break;
      default:
        break;
    }
  };

  return (
    <>
      <Header />
      <section className="center">
      <div className="right box_shodow">
        <form onSubmit={handleSubmit}>
          <div className="input row">
            <span>Email </span>
            <input
              type="text"
              name="email"
              value={data.email}
              onChange={InputEvent}
            />
          </div>
          <div className="input row">
            <span>Mot de passe  </span>
            <input
              type="password"
              name="pwd"
              value={data.pwd}
              onChange={InputEvent}
            />
          </div>
          <div className="intro">
            <h3>Dans notre clinique, chaque individu joue un rôle bien défini, mais tous convergent vers un objectif commun : </h3>
          <h3>assurer la santé de nos patients !  </h3>
          <h2>merci de bien choisir votre role  </h2>

          </div>
          <div className="login-container">
            <form onSubmit={handleSubmit}>
            <label>
                <input
                  type="checkbox"
                  value="patients"
                  checked={selectedRole === "patients"}
                  onChange={handleCheckboxChange}
                />
                Patients
              </label>
              <label>
                <input
                  type="checkbox"
                  value="Ambulance"
                  checked={selectedRole === "Ambulance"}
                  onChange={handleCheckboxChange}
                />
             Urgence 
              </label>
              <label>
                <input
                  type="checkbox"
                  value="doctors"
                  checked={selectedRole === "doctors"}
                  onChange={handleCheckboxChange}
                />
                Doctors
              </label>
             
              <label>
                <input
                  type="checkbox"
                  value="assistants"
                  checked={selectedRole === "assistants"}
                  onChange={handleCheckboxChange}
                />
                Assistants
              </label>
              <label>
                <input
                  type="checkbox"
                  value="admin"
                  checked={selectedRole === "admin"}
                  onChange={handleCheckboxChange}
                />
                Administration
              </label>
            
             
            </form>
          </div>
          <button className="btn_shadow" type="submit">
            SUBMIT <i className="fa fa-long-arrow-right"></i>
          </button>
        </form>
      </div>
      </section>
    </>
  );
};

export default Login;
