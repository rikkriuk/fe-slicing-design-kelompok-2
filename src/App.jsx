import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomeContainer from "./containers/HomeContainer";
import AboutContainer from "./containers/AboutContainer";
import ServicesContainer from "./containers/ServicesContainer";
import PortfolioContainer from "./containers/PortfolioContainer";
import ContactContainer from "./containers/ContactContainer";
import LayoutComponent from "./components/Layout/LayoutComponent";
import BlogsContainer from "./containers/BlogsContainer";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

function App() {
  return (
    <Router>
      <LayoutComponent>
        <Routes>
          <Route path="/" element={<HomeContainer />} />
          <Route path="/about" element={<AboutContainer />} />
          <Route path="/our-services" element={<ServicesContainer />} />
          <Route path="/blog" element={<BlogsContainer />} />
          <Route path="/portfolio" element={<PortfolioContainer />} />
          <Route path="/contact" element={<ContactContainer />} />
        </Routes>
      </LayoutComponent>
    </Router>
  );
}

export default App;
