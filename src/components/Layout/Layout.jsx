import React from 'react';
import Navbar from '../Navbar/NavbarComponent';
import Footer from '../Footer/FooterComponent';

const Layout = ({ children }) => {
   return (
      <>
         <Navbar />
         <main>
            {children}
         </main>
         <Footer />
      </>
   )
}

export default Layout;