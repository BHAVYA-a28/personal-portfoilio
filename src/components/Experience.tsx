import React from 'react';
import { Calendar, MapPin, Briefcase } from 'lucide-react';

export function Experience() {
  return (
    <section id="experience" className="py-20 bg-white relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 scroll-animate">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Work Experience</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
        </div>

        <div className="max-w-4xl mx-auto scroll-animate">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-blue-200 animate-fade-in-up"></div>
            
            {/* Experience Item */}
            <div className="relative pl-20 pb-12 animate-fade-in-left animate-delay-200">
              {/* Timeline dot */}
              <div className="absolute left-6 top-2 w-4 h-4 bg-blue-600 rounded-full border-4 border-white shadow-lg animate-pulse-slow"></div>
              
              <div className="bg-gray-50 rounded-lg p-8 shadow-md hover:shadow-lg transition-all duration-300 hover-lift hover-glow">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">Intern</h3>
                    <h4 className="text-lg font-semibold text-blue-600">LinuxWorld</h4>
                  </div>
                  <div className="flex flex-col sm:items-end mt-2 sm:mt-0">
                    <div className="flex items-center text-gray-600 mb-1">
                      <Calendar size={16} className="mr-2" />
                      <span>June - August (2 months)</span>
                    </div>
                    <div className="flex items-center text-gray-600">
                      <MapPin size={16} className="mr-2" />
                      <span>Onsite</span>
                    </div>
                  </div>
                </div>
                
                <div className="mb-4">
                  <h5 className="font-semibold text-gray-800 mb-2">Technologies Used:</h5>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-orange-100 text-orange-800 rounded-full text-sm font-medium hover:bg-orange-200 transition-colors duration-200">
                      AWS Cloud
                    </span>
                    <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium hover:bg-blue-200 transition-colors duration-200">
                      Frontend
                    </span>
                  </div>
                </div>
                
                <p className="text-gray-700 leading-relaxed">
                  Gained hands-on experience in cloud computing and frontend development during my internship 
                  at LinuxWorld. Worked on various projects involving AWS cloud services and frontend technologies, 
                  enhancing my practical skills in modern web development and cloud infrastructure.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}