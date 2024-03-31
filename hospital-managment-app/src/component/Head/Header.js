import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom"; // Import Link
import logo from "../pic/logo.png";
import "./header.css";

const Header = () => {
  const [mobile, setMobile] = useState(false);
  const headerRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (headerRef.current) {
        const header = headerRef.current;
        header.classList.toggle("active", window.scrollY > 100);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header ref={headerRef} className="header">
      <div className="container d_flex">
        <div className="logo">
          {/* Replace anchor tag with Link */}
          <Link to="/" className="logo-link">
            <img src={logo} alt="Logo" />
          </Link>
        </div>

        <div className="navlink">
          <ul className={mobile ? "nav-links-mobile" : "link f_flex uppercase"} onClick={() => setMobile(false)}>
        
            <li>
              <a href="#home">home</a>
            </li>
            <li>
              <a href="#About">About</a>
            </li>
            <li>
              <a href="#Services">Services</a>
            </li>
            <li>
              <a href="#Doctors">Doctors</a>
            </li>
            <li>
              <a href="#Blocs">Blocs</a>
            </li>
            <li>
              <a href="#location">location</a>
            </li>
            <li>
              <a href="#Headv">Headv</a>
            </li>
            <li>
              <Link to="/signIn" className="home-btn">
                Log in
              </Link>
            </li>
          </ul>

          <button className="toggle" onClick={() => setMobile(!mobile)}>
            {mobile ? <i className="fas fa-times close home-btn"></i> : <i className="fas fa-bars open"></i>}
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
