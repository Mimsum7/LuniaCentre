import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, Users, Award, TrendingUp, ArrowRight, Heart, Eye } from 'lucide-react';

const About: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [visibleItems, setVisibleItems] = useState<number[]>([]);
  const sectionRef = useRef<HTMLElement>(null);
  const gridRef = useRef<HTMLElement>(null);

  // Intersection Observer for animation trigger
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (entry.target === sectionRef.current) {
              setIsVisible(true);
            } else {
              const index = parseInt(entry.target.getAttribute('data-index') || '0');
              setVisibleItems(prev => {
                if (!prev.includes(index)) {
                  return [...prev, index];
                }
                return prev;
              });
            }
          }
        });
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    const items = gridRef.current?.querySelectorAll('.grid-item');
    items?.forEach(item => observer.observe(item));

    return () => observer.disconnect();
  }, []);

  // Mission, Vision, Values data
  const missionItems = [
    {
      icon: Eye,
      title: 'Our Vision',
      content: 'A world where every young person has the opportunity to lead meaningful change in their communities and reach their full potential through empowerment and support.',
      color: 'border-teal-700',
      bgColor: 'bg-teal-50',
      iconColor: 'text-teal-700'
    },
    {
      icon: Heart,
      title: 'Our Mission',
      content: 'To design and implement youthful projects that empower young people and create sustainable community impact through education, leadership development, and innovative programs.',
      color: 'border-pink-500',
      bgColor: 'bg-pink-50',
      iconColor: 'text-pink-500'
    },
    {
      icon: Award,
      title: 'Our Values',
      content: 'Excellence, integrity, community collaboration, innovation, and sustainable impact guide every decision we make and every project we implement for youth empowerment.',
      color: 'border-yellow-500',
      bgColor: 'bg-yellow-50',
      iconColor: 'text-yellow-600'
    }
  ];

  return (
    <div className="pt-20">
      {/* Page Header */}
      <section className="py-20 bg-gradient-to-br from-teal-700 to-pink-500 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              About{' '}
              <span className="text-yellow-400">
                Lunia Centre
              </span>
            </h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed opacity-90">
              Empowering youth through community development, education, and innovative programs 
              that create lasting positive impact across Zimbabwe.
            </p>
          </div>
        </div>
      </section>

      {/* Main About Section */}
      <section 
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
                  Who We Are
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

                <p>
                  We believe that young people are not just the leaders of tomorrow, but the changemakers of today. 
                  Through our programs, we create opportunities for youth to develop their skills, voice their concerns, 
                  and implement solutions that benefit their communities.
                </p>
              </div>

              {/* Call to action */}
              <div className="mt-10">
                <Link
                  to="/programs"
                  onClick={() => {
                    // Smooth scroll to top when navigating to a new page
                    setTimeout(() => {
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }, 50);
                  }}
                  className="bg-pink-500 hover:bg-pink-600 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 hover:scale-105 hover:shadow-xl transform inline-flex items-center"
                  aria-label="Explore our programs and services"
                >
                  Explore Our Programs
                  <ArrowRight size={20} className="ml-2" />
                </Link>
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
                    src="/About copy.jpg"
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

      {/* Mission, Vision, Values Section */}
      <section 
        ref={gridRef}
        className="py-20 bg-white"
        role="region"
        aria-label="Mission, Vision, and Values"
      >
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
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {missionItems.map((item, index) => {
              const Icon = item.icon;
              const isItemVisible = visibleItems.includes(index);
              
              return (
                <div
                  key={index}
                  data-index={index}
                  className={`grid-item group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border-2 ${item.color} ${item.bgColor} transform hover:scale-105 ${
                    isItemVisible 
                      ? 'opacity-100 translate-y-0' 
                      : 'opacity-0 translate-y-8'
                  }`}
                  style={{
                    transitionDelay: `${index * 200}ms`
                  }}
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

                  {/* Hover overlay effect */}
                  <div className="absolute inset-0 bg-teal-700/0 group-hover:bg-teal-700/5 rounded-2xl transition-all duration-300" />
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Our Approach Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-teal-700 mb-6">
              Our{' '}
              <span className="text-pink-500">
                Approach
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              We utilize a comprehensive, multi-thematic approach to youth empowerment
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 text-center">
              <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="text-teal-700" size={32} />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">Community Led Initiatives</h3>
              <p className="text-gray-600 leading-relaxed">
                Empowering communities to identify their own needs and develop sustainable solutions 
                through participatory approaches and local leadership.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 text-center">
              <div className="w-16 h-16 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <TrendingUp className="text-pink-500" size={32} />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">Data Driven Advocacy</h3>
              <p className="text-gray-600 leading-relaxed">
                Using evidence-based research and data analysis to inform our programs and 
                advocate for policy changes that benefit young people.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 text-center">
              <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <BookOpen className="text-yellow-600" size={32} />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">Participation Leadership</h3>
              <p className="text-gray-600 leading-relaxed">
                Fostering meaningful youth participation in decision-making processes and 
                developing the next generation of community leaders.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-20 bg-teal-700 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Make a Difference?
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Join us in our mission to empower youth and create positive change in communities across Zimbabwe.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/programs"
              onClick={() => {
                // Smooth scroll to top when navigating to a new page
                setTimeout(() => {
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }, 50);
              }}
              className="bg-white text-teal-700 px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-100 transition-all duration-300 hover:scale-105 transform inline-flex items-center justify-center"
            >
              View Our Programs
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
            >
              Get Involved
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;