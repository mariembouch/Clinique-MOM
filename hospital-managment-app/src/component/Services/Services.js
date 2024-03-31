import React from "react"
import "./Services.css"
import data from "./Services-Api"
import Card from "./Card"


const Services = () => {
  return (
    <>
<section class="features top" id="Services">
        <div className='container'>
          <div className='heading'>
            <h4>Services</h4>
            <h3>what we provide our clients with </h3>
          </div>

          <div className='content grid'>
            {data.map((val, index) => {
              return <Card key={index} image={val.image} title={val.title} desc={val.desc} />
            })}

          
          </div>
        </div>
      </section>
    </>
  )
}

export default Services