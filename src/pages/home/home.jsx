import React, { useRef, useState } from "react";
import girl from "../images/girl.png";
import logo from "../../assets/images/logo.png"
import EasyFolio from "../images/EasyFolio-bootstrap-website-template.webp";
import Restaurantly from "../images/Restaurantly.png";
import QuickStart from "../images/QuickStart.webp";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaSass,
  FaGitAlt,
  FaReact,
} from 'react-icons/fa';
import { SiTailwindcss } from 'react-icons/si'; // هادي مهمة!
import emailjs from '@emailjs/browser';
import Skills from '../skills/skills';

export default function Home() {
  const form = useRef();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState({ message: '', isError: false });

  const scrollToProjects = () => {
    const projectsSection = document.getElementById('projects');
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus({ message: '', isError: false });

    emailjs.sendForm(
      'service_01qobub', 
      'template_d77sba6', 
      form.current,
      'xwX3vQmemn6_I8VeL' 
    )
      .then(() => {
        setSubmitStatus({ message: 'Message sent!', isError: false });
        form.current.reset();
      })
      .catch(() => {
        setSubmitStatus({ message: 'Failed to send message. Please try again.', isError: true });
      })
      .finally(() => {
        setIsSubmitting(false);
      });
  };

  return (
    <>
      {/* Hero Section */}
      <section
        id="home"
        className="min-h-screen bg-gradient-to-b from-gray-900 via-black to-gray-900 text-gray-200 flex items-center justify-center px-8 py-16 pt-24"
      >
        <div className="max-w-7xl w-full flex flex-col md:flex-row items-center justify-between gap-12">
          {/* Text & Intro */}
          <div className="md:w-1/2 space-y-8 text-center md:text-left">
            <h1 className="text-6xl font-extrabold tracking-tight text-gradient bg-clip-text text-transparent bg-gradient-to-r from-pink-400 via-red-500 to-yellow-400">
              Baidi Khadija
            </h1>

            <p className="text-xl md:text-2xl max-w-lg mx-auto md:mx-0 leading-relaxed font-light text-gray-300">
              Full Stack Web Developer crafting sleek, scalable, and performant web applications tailored for an exceptional user experience.
            </p>

            {/* Social Icons */}
            <div className="flex justify-center md:justify-start space-x-8 text-pink-400 text-3xl mt-6">
              <a
                href="https://www.linkedin.com/in/khadija-baidi"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-yellow-400 transition duration-300"
                aria-label="LinkedIn"
              >
                <FaLinkedin />
              </a>
              <a
                href="https://github.com/khadija-baidi"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-yellow-400 transition duration-300"
                aria-label="GitHub"
              >
                <FaGithub />
              </a>
            </div>

            {/* CTA Button */}
            <button 
              onClick={scrollToProjects}
              className="mt-8 px-8 py-4 bg-gradient-to-r from-pink-500 to-yellow-400 text-black font-semibold rounded-full shadow-lg hover:brightness-110 transition duration-300 transform hover:scale-105 active:scale-95"
            >
              Discover my work ↓
            </button>
          </div>

          {/* Image */}
          <div className="md:w-1/2 mt-12 md:mt-0">
            <img
              src={girl}
              alt="Coding illustration"
              className="rounded-3xl w-full max-h-[70vh] object-cover shadow-2xl transition-transform duration-700 hover:scale-105 hover:rotate-3"
            />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section
        id="about"
        className="bg-gradient-to-b from-black via-gray-900 to-black text-gray-200 px-8 py-20"
      >
        <div className="max-w-5xl mx-auto text-center space-y-8">
          <h2 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-red-500 to-yellow-400">
            About Me
          </h2>
          <p className="text-lg md:text-xl leading-relaxed text-gray-300 max-w-3xl mx-auto">
            I'm <span className="text-pink-400 font-semibold">Khadija Baidi</span>, a full stack developer focused on delivering clean, modern, and responsive web applications. I believe in simplicity, performance, and elegant UI/UX.
          </p>
        </div>
      </section>

      <section
        id="projects"
        className="bg-gradient-to-b from-gray-900 via-black to-gray-900 text-gray-200 px-8 py-20"
      >
        <div className="max-w-6xl mx-auto space-y-12">
          <h2 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-red-500 to-yellow-400 text-center">
            My Projects
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-10">
            {/* Project 1 */}
            <div className="group relative bg-gray-800 rounded-lg shadow-lg overflow-hidden transform transition-all duration-500 hover:scale-105 hover:-translate-y-2 hover:shadow-2xl">
              <div className="relative overflow-hidden">
                <img
                  src={EasyFolio}
                  alt="EasyFolio-bootstrap"
                  className="w-full h-48 object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <div className="p-6 relative z-10">
                <h3 className="text-xl font-semibold mb-2 text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-yellow-400 group-hover:from-yellow-400 group-hover:to-pink-400 transition-all duration-300">
                  EasyFolio-bootstrap
                </h3>
                <p className="text-gray-400 mb-4 group-hover:text-gray-300 transition-colors duration-300">
                  a portfolio template from bootstrap
                </p>
                <a
                  href="https://khadija-baidi.github.io/khadija_baidi_finalproject/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block px-6 py-2 bg-gradient-to-r from-pink-500 to-yellow-400 text-black font-semibold rounded-full transform transition-all duration-300 hover:scale-105 hover:shadow-lg hover:from-yellow-400 hover:to-pink-500"
                >
                  View Project
                </a>
              </div>
            </div>

            {/* Project 2 */}
            <div className="group relative bg-gray-800 rounded-lg shadow-lg overflow-hidden transform transition-all duration-500 hover:scale-105 hover:-translate-y-2 hover:shadow-2xl">
              <div className="relative overflow-hidden">
                <img
                  src={Restaurantly}
                  alt="Restaurantly"
                  className="w-full h-48 object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <div className="p-6 relative z-10">
                <h3 className="text-xl font-semibold mb-2 text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-yellow-400 group-hover:from-yellow-400 group-hover:to-pink-400 transition-all duration-300">
                  Restaurantly
                </h3>
                <p className="text-gray-400 mb-4 group-hover:text-gray-300 transition-colors duration-300">
                  a restaurant website.
                </p>
                <a
                  href="https://khadija-baidi.github.io/baidi_khadija_finalproject_dom/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block px-6 py-2 bg-gradient-to-r from-pink-500 to-yellow-400 text-black font-semibold rounded-full transform transition-all duration-300 hover:scale-105 hover:shadow-lg hover:from-yellow-400 hover:to-pink-500"
                >
                  View Project
                </a>
              </div>
            </div>

            {/* Project 3 */}
            <div className="group relative bg-gray-800 rounded-lg shadow-lg overflow-hidden transform transition-all duration-500 hover:scale-105 hover:-translate-y-2 hover:shadow-2xl">
              <div className="relative overflow-hidden">
                <img
                  src={QuickStart}
                  alt="quick start"
                  className="w-full h-48 object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <div className="p-6 relative z-10">
                <h3 className="text-xl font-semibold mb-2 text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-yellow-400 group-hover:from-yellow-400 group-hover:to-pink-400 transition-all duration-300">
                  Quick Start
                </h3>
                <p className="text-gray-400 mb-4 group-hover:text-gray-300 transition-colors duration-300">
                  Basic website template.
                </p>
                <a
                  href="https://khadija-baidi.github.io/QuickStart/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block px-6 py-2 bg-gradient-to-r from-pink-500 to-yellow-400 text-black font-semibold rounded-full transform transition-all duration-300 hover:scale-105 hover:shadow-lg hover:from-yellow-400 hover:to-pink-500"
                >
                  View Project
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <Skills />

      {/* Contact Section */}
      <section
        id="contact"
        className="bg-gradient-to-b from-black via-gray-900 to-black text-gray-200 px-8 py-20"
      >
        <div className="max-w-5xl mx-auto text-center space-y-8">
          <h2 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-red-500 to-yellow-400">
            Contact Me
          </h2>
          <p className="text-lg md:text-xl leading-relaxed text-gray-300 max-w-3xl mx-auto">
            Feel free to reach out for collaborations or just a friendly hello 👋
          </p>

          {/* Contact form with EmailJS */}
          <form ref={form} onSubmit={sendEmail} className="max-w-md mx-auto space-y-4">
            <input
              type="text"
              name="user_name"
              placeholder="Your Name"
              required
              className="w-full px-4 py-3 rounded bg-gray-800 text-gray-200 focus:outline-none focus:ring-2 focus:ring-pink-400"
            />
            <input
              type="email"
              name="user_email"
              placeholder="Your Email"
              required
              className="w-full px-4 py-3 rounded bg-gray-800 text-gray-200 focus:outline-none focus:ring-2 focus:ring-pink-400"
            />
            <textarea
              name="message"
              placeholder="Your Message"
              required
              rows="5"
              className="w-full px-4 py-3 rounded bg-gray-800 text-gray-200 focus:outline-none focus:ring-2 focus:ring-pink-400"
            ></textarea>
            
            {submitStatus.message && (
              <div className={`text-sm ${submitStatus.isError ? 'text-red-400' : 'text-green-400'}`}>
                {submitStatus.message}
              </div>
            )}
            
            <button
              type="submit"
              disabled={isSubmitting}
              className={`w-full py-3 bg-gradient-to-r from-pink-500 to-yellow-400 text-black font-semibold rounded-full shadow-lg transition duration-300 ${
                isSubmitting ? 'opacity-75 cursor-not-allowed' : 'hover:brightness-110'
              }`}
            >
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </button>
          </form>

          {/* Social Links Section */}
          <div className="mt-16 pt-16 border-t border-gray-800">
            <h3 className="text-2xl font-bold mb-8 text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-yellow-400">
              Let's Connect
            </h3>
            <div className="flex justify-center items-center gap-8">
              <a
                href="https://github.com/khadija-baidi"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative"
              >
                <div className="absolute -inset-2 bg-gradient-to-r from-pink-500 to-yellow-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur"></div>
                <FaGithub className="text-4xl relative text-white hover:text-gray-200 transition-colors duration-300" />
              </a>

              <a
                href="mailto:khadijabaidi2001@gmail.com"
                className="group relative"
              >
                <div className="absolute -inset-2 bg-gradient-to-r from-pink-500 to-yellow-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur"></div>
                <FaEnvelope className="text-4xl relative text-white hover:text-gray-200 transition-colors duration-300" />
              </a>

              <a
                href="https://www.linkedin.com/in/khadija-baidi"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative"
              >
                <div className="absolute -inset-2 bg-gradient-to-r from-pink-500 to-yellow-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur"></div>
                <FaLinkedin className="text-4xl relative text-white hover:text-gray-200 transition-colors duration-300" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
