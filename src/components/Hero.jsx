import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Mail, ArrowRight, Download, MessageSquare, Briefcase } from 'lucide-react';

const GithubIcon = ({ size = 20, className = "" }) => (
  <svg
    xmlns="http://www.w3.org/2050/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

const LinkedinIcon = ({ size = 20, className = "" }) => (
  <svg
    xmlns="http://www.w3.org/2050/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const roles = [
  'B.Tech Information Technology Student',
  'Full Stack Developer',
  'MERN Stack Enthusiast',
  'Python Learner'
];

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(150);

  // Custom typing animation logic
  useEffect(() => {
    let timer;
    const currentFullRole = roles[roleIndex];

    if (!isDeleting) {
      // Typing
      timer = setTimeout(() => {
        setDisplayText(currentFullRole.substring(0, displayText.length + 1));
        setTypingSpeed(100);
      }, typingSpeed);

      if (displayText === currentFullRole) {
        // Hold for 2 seconds, then delete
        timer = setTimeout(() => {
          setIsDeleting(true);
        }, 2000);
      }
    } else {
      // Deleting
      timer = setTimeout(() => {
        setDisplayText(currentFullRole.substring(0, displayText.length - 1));
        setTypingSpeed(50);
      }, typingSpeed);

      if (displayText === '') {
        setIsDeleting(false);
        setRoleIndex((prev) => (prev + 1) % roles.length);
      }
    }

    return () => clearTimeout(timer);
  }, [displayText, isDeleting, roleIndex, typingSpeed]);

  return (
    <section 
      id="home" 
      className="relative min-h-[90vh] md:min-h-screen flex items-center justify-center pt-24 pb-12 overflow-hidden bg-white dark:bg-neutral-950 transition-colors duration-300 grid-bg-light dark:grid-bg-dark"
    >
      {/* Dynamic Background Glows */}
      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-72 h-72 md:w-96 md:h-96 rounded-full bg-accent/10 dark:bg-accent/15 blur-3xl pointer-events-none animate-pulse-glow" />
      <div className="absolute bottom-1/4 right-1/4 translate-x-1/2 translate-y-1/2 w-72 h-72 md:w-96 md:h-96 rounded-full bg-red-600/5 dark:bg-red-900/10 blur-3xl pointer-events-none animate-pulse-glow" style={{ animationDelay: '3s' }} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Text & CTAs */}
          <div className="lg:col-span-7 text-center lg:text-left order-2 lg:order-1">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center space-x-2 px-3 py-1.5 rounded-full bg-accent/10 dark:bg-accent/20 border border-accent/20 text-accent dark:text-accent-light text-xs font-semibold mb-6"
            >
              <span>Welcome to my professional space</span>
              <span className="w-2.5 h-2.5 rounded-full bg-accent animate-ping" />
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-neutral-900 dark:text-white leading-tight mb-4"
            >
              Hi, I'm <span className="text-accent dark:text-accent-light relative">
                Shakthi Logitha H
                <span className="absolute bottom-0 left-0 w-full h-[6px] bg-accent/20 rounded" />
              </span>
            </motion.h1>

            {/* Typing Role Animation */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="h-8 md:h-10 mb-6 flex items-center justify-center lg:justify-start"
            >
              <h2 className="text-xl md:text-2xl font-semibold text-neutral-700 dark:text-neutral-300">
                <span className="text-neutral-900 dark:text-neutral-100">{displayText}</span>
                <span className="inline-block w-[3px] h-5 md:h-6 ml-1 bg-accent dark:bg-accent-light animate-[pulse_1s_infinite] align-middle" />
              </h2>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-base md:text-lg text-neutral-600 dark:text-neutral-400 max-w-xl mb-8 leading-relaxed"
            >
              "Passionate about building innovative web applications and solving real-world problems through technology."
            </motion.p>

            {/* Buttons / CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex flex-wrap items-center justify-center lg:justify-start gap-4 mb-8"
            >
              <a
                href="#contact"
                className="group px-6 py-3.5 rounded-xl bg-accent hover:bg-accent-dark text-white font-semibold flex items-center space-x-2 shadow-lg shadow-accent/25 hover:shadow-accent/40 transition-all duration-300 cursor-pointer"
              >
                <span>Contact Me</span>
                <MessageSquare size={18} className="group-hover:translate-x-1 transition-transform" />
              </a>

              <a
                href="#projects"
                className="group px-6 py-3.5 rounded-xl border border-neutral-300 dark:border-neutral-700 text-neutral-700 dark:text-neutral-200 hover:text-accent dark:hover:text-accent-light hover:border-accent dark:hover:border-accent font-semibold flex items-center space-x-2 bg-transparent dark:bg-neutral-900/50 hover:bg-neutral-50 dark:hover:bg-neutral-900/80 transition-all duration-300 cursor-pointer"
              >
                <span>View Projects</span>
                <Briefcase size={18} className="group-hover:scale-110 transition-transform" />
              </a>

              {/* Download Resume Link - points to public/Shakthi_Logitha_Resume.pdf */}
              <a
                href="/Shakthi_Logitha_Resume.pdf"
                download="Shakthi_Logitha_Resume.pdf"
                className="group px-6 py-3.5 rounded-xl bg-neutral-900 hover:bg-neutral-800 text-white font-semibold flex items-center space-x-2 shadow-lg hover:shadow-black/25 dark:bg-neutral-800 dark:hover:bg-neutral-700 transition-all duration-300 cursor-pointer"
              >
                <span>Download Resume</span>
                <Download size={18} className="group-hover:translate-y-0.5 transition-transform" />
              </a>
            </motion.div>

            {/* Social Icons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="flex items-center justify-center lg:justify-start space-x-4 border-t border-neutral-100 dark:border-neutral-900 pt-6"
            >
              <span className="text-sm font-medium text-neutral-500 dark:text-neutral-400">Connect with me:</span>
              <a
                href="https://linkedin.com/in/shakthilogitha-h"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-lg border border-neutral-200 dark:border-neutral-800 text-neutral-600 dark:text-neutral-400 hover:text-white hover:bg-[#0077b5] hover:border-[#0077b5] dark:hover:bg-[#0077b5] dark:hover:border-[#0077b5] transition-all duration-300 cursor-pointer"
                aria-label="LinkedIn"
              >
                <LinkedinIcon size={18} />
              </a>
              <a
                href="https://github.com/shakthilogitha"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-lg border border-neutral-200 dark:border-neutral-800 text-neutral-600 dark:text-neutral-400 hover:text-white hover:bg-black hover:border-black dark:hover:bg-neutral-800 dark:hover:border-neutral-800 transition-all duration-300 cursor-pointer"
                aria-label="GitHub"
              >
                <GithubIcon size={18} />
              </a>
              <a
                href="mailto:shakthilogitha.h2024it@sece.ac.in"
                className="p-2.5 rounded-lg border border-neutral-200 dark:border-neutral-800 text-neutral-600 dark:text-neutral-400 hover:text-white hover:bg-accent hover:border-accent dark:hover:bg-accent dark:hover:border-accent transition-all duration-300 cursor-pointer"
                aria-label="Email"
              >
                <Mail size={18} />
              </a>
            </motion.div>
          </div>

          {/* Right Column: Interactive Animated Graphic */}
          <div className="lg:col-span-5 flex justify-center order-1 lg:order-2">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, ease: 'easeOut' }}
              className="relative w-72 h-72 sm:w-80 sm:h-80 md:w-96 md:h-96"
            >
              {/* Outer floating ring */}
              <motion.div 
                className="absolute inset-0 rounded-full border border-dashed border-neutral-200 dark:border-neutral-800 animate-[spin_40s_linear_infinite]"
              />

              {/* Glowing back-orb */}
              <div className="absolute inset-4 rounded-full bg-gradient-to-tr from-accent/20 to-red-500/5 dark:from-accent/30 dark:to-transparent blur-xl animate-float" />

              {/* Main Tech Concept Graphic */}
              <div className="absolute inset-6 rounded-2xl bg-neutral-900 border border-neutral-800 shadow-2xl p-6 overflow-hidden flex flex-col justify-between select-none">
                {/* Header bar */}
                <div className="flex items-center justify-between border-b border-neutral-800 pb-3">
                  <div className="flex space-x-1.5">
                    <span className="w-3 h-3 rounded-full bg-red-500" />
                    <span className="w-3 h-3 rounded-full bg-yellow-500" />
                    <span className="w-3 h-3 rounded-full bg-green-500" />
                  </div>
                  <span className="text-[10px] font-mono text-neutral-500">shakthi.js</span>
                </div>

                {/* Code snippets mockup */}
                <div className="flex-1 font-mono text-xs text-neutral-400 py-4 space-y-2">
                  <div>
                    <span className="text-red-500">const</span> student = &#123;
                  </div>
                  <div className="pl-4">
                    name: <span className="text-amber-300">'Shakthi Logitha H'</span>,
                  </div>
                  <div className="pl-4">
                    major: <span className="text-amber-300">'Information Tech'</span>,
                  </div>
                  <div className="pl-4">
                    skills: [<span className="text-emerald-400">'MERN'</span>, <span className="text-emerald-400">'Python'</span>, <span className="text-emerald-400">'Cloud'</span>],
                  </div>
                  <div className="pl-4">
                    status: <span className="text-blue-400">'Building Solutions'</span>
                  </div>
                  <div>&#125;;</div>
                  <div className="pt-2 text-accent/80 font-bold">
                    &gt; student.buildImpactfulApp()
                  </div>
                </div>

                {/* Status indicator */}
                <div className="flex items-center space-x-2 text-[10px] font-mono text-neutral-500 border-t border-neutral-800 pt-3">
                  <span className="w-2 h-2 rounded-full bg-accent animate-ping" />
                  <span>Developer active on port: 3000</span>
                </div>
              </div>

              {/* Floating badges */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-4 -right-4 px-3 py-1.5 rounded-lg glass border border-neutral-200/50 dark:border-neutral-800 shadow-md text-xs font-semibold text-neutral-800 dark:text-neutral-200 flex items-center space-x-2"
              >
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
                <span>MERN Stack</span>
              </motion.div>

              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 2 }}
                className="absolute -bottom-4 -left-4 px-3 py-1.5 rounded-lg glass border border-neutral-200/50 dark:border-neutral-800 shadow-md text-xs font-semibold text-neutral-800 dark:text-neutral-200 flex items-center space-x-2"
              >
                <span className="w-2.5 h-2.5 rounded-full bg-blue-500" />
                <span>Python</span>
              </motion.div>
            </motion.div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
