import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Calendar, Award } from 'lucide-react';

const educationData = [
  {
    institution: 'Sri Eshwar College of Engineering',
    degree: 'B.Tech Information Technology',
    period: '2024 – 2028',
    detailLabel: 'CGPA',
    detailValue: '7.55',
    description: 'Currently pursuing information technology studies with a core curriculum in Data Structures, Object-Oriented Programming, Database Management Systems, and Web Application Architectures.',
  },
  {
    institution: 'PMG Matriculation Higher Secondary School',
    degree: 'Higher Secondary Certificate (HSC)',
    period: 'Completed Schooling',
    detailLabel: 'Aggregate',
    detailValue: '71.5%',
    description: 'Specialized in Computer Science, Mathematics, Physics, and Chemistry. Developed foundational logic and coding principles.',
  },
  {
    institution: 'PMG Matriculation Higher Secondary School',
    degree: 'Secondary School Leaving Certificate (SSLC)',
    period: 'Completed Schooling',
    detailLabel: 'Aggregate',
    detailValue: '77.8%',
    description: 'Completed general education focusing on science, mathematics, and communicative English.',
  },
];

export default function Education() {
  return (
    <section 
      id="education" 
      className="py-20 md:py-28 bg-white dark:bg-neutral-950 transition-colors duration-300 relative"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex items-center justify-center space-x-2 text-accent dark:text-accent-light font-semibold tracking-wider text-sm uppercase mb-3"
          >
            <GraduationCap size={16} />
            <span>Academic Journey</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl sm:text-4xl font-extrabold text-neutral-900 dark:text-white"
          >
            Education
          </motion.h2>
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="w-16 h-1 bg-accent mx-auto mt-4 rounded-full"
          />
        </div>

        {/* Timeline Layout */}
        <div className="relative max-w-4xl mx-auto">
          {/* Vertical central bar (centered on desktop, left aligned on mobile) */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-[2px] bg-neutral-200 dark:bg-neutral-800 -translate-x-[1px]" />

          <div className="space-y-16">
            {educationData.map((item, index) => {
              const isEven = index % 2 === 0;

              return (
                <div 
                  key={index} 
                  className={`relative flex flex-col md:flex-row items-start ${
                    isEven ? 'md:flex-row-reverse' : ''
                  }`}
                >
                  {/* Timeline dot */}
                  <div className="absolute left-4 md:left-1/2 w-6 h-6 rounded-full bg-white dark:bg-neutral-950 border-4 border-accent dark:border-accent-light -translate-x-[11px] z-10 flex items-center justify-center">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent dark:bg-accent-light animate-ping" />
                  </div>

                  {/* Spacer for structural balance on large viewports */}
                  <div className="hidden md:block w-1/2" />

                  {/* Timeline Card */}
                  <motion.div
                    initial={{ opacity: 0, x: isEven ? 40 : -40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: '-100px' }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    className="w-full md:w-1/2 pl-12 md:pl-0 md:px-8"
                  >
                    <div className="glow-card glass p-6 md:p-8 rounded-2xl border border-neutral-200/50 dark:border-neutral-800 shadow-lg relative group hover:shadow-xl transition-all duration-300">
                      
                      {/* Period indicator */}
                      <div className="flex items-center space-x-1.5 text-xs font-semibold text-accent dark:text-accent-light mb-3">
                        <Calendar size={14} />
                        <span>{item.period}</span>
                      </div>

                      {/* Header Title */}
                      <h3 className="text-lg md:text-xl font-bold text-neutral-900 dark:text-white group-hover:text-accent dark:group-hover:text-accent-light transition-colors duration-300">
                        {item.institution}
                      </h3>
                      
                      <p className="text-sm font-semibold text-neutral-600 dark:text-neutral-300 mt-1">
                        {item.degree}
                      </p>

                      {/* Score Highlight Box */}
                      <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-lg bg-neutral-100 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 text-xs font-semibold text-neutral-700 dark:text-neutral-300 mt-4 mb-4">
                        <Award size={14} className="text-accent" />
                        <span>
                          {item.detailLabel}: <strong className="text-neutral-950 dark:text-white font-extrabold">{item.detailValue}</strong>
                        </span>
                      </div>

                      {/* Detailed Description */}
                      <p className="text-xs md:text-sm text-neutral-500 dark:text-neutral-400 leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </motion.div>

                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
