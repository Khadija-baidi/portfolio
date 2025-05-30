import React, { useEffect } from "react";
import "./about.css";

export default function About() {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('show');
        }
      });
    });

    const hiddenElements = document.querySelectorAll('.hidden-element');
    hiddenElements.forEach((el) => observer.observe(el));

    return () => {
      hiddenElements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <section
      id="about"
      className="min-h-screen px-6 py-12 max-w-6xl mx-auto text-white bg-[#1c1b1b] rounded-lg shadow-lg mt-12"
    >
      <h2 className="text-4xl font-bold mb-6 text-[#f2c0b5] hidden-element">About Me</h2>
      <p className="text-lg leading-relaxed text-gray-300 hidden-element">
        Hello! I'm Khadija Baidi, a passionate Full Stack Developer dedicated to building modern,
        user-friendly web applications with a strong focus on performance and design.
      </p>
    </section>
  );
}
