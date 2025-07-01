// frontend/src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';

import Home from './pages/Home';
import About from './pages/About';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';
import Blog from './pages/Blog';

function App() {
  return (
    <Router>
      <div className="container">
        <nav>
          <ul className="nav">
            <li><Link to="/">Beranda</Link></li>
            <li><Link to="/about">Tentang</Link></li>
            <li><Link to="/portfolio">Portofolio</Link></li>
            <li><Link to="/contact">Kontak</Link></li>
            <li><Link to="/blog">Blog</Link></li>
          </ul>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/blog" element={<Blog />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
