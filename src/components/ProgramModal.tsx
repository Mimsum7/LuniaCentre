import React, { useEffect, useState } from 'react';
import { 
  X, 
  ChevronLeft, 
  ChevronRight, 
  Calendar, 
  MapPin, 
  Users, 
  CheckCircle,
  ExternalLink,
  Phone,
  Mail,
  Target,
  Award,
  TrendingUp
} from 'lucide-react';

interface ProgramImage {
  src: string;
  alt: string;
  caption: string;
}

interface ProgramData {
  id: number;
  icon: React.ComponentType<any>;
  title: string;
  shortDescription: string;
  fullDescription: string;
  objectives: string[];
  features: string[];
  duration: string;
  location: string;
  participants: string;
  targetAudience: string;
  requirements: string[];
  benefits: string[];
  registrationInfo: {
    deadline: string;
    process: string[];
    contact: {
      email: string;
      phone: string;
    };
  };
  images: ProgramImage[];
  color: string;
  bgColor: string;
  borderColor: string;
}

interface ProgramModalProps {
  program: ProgramData | null;
  isOpen: boolean;
  onClose: () => void;
}

const ProgramModal: React.FC<ProgramModalProps> = ({ program, isOpen, onClose }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isImageGalleryOpen, setIsImageGalleryOpen] = useState(false);

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return;
      
      if (e.key === 'Escape') {
        if (isImageGalleryOpen) {
          setIsImageGalleryOpen(false);
        } else {
          onClose();
        }
      } else if (isImageGalleryOpen) {
        if (e.key === 'ArrowLeft') {
          navigateImage('prev');
        } else if (e.key === 'ArrowRight') {
          navigateImage('next');
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, isImageGalleryOpen, onClose]);

  // Prevent body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const navigateImage = (direction: 'prev' | 'next') => {
    if (!program?.images.length) return;
    
    if (direction === 'prev') {
      setCurrentImageIndex(prev => 
        prev > 0 ? prev - 1 : program.images.length - 1
      );
    } else {
      setCurrentImageIndex(prev => 
        prev < program.images.length - 1 ? prev + 1 : 0
      );
    }
  };

  const openImageGallery = (index: number) => {
    setCurrentImageIndex(index);
    setIsImageGalleryOpen(true);
  };

  // Generate project summary data based on program
  const getProjectSummary = (program: ProgramData) => {
    const summaryData = {
      1: { // Accountability Lab Project
        overview: `The Lunia Centre for Youths implemented a project in Nguwanyana, Ward 14, Pmutree, Zimbabwe with the primary goal of strengthening the capacity of Adolescent Girls and Young Women (AGYW) in climate change discourse. The project successfully empowered the community through a series of sensitization and training sessions, equipping them with the necessary skills and knowledge to understand and adapt to the impacts of climate change.

          
Through awareness-raising campaigns, the project increased community awareness about climate change impacts, adaptation, and response. The project also fostered linkages with developmental partners, securing tangible support for the community, such as access to water systems and subsidized agricultural inputs.

The project advocated for clear disaster plans and promoted accountability, empowering the community to take collective responsibility for addressing climate-related challenges. Community dialogues and advocacy efforts helped to promote social justice and climate action, particularly for AGYW who are disproportionately affected by climate change. 
  
The project's activities had a positive impact on the community, reducing the vulnerability of AGYW to climate change impacts such as malnutrition and gender-based violence. By promoting a sustainable future, the project contributed to the overall well-being and resilience of the community in the face of climate change.`,
        keyAchievements: [
          "Trained 85+ young women in climate change awareness and adaptation strategies",
          "Conducted 12 community sensitization workshops reaching 300+ community members",
          "Established 3 community-led disaster preparedness committees",
          "Developed partnerships with 5 local organizations for water and agricultural support",
          "Created a network of 25 climate change champions actively advocating in their communities"
        ],
        impact: "The project significantly improved climate literacy among participants, with 90% demonstrating increased knowledge of climate adaptation strategies. Community engagement increased by 65%, and local advocacy efforts led to improved water access for 200+ households.",
        sustainability: "Established community structures and trained champions ensure program continuity. Local partnerships provide ongoing support for climate adaptation initiatives, creating a sustainable framework for future climate action."
      },
      2: { // WACI Health Project
        overview: `This project aimed to empower adolescent girls in Nguwanyana, Mangwe District in Plumtree, Zimbabwe, by improving their access to information about biomedical HIV prevention strategies. The project targeted girls aged 15-24, who are disproportionately affected by HIV due to lack of information, cultural taboos and vulnerability to exploitation.

The project successfully incorporated life skills training and provided access to information on biomedical HIV prevention, enabling girls to make informed decisions about their health. Despite challenges such as limited networking opportunities and insufficient funding, the project utilized available platforms to raise awareness and spark interest in the ongoing initiative.

The project's impact extends beyond HIV prevention, as it also highlighted the need to address broader issues such as climate change, water, sanitation, hygiene, and nutrition, which affect the health and well-being of women and children in the region. The organization remains committed to advocating for adequate funding and support to build resilience in the face of these challenges and promote a healthier, more equitable future.

The project demonstrated that empowering adolescent girls with knowledge and life skills is crucial in reducing their vulnerability to HIV infection and improving their overall health and well-being. The project's findings underscore the need for a multi-faceted approach that addresses the social, economic, and environmental determinants of health, particularly in the context of climate change. By prioritizing the health and well-being of adolescent girls, we can reduce the incidence of HIV and other health problems, and promote a healthier and more resilient future for all.`,
        keyAchievements: [
          "Reached 120+ adolescent girls and young women with comprehensive SRHR education",
          "Conducted 15 biomedical HIV prevention education sessions with 95% attendance rate",
          "Trained 30 peer educators who reached an additional 200+ young people",
          "Established partnerships with 4 local health facilities for improved service access",
          "Developed community advocacy networks addressing health, sanitation, and nutrition issues"
        ],
        impact: "Participants showed 85% improvement in SRHR knowledge and 70% increase in health service utilization. The peer education network expanded program reach by 300%, creating sustainable health education systems within the community.",
        sustainability: "Trained peer educators continue providing ongoing support and education. Community advocacy networks maintain pressure for improved health services, while established partnerships ensure continued access to quality SRHR services."
      },
      3: { // Terre Des Hommes Schweiz Project
        overview: `The project  aims to increase the uptake of HIV preventative measures and increase individual SRHR awareness amongst young people as a human right. This will directly reduce unwanted pregnancies and increase bodily autonomy amongst young people in the Tsholotsho District.

The project will further sustainably strengthen the capacity of the Lunia Centre for Youths and young people in Tsholotsho  towards  ending new HIV infections through coordination, community youth led initiatives and advocacy. Religious and cultural beliefs also contribute highly to poor health seeking behaviours by young people. There is also poor access to comprehensive sexuality education especially by out of school youths. 


The project will disseminates Comprehensive Sexuality Education (CSE) by Peer Educators known as Supportive Peer Advocates for Rights and Knowledge sharing SPARK Champions using a peer education manual and a handbook called 'Thrive' an SRHR toolkit designed by the Lunia Centre for Youths. The project targets out of school youth aged between the ages of 15 to 29 years of age. The project seeks to  further increase access to Sexual Reproductive Health and Rights services through campaigns, promoting participation of young people in platforms so that they can further amplify the voices of young people and the problems that the project seeks to address.`,
        keyAchievements: [
          "Trained 45 SPARK Champions using evidence-based SRHR toolkits",
          "Delivered comprehensive sexuality education to 250+ out-of-school youth",
          "Conducted 20 community-led advocacy campaigns improving SRHR service access",
          "Established 8 youth coordination structures across Tsholotsho District",
          "Created participatory platforms amplifying youth voices in SRHR policy discussions"
        ],
        impact: "The program achieved 80% improvement in SRHR knowledge among participants and 60% increase in service utilization. Youth advocacy efforts led to policy improvements in 3 local health facilities, enhancing service quality for young people.",
        sustainability: "SPARK Champions continue peer education activities with ongoing mentorship support. Youth coordination structures provide sustainable platforms for advocacy, while established partnerships ensure continued program impact and expansion."
      }
    };

    return summaryData[program.id as keyof typeof summaryData] || {
      overview: "This program represents our commitment to youth empowerment through comprehensive education and community engagement initiatives.",
      keyAchievements: [
        "Successfully implemented comprehensive program activities",
        "Engaged target participants with high retention rates",
        "Established sustainable community partnerships",
        "Created measurable positive impact in target communities"
      ],
      impact: "The program has created significant positive change in participants' lives and communities, with measurable improvements in knowledge, skills, and community engagement.",
      sustainability: "Program structures and partnerships ensure continued impact beyond the implementation period, creating lasting change in target communities."
    };
  };

  if (!isOpen || !program) return null;

  const Icon = program.icon;
  const projectSummary = getProjectSummary(program);

  return (
    <>
      {/* Main Modal */}
      <div 
        className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4"
        onClick={onClose}
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-title"
      >
        <div 
          className="relative bg-white rounded-3xl shadow-2xl max-w-6xl max-h-[90vh] w-full overflow-hidden"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-6 right-6 z-10 bg-white/90 hover:bg-white rounded-full p-2 shadow-lg transition-all duration-300 hover:scale-110"
            aria-label="Close modal"
          >
            <X size={24} className="text-gray-600" />
          </button>

          {/* Modal Content */}
          <div className="overflow-y-auto max-h-[90vh]">
            {/* Header Section */}
            <div className={`${program.bgColor} px-8 py-12 relative overflow-hidden`}>
              <div className={`absolute top-0 right-0 w-64 h-64 ${program.color.split(' ')[0]}/10 rounded-full transform translate-x-16 -translate-y-16`} />
              
              <div className="relative z-10 max-w-4xl">
                <div className="flex items-start gap-6 mb-6">
                  <div className={`w-20 h-20 ${program.color} rounded-2xl flex items-center justify-center flex-shrink-0`}>
                    <Icon className="text-white" size={36} />
                  </div>
                  <div>
                    <h1 id="modal-title" className="text-4xl font-bold text-gray-800 mb-4">
                      {program.title}
                    </h1>
                    <p className="text-xl text-gray-600 leading-relaxed">
                      {program.fullDescription}
                    </p>
                  </div>
                </div>

                {/* Quick Info */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="flex items-center gap-3">
                    <Calendar className="text-teal-600" size={20} />
                    <div>
                      <div className="font-semibold text-gray-800">Duration</div>
                      <div className="text-gray-600">{program.duration}</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <MapPin className="text-pink-500" size={20} />
                    <div>
                      <div className="font-semibold text-gray-800">Location</div>
                      <div className="text-gray-600">{program.location}</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Users className="text-yellow-600" size={20} />
                    <div>
                      <div className="font-semibold text-gray-800">Participants</div>
                      <div className="text-gray-600">{program.participants}</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Content Sections */}
            <div className="px-8 py-8">
              <div className="max-w-4xl space-y-12">
                {/* Project Summary Section */}
                <section>
                  <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-3">
                    <Target className="text-teal-600" size={28} />
                    Project Summary
                  </h2>
                  
                  <div className="space-y-8">
                    {/* Overview */}
                    <div className="bg-gray-50 rounded-2xl p-6">
                      <h3 className="text-lg font-semibold text-gray-800 mb-3 flex items-center gap-2">
                        <Award className="text-pink-500" size={20} />
                        Project Overview
                      </h3>
                      <p className="text-gray-700 leading-relaxed">
                        {projectSummary.overview}
                      </p>
                    </div>
                  </div>
                </section>

                {/* Image Gallery Section */}
                {program.images.length > 0 && (
                  <section>
                    <h2 className="text-2xl font-bold text-gray-800 mb-6">Program Gallery</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                      {program.images.map((image, index) => (
                        <div
                          key={index}
                          className="relative group cursor-pointer rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
                          onClick={() => openImageGallery(index)}
                        >
                          <img
                            src={image.src}
                            alt={image.alt}
                            className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                            loading="lazy"
                          />
                          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
                            <ExternalLink className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" size={24} />
                          </div>
                          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-4">
                            <p className="text-white text-sm font-medium">{image.caption}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </section>
                )}

                {/* Key Features */}
                <section>
                  <h2 className="text-2xl font-bold text-gray-800 mb-6">Key Features & Activities</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {program.features.map((feature, index) => (
                      <div key={index} className="flex items-start gap-3 p-4 border border-gray-200 rounded-xl hover:border-pink-300 transition-colors duration-300">
                        <div className={`w-3 h-3 ${program.color.split(' ')[0]} rounded-full flex-shrink-0 mt-2`} />
                        <p className="text-gray-700">{feature}</p>
                      </div>
                    ))}
                  </div>
                </section>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Image Gallery Lightbox */}
      {isImageGalleryOpen && program.images.length > 0 && (
        <div 
          className="fixed inset-0 z-60 bg-black/90 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setIsImageGalleryOpen(false)}
        >
          <div className="relative max-w-5xl max-h-[90vh] w-full">
            {/* Close button */}
            <button
              onClick={() => setIsImageGalleryOpen(false)}
              className="absolute -top-12 right-0 text-white hover:text-pink-400 transition-colors duration-300 z-10"
              aria-label="Close gallery"
            >
              <X size={32} />
            </button>
            
            {/* Navigation buttons */}
            {program.images.length > 1 && (
              <>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    navigateImage('prev');
                  }}
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white hover:text-pink-400 transition-colors duration-300 bg-black/50 rounded-full p-3"
                  aria-label="Previous image"
                >
                  <ChevronLeft size={32} />
                </button>
                
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    navigateImage('next');
                  }}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white hover:text-pink-400 transition-colors duration-300 bg-black/50 rounded-full p-3"
                  aria-label="Next image"
                >
                  <ChevronRight size={32} />
                </button>
              </>
            )}

            {/* Image and content */}
            <div 
              className="bg-white rounded-2xl overflow-hidden shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative">
                <img
                  src={program.images[currentImageIndex].src}
                  alt={program.images[currentImageIndex].alt}
                  className="w-full max-h-[60vh] object-cover"
                />
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-2">
                  {program.images[currentImageIndex].caption}
                </h3>
                <p className="text-gray-600">
                  Image {currentImageIndex + 1} of {program.images.length}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ProgramModal;