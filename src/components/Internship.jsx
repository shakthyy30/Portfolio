import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Calendar, MapPin, CheckCircle2 } from 'lucide-react';

const internshipDetails = {
  company: 'iGenuine Solutions Pvt Ltd',
  role: 'MERN Stack Winter Intern',
  period: 'Winter Internship Session',
  location: 'Remote / Hybrid',
  bullets: [
    'Acquired knowledge on real-world problem solving through full-stack application development.',
    'Worked with MERN Stack technologies (MongoDB, Express.js, React, Node.js) to build interactive components.',
    'Developed backend logic, route handlers, and database integration structures.',
    'Improved understanding of designing secure, modular, and scalable applications.',
  ],
};

export default function Internship() {
  return (
    <section 
      id="experience" 
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
            <Briefcase size={16} />
            <span>Professional Experience</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl sm:text-4xl font-extrabold text-neutral-900 dark:text-white"
          >
            Internships
          </motion.h2>
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="w-16 h-1 bg-accent mx-auto mt-4 rounded-full"
          />
        </div>

        {/* Experience layout block */}
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="glow-card glass p-8 md:p-10 rounded-2xl border border-neutral-200/50 dark:border-neutral-800 shadow-xl relative overflow-hidden"
          >
            {/* Background design elements */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-accent/5 dark:bg-accent/10 rounded-bl-full blur-xl pointer-events-none" />

            {/* Header info */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8 pb-6 border-b border-neutral-100 dark:border-neutral-850">
              <div>
                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full bg-accent/10 text-accent dark:text-accent-light text-xs font-semibold mb-2">
                  Internship
                </span>
                <h3 className="text-xl md:text-2xl font-bold text-neutral-900 dark:text-white">
                  {internshipDetails.role}
                </h3>
                <p className="text-base font-semibold text-neutral-600 dark:text-neutral-400 mt-1">
                  {internshipDetails.company}
                </p>
              </div>

              <div className="flex flex-row md:flex-col items-start gap-4 md:gap-2 text-xs sm:text-sm text-neutral-500 dark:text-neutral-500">
                <div className="flex items-center space-x-1.5 font-medium">
                  <Calendar size={16} className="text-accent" />
                  <span>{internshipDetails.period}</span>
                </div>
                <div className="flex items-center space-x-1.5 font-medium">
                  <MapPin size={16} className="text-accent" />
                  <span>{internshipDetails.location}</span>
                </div>
              </div>
            </div>

            {/* Bullets mapping */}
            <div className="space-y-4">
              <h4 className="text-sm font-bold text-neutral-850 dark:text-neutral-300 uppercase tracking-wider mb-2">
                Key Learning Outcomes & Tasks:
              </h4>

              <div className="grid grid-cols-1 gap-4">
                {internshipDetails.bullets.map((bullet, index) => (
                  <motion.div 
                    key={index}
                    initial={{ opacity: 0, x: -15 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="flex items-start space-x-3.5"
                  >
                    <CheckCircle2 size={20} className="text-accent dark:text-accent-light shrink-0 mt-0.5" />
                    <p className="text-sm md:text-base text-neutral-600 dark:text-neutral-400 leading-relaxed">
                      {bullet}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>

          </motion.div>
        </div>

      </div>
    </section>
  );
}
