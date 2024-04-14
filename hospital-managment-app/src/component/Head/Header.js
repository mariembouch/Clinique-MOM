import React, { useState, useEffect, useRef } from "react";
import { Link ,useLocation} from "react-router-dom"; // Import Link
import logo from "../pic/logo.png";
import "./header.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';



const Header = () => {
  const [mobile, setMobile] = useState(false);
  const headerRef = useRef(null);
  const location = useLocation();


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
  const path = location.pathname;


  if (path === '/') {
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
              <Link to="/SignIn" className="home-btn">
                Log in
              </Link>
            </li>
          </ul>


         
        </div>
      </div>
    </header>
  );
}
 else if (path === '/SignIn') {
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
              <Link to="/" >
                Home
              </Link>
            </li>
            <li>
              <Link to="/SignIn" className="home-btn">
                Log in
              </Link>
            </li>

          </ul>

         
         
        </div>
      </div>
    </header>
  );
}else if (path === '/Admin' ) {


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
            <FontAwesomeIcon icon={faSearch} className="search-icon" />

            <input type="text" placeholder="Search" className="search"/>          


            </li>
            <li>
              <Link to="/SignIn" className="home-btn">
                Log out
              </Link>
            </li>
           
          </ul>


         
        </div>
      </div>
    </header>
  );}

else if (path === '/assistants') {


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
            <input type="text" placeholder="Search" className="search"/>
            <FontAwesomeIcon icon={faSearch} className="search-icon" />

            </li>
            <li>
              <Link to="/SignIn" className="home-btn">
                Log out
              </Link>
            </li>
           
          </ul>


         
        </div>
      </div>
    </header>
  );}

  else if (path === '/Doctors' ) {


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
              <input type="text" placeholder="Search" className="search"/>
              <FontAwesomeIcon icon={faSearch} className="search-icon" />

              </li>
              <li>
                <Link to="/SignIn" className="home-btn">
                  Log out
                </Link>
              </li>
             
            </ul>
  
  
           
          </div>
        </div>
      </header>
    );}

    else if (path === '/patients' ) {


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
                <input type="text" placeholder="Search" className="search"/>
                <FontAwesomeIcon icon={faSearch} className="search-icon" />

                </li>
                <li>
                  <Link to="/SignIn" className="home-btn">
                    Log out
                  </Link>
                </li>
               
              </ul>
    
    
             
            </div>
          </div>
        </header>
      );}
  }




export default Header;



