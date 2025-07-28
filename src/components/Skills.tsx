import React from 'react';

export function Skills() {
  const skills = [
    { name: 'React', level: 40, color: 'bg-blue-500', delay: 'animate-delay-100' },
    { name: 'JavaScript', level: 85, color: 'bg-yellow-500', delay: 'animate-delay-200' },
    { name: 'HTML', level: 90, color: 'bg-orange-500', delay: 'animate-delay-300' },
    { name: 'CSS', level: 85, color: 'bg-blue-400', delay: 'animate-delay-400' },
    { name: 'Java', level: 75, color: 'bg-red-500', delay: 'animate-delay-500' },
    { name: 'Python', level: 70, color: 'bg-green-500', delay: 'animate-delay-100' },
    { name: 'MongoDB', level: 65, color: 'bg-green-600', delay: 'animate-delay-200' },
    { name: 'MySQL', level: 70, color: 'bg-blue-600', delay: 'animate-delay-300' },
    { name: 'Git & GitHub', level: 80, color: 'bg-gray-700', delay: 'animate-delay-400' },
  ];

  const categories = [
    {
      title: 'Frontend Technologies',
      techs: ['React', 'JavaScript', 'HTML', 'CSS']
    },
    {
      title: 'Programming Languages',
      techs: ['Java', 'Python', 'JavaScript']
    },
    {
      title: 'Databases',
      techs: ['MongoDB', 'MySQL']
    },
    {
      title: 'Tools & Version Control',
      techs: ['Git & GitHub']
    }
  ];

  return (
    <section id="skills" className="py-20 bg-gray-50 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 scroll-animate">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Technical Skills</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Skills Progress Bars */}
          <div className="scroll-animate">
            <h3 className="text-2xl font-bold text-gray-900 mb-8">Proficiency Levels</h3>
            <div className="space-y-6">
              {skills.map((skill, index) => (
                <div key={index} className={`animate-fade-in-left ${skill.delay}`}>
                  <div className="flex justify-between mb-2">
                    <span className="text-gray-700 font-medium">{skill.name}</span>
                    <span className="text-gray-600">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
                    <div 
                      className={`h-3 rounded-full ${skill.color} transition-all duration-2000 ease-out hover-glow`}
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Skills Categories */}
          <div className="scroll-animate">
            <h3 className="text-2xl font-bold text-gray-900 mb-8">Technology Stack</h3>
            <div className="space-y-6">
              {categories.map((category, index) => (
                <div key={index} className={`bg-white p-6 rounded-lg shadow-md hover-lift animate-fade-in-right animate-delay-${(index + 1) * 100}`}>
                  <h4 className="text-lg font-semibold text-gray-900 mb-4">{category.title}</h4>
                  <div className="flex flex-wrap gap-2">
                    {category.techs.map((tech, techIndex) => (
                      <span 
                        key={techIndex}
                        className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium hover:bg-blue-200 transition-colors duration-200"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}