import React, { useState, useEffect } from "react";
import "./NavbarStyles.css";
import { Link } from "react-router-dom";
import LogoImage from "../../assets/logo.png";

const NavbarComponent = () => {
   const [isNavbarOpen, setIsNavbarOpen] = useState(false);
   const [isSmallScreen, setIsSmallScreen] = useState(false);

   const toggleNavbar = () => {
      if (isSmallScreen) {
         setIsNavbarOpen(!isNavbarOpen);
      }
   };

   useEffect(() => {
      const handleResize = () => {
         setIsSmallScreen(window.innerWidth < 992);
      };

      handleResize();
      window.addEventListener("resize", handleResize);

      return () => {
         window.removeEventListener("resize", handleResize);
      };
   }, []);

   return (
      <header className="container-fluid py-4 shadow-sm">
         <div className="container d-flex justify-content-between">
            <div className="d-flex align-items-center gap-3">
               <img src={LogoImage} alt="logo-image" height={35} />
               <Link to={"/"} className="fs-3 fw-bold text-decoration-none text-second-color m-0">Logoipsum</Link>
            </div>

            <button onClick={toggleNavbar} className="btn d-lg-none fs-2">
               <i className="bi bi-list"></i>
            </button>

            {isNavbarOpen && <div className="blur-overlay" onClick={toggleNavbar}></div>}

            <nav className={`d-flex align-items-center gap-5 nav-small-screen rounded-0 ${isNavbarOpen ? "show" : ""}`}>
               <div className="position-absolute d-lg-none top-0 d-flex justify-content-end w-100 mt-3 me-5">
                  <button onClick={toggleNavbar} className="btn text-white fs-2">
                     <i className="bi bi-x-lg"></i>
                  </button>
               </div>

               <ul className="d-flex align-items-center gap-4 list-unstyled m-0">
                  <li><Link onClick={toggleNavbar} className="text-decoration-none text-second-color fw-semibold" to={"/about"}>About</Link></li>
                  <li><Link onClick={toggleNavbar} className="text-decoration-none text-second-color fw-semibold" to={"/our-services"}>Our Services</Link></li>
                  <li><Link onClick={toggleNavbar} className="text-decoration-none text-second-color fw-semibold" to={"/portfolio"}>Portfolio</Link></li>
                  <li><Link onClick={toggleNavbar} className="text-decoration-none text-second-color fw-semibold" to={"/blog"}>Blog</Link></li>
                  <li><Link onClick={toggleNavbar} className="text-decoration-none text-second-color fw-semibold" to={"/contact"}>Contact</Link></li>
               </ul>

               <Link onClick={toggleNavbar} to={"/contact"} className="btn-custom text-decoration-none">Get In Touch</Link>
            </nav>
         </div>
      </header>
   );
};

export default NavbarComponent;
