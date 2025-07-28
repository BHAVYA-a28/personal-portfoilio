import React from 'react';

export function About() {
  return (
    <section id="about" className="py-20 bg-white relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 scroll-animate">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">About Me</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="scroll-animate">
            <div className="w-80 h-80 mx-auto bg-gradient-to-br from-blue-400 to-purple-500 rounded-full flex items-center justify-center hover-glow animate-float">
              <div className="w-72 h-72 bg-white rounded-full flex items-center justify-center">
                <span className="text-6xl font-bold text-gray-700">BJ</span>
              </div>
            </div>
          </div>
          
          <div className="space-y-6 scroll-animate">
            <h3 className="text-3xl font-bold text-gray-900">Frontend Developer</h3>
            <p className="text-lg text-gray-600 leading-relaxed">
              I'm a passionate Frontend Developer with expertise in creating beautiful, 
              responsive, and user-friendly web applications. I love working with modern 
              frontend technologies to bring creative designs to life.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              My journey in web development started with a curiosity for how websites work, 
              and it has evolved into a passion for creating exceptional user experiences. 
              I'm always eager to learn new technologies and improve my skills.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-6 animate-fade-in-up animate-delay-200">
              <div className="space-y-2">
                <p className="text-gray-700"><span className="font-semibold">Email:</span> bhavya.jain2804@gmail.com</p>
                <p className="text-gray-700"><span className="font-semibold">Phone:</span> 9602398321</p>
              </div>
              <div className="space-y-2">
                <p className="text-gray-700"><span className="font-semibold">Location:</span> Jaipur</p>
                <p className="text-gray-700"><span className="font-semibold">Focus:</span> Frontend Development</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}