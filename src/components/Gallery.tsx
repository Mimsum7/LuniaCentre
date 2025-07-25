import React, { useState, useEffect, useRef } from 'react';
import { X, ChevronLeft, ChevronRight, Play, ExternalLink } from 'lucide-react';

const Gallery: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [visibleImages, setVisibleImages] = useState<number[]>([]);
  const [showDetails, setShowDetails] = useState<number[]>([]);
  const galleryRef = useRef<HTMLElement>(null);

  // Gallery images data - Using actual project images
  const galleryImages = [
    {
      id: 1,
      src: '/public/accountabilitylab1.jpg',
      alt: 'Accountability Lab Project community engagement session',
      category: 'Climate Change',
      title: 'Accountability Lab Project',
      description: 'Community climate awareness workshop with young women participants'
    },
    {
      id: 2,
      src: '/public/accountabilitylab2.jpg',
      alt: 'Accountability Lab Project training session with participants',
      category: 'Climate Change',
      title: 'Accountability Lab Project',
      description: 'Climate adaptation training session for adolescent girls and young women'
    },
    {
      id: 3,
      src: '/public/waci1.jpg',
      alt: 'WACI Health Project community outreach session',
      category: 'Health',
      title: 'WACI Health Project',
      description: 'Community health education and outreach activities'
    },
    {
      id: 4,
      src: '/public/waci2.jpg',
      alt: 'WACI Health Project group training with participants',
      category: 'Health',
      title: 'WACI Health Project',
      description: 'Sexual and reproductive health training for young women'
    },
    {
      id: 5,
      src: '/public/Terre Des Hommes1.jpg',
      alt: 'Terre Des Hommes Schweiz Project SPARK Champions training',
      category: 'Health',
      title: 'Terre Des Hommes Schweiz Project',
      description: 'SPARK Champions peer education training session'
    },
    {
      id: 6,
      src: '/public/Terre Des Hommes2.jpg',
      alt: 'Terre Des Hommes Schweiz Project community outreach session',
      category: 'Health',
      title: 'Terre Des Hommes Schweiz Project',
      description: 'Community SRHR awareness and education session'
    },
    {
      id: 7,
      src: '/public/presentation.jpg',
      alt: 'Educational presentation session with community participants',
      category: 'Education',
      title: 'Community Education Session',
      description: 'Interactive learning and knowledge sharing presentation'
    },
    {
      id: 8,
      src: '/public/lesson.jpg',
      alt: 'Classroom lesson with engaged participants',
      category: 'Education',
      title: 'Skills Development Workshop',
      description: 'Comprehensive skills training and capacity building session'
    },
    {
      id: 9,
      src: '/public/activity.jpg',
      alt: 'Outdoor group activity with youth participants',
      category: 'Community Engagement',
      title: 'Youth Engagement Activity',
      description: 'Community-based youth empowerment and team building activities'
    },
    {
      id: 10,
      src: '/public/discussion.jpg',
      alt: 'Group discussion and dialogue session',
      category: 'Community Dialogue',
      title: 'Community Discussion Forum',
      description: 'Participatory dialogue and community engagement session'
    }
  ];

  // Intersection Observer for lazy loading and animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(entry.target.getAttribute('data-index') || '0');
            setVisibleImages(prev => {
              if (!prev.includes(index)) {
                return [...prev, index];
              }
              return prev;
            });
          }
        });
      },
      { threshold: 0.1, rootMargin: '50px' }
    );

    const images = galleryRef.current?.querySelectorAll('.gallery-item');
    images?.forEach(image => observer.observe(image));

    return () => observer.disconnect();
  }, []);

  // Keyboard navigation for lightbox
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedImage === null) return;
      
      if (e.key === 'Escape') {
        setSelectedImage(null);
      } else if (e.key === 'ArrowLeft') {
        navigateImage('prev');
      } else if (e.key === 'ArrowRight') {
        navigateImage('next');
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedImage]);

  const navigateImage = (direction: 'prev' | 'next') => {
    if (selectedImage === null) return;
    
    const currentIndex = galleryImages.findIndex(img => img.id === selectedImage);
    let newIndex;
    
    if (direction === 'prev') {
      newIndex = currentIndex > 0 ? currentIndex - 1 : galleryImages.length - 1;
    } else {
      newIndex = currentIndex < galleryImages.length - 1 ? currentIndex + 1 : 0;
    }
    
    setSelectedImage(galleryImages[newIndex].id);
  };

  const selectedImageData = galleryImages.find(img => img.id === selectedImage);

  // Category color mapping for better visual organization
  const getCategoryColor = (category: string) => {
    const colors = {
      'Climate Change': 'bg-green-500',
      'Health': 'bg-pink-500',
      'Education': 'bg-blue-500',
      'Community Engagement': 'bg-purple-500',
      'Community Dialogue': 'bg-orange-500'
    };
    return colors[category as keyof typeof colors] || 'bg-gray-500';
  };

  // Toggle image details visibility
  const toggleImageDetails = (imageId: number, event: React.MouseEvent) => {
    event.stopPropagation(); // Prevent opening lightbox when clicking to show details
    setShowDetails(prev => 
      prev.includes(imageId) 
        ? prev.filter(id => id !== imageId)
        : [...prev, imageId]
    );
  };

  // Handle image click - show details first, then lightbox on second click
  const handleImageClick = (imageId: number) => {
    if (!showDetails.includes(imageId)) {
      // First click: show details
      setShowDetails(prev => [...prev, imageId]);
    } else {
      // Second click or if details already shown: open lightbox
      setSelectedImage(imageId);
    }
  };

  return (
    <section 
      id="gallery" 
      ref={galleryRef}
      className="py-20 bg-gray-50"
      role="region"
      aria-label="Program Gallery"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-teal-700 mb-6">
            Our{' '}
            <span className="text-pink-500">
              Impact
            </span>{' '}
            Gallery
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Discover the transformative moments and achievements from our programs through 
            these inspiring images of youth empowerment in action
          </p>
          <div className="w-32 h-1 bg-pink-500 mx-auto mt-6 rounded-full" />
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-12">
          {galleryImages.map((image, index) => {
            const isVisible = visibleImages.includes(index);
            
            return (
              <div
                key={image.id}
                data-index={index}
                className={`gallery-item group relative bg-gray-100 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer transform hover:scale-105 ${
                  isVisible 
                    ? 'opacity-100 translate-y-0' 
                    : 'opacity-0 translate-y-8'
                }`}
                style={{
                  transitionDelay: `${index * 100}ms`
                }}
                onClick={() => handleImageClick(image.id)}
                role="button"
                tabIndex={0}
                aria-label={showDetails.includes(image.id) ? `View ${image.title} in lightbox` : `Show details for ${image.title}`}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    handleImageClick(image.id);
                  }
                }}
              >
                {/* Image */}
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                
                {/* Enhanced overlay with better contrast */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/20 opacity-60 group-hover:opacity-80 transition-opacity duration-300" />
                
                {/* Category badge */}
                <div className="absolute top-4 left-4 z-10">
                  <span className={`${getCategoryColor(image.category)} text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg backdrop-blur-sm`}>
                    {image.category}
                  </span>
                </div>
                
                {/* Content - visible on hover/focus only */}
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-full opacity-0 group-hover:translate-y-0 group-hover:opacity-100 group-focus:translate-y-0 group-focus:opacity-100 transition-all duration-300">
                  {/* Title with enhanced readability */}
                  <h3 className="text-lg font-bold mb-2 text-shadow-xl drop-shadow-text-lg">
                    {image.title}
                  </h3>
                  {/* Description with enhanced readability */}
                  <p className="text-sm opacity-95 line-clamp-2 text-shadow-lg drop-shadow-text leading-relaxed">
                    {image.description}
                  </p>
                  {/* Click indicator */}
                  <div className="mt-2 text-xs opacity-75">
                    {showDetails.includes(image.id) ? (
                      <span>Click to view full size</span>
                    ) : (
                      <span>Click to view details</span>
                    )}
                  </div>
                </div>
                
                {/* Hover icon - visible on hover/focus only */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 group-focus:opacity-100 transition-opacity duration-300">
                  <div className="bg-white/20 backdrop-blur-sm rounded-full p-4">
                    <Play className="w-8 h-8 text-white" />
                  </div>
                </div>
                
                {/* Toggle details button - positioned in top right */}
                <button
                  onClick={(e) => toggleImageDetails(image.id, e)}
                  className="absolute top-4 right-4 z-20 bg-black/50 hover:bg-black/70 text-white rounded-full p-2 transition-all duration-300 hover:scale-110"
                  aria-label={showDetails.includes(image.id) ? 'Hide image details' : 'Show image details'}
                >
                  {showDetails.includes(image.id) ? (
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  ) : (
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  )}
                </button>
              </div>
            );
          })}
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <p className="text-lg text-gray-600 mb-6">
            Want to be part of these inspiring moments?
          </p>
          <button
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-pink-500 hover:bg-pink-600 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 hover:scale-105 hover:shadow-xl transform"
            aria-label="Join our programs"
          >
            Join Our Programs
          </button>
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedImage && selectedImageData && (
        <div 
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
          role="dialog"
          aria-modal="true"
          aria-labelledby="lightbox-title"
        >
          <div className="relative w-full h-full max-w-7xl mx-auto flex items-center">
            {/* Close button */}
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 text-white hover:text-pink-400 transition-colors duration-300 z-20 bg-black/50 rounded-full p-2"
              aria-label="Close lightbox"
            >
              <X size={24} />
            </button>
            
            {/* Navigation buttons */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                navigateImage('prev');
              }}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white hover:text-pink-400 transition-all duration-300 bg-black/60 hover:bg-black/80 rounded-full p-3 z-10 backdrop-blur-sm"
              aria-label="Previous image"
            >
              <ChevronLeft size={28} />
            </button>
            
            <button
              onClick={(e) => {
                e.stopPropagation();
                navigateImage('next');
              }}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white hover:text-pink-400 transition-all duration-300 bg-black/60 hover:bg-black/80 rounded-full p-3 z-10 backdrop-blur-sm"
              aria-label="Next image"
            >
              <ChevronRight size={28} />
            </button>

            {/* Main content container with left-right layout */}
            <div 
              className="lightbox-content w-full h-full max-h-[90vh] bg-white rounded-2xl overflow-hidden shadow-2xl flex"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Left side - Image */}
              <div className="lightbox-image flex-1 relative bg-gray-100 flex items-center justify-center min-h-0">
                <img
                  src={selectedImageData.src}
                  alt={selectedImageData.alt}
                  className="max-w-full max-h-full object-contain"
                />
                
                {/* Image counter overlay */}
                <div className="absolute bottom-4 left-4 bg-black/60 text-white px-3 py-1 rounded-full text-sm backdrop-blur-sm">
                  {galleryImages.findIndex(img => img.id === selectedImage) + 1} of {galleryImages.length}
                </div>
              </div>
              
              {/* Right side - Content */}
              <div className="lightbox-sidebar w-80 flex flex-col bg-gray-50 border-l border-gray-200">
                {/* Header */}
                <div className="p-6 border-b border-gray-200">
                  <div className={`inline-block ${getCategoryColor(selectedImageData.category)} text-white text-sm font-medium px-3 py-1 rounded-full mb-4`}>
                    {selectedImageData.category}
                  </div>
                  <h3 id="lightbox-title" className="text-2xl font-bold text-gray-800 mb-3 leading-tight">
                    {selectedImageData.title}
                  </h3>
                </div>
                
                {/* Content */}
                <div className="flex-1 p-6 overflow-y-auto">
                  <p className="text-gray-600 leading-relaxed mb-6">
                    {selectedImageData.description}
                  </p>
                  
                  {/* Additional details section */}
                  <div className="space-y-4">
                    <div>
                      <h4 className="text-sm font-semibold text-gray-800 mb-2">Category</h4>
                      <p className="text-sm text-gray-600">{selectedImageData.category}</p>
                    </div>
                    
                    <div>
                      <h4 className="text-sm font-semibold text-gray-800 mb-2">Program</h4>
                      <p className="text-sm text-gray-600">{selectedImageData.title}</p>
                    </div>
                  </div>
                </div>
                
                {/* Footer with navigation info */}
                <div className="p-6 border-t border-gray-200 bg-white">
                  <div className="flex items-center justify-between text-sm text-gray-500">
                    <span>Use arrow keys to navigate</span>
                    <span className="flex items-center gap-2">
                      <ChevronLeft size={16} />
                      <ChevronRight size={16} />
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Gallery;