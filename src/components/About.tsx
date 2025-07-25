import React, { useEffect, useRef, useState } from 'react';
import { BookOpen, Users, Award, TrendingUp } from 'lucide-react';

const About: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  // Intersection Observer for animation trigger
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section 
      id="about" 
      ref={sectionRef}
      className="py-20 bg-gray-50"
      role="region"
      aria-label="About Lunia Centre for Youths"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center max-w-7xl mx-auto">
          {/* Content Side - Left */}
          <div className={`transform transition-all duration-1000 ${
            isVisible ? 'translate-x-0 opacity-100' : '-translate-x-16 opacity-0'
          }`}>
            <div className="mb-8">
              <h2 className="text-4xl md:text-5xl font-bold text-teal-700 mb-6">
                About{' '}
                <span className="text-pink-500">
                  Lunia Centre
                </span>
              </h2>
              <div className="w-32 h-1 bg-pink-500 rounded-full mb-8" />
            </div>

            <div className="space-y-6 text-lg text-gray-600 leading-relaxed mb-10">
              <p>
                Lunia Centre for Youths is a youth engagement hub that utilizes a youth centered, multi thematic 
                approach focusing on public health, gender equality and climate justice. We provide and create 
                safe spaces for meaningful youth conversations on issues that affect young people. 
              </p>
              
              <p>
                Our approach is holistic and comprehensive, informed by Community Led Initiatives, Data Driven 
                Advocacy and Participation Leadership. Our motto is "Empowering the Future!". 
              </p>
            </div>

            {/* Call to action */}
            <div className="mt-10">
              <button
                onClick={() => document.getElementById('programs')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-pink-500 hover:bg-pink-600 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 hover:scale-105 hover:shadow-xl transform"
                aria-label="Explore our programs and services"
              >
                Explore Our Programs
              </button>
            </div>
          </div>

          {/* Image Side - Right */}
          <div className={`transform transition-all duration-1000 delay-300 ${
            isVisible ? 'translate-x-0 opacity-100' : 'translate-x-16 opacity-0'
          }`}>
            <div className="relative">
              {/* Main image container */}
              <div className="relative bg-white rounded-2xl shadow-2xl overflow-hidden border-4 border-white hover:shadow-3xl transition-all duration-500 group">
                <img
                  src="public/About copy.jpg"
                  alt="Lunia Centre for Youths team members and volunteers working together in community development activities"
                  className="w-full h-80 md:h-96 object-cover group-hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                />
                
                {/* Overlay with gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-teal-700/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>

              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-yellow-400 rounded-full opacity-20 blur-xl" />
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-pink-500 rounded-full opacity-10 blur-2xl" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;