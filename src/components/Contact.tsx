import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Form submitted:', formData);
    // Reset form
    setFormData({ name: '', email: '', message: '' });
    alert('Thank you for your message! I will get back to you soon.');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6" />,
      title: 'Email',
      value: 'bhavya.jain2804@gmail.com',
      href: 'mailto:bhavya.jain2804@gmail.com'
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: 'Phone',
      value: '9602398321',
      href: 'tel:9602398321'
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: 'Location',
      value: 'Jaipur',
      href: null
    }
  ];

  return (
    <section id="contact" className="py-20 bg-gray-900 text-white relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 scroll-animate">
          <h2 className="text-4xl font-bold mb-4">Get In Touch</h2>
          <div className="w-24 h-1 bg-blue-500 mx-auto"></div>
          <p className="text-xl text-gray-300 mt-6 max-w-3xl mx-auto">
            I'm always interested in new opportunities and exciting projects. 
            Let's connect and discuss how we can work together!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="scroll-animate">
            <h3 className="text-2xl font-bold mb-8">Contact Information</h3>
            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <div key={index} className={`flex items-center space-x-4 animate-fade-in-left animate-delay-${(index + 1) * 100} hover-lift`}>
                  <div className="flex-shrink-0 w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center hover-glow animate-float">
                    {info.icon}
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg">{info.title}</h4>
                    {info.href ? (
                      <a 
                        href={info.href}
                        className="text-gray-300 hover:text-blue-400 transition-all duration-200 hover:scale-105"
                      >
                        {info.value}
                      </a>
                    ) : (
                      <p className="text-gray-300">{info.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 p-6 bg-gray-800 rounded-lg hover-lift animate-fade-in-up animate-delay-400">
              <h4 className="font-semibold text-lg mb-4">Why Work With Me?</h4>
              <ul className="space-y-2 text-gray-300">
                <li className="flex items-start space-x-2 animate-fade-in-left animate-delay-500">
                  <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Passionate about creating exceptional user experiences</span>
                </li>
                <li className="flex items-start space-x-2 animate-fade-in-left animate-delay-600">
                  <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Strong foundation in modern frontend technologies</span>
                </li>
                <li className="flex items-start space-x-2 animate-fade-in-left animate-delay-700">
                  <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Always eager to learn and adapt to new technologies</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Contact Form */}
          <div className="scroll-animate">
            <h3 className="text-2xl font-bold mb-8">Send Me a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-6 animate-fade-in-right">
              <div className="animate-fade-in-up animate-delay-100">
                <label htmlFor="name" className="block text-sm font-medium mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 hover:border-gray-600"
                  placeholder="Enter your name"
                />
              </div>

              <div className="animate-fade-in-up animate-delay-200">
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 hover:border-gray-600"
                  placeholder="Enter your email"
                />
              </div>

              <div className="animate-fade-in-up animate-delay-300">
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 resize-none hover:border-gray-600"
                  placeholder="Tell me about your project or just say hello!"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-lg transition-all duration-200 flex items-center justify-center space-x-2 hover-lift hover-glow animate-fade-in-up animate-delay-400"
              >
                <Send size={20} />
                <span>Send Message</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}