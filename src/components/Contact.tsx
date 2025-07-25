import React, { useState, useEffect, useRef } from 'react';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Send, 
  Heart, 
  Facebook, 
  Twitter, 
  Instagram, 
  Linkedin,
  Clock,
  Globe,
  CheckCircle
} from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
    type: 'general'
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  // Intersection Observer for animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
    
    // Reset form after showing success message
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: '',
        type: 'general'
      });
    }, 3000);
  };

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email Us',
      details: 'admin@luniacentreforyouths.co.zw',
      description: 'Send us an email anytime',
      color: 'text-pink-500',
      bg: 'bg-pink-50'
    },
    {
      icon: Phone,
      title: 'Call Us',
      details: '+263 78 477 6762',
      description: 'Mon-Fri 8:00 AM - 5:00 PM',
      color: 'text-teal-600',
      bg: 'bg-teal-50'
    },
    {
      icon: MapPin,
      title: 'Visit Us',
      details: '11 Coghlan Avenue Khumalo, Bulawayo, Zimbabwe',
      description: 'Come through',
      color: 'text-yellow-600',
      bg: 'bg-yellow-50'
    },
  ];

  const socialMedia = [
    { icon: Facebook, label: 'Facebook', color: 'hover:text-blue-600' },
    { icon: Twitter, label: 'Twitter', color: 'hover:text-blue-400' },
    { icon: Instagram, label: 'Instagram', color: 'hover:text-pink-500' },
    { icon: Linkedin, label: 'LinkedIn', color: 'hover:text-blue-700' }
  ];

  return (
    <section 
      id="contact" 
      ref={sectionRef}
      className="py-20 bg-white"
      role="region"
      aria-label="Contact Information and Support"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-teal-700 mb-6">
            Get{' '}
            <span className="text-pink-500">
              Involved
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Ready to make a difference? Contact us to learn more about our programs, 
            volunteer opportunities, or how you can support our mission
          </p>
          <div className="w-32 h-1 bg-pink-500 mx-auto mt-6 rounded-full" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <div className={`transform transition-all duration-1000 ${
            isVisible ? 'translate-x-0 opacity-100' : '-translate-x-16 opacity-0'
          }`}>
            <div className="bg-white rounded-3xl shadow-2xl p-8 border border-gray-100">
              <h3 className="text-3xl font-bold text-gray-800 mb-6">Send Us a Message</h3>
              
              {isSubmitted ? (
                <div className="text-center py-12">
                  <CheckCircle className="text-green-500 mx-auto mb-4" size={64} />
                  <h4 className="text-2xl font-bold text-gray-800 mb-2">Message Sent!</h4>
                  <p className="text-gray-600">Thank you for reaching out. We'll get back to you soon.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Form Type */}
                  <div>
                    <label htmlFor="type" className="block text-sm font-medium text-gray-700 mb-2">
                      I'm interested in:
                    </label>
                    <select
                      id="type"
                      name="type"
                      value={formData.type}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-pink-500 transition-colors duration-300"
                      required
                    >
                      <option value="general">General Information</option>
                      <option value="programs">Joining Programs</option>
                      <option value="volunteer">Volunteering</option>
                      <option value="partnership">Partnership</option>
                      <option value="donation">Making a Donation</option>
                    </select>
                  </div>

                  {/* Name and Email */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                        Full Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-pink-500 transition-colors duration-300"
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                        Email Address
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-pink-500 transition-colors duration-300"
                        required
                      />
                    </div>
                  </div>

                  {/* Subject */}
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                      Subject
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-pink-500 transition-colors duration-300"
                      required
                    />
                  </div>

                  {/* Message */}
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      rows={6}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-pink-500 transition-colors duration-300 resize-none"
                      required
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-pink-500 hover:bg-pink-600 text-white py-4 px-6 rounded-lg font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-white" />
                    ) : (
                      <>
                        <Send size={20} className="mr-2" />
                        Send Message
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>

          {/* Contact Information */}
          <div className={`transform transition-all duration-1000 delay-300 ${
            isVisible ? 'translate-x-0 opacity-100' : 'translate-x-16 opacity-0'
          }`}>
            {/* Contact Details */}
            <div className="space-y-6 mb-12">
              {contactInfo.map((info, index) => {
                const Icon = info.icon;
                return (
                  <div 
                    key={index}
                    className={`${info.bg} rounded-2xl p-6 border border-gray-100 hover:shadow-lg transition-all duration-300 group`}
                  >
                    <div className="flex items-start space-x-4">
                      <div className={`${info.bg} rounded-full p-3 group-hover:scale-110 transition-transform duration-300`}>
                        <Icon className={info.color} size={24} />
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold text-gray-800 mb-1">
                          {info.title}
                        </h4>
                        <p className="text-gray-800 font-medium mb-1">
                          {info.details}
                        </p>
                        <p className="text-gray-600 text-sm">
                          {info.description}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Donation Section */}
            <div className="bg-teal-700 rounded-3xl p-8 text-white mb-8">
              <div className="flex items-center mb-4">
                <Heart className="text-yellow-400 mr-3" size={32} />
                <h3 className="text-2xl font-bold">Support Our Cause</h3>
              </div>
              <p className="text-teal-100 mb-6 leading-relaxed">
                Your donation helps us reach more youth and create lasting positive impact 
                in communities across Zimbabwe. Every contribution makes a difference.
              </p>
              <div className="space-y-4">
                <button className="w-full bg-white text-teal-700 py-3 px-6 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-300">
                  One-Time Donation
                </button>
                <button className="w-full border-2 border-white text-white hover:bg-white hover:text-teal-700 py-3 px-6 rounded-lg font-semibold transition-all duration-300">
                  Monthly Giving
                </button>
              </div>
            </div>

            {/* Social Media */}
            <div className="text-center">
              <h4 className="text-xl font-semibold text-gray-800 mb-4">Follow Our Journey</h4>
              <div className="flex justify-center space-x-4">
                {socialMedia.map((social, index) => {
                  const Icon = social.icon;
                  return (
                    <button
                      key={index}
                      className={`bg-gray-100 hover:bg-gray-200 p-3 rounded-full transition-all duration-300 text-gray-600 ${social.color} hover:scale-110 transform`}
                      aria-label={`Follow us on ${social.label}`}
                    >
                      <Icon size={24} />
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;