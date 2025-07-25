import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  GraduationCap, 
  Users, 
  Briefcase, 
  BookOpen, 
  Lightbulb, 
  Heart,
  ArrowRight,
  Clock,
  MapPin,
  Star
} from 'lucide-react';
import ProgramModal from '../components/ProgramModal';

// Define the program data interface (same as before)
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

const Programs: React.FC = () => {
  const [visibleCards, setVisibleCards] = useState<number[]>([]);
  const [selectedProgram, setSelectedProgram] = useState<ProgramData | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  // Comprehensive program data (same as before)
  const programs: ProgramData[] = [
    {
      id: 1,
      icon: GraduationCap,
      title: 'Accountability Lab Project',
      shortDescription: 'Strengthening the capacity of Adolescent Girls and Young Women in the climate adaptation discourse in Ngwanyana Ward 14.',
      fullDescription: 'A comprehensive climate adaptation program focused on empowering adolescent girls and young women with knowledge, skills, and resources to effectively participate in climate discourse and adaptation strategies within their communities.',
      objectives: [
        'Build climate change awareness and understanding among target participants',
        'Develop advocacy skills for social justice and environmental accountability',
        'Strengthen community resilience through disaster preparedness planning',
        'Create sustainable partnerships for water and agricultural support',
        'Empower young women to become climate change champions in their communities',
        'Establish community-led climate adaptation initiatives'
      ],
      features: [
        'Climate change sensitization and training workshops',
        'Community awareness campaigns and outreach programs',
        'Disaster preparedness and risk reduction planning',
        'Advocacy training for social justice and accountability',
        'Partnership building for water and agricultural support',
        'Leadership development for climate action'
      ],
      duration: '2024',
      location: 'Nguwanyana, Ward 14, Pmutree, Zimbabwe',
      participants: 'Adolescent girls and Young women (Ages 15-24)',
      targetAudience: 'This program specifically targets adolescent girls and young women aged 15-24 living in Nguwanyana Ward 14, with a focus on those who are interested in environmental issues, community development, and climate advocacy.',
      requirements: [
        'Age between 15-24 years',
        'Resident of Nguwanyana Ward 14 or surrounding areas',
        'Interest in climate change and environmental issues',
        'Commitment to attend regular training sessions',
        'Willingness to participate in community outreach activities',
        'Basic literacy skills preferred but not mandatory'
      ],
      benefits: [
        'Climate change knowledge and awareness',
        'Leadership and advocacy skills development',
        'Community networking opportunities',
        'Certificate of completion',
        'Ongoing mentorship and support',
        'Access to climate adaptation resources'
      ],
      registrationInfo: {
        deadline: 'Applications accepted on rolling basis throughout 2024',
        process: [
          'Complete the online application form or visit our office',
          'Attend an information session about the program',
          'Participate in a brief interview with program coordinators',
          'Receive confirmation of acceptance and program schedule',
          'Attend orientation session before program commencement'
        ],
        contact: {
          email: 'climate@luniacentreforyouths.co.zw',
          phone: '+263 78 477 6762'
        }
      },
      images: [
        {
          src: '/accountabilitylab1.jpg',
          alt: 'Accountability Lab Project community engagement session',
          caption: 'Community Climate Awareness Workshop'
        },
        {
          src: '/accountabilitylab2.jpg',
          alt: 'Accountability Lab Project training session with participants',
          caption: 'Climate Adaptation Training Session'
        }
      ],
      color: 'bg-pink-500 hover:bg-pink-600',
      bgColor: 'bg-pink-50',
      borderColor: 'border-pink-200'
    },
    {
      id: 2,
      icon: Users,
      title: 'WACI Health Project',
      shortDescription: 'Increasing access to HIV prevention strategies and SRHR information for adolescent girls and young women in Nguwanyana Village.',
      fullDescription: 'A comprehensive health program designed to improve sexual and reproductive health outcomes for adolescent girls and young women through education, advocacy, and community engagement initiatives.',
      objectives: [
        'Increase knowledge of HIV prevention strategies among target population',
        'Improve access to sexual and reproductive health services',
        'Build life skills and decision-making capabilities',
        'Strengthen community support systems for health and wellness',
        'Address intersections between climate change and health outcomes',
        'Advocate for improved health, sanitation, and nutrition services'
      ],
      features: [
        'Biomedical HIV prevention education and counseling',
        'Comprehensive life skills training programs',
        'Community awareness campaigns on SRHR topics',
        'Advocacy training for health, sanitation, and nutrition',
        'Climate and health intersection workshops',
        'Peer-to-peer education and support networks'
      ],
      duration: 'June 2024 - December 2024',
      location: 'Nguwanyana Village, Mangwe District, Matabeleland South Province, Zimbabwe',
      participants: '100+ Adolescent Girls and Young Women aged 15-24',
      targetAudience: 'Adolescent girls and young women aged 15-24 residing in Nguwanyana Village and surrounding areas, with particular focus on those with limited access to sexual and reproductive health information and services.',
      requirements: [
        'Age between 15-24 years',
        'Resident of Nguwanyana Village or surrounding communities',
        'Interest in health and wellness topics',
        'Commitment to participate in regular program activities',
        'Willingness to share knowledge with peers and community',
        'Parental consent required for participants under 18'
      ],
      benefits: [
        'Comprehensive SRHR knowledge and skills',
        'Access to health services and resources',
        'Peer support network development',
        'Leadership and advocacy capabilities',
        'Health and wellness mentorship',
        'Community recognition and certification'
      ],
      registrationInfo: {
        deadline: 'Registration closes May 31, 2024',
        process: [
          'Submit completed application form with required documents',
          'Attend community information session',
          'Complete health and wellness assessment',
          'Participate in program orientation',
          'Begin regular program participation'
        ],
        contact: {
          email: 'health@luniacentreforyouths.co.zw',
          phone: '+263 78 477 6762'
        }
      },
      images: [
        {
          src: '/waci1.jpg',
          alt: 'WACI Health Project community outreach session',
          caption: 'Community Health Education Session'
        },
        {
          src: '/waci2.jpg',
          alt: 'WACI Health Project group training with participants',
          caption: 'Sexual and Reproductive Health Training'
        }
      ],
      color: 'bg-teal-700 hover:bg-teal-800',
      bgColor: 'bg-teal-50',
      borderColor: 'border-teal-200'
    },
    {
      id: 3,
      icon: Briefcase,
      title: 'Terre Des Hommes Schweiz Project',
      shortDescription: 'Enhancing the Sexual Reproductive Health and Rights of young people in the Tsholotsho District.',
      fullDescription: 'A comprehensive SRHR program utilizing peer-led education and community advocacy to improve sexual and reproductive health outcomes for out-of-school youth in Tsholotsho District.',
      objectives: [
        'Deliver comprehensive sexuality education through peer-led approaches',
        'Train and deploy SPARK Champions using evidence-based toolkits',
        'Strengthen community-led advocacy for SRHR services',
        'Amplify youth voices through participatory platforms',
        'Improve access to quality SRHR services and information',
        'Build sustainable youth coordination and leadership structures'
      ],
      features: [
        'Peer-led Comprehensive Sexuality Education (CSE) programs',
        'SPARK Champions training using the Thrive SRHR toolkit',
        'Community-led advocacy and youth coordination initiatives',
        'Awareness campaigns promoting access to SRHR services',
        'Participatory platforms for youth voice amplification',
        'Sustainable program implementation and monitoring'
      ],
      duration: 'Ongoing (Started 2024)',
      location: 'Tsholotsho District, Zimbabwe',
      participants: '200+ Out-of-school youth aged 15–29',
      targetAudience: 'Out-of-school youth aged 15-29 in Tsholotsho District, including young people who have limited access to formal education but are interested in sexual and reproductive health education and advocacy.',
      requirements: [
        'Age between 15-29 years',
        'Resident of Tsholotsho District',
        'Out-of-school status (not currently enrolled in formal education)',
        'Interest in SRHR topics and peer education',
        'Commitment to complete training and participate in community activities',
        'Basic communication skills in local language'
      ],
      benefits: [
        'Comprehensive sexuality education certification',
        'SPARK Champion training and recognition',
        'Leadership and advocacy skill development',
        'Community engagement opportunities',
        'Access to SRHR services and resources',
        'Ongoing mentorship and career guidance'
      ],
      registrationInfo: {
        deadline: 'Rolling admissions - Apply anytime during 2024',
        process: [
          'Complete application form and provide proof of residency',
          'Attend community information and recruitment session',
          'Participate in initial assessment and interview',
          'Complete SPARK Champion training program',
          'Begin peer education and community advocacy activities'
        ],
        contact: {
          email: 'srhr@luniacentreforyouths.co.zw',
          phone: '+263 78 477 6762'
        }
      },
      images: [
        {
          src: '/Terre Des Hommes1.jpg',
          alt: 'Terre Des Hommes Schweiz Project SPARK Champions training',
          caption: 'SPARK Champions Peer Education Training'
        },
        {
          src: '/Terre Des Hommes2.jpg',
          alt: 'Terre Des Hommes Schweiz Project community outreach session',
          caption: 'Community SRHR Awareness Session'
        }
      ],
      color: 'bg-yellow-500 hover:bg-yellow-600',
      bgColor: 'bg-yellow-50',
      borderColor: 'border-yellow-200'
    }
  ];

  // Intersection Observer for staggered animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(entry.target.getAttribute('data-index') || '0');
            setVisibleCards(prev => {
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

    const cards = sectionRef.current?.querySelectorAll('.program-card');
    cards?.forEach(card => observer.observe(card));

    return () => observer.disconnect();
  }, []);

  const openModal = (program: ProgramData) => {
    setSelectedProgram(program);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedProgram(null);
  };

  return (
    <div className="pt-20">
      {/* Page Header */}
      <section className="py-20 bg-gradient-to-br from-teal-700 to-pink-500 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Our{' '}
              <span className="text-yellow-400">
                Programs
              </span>
            </h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed opacity-90">
              Comprehensive programs designed to empower youth through education, leadership development, 
              and community engagement opportunities
            </p>
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section 
        ref={sectionRef}
        className="py-20 bg-white"
        role="region"
        aria-label="Our Programs and Services"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Programs Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {programs.map((program, index) => {
              const Icon = program.icon;
              const isVisible = visibleCards.includes(index);
              
              return (
                <div
                  key={program.id}
                  data-index={index}
                  className={`program-card group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-105 border-2 ${program.borderColor} cursor-pointer ${
                    isVisible 
                      ? 'opacity-100 translate-y-0' 
                      : 'opacity-0 translate-y-8'
                  }`}
                  style={{
                    transitionDelay: `${index * 150}ms`
                  }}
                  onClick={() => openModal(program)}
                  role="article"
                  aria-labelledby={`program-title-${program.id}`}
                  tabIndex={0}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault();
                      openModal(program);
                    }
                  }}
                >
                  {/* Card Header */}
                  <div className={`${program.bgColor} p-6 relative overflow-hidden`}>
                    <div className={`absolute top-0 right-0 w-32 h-32 ${program.color.split(' ')[0]}/10 rounded-full transform translate-x-8 -translate-y-8`} />
                    
                    <div className="relative z-10">
                      <div className={`w-16 h-16 ${program.color} rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                        <Icon className="text-white" size={28} />
                      </div>
                      
                      <h3 
                        id={`program-title-${program.id}`}
                        className="text-2xl font-bold text-gray-800 mb-3 group-hover:text-teal-700 transition-colors duration-300"
                      >
                        {program.title}
                      </h3>
                    </div>
                  </div>

                  {/* Card Content */}
                  <div className="p-6">
                    <p className="text-gray-600 leading-relaxed mb-6">
                      {program.shortDescription}
                    </p>

                    {/* Program Details */}
                    <div className="space-y-3 mb-6">
                      <div className="flex items-center text-sm text-gray-500">
                        <Clock size={16} className="mr-2 text-teal-600" />
                        <span>{program.duration}</span>
                      </div>
                      <div className="flex items-center text-sm text-gray-500">
                        <MapPin size={16} className="mr-2 text-pink-500" />
                        <span className="line-clamp-1">{program.location}</span>
                      </div>
                      <div className="flex items-center text-sm text-gray-500">
                        <Star size={16} className="mr-2 text-yellow-500" />
                        <span className="line-clamp-1">{program.participants}</span>
                      </div>
                    </div>

                    {/* Features Preview */}
                    <div className="mb-6">
                      <h4 className="font-semibold text-gray-700 mb-3">Key Features:</h4>
                      <ul className="space-y-2">
                        {program.features.slice(0, 3).map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                            <div className={`w-2 h-2 ${program.color.split(' ')[0]} rounded-full mr-3`} />
                            <span className="line-clamp-1">{feature}</span>
                          </li>
                        ))}
                        {program.features.length > 3 && (
                          <li className="text-sm text-gray-500 italic">
                            +{program.features.length - 3} more features...
                          </li>
                        )}
                      </ul>
                    </div>

                    {/* View Details Button */}
                    <button 
                      className={`w-full ${program.color} text-white py-3 px-4 rounded-lg font-semibold hover:shadow-lg transition-all duration-300 flex items-center justify-center group-hover:scale-105`}
                      aria-label={`View details for ${program.title} program`}
                      onClick={(e) => {
                        e.stopPropagation();
                        openModal(program);
                      }}
                    >
                      View Details
                      <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                    </button>
                  </div>

                  {/* Hover overlay for better interaction feedback */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/0 via-transparent to-transparent group-hover:from-black/5 transition-all duration-300 pointer-events-none" />
                </div>
              );
            })}
          </div>

          {/* Call to Action */}
          <div className="text-center">
            <div className="bg-teal-700 rounded-3xl p-8 md:p-12 text-white">
              <h3 className="text-3xl md:text-4xl font-bold mb-4">
                Ready to Make a Difference?
              </h3>
              <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
                Join our programs and become part of a community dedicated to youth empowerment and positive change.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  onClick={() => {
                    // Smooth scroll to top when navigating to a new page
                    setTimeout(() => {
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }, 50);
                  }}
                  className="bg-white text-teal-700 px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-100 transition-all duration-300 hover:scale-105 transform inline-flex items-center justify-center"
                  aria-label="Apply for our programs"
                >
                  Join Us!
                  <ArrowRight size={20} className="ml-2" />
                </Link>
                <Link
                  to="/gallery"
                  onClick={() => {
                    // Smooth scroll to top when navigating to a new page
                    setTimeout(() => {
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }, 50);
                  }}
                  className="border-2 border-white text-white hover:bg-white hover:text-teal-700 px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 hover:scale-105 transform inline-flex items-center justify-center"
                  aria-label="View program gallery"
                >
                  View Gallery
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Program Modal */}
      <ProgramModal 
        program={selectedProgram}
        isOpen={isModalOpen}
        onClose={closeModal}
      />
    </div>
  );
};

export default Programs;