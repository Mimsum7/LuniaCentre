import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowDown, ArrowRight, Heart, Eye, Award } from 'lucide-react';

const Home: React.FC = () => {
  const [scrollY, setScrollY] = useState(0);

  // Handle scroll for parallax effects
  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Mission grid items for home page preview
  const missionItems = [
    {
      icon: Eye,
      title: 'Our Vision',
      content: 'A world where every young person has the opportunity to lead meaningful change in their communities.',
      color: 'border-teal-700',
      bgColor: 'bg-teal-50',
      iconColor: 'text-teal-700'
    },
    {
      icon: Heart,
      title: 'Our Mission',
      content: 'To design and implement youthful projects that empower young people and create sustainable community impact.',
      color: 'border-pink-500',
      bgColor: 'bg-pink-50',
      iconColor: 'text-pink-500'
    },
    {
      icon: Award,
      title: 'Our Values',
      content: 'Excellence, integrity, community collaboration, innovation, and sustainable impact guide every decision we make.',
      color: 'border-yellow-500',
      bgColor: 'bg-yellow-50',
      iconColor: 'text-yellow-600'
    }
  ];

  return (
    <>
      {/* Hero Section */}
      <section 
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
        role="banner"
        aria-label="Hero section"
      >
        {/* Background with parallax effect - solid teal color */}
        <div 
          className="absolute inset-0 bg-teal-800"
          style={{
            transform: `translateY(${scrollY * 0.5}px)`,
          }}
        />
        
        {/* Geometric overlay with clip-path for asymmetric design */}
        <div 
          className="absolute inset-0 bg-pink-500/20"
          style={{
            clipPath: 'polygon(0 0, 100% 0, 85% 100%, 0% 85%)',
            transform: `translateY(${scrollY * 0.3}px)`,
          }}
        />
        
        {/* Floating elements for visual interest */}
        {/* Enhanced floating elements with dynamic animations */}
       <div className="absolute top-[10%] left-[5%] w-32 h-32 bg-yellow-400/30 rounded-full animate-float-gentle animate-pulse-glow"
     style={{ transform: `translate(${scrollY * 0.2}px, ${scrollY * 0.1}px)` }} />
        <div className="absolute bottom-[15%] right-[10%] w-48 h-48 bg-pink-500/25 rounded-full animate-float-reverse animate-drift"
     style={{ transform: `translate(${-scrollY * 0.15}px, ${scrollY * 0.25}px)` }} />

<div className="absolute top-[40%] left-[2%] w-24 h-24 bg-teal-400/20 rounded-full animate-pulse-glow animate-rotate-slow"
     style={{ transform: `translate(${scrollY * 0.3}px, ${-scrollY * 0.2}px)` }} />

<div className="absolute top-[70%] right-[35%] w-36 h-36 bg-purple-400/15 rounded-full animate-float-gentle animate-drift"
     style={{ transform: `translate(${-scrollY * 0.25}px, ${scrollY * 0.15}px)`, animationDelay: '2s' }} />

<div className="absolute top-[5%] right-[20%] w-20 h-20 bg-green-400/25 rounded-full animate-float-reverse animate-pulse-glow"
     style={{ transform: `translate(${scrollY * 0.18}px, ${scrollY * 0.12}px)`, animationDelay: '4s' }} />

<div className="absolute top-[30%] left-[10%] w-28 h-28 bg-orange-400/30 rounded-full animate-orbit-left animate-pulse-glow"
     style={{ transform: `translate(${scrollY * 1.32}px, ${-scrollY * 1.18}px)`, animationDelay: '1s' }} />

<div className="absolute top-[30%] left-[45%] w-40 h-40 bg-indigo-400/25 rounded-full animate-wave-motion animate-float-gentle"
     style={{ transform: `translate(${-scrollY * 0.28}px, ${scrollY * 0.22}px)`, animationDelay: '2s' }} />

<div className="absolute bottom-[10%] left-[15%] w-40 h-40 bg-indigo-400/25 rounded-full animate-wave-motion animate-float-gentle"
     style={{ transform: `translate(${-scrollY * 0.28}px, ${scrollY * 0.22}px)`, animationDelay: '3s' }} />

        {/* Main content */}
        <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
          <div className="animate-fade-in-up">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              Empowering{' '}
              <span className="text-yellow-400 relative">
                Youth
                <div className="absolute -bottom-2 left-0 right-0 h-1 bg-yellow-400 rounded-full" />
              </span>
              <br />
              Through{' '}
              <span className="text-pink-500">
                Community
              </span>
            </h1>
            
            <p className="text-xl sm:text-2xl text-gray-100 mb-8 max-w-3xl mx-auto leading-relaxed">
              Designing and implementing youthful projects while opening up space for young people 
              to incubate community and self-development initiatives and research.
            </p>

            {/* Call-to-action buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Link 
                to="/programs"
                onClick={() => {
                  // Smooth scroll to top when navigating to a new page
                  setTimeout(() => {
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }, 50);
                }}
                className="bg-pink-500 hover:bg-pink-600 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 hover:scale-105 hover:shadow-xl transform inline-flex items-center justify-center"
                aria-label="Explore our programs"
              >
                Explore Programs
                <ArrowRight size={20} className="ml-2" />
              </Link>
              <Link 
                to="/contact"
                onClick={() => {
                  // Smooth scroll to top when navigating to a new page
                  setTimeout(() => {
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }, 50);
                }}
                className="border-2 border-white text-white hover:bg-white hover:text-teal-700 px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 hover:scale-105 transform inline-flex items-center justify-center"
                aria-label="Get involved with our organization"
              >
                Get Involved
              </Link>
            </div>
          </div>

          {/* Scroll indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <button
              onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })}
              className="text-white hover:text-yellow-400 transition-colors duration-300"
              aria-label="Scroll down to learn more"
            >
              <ArrowDown size={32} />
            </button>
          </div>
        </div>
      </section>

      {/* Mission Preview Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-teal-700 mb-6">
              Our Foundation
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Built on core principles that guide every decision we make and every project we implement
            </p>
            <div className="w-32 h-1 bg-pink-500 mx-auto mt-6 rounded-full" />
          </div>

          {/* Mission Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto mb-16">
            {missionItems.map((item, index) => {
              const Icon = item.icon;
              
              return (
                <div
                  key={index}
                  className={`group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border-2 ${item.color} ${item.bgColor} transform hover:scale-105`}
                  role="article"
                >
                  {/* Icon */}
                  <div className={`w-16 h-16 ${item.bgColor} rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className={`${item.iconColor}`} size={32} />
                  </div>

                  {/* Content */}
                  <h3 className="text-2xl font-bold text-gray-800 mb-4 group-hover:text-teal-700 transition-colors duration-300">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                    {item.content}
                  </p>
                </div>
              );
            })}
          </div>

          {/* Call to action */}
          <div className="text-center">
            <Link
              to="/about"
              onClick={() => {
                // Smooth scroll to top when navigating to a new page
                setTimeout(() => {
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }, 50);
              }}
              className="bg-pink-500 hover:bg-pink-600 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 hover:scale-105 hover:shadow-xl transform inline-flex items-center"
              aria-label="Learn more about our organization"
            >
              Learn More About Us
              <ArrowRight size={20} className="ml-2" />
            </Link>
          </div>
        </div>
      </section>

      {/* Quick Links Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-teal-700 mb-6">
              Explore Our{' '}
              <span className="text-pink-500">
                Impact
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Discover how we're making a difference in communities across Zimbabwe
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Programs Card */}
            <Link 
              to="/programs"
              onClick={() => {
                // Smooth scroll to top when navigating to a new page
                setTimeout(() => {
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }, 50);
              }}
              className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
            >
              <div className="w-16 h-16 bg-pink-500 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <Award className="text-white" size={28} />
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4 group-hover:text-pink-500 transition-colors duration-300">
                Our Programs
              </h3>
              <p className="text-gray-600 leading-relaxed mb-6">
                Comprehensive programs designed to empower youth through education, leadership development, and community engagement.
              </p>
              <div className="flex items-center text-pink-500 font-semibold group-hover:translate-x-2 transition-transform duration-300">
                View Programs <ArrowRight size={16} className="ml-2" />
              </div>
            </Link>

            {/* Gallery Card */}
            <Link 
              to="/gallery"
              onClick={() => {
                // Smooth scroll to top when navigating to a new page
                setTimeout(() => {
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }, 50);
              }}
              className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
            >
              <div className="w-16 h-16 bg-teal-700 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <Eye className="text-white" size={28} />
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4 group-hover:text-teal-700 transition-colors duration-300">
                Impact Gallery
              </h3>
              <p className="text-gray-600 leading-relaxed mb-6">
                See the transformative moments and achievements from our programs through inspiring images of youth empowerment.
              </p>
              <div className="flex items-center text-teal-700 font-semibold group-hover:translate-x-2 transition-transform duration-300">
                View Gallery <ArrowRight size={16} className="ml-2" />
              </div>
            </Link>

            {/* Contact Card */}
            <Link 
              to="/contact"
              onClick={() => {
                // Smooth scroll to top when navigating to a new page
                setTimeout(() => {
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }, 50);
              }}
              className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
            >
              <div className="w-16 h-16 bg-yellow-500 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <Heart className="text-white" size={28} />
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4 group-hover:text-yellow-600 transition-colors duration-300">
                Get Involved
              </h3>
              <p className="text-gray-600 leading-relaxed mb-6">
                Ready to make a difference? Contact us to learn about volunteer opportunities and how you can support our mission.
              </p>
              <div className="flex items-center text-yellow-600 font-semibold group-hover:translate-x-2 transition-transform duration-300">
                Contact Us <ArrowRight size={16} className="ml-2" />
              </div>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;