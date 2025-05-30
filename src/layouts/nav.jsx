import React, { useState } from 'react';
import { FaLinkedin, FaGithub, FaBars, FaTimes, FaEnvelope } from 'react-icons/fa';

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);


  function navLinks() {
    const links = [
      { href: "#home", label: "HOME", tooltip: "Back to Top" },
      { href: "#about", label: "ABOUT", tooltip: "Learn About Me" },
      { href: "#projects", label: "PROJECTS", tooltip: "View My Work" },
      { href: "#skills", label: "SKILLS", tooltip: "My Expertise" },
      { href: "#contact", label: "CONTACT", tooltip: "Get in Touch" },
    ];

    return links.map(({ href, label, tooltip }) => (
      <li key={label} className="group relative">
        <a href={href} className="relative inline-block hover:text-yellow-300 transition duration-200">
          {label}
          <span className="absolute left-0 bottom-0 w-full h-0.5 bg-yellow-300 transform scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100"></span>
          <span className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 px-3 py-1 text-sm bg-yellow-300 text-black rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap">
            {tooltip}
          </span>
        </a>
      </li>
    ));
  }

  return (
    <nav className="w-full flex items-center justify-between px-6 md:px-10 py-4 bg-gradient-to-r from-slate-900 via-purple-900 to-slate-800 text-white shadow-lg fixed top-0 z-50">
      {}
      <img
  src="../../src/assets/images/logo.png"
  alt="Logo"
  className="w-12 h-12 rounded-full object-cover shadow-md hover:scale-110 transition-transform duration-300 cursor-pointer"
/>


      {}
      <div className="md:hidden text-2xl cursor-pointer" onClick={toggleMenu}>
        {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
      </div>

      {}
      <ul className="hidden md:flex space-x-8 lg:space-x-10 font-medium text-lg">
        {navLinks()}
      </ul>

      {}
      {isMobileMenuOpen && (
        <ul className="absolute top-20 left-0 w-full bg-slate-900 text-white flex flex-col items-center space-y-6 py-6 md:hidden transition-all duration-300 z-40">
          {navLinks()}
        </ul>
      )}

      {}
      <div className="hidden md:flex space-x-5 text-xl">
        {socialIcons()}
      </div>
    </nav>
  );
}

function socialIcons() {
  const socials = [
    {
      href: "https://www.linkedin.com/in/khadija-baidi",
      icon: <FaLinkedin className="transform hover:scale-110 transition-transform duration-300" />,
      label: "LinkedIn",
      tooltip: "Connect on LinkedIn"
    },
    {
      href: "https://github.com/khadija-baidi",
      icon: <FaGithub className="transform hover:scale-110 transition-transform duration-300" />,
      label: "GitHub",
      tooltip: "View GitHub Profile"
    },
    {
      href: "mailto:khadijabaidi2@gmail.com",
      icon: <FaEnvelope className="transform hover:scale-110 transition-transform duration-300" />,
      label: "Gmail",
      tooltip: "Send me an email"
    }
  ];

  return socials.map(({ href, icon, label, tooltip }) => (
    <a
      key={label}
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="group relative hover:text-yellow-300 transition duration-200"
      aria-label={label}
    >
      {icon}
      <span className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 px-3 py-1 text-sm bg-yellow-300 text-black rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap">
        {tooltip}
      </span>
    </a>
  ));
}
