import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import Home from './pages/Home';
import About from './pages/About';
import Programs from './pages/Programs';
import Gallery from './pages/Gallery';
import Contact from './pages/Contact';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white">
        {/* Skip to main content for accessibility */}
        <a 
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-pink-500 text-white px-4 py-2 rounded-md z-50"
          tabIndex={0}
        >
          Skip to main content
        </a>
        
        <Header />
        
        <main id="main-content" className="relative">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/programs" element={<Programs />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        
        <Footer />
        <ScrollToTop />
      </div>
    </Router>
  );
}

export default App;