import React from 'react'
import Link from 'next/link';

import { urlFor } from '../lib/client';

const HeroBanner = ({ heroBanner }) => {
  return (
    <>

      <section className="home" id="home">

        <div className="image">
          <img src="image/home-img.svg" alt="" />
        </div>

        <div className="content">
          <h3>stay safe, stay healthy And we are at your service</h3>
          <p>Here you can buy some important medicines and vitamins at reasonable prices and excellent service!</p>
          <a href="#" className="btn2"> contact us </a>
        </div>

      </section>

      <section className="icons-container">

        <div className="icons">
          <i className="fas fa-user-md"></i>
          <h3>140+</h3>
          <p>doctors at work</p>
        </div>

        <div className="icons">
          <i className="fas fa-users"></i>
          <h3>1040+</h3>
          <p>satisfied patients</p>
        </div>

        <div className="icons">
          <i className="fas fa-procedures"></i>
          <h3>500+</h3>
          <p>bed facility</p>
        </div>

        <div className="icons">
          <i className="fas fa-hospital"></i>
          <h3>80+</h3>
          <p>available hospitals</p>
        </div>

      </section>
    </>



  )
}

export default HeroBanner