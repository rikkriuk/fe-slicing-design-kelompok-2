import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomeContainer from './containers/HomeContainer';
import AboutContainer from './containers/AboutContainer';
import ServicesContainer from './containers/ServicesContainer';
import PortfolioContainer from './containers/PortfolioContainer';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomeContainer />} />
        <Route path="/about" element={<AboutContainer />} />
        <Route path="/services" element={<ServicesContainer />} />
        <Route path="/portfolio" element={<PortfolioContainer />} />
      </Routes>
    </Router>
  );
}

export default App;