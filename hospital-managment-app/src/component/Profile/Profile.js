import "./Profile.css"
import Admin1 from "./Admin1.png"


const Profile = () => {

  
  
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
                
                  
                  <button type="submit">Se connecter</button>
                  
                  <button type="submit">Add Assistant</button>
                  <button type="submit">Add Doctor</button>
                  <button type="submit">Validate Patient</button>
                  <button type="submit">Add Adresses</button>
                  <button type="submit">Logout</button>
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

export default Profile