import React from 'react';
import { motion } from 'framer-motion';
import { Award, ShieldCheck, FileSpreadsheet, Milestone } from 'lucide-react';

const certificationsData = [
  {
    title: 'Python for Beginners',
    provider: 'Infosys Springboard',
    icon: <ShieldCheck className="text-accent" size={24} />,
    color: 'from-blue-500/10 to-transparent',
    desc: 'Acquired core competencies in Python syntax, programming algorithms, object-oriented concepts, and elementary script automation.',
  },
  {
    title: 'Mastering Data Structures and Algorithms',
    provider: 'Specialized Training',
    icon: <Milestone className="text-accent" size={24} />,
    color: 'from-amber-500/10 to-transparent',
    desc: 'Deep study of analytical methodologies, tree structures, sorting frameworks, linear lists, and algorithms to maximize solution efficiency.',
  },
  {
    title: 'Certified in C and C++ Training',
    provider: 'IIT Bombay',
    icon: <Award className="text-accent" size={24} />,
    color: 'from-emerald-500/10 to-transparent',
    desc: 'Underwent rigorous coursework focusing on procedural programming design, memory allocation pointers, classes, structures, and low-level control.',
  },
  {
    title: 'C Programming for Beginners',
    provider: 'Udemy',
    icon: <FileSpreadsheet className="text-accent" size={24} />,
    color: 'from-purple-500/10 to-transparent',
    desc: 'Learned operational principles of C compilation, loop configurations, memory scopes, functional code modularity, and arrays.',
  },
];

export default function Certifications() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <section 
      id="certifications" 
      className="py-20 md:py-28 bg-white dark:bg-neutral-950 transition-colors duration-300 relative"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex items-center justify-center space-x-2 text-accent dark:text-accent-light font-semibold tracking-wider text-sm uppercase mb-3"
          >
            <Award size={16} />
            <span>Verifications</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl sm:text-4xl font-extrabold text-neutral-900 dark:text-white"
          >
            Certifications
          </motion.h2>
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="w-16 h-1 bg-accent mx-auto mt-4 rounded-full"
          />
        </div>

        {/* Certifications Deck */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {certificationsData.map((cert, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="glow-card glass p-6 md:p-8 rounded-2xl border border-neutral-200/50 dark:border-neutral-800 shadow-md hover:shadow-lg transition-all duration-350 flex items-start space-x-5"
            >
              {/* Left Column icon */}
              <div className="p-3.5 rounded-xl bg-accent/10 dark:bg-accent/25 shrink-0">
                {cert.icon}
              </div>

              {/* Info columns */}
              <div className="flex-1">
                <span className="inline-flex px-2 py-0.5 rounded bg-neutral-100 dark:bg-neutral-900 border border-neutral-200/60 dark:border-neutral-800 text-[10px] font-bold text-neutral-500 dark:text-neutral-450 uppercase mb-2">
                  {cert.provider}
                </span>
                
                <h3 className="text-base sm:text-lg font-bold text-neutral-900 dark:text-white mb-2 leading-snug">
                  {cert.title}
                </h3>
                
                <p className="text-xs sm:text-sm text-neutral-500 dark:text-neutral-400 leading-relaxed">
                  {cert.desc}
                </p>
              </div>

            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
