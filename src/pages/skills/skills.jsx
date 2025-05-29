import React from 'react';
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaSass,
  FaGitAlt,
  FaGithub,
  FaReact,
} from 'react-icons/fa';
import { SiTailwindcss } from 'react-icons/si';

const Skills = () => {
  const skills = [
    {
      name: 'HTML',
      icon: <FaHtml5 className="text-8xl text-orange-500" />,
      description: 'Advanced HTML5 Features & Semantic Markup',
      color: 'border-orange-500/20 bg-orange-500/10',
    },
    {
      name: 'CSS',
      icon: <FaCss3Alt className="text-8xl text-blue-500" />,
      description: 'Modern CSS3, Flexbox & Grid',
      color: 'border-blue-500/20 bg-blue-500/10',
    },
    {
      name: 'JavaScript',
      icon: <FaJs className="text-8xl text-yellow-400" />,
      description: 'ES6+, DOM Manipulation & Async Programming',
      color: 'border-yellow-400/20 bg-yellow-400/10',
    },
    {
      name: 'Sass',
      icon: <FaSass className="text-8xl text-pink-500" />,
      description: 'Advanced CSS Preprocessing',
      color: 'border-pink-500/20 bg-pink-500/10',
    },
    {
      name: 'Git',
      icon: <FaGitAlt className="text-8xl text-orange-600" />,
      description: 'Version Control & Collaboration',
      color: 'border-orange-600/20 bg-orange-600/10',
    },
    {
      name: 'GitHub',
      icon: <FaGithub className="text-8xl text-white" />,
      description: 'Repository Management & CI/CD',
      color: 'border-gray-500/20 bg-gray-500/10',
    },
    {
      name: 'React',
      icon: <FaReact className="text-8xl text-cyan-400 animate-spin-slow" />,
      description: 'Modern React with Hooks & Context',
      color: 'border-cyan-400/20 bg-cyan-400/10',
    },
    {
      name: 'Tailwind',
      icon: <SiTailwindcss className="text-8xl text-teal-400" />,
      description: 'Utility-First CSS Framework',
      color: 'border-teal-400/20 bg-teal-400/10',
    },
  ];

  return (
    <section id="skills" className="bg-gradient-to-b from-gray-900 via-black to-gray-900 text-gray-200 px-8 py-20">
      <div className="max-w-6xl mx-auto text-center space-y-12">
        <h2 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-red-500 to-yellow-400">
          My Skills
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8">
          {skills.map((skill, index) => (
            <div key={index} className="group relative h-[220px] perspective-1000">
              <div className="relative w-full h-full transition-all duration-500 preserve-3d group-hover:rotate-y-180">
                {/* Front - Only Logo */}
                <div className={`absolute w-full h-full rounded-xl border-2 ${skill.color} p-8 flex items-center justify-center backface-hidden shadow-lg hover:shadow-xl transition-shadow duration-300`}>
                  {skill.icon}
                </div>

                {/* Back - Name and Description */}
                <div className={`invisible group-hover:visible absolute w-full h-full rounded-xl border-2 ${skill.color} p-6 flex flex-col items-center justify-center gap-4 backface-hidden rotate-y-180 shadow-lg`}>
                  <h3 className="text-2xl font-bold text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-150">
                    {skill.name}
                  </h3>
                  <p className="text-sm text-gray-200 text-center leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-200">
                    {skill.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
