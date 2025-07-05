
import React from 'react';
import { Award, Users, Globe, TrendingUp } from 'lucide-react';

const About = () => {
  const achievements = [
    {
      icon: <Award className="w-6 h-6" />,
      title: "Industry Leadership",
      description: "Market leader across multiple sectors"
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "50,000+ Employees",
      description: "Diverse workforce driving innovation"
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: "Global Presence",
      description: "Operations across 15+ countries"
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: "Sustainable Growth",
      description: "Consistent performance for decades"
    }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div>
              <h2 className="text-4xl font-bold text-navy-900 mb-6">
                Legacy of Excellence Since 1970
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                From humble beginnings to becoming one of India's most respected business houses, 
                our journey is marked by unwavering commitment to excellence, innovation, and 
                sustainable growth.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                We believe in creating value for all stakeholders - customers, employees, 
                shareholders, and the communities we serve. Our diversified portfolio and 
                strategic vision position us for continued growth in the digital age.
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
            <div className="bg-gradient-to-br from-navy-900 to-navy-700 rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-6">Our Vision</h3>
              <blockquote className="text-lg italic mb-6">
                "To be a globally respected conglomerate that creates sustainable value 
                through innovation, excellence, and responsible business practices."
              </blockquote>
              
              <div className="space-y-4">
                <div className="flex justify-between items-center border-b border-navy-600 pb-2">
                  <span>Revenue Growth</span>
                  <span className="text-gold-400 font-semibold">15% YoY</span>
                </div>
                <div className="flex justify-between items-center border-b border-navy-600 pb-2">
                  <span>Market Cap</span>
                  <span className="text-gold-400 font-semibold">₹45,000Cr</span>
                </div>
                <div className="flex justify-between items-center">
                  <span>ESG Rating</span>
                  <span className="text-gold-400 font-semibold">AA+</span>
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
