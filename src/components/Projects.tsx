import React from 'react';
import { ExternalLink, Github, Mail, CheckSquare } from 'lucide-react';

export function Projects() {
  const projects = [
    {
      id: 1,
      title: 'Gmail Clone',
      description: 'A fully functional Gmail clone built with modern frontend technologies. Features include email composition, inbox management, and responsive design.',
      icon: <Mail className="w-8 h-8" />,
      technologies: ['React', 'JavaScript', 'CSS', 'HTML'],
      features: [
        'Email composition and sending',
        'Inbox and folder management',
        'Responsive design',
        'Search functionality'
      ],
      color: 'from-red-400 to-red-600'
    },
    {
      id: 2,
      title: 'Todo List',
      description: 'An interactive and user-friendly todo list application with features for task management, prioritization, and progress tracking.',
      icon: <CheckSquare className="w-8 h-8" />,
      technologies: ['React', 'JavaScript', 'CSS', 'HTML'],
      features: [
        'Add and delete tasks',
        'Mark tasks as complete',
        'Task prioritization',
        'Local storage persistence'
      ],
      color: 'from-green-400 to-green-600',
      delay: 'animate-delay-200'
    }
  ];

  return (
    <section id="projects" className="py-20 bg-gray-50 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 scroll-animate">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Featured Projects</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
          <p className="text-lg text-gray-600 mt-6 max-w-3xl mx-auto">
            Here are some of my recent projects that showcase my frontend development skills and creativity.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 scroll-animate">
          {projects.map((project) => (
            <div 
              key={project.id}
              className={`bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group hover-lift hover-glow animate-scale-in ${project.delay || ''}`}
            >
              {/* Project Header */}
              <div className={`bg-gradient-to-r ${project.color} p-6 text-white`}>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    {project.icon}
                    <h3 className="text-xl font-bold">{project.title}</h3>
                  </div>
                  <div className="flex space-x-2">
                    <button className="p-2 bg-white/20 rounded-lg hover:bg-white/30 transition-all duration-200 hover:scale-110">
                      <Github size={18} />
                    </button>
                    <button className="p-2 bg-white/20 rounded-lg hover:bg-white/30 transition-all duration-200 hover:scale-110">
                      <ExternalLink size={18} />
                    </button>
                  </div>
                </div>
                <p className="text-white/90 leading-relaxed">{project.description}</p>
              </div>

              {/* Project Body */}
              <div className="p-6">
                {/* Technologies */}
                <div className="mb-6">
                  <h4 className="font-semibold text-gray-800 mb-3">Technologies Used:</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, index) => (
                      <span 
                        key={index}
                        className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium hover:bg-blue-200 transition-colors duration-200"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Features */}
                <div>
                  <h4 className="font-semibold text-gray-800 mb-3">Key Features:</h4>
                  <ul className="space-y-2">
                    {project.features.map((feature, index) => (
                      <li key={index} className={`flex items-start space-x-2 animate-fade-in-up animate-delay-${(index + 1) * 100}`}>
                        <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-gray-600">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}