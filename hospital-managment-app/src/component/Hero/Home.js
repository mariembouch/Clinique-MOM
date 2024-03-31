import React from "react"
import "./home.css"
import hero from "../pic/logo1.png"
import skill1 from "../pic/hospital-bed.png"
import skill2 from "../pic/medical-report.png"
import skill3 from "../pic/svg.png"
import { Typewriter } from "react-simple-typewriter"

const Home = () => {
  return (
    <>
      <section className='hero' id='home'>
        <div className='container f_flex top'>
          <div className='left top'>
            <h3>WELCOME TO MOM HOSPITAL</h3>
            <h1>
            Your Healthcare: <span>Our Priority.</span>
            </h1>
            <h2>
            Trust:
              <span>
                <Typewriter words={[" Your Security,", " Your Data."]} loop cursor cursorStyle='|' typeSpeed={70} deleteSpeed={50} delaySpeed={1000} />
              </span>
            </h2>

            <p>Discover our hospital's modern approach to healthcare. Explore our services, facilities, and commitment to excellence. Experience convenience and quality care, all at your fingertips. Welcome to a new era in healthcare accessibility.</p>

            <div className='hero_btn d_flex'>
              <div className='col_1'>
                <h4>FIND WITH US</h4>
                <div className='button'>
                  <button className='btn_shadow'>
                    <i class='fab fa-facebook-f'></i>
                  </button>
                  <button className='btn_shadow'>
                    <i class='fab fa-instagram'></i>
                  </button>
                  <button className='btn_shadow'>
                    <i class='fab fa-linkedin-in'></i>
                  </button>
                </div>
              </div>
              <div className='col_1'>
                <h4>BEST SERVICES ON</h4>
                <button className='btn_shadow'>
                  <img src={skill1} alt='' />
                </button>
                <button className='btn_shadow'>
                  <img src={skill2} alt='' />
                </button>
                <button className='btn_shadow'>
                  <img src={skill3} alt='' />
                </button>
              </div>
            </div>
          </div>
          <div className='right'>
            <div className='right_img'>
              <img src={hero} alt='' />
            </div>
          </div>
        </div>


      </section>

    </>
  )
}

export default Home