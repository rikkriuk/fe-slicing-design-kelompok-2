import React from 'react';
import './HeroStyles.css';
import HeroImage from '../../assets/hero-image.png'

const Hero = () => {
   return (
      <section className='container my-5'>
         <div className='container d-flex align-items-center justify-content-between'>
            <div>
               <h3 className='text-main-color'>\ We Are Here \</h3>
               <h2 className='h2-custom my-4'>Better Insights For <br /> Business Growth</h2>
               <button className='btn-view-more'>View More</button>
            </div>

            <div>
               <img src={HeroImage} alt="hero-image" />
            </div>

         </div>
      </section>
   )
}

export default Hero;