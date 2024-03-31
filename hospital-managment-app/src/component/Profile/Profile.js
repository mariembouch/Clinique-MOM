import "./Profile.css"
import Admin1 from "./Admin1.png"

const Profile = () => {

  
  
  return (
    <>
      <section className='Contact' id='contact'>
        <div className='container top'>
          <div className='heading text-center'>
            <h3>welcome Admin ! </h3>
          </div>
          <div className='content d_flex'>
            <div className='left'>
              <div className='box box_shodow'>
              <h3>MY Profile  </h3>

                <div className='img'>
                <img src={Admin1} alt='' />    
                </div>
                <div className='details'>
                  <h1>Nevine Acotanza</h1>
                  <p>admin</p>
                  <p>I am available for freelance work. Connect with me via and call in to my account.</p> <br />
                  <p>adresse ghanashe : HDIRGXXKG245JHJBVGVGJHVUH</p>
                  <p>Email: admin@example.com</p> <br />
                  <span>FIND WITH ME</span>
                  <div className='button f_flex'>
                    <button className='btn_shadow'>
                      <i className='fab fa-facebook-f'></i>
                    </button>
                    <button className='btn_shadow'>
                      <i className='fab fa-instagram'></i>
                    </button>
                    <button className='btn_shadow'>
                      <i className='fab fa-twitter'></i>
                    </button>
                  </div>
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