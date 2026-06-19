import React from 'react';
import { motion } from 'framer-motion';
import { User, Code2, GraduationCap, Flame } from 'lucide-react';

const stats = [
  { icon: <GraduationCap className="text-accent" size={24} />, label: 'Institution', val: 'SECE' },
  { icon: <Code2 className="text-accent" size={24} />, label: 'Tech Focus', val: 'Full Stack & Python' },
  { icon: <Flame className="text-accent" size={24} />, label: 'Aspirations', val: 'Cloud Solutions' },
];

export default function About() {
  return (
    <section 
      id="about" 
      className="py-20 md:py-28 bg-neutral-50 dark:bg-neutral-900/50 transition-colors duration-300 relative"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex items-center justify-center space-x-2 text-accent dark:text-accent-light font-semibold tracking-wider text-sm uppercase mb-3"
          >
            <User size={16} />
            <span>Discover</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl sm:text-4xl font-extrabold text-neutral-900 dark:text-white"
          >
            About Me
          </motion.h2>
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="w-16 h-1 bg-accent mx-auto mt-4 rounded-full"
          />
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Panel: Graphic & Highlights */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 flex flex-col space-y-6"
          >
            <div className="glow-card glass p-8 rounded-2xl border border-neutral-200/50 dark:border-neutral-800 shadow-xl relative overflow-hidden">
              <div className="absolute -top-10 -right-10 w-32 h-32 bg-accent/5 dark:bg-accent/10 rounded-full blur-xl" />
              <h3 className="text-xl font-bold text-neutral-900 dark:text-white mb-4">Shakthi Logitha H</h3>
              <p className="text-sm text-neutral-500 dark:text-neutral-400 mb-6">
                B.Tech Information Technology student focused on translating theoretical principles into secure, modern, and interactive full-stack software.
              </p>

              {/* Contact mini-grid */}
              <div className="space-y-3 border-t border-neutral-100 dark:border-neutral-800 pt-6 text-sm text-neutral-600 dark:text-neutral-300">
                <div className="flex justify-between">
                  <span className="font-semibold">Current Education:</span>
                  <span className="text-neutral-500 dark:text-neutral-400">B.Tech IT (2024-2028)</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-semibold">College:</span>
                  <span className="text-neutral-500 dark:text-neutral-400">Sri Eshwar College</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-semibold">Interests:</span>
                  <span className="text-neutral-500 dark:text-neutral-400">Web App, Cloud, Python</span>
                </div>
              </div>
            </div>

            {/* Quick stats mini-row */}
            <div className="grid grid-cols-3 gap-4">
              {stats.map((st, i) => (
                <div 
                  key={i} 
                  className="p-4 rounded-xl glass border border-neutral-200/50 dark:border-neutral-800 text-center flex flex-col items-center justify-center shadow-md hover:border-accent/40 dark:hover:border-accent-light/40 transition-colors duration-300"
                >
                  <div className="mb-2 p-1.5 rounded-lg bg-accent/10 dark:bg-accent/20">
                    {st.icon}
                  </div>
                  <span className="text-xs font-semibold text-neutral-800 dark:text-neutral-200 leading-tight">
                    {st.val}
                  </span>
                  <span className="text-[10px] text-neutral-500 dark:text-neutral-500 mt-1 uppercase tracking-wider font-semibold">
                    {st.label}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right Panel: Biography Narrative */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 flex flex-col space-y-6"
          >
            <div className="p-8 md:p-10 rounded-2xl glass border border-neutral-200/50 dark:border-neutral-800 shadow-xl">
              <h3 className="text-2xl font-bold text-neutral-900 dark:text-white mb-6">
                My Story & Ambitions
              </h3>
              
              <p className="text-base md:text-lg text-neutral-700 dark:text-neutral-300 leading-relaxed mb-6 font-medium">
                "I am a B.Tech Information Technology student at Sri Eshwar College of Engineering with a strong interest in Full Stack Development, Python, and Cloud Technologies. I enjoy creating scalable web applications and continuously improving my programming and problem-solving skills. I am passionate about learning emerging technologies and building impactful solutions."
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                <div className="p-5 rounded-xl border border-neutral-100 dark:border-neutral-800 bg-white/50 dark:bg-neutral-950/30">
                  <h4 className="font-bold text-neutral-900 dark:text-white mb-2 flex items-center space-x-2">
                    <span className="w-2 h-2 rounded-full bg-accent" />
                    <span>Creative Builder</span>
                  </h4>
                  <p className="text-sm text-neutral-600 dark:text-neutral-400">
                    I believe coding is the canvas. Designing sleek interfaces with responsive, componentized logic in the MERN stack is my main driver.
                  </p>
                </div>

                <div className="p-5 rounded-xl border border-neutral-100 dark:border-neutral-800 bg-white/50 dark:bg-neutral-950/30">
                  <h4 className="font-bold text-neutral-900 dark:text-white mb-2 flex items-center space-x-2">
                    <span className="w-2 h-2 rounded-full bg-accent" />
                    <span>Problem Solver</span>
                  </h4>
                  <p className="text-sm text-neutral-600 dark:text-neutral-400">
                    With an active interest in Algorithms and Data Structures, I focus on building efficient logic and clean, readable codebases.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
