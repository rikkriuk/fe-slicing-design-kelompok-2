import React from 'react';
import './NavbarStyles.css';
import { Link } from 'react-router-dom';
import imagePath from '../../assets/logo.png';

const Navbar = () => {
   return (
      <header className='container-fluid py-4 shadow-sm'>
         <div className='container d-flex justify-content-between'>
            <div className='d-flex align-items-center gap-3'>
               <img src={imagePath} alt='logo-image' height={35} />
               <h1 className='fs-3 fw-bold m-0'>Logoipsum</h1>
            </div>

            <nav className='d-flex align-items-center gap-5'>
               <ul className='d-flex align-items-center gap-4 list-unstyled m-0'>
                  <li><Link className='text-decoration-none text-color fw-bold' to={'/about'}>About</Link></li>
                  <li><Link className='text-decoration-none text-color fw-bold' to={'/our-services'}>Our Services</Link></li>
                  <li><Link className='text-decoration-none text-color fw-bold' to={'/portfolio'}>Portfolio</Link></li>
                  <li><Link className='text-decoration-none text-color fw-bold' to={'/blog'}>Blog</Link></li>
                  <li><Link className='text-decoration-none text-color fw-bold' to={'/contact'}>Contact</Link></li>
               </ul>

               <button className='btn-custom'>Get In Touch</button>
            </nav>
         </div>
      </header>
    )
}

export default Navbar;