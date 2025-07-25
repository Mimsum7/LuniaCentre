import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Heart } from 'lucide-react';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  // Handle scroll effect for header background
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Programs', path: '/programs' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Contact', path: '/contact' },
  ];

  const handleNavClick = () => {
    setIsMenuOpen(false);
  };

  const isActivePage = (path: string) => {
    return location.pathname === path;
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-md shadow-lg' 
          : 'bg-transparent'
      }`}
      role="banner"
    >
      <nav 
        className="container mx-auto px-4 sm:px-6 lg:px-8"
        role="navigation"
        aria-label="Main navigation"
      >
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo and Text */}
          <div className="flex-shrink-0">
            <Link
              to="/"
              onClick={handleNavClick}
              className="flex items-center gap-3 transition-all duration-300 hover:scale-105 transform"
              aria-label="Lunia Centre for Youths - Go to home"
            >
              {/* Logo Image */}
              <div className="flex-shrink-0">
                <img
                  src="/Llogo.png"
                  alt="Lunia Centre for Youths Logo"
                  className="h-10 md:h-12 w-auto object-contain"
                />
              </div>
              
              {/* Text - Two Lines */}
              <div className="flex flex-col leading-tight">
                <span className={`text-lg md:text-xl font-bold transition-colors duration-300 ${
                  isScrolled ? 'text-teal-700' : 'text-white'
                }`}>
                  Lunia Centre
                </span>
                <span className={`text-sm md:text-base font-medium transition-colors duration-300 ${
                  isScrolled ? 'text-pink-500' : 'text-pink-300'
                }`}>
                  for Youths
                </span>
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => {
                    handleNavClick();
                    // Smooth scroll to top when navigating to a new page
                    setTimeout(() => {
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }, 50);
                  }}
                  className={`px-3 py-2 text-sm font-medium transition-all duration-300 hover:text-pink-500 hover:scale-105 ${
                    isActivePage(item.path)
                      ? 'text-pink-500 border-b-2 border-pink-500'
                      : isScrolled 
                        ? 'text-gray-700' 
                        : 'text-white'
                  }`}
                  aria-label={`Navigate to ${item.name} page`}
                >
                  {item.name}
                </Link>
              ))}
              
              {/* Donate Button */}
              <Link
                to="/contact"
                onClick={() => {
                  handleNavClick();
                  // Smooth scroll to top when navigating to a new page
                  setTimeout(() => {
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }, 50);
                }}
                className="bg-pink-500 hover:bg-pink-600 text-white px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg flex items-center gap-2"
                aria-label="Donate to support our cause"
              >
                <Heart size={16} />
                DONATE
              </Link>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`p-2 rounded-md hover:bg-pink-500/20 transition-colors duration-300 ${
                isScrolled ? 'text-gray-700' : 'text-white'
              }`}
              aria-expanded={isMenuOpen}
              aria-label="Toggle mobile menu"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div 
          className={`md:hidden transition-all duration-300 overflow-hidden ${
            isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
          }`}
          role="menu"
          aria-hidden={!isMenuOpen}
        >
          <div className="px-2 pt-2 pb-3 space-y-1 bg-white/95 backdrop-blur-md rounded-lg mt-2 shadow-lg">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => {
                  handleNavClick();
                  // Smooth scroll to top when navigating to a new page
                  setTimeout(() => {
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }, 50);
                }}
                className={`block w-full text-left px-3 py-2 text-base font-medium rounded-md transition-all duration-300 ${
                  isActivePage(item.path)
                    ? 'text-pink-500 bg-pink-50'
                    : 'text-gray-700 hover:text-pink-500 hover:bg-pink-50'
                }`}
                role="menuitem"
                aria-label={`Navigate to ${item.name} page`}
              >
                {item.name}
              </Link>
            ))}
            <Link
              to="/contact"
              onClick={() => {
                handleNavClick();
                // Smooth scroll to top when navigating to a new page
                setTimeout(() => {
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }, 50);
              }}
              className="block w-full text-left bg-pink-500 hover:bg-pink-600 text-white px-3 py-2 rounded-md text-base font-medium transition-all duration-300 flex items-center gap-2"
              role="menuitem"
              aria-label="Donate to support our cause"
            >
              <Heart size={16} />
              DONATE
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;