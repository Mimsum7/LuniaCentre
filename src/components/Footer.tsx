import React from 'react';
import { Link } from 'react-router-dom';
import { Heart, ArrowUp, Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    organization: [
      { name: 'About Us', href: '/about' },
      { name: 'Our Mission', href: '/about' },
      { name: 'Programs', href: '/programs' },
      { name: 'Impact Stories', href: '/gallery' }
    ],
    programs: [
      { name: 'Education & Skills', href: '/programs' },
      { name: 'Leadership Training', href: '/programs' },
      { name: 'Entrepreneurship', href: '/programs' },
      { name: 'Community Service', href: '/programs' }
    ],
    support: [
      { name: 'Donate', href: '/contact' },
      { name: 'Volunteer', href: '/contact' },
      { name: 'Partner With Us', href: '/contact' },
      { name: 'Contact', href: '/contact' }
    ]
  };

  const socialMedia = [
    { icon: Facebook, label: 'Facebook', color: 'hover:text-blue-600' },
    { icon: Twitter, label: 'Twitter', color: 'hover:text-blue-400' },
    { icon: Instagram, label: 'Instagram', color: 'hover:text-pink-500' },
    { icon: Linkedin, label: 'LinkedIn', color: 'hover:text-blue-700' }
  ];

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const scrollToSection = (href: string) => {
    // For multi-page navigation, we'll use Link components instead
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-teal-800 text-white">
      {/* Decorative wave at top */}
      <div className="absolute top-0 left-0 right-0 h-16 bg-pink-500/20" 
           style={{ clipPath: 'polygon(0 100%, 100% 0, 100% 100%)' }} />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-8">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Organization Info */}
          <div className="lg:col-span-1">
            <div className="mb-6">
              <h3 className="text-2xl font-bold text-white mb-2">
                Lunia Centre
              </h3>
              <p className="text-gray-300 leading-relaxed">
                Empowering youth through community development, education, and innovative programs 
                that create lasting positive impact across Zimbabwe.
              </p>
            </div>
            
            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center text-gray-300">
                <Mail size={16} className="mr-3 text-pink-400" />
                <span className="text-sm">admin@luniacentreforyouths.co.zw</span>
              </div>
              <div className="flex items-center text-gray-300">
                <Phone size={16} className="mr-3 text-pink-400" />
                <span className="text-sm">+263 78 477 6762</span>
              </div>
              <div className="flex items-center text-gray-300">
                <MapPin size={16} className="mr-3 text-pink-400" />
                <span className="text-sm">Bulawayo, Zimbabwe</span>
              </div>
            </div>
          </div>

          {/* Quick Links - Organization */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-6">Organization</h4>
            <ul className="space-y-3">
              {footerLinks.organization.map((link, index) => (
                <li key={index}>
                  <Link
                    to={link.href}
                    onClick={() => {
                      // Smooth scroll to top when navigating to a new page
                      setTimeout(() => {
                        window.scrollTo({ top: 0, behavior: 'smooth' });
                      }, 50);
                    }}
                    className="text-gray-300 hover:text-pink-400 transition-colors duration-300 text-sm hover:translate-x-1 transform"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links - Programs */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-6">Programs</h4>
            <ul className="space-y-3">
              {footerLinks.programs.map((link, index) => (
                <li key={index}>
                  <Link
                    to={link.href}
                    onClick={() => {
                      // Smooth scroll to top when navigating to a new page
                      setTimeout(() => {
                        window.scrollTo({ top: 0, behavior: 'smooth' });
                      }, 50);
                    }}
                    className="text-gray-300 hover:text-pink-400 transition-colors duration-300 text-sm hover:translate-x-1 transform"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links - Support */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-6">Get Involved</h4>
            <ul className="space-y-3 mb-6">
              {footerLinks.support.map((link, index) => (
                <li key={index}>
                  <Link
                    to={link.href}
                    onClick={() => {
                      // Smooth scroll to top when navigating to a new page
                      setTimeout(() => {
                        window.scrollTo({ top: 0, behavior: 'smooth' });
                      }, 50);
                    }}
                    className="text-gray-300 hover:text-pink-400 transition-colors duration-300 text-sm hover:translate-x-1 transform"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>

            {/* Newsletter Signup */}
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
              <h5 className="text-sm font-semibold text-white mb-2">Stay Updated</h5>
              <p className="text-xs text-gray-300 mb-3">Get the latest news about our programs</p>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Enter email"
                  className="flex-1 px-3 py-2 text-sm bg-white/20 border border-white/30 rounded-l-lg text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-pink-400"
                />
                <button className="bg-pink-500 hover:bg-pink-600 px-3 py-2 rounded-r-lg transition-colors duration-300">
                  <Mail size={16} />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Social Media & Bottom Section */}
        <div className="border-t border-white/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            {/* Social Media */}
            <div className="flex items-center space-x-6 mb-6 md:mb-0">
              <span className="text-gray-300 text-sm">Follow us:</span>
              {socialMedia.map((social, index) => {
                const Icon = social.icon;
                return (
                  <button
                    key={index}
                    className={`text-gray-400 ${social.color} transition-all duration-300 hover:scale-110 transform`}
                    aria-label={`Follow us on ${social.label}`}
                  >
                    <Icon size={20} />
                  </button>
                );
              })}
            </div>

            {/* Back to Top */}
            <button
              onClick={scrollToTop}
              className="flex items-center text-gray-300 hover:text-pink-400 transition-all duration-300 hover:scale-105 transform"
              aria-label="Scroll to top"
            >
              <span className="text-sm mr-2">Back to top</span>
              <ArrowUp size={16} />
            </button>
          </div>

          {/* Copyright */}
          <div className="mt-8 pt-6 border-t border-white/10 text-center">
            <p className="text-gray-400 text-sm flex items-center justify-center">
              © {currentYear} Lunia Centre for Youths. Made with{' '}
              <Heart size={16} className="text-pink-400 mx-1" />{' '}
              for youth empowerment.
            </p>
          </div>
        </div>
      </div>

      {/* Background decorative elements */}
      <div className="absolute bottom-0 left-0 w-32 h-32 bg-pink-500/10 rounded-full blur-xl" />
      <div className="absolute top-1/3 right-0 w-48 h-48 bg-yellow-400/5 rounded-full blur-xl" />
    </footer>
  );
};

export default Footer;