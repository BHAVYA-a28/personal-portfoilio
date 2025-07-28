import React from 'react';
import { ChevronDown } from 'lucide-react';
import { ParticleBackground } from './ParticleBackground';

export function Hero() {
  const scrollToAbout = () => {
    const element = document.getElementById('about');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100 relative overflow-hidden">
      <ParticleBackground />
      <div className="text-center px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto scroll-animate">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 animate-fade-in-up">
            <span className="block animate-delay-100">Bhavya Jain</span>
            <span className="block text-gradient text-4xl sm:text-5xl lg:text-6xl mt-2 animate-delay-200">
              Frontend Developer
            </span>
          </h1>
          <p className="text-xl sm:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed animate-fade-in-up animate-delay-300">
            Passionate about creating beautiful, responsive, and user-friendly web applications 
            with modern frontend technologies
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in-up animate-delay-400">
            <button
              onClick={scrollToAbout}
              className="bg-blue-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl hover-lift hover-glow"
            >
              Learn More About Me
            </button>
            <a
              href="#contact"
              className="border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-lg font-medium hover:bg-blue-600 hover:text-white transition-all duration-300 hover-lift"
            >
              Get In Touch
            </a>
          </div>
        </div>
        
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce animate-pulse-slow">
          <ChevronDown size={32} className="text-blue-600" />
        </div>
      </div>
    </section>
  );
}