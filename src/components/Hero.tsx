import React from 'react';
import { ArrowDown } from 'lucide-react';

interface HeroProps {
  scrollY: number;
}

const Hero: React.FC<HeroProps> = ({ scrollY }) => {
  return (
    <section 
      id="hero" 
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
      <div 
        className="absolute top-1/5 left-1/6 w-32 h-32 bg-yellow-400/30 rounded-full animate-float-gentle animate-pulse-glow"
        style={{
          transform: `translate(${scrollY * 0.2}px, ${scrollY * 0.1}px)`,
        }}
      />
      <div 
        className="absolute bottom-1/6 right-1/5 w-48 h-48 bg-pink-500/25 rounded-full animate-float-reverse animate-drift"
        style={{
          transform: `translate(${-scrollY * 0.15}px, ${scrollY * 0.25}px)`,
        }}
      />
      
      {/* Additional dynamic background elements */}
      <div 
        className="absolute top-2/5 left-1/12 w-24 h-24 bg-teal-400/20 rounded-full animate-pulse-glow animate-rotate-slow"
        style={{
          transform: `translate(${scrollY * 0.3}px, ${-scrollY * 0.2}px)`,
        }}
      />
      <div 
        className="absolute top-4/5 right-2/5 w-36 h-36 bg-purple-400/15 rounded-full animate-float-gentle animate-drift"
        style={{
          transform: `translate(${-scrollY * 0.25}px, ${scrollY * 0.15}px)`,
          animationDelay: '2s',
        }}
      />
      <div 
        className="absolute top-1/12 right-1/8 w-20 h-20 bg-green-400/25 rounded-full animate-float-reverse animate-pulse-glow"
        style={{
          transform: `translate(${scrollY * 0.18}px, ${scrollY * 0.12}px)`,
          animationDelay: '4s',
        }}
      />

      {/* New left-side dynamic circles for visual balance */}
      <div 
        className="absolute top-1/4 left-1/12 w-28 h-28 bg-orange-400/30 rounded-full animate-orbit-left animate-pulse-glow"
        style={{
          transform: `translate(${scrollY * 0.22}px, ${-scrollY * 0.18}px)`,
          animationDelay: '1s',
        }}
      />
      <div 
        className="absolute bottom-1/5 left-1/8 w-40 h-40 bg-indigo-400/25 rounded-full animate-wave-motion animate-float-gentle"
        style={{
          transform: `translate(${-scrollY * 0.28}px, ${scrollY * 0.22}px)`,
          animationDelay: '3s',
        }}

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
            <button 
              onClick={() => document.getElementById('programs')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-pink-500 hover:bg-pink-600 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 hover:scale-105 hover:shadow-xl transform"
              aria-label="Explore our programs"
            >
              Explore Programs
            </button>
            <button 
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="border-2 border-white text-white hover:bg-white hover:text-teal-700 px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 hover:scale-105 transform"
              aria-label="Get involved with our organization"
            >
              Get Involved
            </button>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <button
            onClick={() => document.getElementById('mission-grid')?.scrollIntoView({ behavior: 'smooth' })}
            className="text-white hover:text-yellow-400 transition-colors duration-300"
            aria-label="Scroll down to learn more"
          >
            <ArrowDown size={32} />
          </button>
        </div>
      </div>
    </section>
  )
  );
};

export default Hero;