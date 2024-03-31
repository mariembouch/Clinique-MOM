import React from "react"
import "./Doctors.css"
import Card from "./Card"
import Portfolio_data from "./Doctors_data"

const About = () => {
  return (
    <>
      <section className='Portfolio top' id='Doctors'>
        <div className='container'>
          <div className='heading text-center '>
            <h4>kafe2et machallah </h4>
            <h3>DOCTORS </h3>
          </div>

          <div className='content grid'>
            {Portfolio_data.map((value, index) => {
              return <Card key={index} image={value.image} category={value.category} totalLike={value.totalLike} title={value.title} />
            })}

          
          </div>
        </div>
      </section>
    </>
  )
}

export default About