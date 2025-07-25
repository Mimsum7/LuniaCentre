import React, { useEffect, useRef, useState } from 'react';
import { Heart, Eye, Award } from 'lucide-react';

const MissionGrid: React.FC = () => {
  const [visibleItems, setVisibleItems] = useState<number[]>([]);
  const gridRef = useRef<HTMLElement>(null);

  // Grid items data with mission, vision, and values only
  const gridItems = [
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

  // Intersection Observer for scroll reveal animation
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(entry.target.getAttribute('data-index') || '0');
            setVisibleItems(prev => {
              if (!prev.includes(index)) {
                return [...prev, index];
              }
              return prev;
            });
          }
        });
      },
      { threshold: 0.2, rootMargin: '0px 0px -50px 0px' }
    );

    const items = gridRef.current?.querySelectorAll('.grid-item');
    items?.forEach(item => observer.observe(item));

    return () => observer.disconnect();
  }, []);

  return (
    <section 
      id="mission-grid" 
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

        {/* 1x3 Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {gridItems.map((item, index) => {
            const Icon = item.icon;
            const isVisible = visibleItems.includes(index);
            
            return (
              <div
                key={index}
                data-index={index}
                className={`grid-item group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border-2 ${item.color} ${item.bgColor} transform hover:scale-105 ${
                  isVisible 
                    ? 'opacity-100 translate-y-0' 
                    : 'opacity-0 translate-y-8'
                }`}
                style={{
                  transitionDelay: `${index * 200}ms`
                }}
                role="article"
                aria-labelledby={`item-title-${index}`}
              >
                {/* Icon */}
                <div className={`w-16 h-16 ${item.bgColor} rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <Icon className={`${item.iconColor}`} size={32} />
                </div>

                {/* Content */}
                <h3 
                  id={`item-title-${index}`}
                  className="text-2xl font-bold text-gray-800 mb-4 group-hover:text-teal-700 transition-colors duration-300"
                >
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

        {/* Call to action */}
        <div className="text-center mt-16">
          <button
            onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-pink-500 hover:bg-pink-600 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 hover:scale-105 hover:shadow-xl transform"
            aria-label="Learn more about our organization"
          >
            Learn More About Us
          </button>
        </div>
      </div>
    </section>
  );
};

export default MissionGrid;