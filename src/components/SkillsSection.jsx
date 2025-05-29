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

const skills = [
  {
    name: 'HTML',
    icon: FaHtml5,
    color: 'text-orange-500',
    bgColor: 'bg-orange-500/10',
    borderColor: 'border-orange-500/20',
    description: 'Advanced HTML5 Features & Semantic Markup',
  },
  {
    name: 'CSS',
    icon: FaCss3Alt,
    color: 'text-blue-500',
    bgColor: 'bg-blue-500/10',
    borderColor: 'border-blue-500/20',
    description: 'Modern CSS3, Flexbox & Grid',
  },
  {
    name: 'JavaScript',
    icon: FaJs,
    color: 'text-yellow-400',
    bgColor: 'bg-yellow-400/10',
    borderColor: 'border-yellow-400/20',
    description: 'ES6+, DOM Manipulation & Async Programming',
  },
  {
    name: 'Sass',
    icon: FaSass,
    color: 'text-pink-500',
    bgColor: 'bg-pink-500/10',
    borderColor: 'border-pink-500/20',
    description: 'Advanced CSS Preprocessing',
  },
  {
    name: 'Git',
    icon: FaGitAlt,
    color: 'text-orange-600',
    bgColor: 'bg-orange-600/10',
    borderColor: 'border-orange-600/20',
    description: 'Version Control & Collaboration',
  },
  {
    name: 'GitHub',
    icon: FaGithub,
    color: 'text-white',
    bgColor: 'bg-gray-500/10',
    borderColor: 'border-gray-500/20',
    description: 'Repository Management & CI/CD',
  },
  {
    name: 'React',
    icon: FaReact,
    color: 'text-cyan-400',
    bgColor: 'bg-cyan-400/10',
    borderColor: 'border-cyan-400/20',
    description: 'Modern React with Hooks & Context',
  },
  {
    name: 'Tailwind',
    icon: SiTailwindcss,
    color: 'text-teal-400',
    bgColor: 'bg-teal-400/10',
    borderColor: 'border-teal-400/20',
    description: 'Utility-First CSS Framework',
  },
];

export default function SkillsSection() {
  return (
    <section id="skills" className="bg-gradient-to-b from-gray-900 via-black to-gray-900 text-gray-200 px-8 py-20">
      <div className="max-w-6xl mx-auto text-center space-y-12">
        <h2 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-red-500 to-yellow-400">
          My Skills
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
          {skills.map((skill) => (
            <div
              key={skill.name}
              className="group relative h-[200px] perspective-1000"
            >
              <div className="relative w-full h-full transition-transform duration-500 transform-gpu preserve-3d group-hover:rotate-y-180">
                {/* Front */}
                <div className={`absolute w-full h-full ${skill.bgColor} rounded-xl border ${skill.borderColor} p-6 flex flex-col items-center justify-center backface-hidden`}>
                  <skill.icon className={`text-5xl ${skill.color} group-hover:scale-110 transition-transform duration-300`} />
                  <h3 className={`mt-4 text-lg font-medium ${skill.color}`}>
                    {skill.name}
                  </h3>
                </div>

                {/* Back */}
                <div className={`absolute w-full h-full ${skill.bgColor} rounded-xl border ${skill.borderColor} p-6 flex items-center justify-center backface-hidden rotate-y-180`}>
                  <p className={`text-sm font-medium ${skill.color} text-center`}>
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
} 