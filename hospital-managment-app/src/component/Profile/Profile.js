import "./Profile.css"
import Admin1 from "./Admin1.png"
import AA from "./AA.png"
import DD from "./DD.png"
import PP from "./PP.jpeg"


import { useLocation} from "react-router-dom"; // Import Link


const Profile = () => {

  const location = useLocation();
  const path = location.pathname;
  if (path === '/Admin' ) { 
  return (
    <>

      <section className='Contact' id='contact'>
        <div className='container top'>
        
          <div className='content d_flex'>
            <div className='left'>
              <div className='box box_shodow'>

                <div className='img'>
                <img src={Admin1} alt='' />    
                </div>
                <div className='details'>
                  <h1>admin</h1>
                  <p>Your email: {localStorage.getItem('email')}</p> <br />
                
                  
                  <a type="submit" href="#addas">Add Assistant</a>
                  <a type="submit" href="#adddo">Add Doctor</a>
                  <a type="submit" href="#addpa">Validate Patient</a>
                   <a type="submit" href="#addadr">Add Adresses</a>
                   <a type="submit" href="#addam">Ambulance</a>

                  <br />
                                    <br />

                  
                </div>
              </div>
            </div>
  
          </div>
        </div>
      </section>
    </>
  )
}else if (path === '/assistants') {
  return (
    <>

      <section className='Contact' id='contact'>
        <div className='container top'>
        
          <div className='content d_flex'>
            <div className='left'>
              <div className='box box_shodow'>

                <div className='img'>
                <img src={AA} alt='' />    
                </div>
                <div className='details'>
                  <h1>assistant</h1>
                  <p>Your email: {localStorage.getItem('email')}</p> <br />
                
                  <a type="submit" href="#addap">Add Patient</a>
                  <a type="submit" href="#seepa">see  Patient</a>
                 
                  
                  <br/>
<br/>
<br/>
<br/>
                  <br />
                                    <br />

                  
                </div>
              </div>
            </div>
  
          </div>
        </div>
      </section>
    </>
  )
}  else if (path === '/Doctors' ) {
  return (
    <>

      <section className='Contact' id='contact'>
        <div className='container top'>
        
          <div className='content d_flex'>
            <div className='left'>
              <div className='box box_shodow'>

                <div className='img'>
                <img src={DD} alt='' />    
                </div>
                <div className='details'>
                  <h1>doctor</h1>
                  <p>Your email: {localStorage.getItem('email')}</p> <br />
                
                  <a type="submit" href="#addI">Add IRM</a>
                  <a type="submit" href="#addS">Add SCaner</a>
                  <a type="submit" href="#cp">Consult Patient</a>
                 
                  
                  
                  <br />
                                    <br />

                  
                </div>
              </div>
            </div>
  
          </div>
        </div>
      </section>
    </>
  )
}    else if (path === '/patients' ) {
  return (
    <>

      <section className='Contact' id='contact'>
        <div className='container top'>
        
          <div className='content d_flex'>
            <div className='left'>
              <div className='box box_shodow'>

                <div className='img'>
                <img src={PP} alt='' />    
                </div>
                <div className='details'>
                  <h1>Pattient(e)</h1>
                  <p>Your email: {localStorage.getItem('email')}</p> <br />
                
                  <a type="submit" href="#addI">IRM </a>
                  <a type="submit" href="#addM">medical information</a>
                  <a type="submit" href="#addS">Scanner</a>
                   <a type="submit" href="#addMF">medical folder</a>
                  
               
                  <br />
                                    <br />

                  
                </div>
              </div>
            </div>
  
          </div>
        </div>
      </section>
    </>
  )
}  
}


export default Profile