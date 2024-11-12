import React from 'react'
import LogoImage from '../../assets/logo.png';
import './FooterStyles.css';
import PythonLogo from '../../assets/python-logo.png';
import ReactLogo from '../../assets/react-logo.png';
import WordpressLogo from '../../assets/wordpress-logo.png';

const Footer = () => {
   return (
      <footer className='container-fluid bg-color d-flex align-items-center justify-content-center'>
         <div className='container row text-white py-5'>
            <section className='col-3'>
               <div className='d-flex align-items-center gap-3'>
                  <img src={LogoImage} alt='logo-image' height={35} />
                  <h1 className='fs-3 fw-bold m-0'>Logoipsum</h1>
               </div>

               <div className='mt-4'>
                  <p>It is a long established 
                  fact that a reader will be distracted by the readable content of a page when looking at</p>
               </div>

               <div className='d-flex gap-3 mt-4'>
                  <a className='btn-social-media'><i className="bi bi-linkedin"></i></a>
                  <a className='btn-social-media'><i className="bi bi-instagram"></i></a>
                  <a className='btn-social-media'><i className="bi bi-facebook"></i></a>
                  <a className='btn-social-media'><i className="bi bi-twitter"></i></a>
               </div>
            </section>

            <section className='col-3'>
               <div className='line-custom'>
                  <h2 className='fs-3 fw-bold m-0'>Services</h2>
               </div>

               <div className='mt-4'>
                  <ul className='list-unstyled d-flex flex-column gap-3'>
                     <li>
                        <a className='text-decoration-none text-white' href=''>Web Design/Development</a>
                     </li>
                     <li>
                        <a className='text-decoration-none text-white' href=''>App Development</a>
                     </li>
                     <li>
                        <a className='text-decoration-none text-white' href=''>UI/UX Design</a>
                     </li>
                     <li>
                        <a className='text-decoration-none text-white' href=''>HubSpot Integration</a>
                     </li>
                     <li>
                        <a className='text-decoration-none text-white' href=''>Email Marketing</a>
                     </li>
                     <li>
                        <a className='text-decoration-none text-white' href=''>Website Migration</a>
                     </li>
                  </ul>
               </div>
            </section>

            <section className='col-3'>
               <div className='line-custom'>
                  <h2 className='fs-3 fw-bold m-0'>Career</h2>
               </div>

               <div className='mt-4 d-flex flex-column gap-3'>
                  <div className='d-flex gap-3'>
                     <img className='img-logo' src={ReactLogo} alt='' />
                     <div>
                        <h3 className='fs-4 text-main-color'>ReactJs Dev.</h3>
                        <p>1-5 Years of Exp.</p>
                     </div>
                  </div>

                  <div className='d-flex gap-3'>
                     <img className='img-logo' src={WordpressLogo} alt='' />
                     <div>
                        <h3 className='fs-4 text-main-color'>Wordpress Dev.</h3>
                        <p>1-5 Years of Exp.</p>
                     </div>
                  </div>

                  <div className='d-flex gap-3'>
                     <img className='img-logo' src={PythonLogo} alt='' />
                     <div>
                        <h3 className='fs-4 text-main-color'>Python Developer</h3>
                        <p>1-5 Years of Exp.</p>
                     </div>
                  </div>
               </div>
            </section>

            <section className='col-3'>
               <div className='line-custom'>
                  <h3>Subscribe Us</h3>
               </div>

               <div className='mt-4'>
                  <p>It is a long established 
                  fact that a reader will be distracted by the readable </p>
               </div>

               <div className='d-flex flex flex-column align-items-end gap-3'>
                  <input className='w-100 input-custom' type='text' placeholder='Email' />
                  <button className='btn-submit-custom'>Submit</button>
               </div>
            </section>
         </div>
      </footer>
   )
}

export default Footer;