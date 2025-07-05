import React from 'react';
import { Award, Users, Globe, TrendingUp, Star, Building2, Heart } from 'lucide-react';

const About = () => {
  const achievements = [
    {
      icon: <Award className="w-6 h-6" />,
      title: "Certified Corporate Director",
      description: "Shri T. Srinivasa Rao - IOD, India"
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "200+ Man-Years",
      description: "Combined expertise across sectors"
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: "International Partnerships",
      description: "Singapore & Malaysia collaborations"
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: "Strategic Vision",
      description: "25 years of corporate expertise"
    }
  ];

  return (
    <section id="about" className="py-20 bg-white animate-fade-in" style={{ animationDelay: '0.1s', animationDuration: '1.2s', animationFillMode: 'both' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div>
              <h2 className="text-4xl font-bold text-navy-900 mb-6">
                Founders and Key Leaders
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Founded by visionary First Generation Entrepreneur Shri T. Srinivasa Rao and his committed associates, 
                our organization is built on a foundation of experience, innovation, and strategic vision. 
                Shri Rao brings 25 years of comprehensive corporate expertise, with a proven track record 
                in successfully executing complex infrastructure and power projects across India.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                As a Certified Corporate Director from the Institute of Directors (IOD), India, he leads with 
                integrity and strategic foresight, fostering a culture of excellence and sustainable growth.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-6">
              {achievements.map((achievement, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <div className="text-gold-600 mt-1">
                    {achievement.icon}
                  </div>
                  <div>
                    <h4 className="font-semibold text-navy-900 mb-1">
                      {achievement.title}
                    </h4>
                    <p className="text-sm text-gray-600">
                      {achievement.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="relative overflow-hidden rounded-2xl">
              <img 
                src="https://images.unsplash.com/photo-1547895749-888a559fc2a7?q=80&w=764&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
                alt="Jaya Shankar Group Leadership"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-navy-900/80 to-navy-700/80"></div>
              <div className="absolute inset-0 p-8 text-white">
                <h3 className="text-2xl font-bold mb-6">Our Vision and Strategic Focus</h3>
                <blockquote className="text-lg italic mb-6">
                  "Guided by our experienced leaders, the organization is committed to advancing innovative 
                  projects that drive economic development, social progress, and environmental sustainability."
                </blockquote>
                
                <div className="space-y-4">
                  <div className="flex justify-between items-center border-b border-navy-600 pb-2">
                    <span>Leadership Experience</span>
                    <span className="text-gold-400 font-semibold">25+ Years</span>
                  </div>
                  <div className="flex justify-between items-center border-b border-navy-600 pb-2">
                    <span>Team Expertise</span>
                    <span className="text-gold-400 font-semibold">200+ Man-Years</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>International PR</span>
                    <span className="text-gold-400 font-semibold">20+ Years</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
