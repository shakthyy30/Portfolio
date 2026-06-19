import React from 'react';
import { motion } from 'framer-motion';
import { Trophy, Users, Presentation, Calendar, Award } from 'lucide-react';

const achievementsData = [
  {
    title: 'Student Mentor',
    category: 'Leadership & Mentorship',
    icon: <Users size={24} className="text-accent" />,
    description: 'Serving as a guide and mentor for peers and junior students, helping them navigate code logic, project implementation, and academic core concepts.',
    date: 'Active',
  },
  {
    title: 'Paper Presentation at ASTRANOVA 2K26',
    category: 'Coimbatore Institute of Technology',
    icon: <Presentation size={24} className="text-accent" />,
    description: 'Successfully prepared and presented a technical research paper, validating emerging trends in Information Technology before an academic panel.',
    date: '2026',
  },
];

export default function Achievements() {
  return (
    <section 
      id="achievements" 
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
            <Trophy size={16} />
            <span>Honors & Roles</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl sm:text-4xl font-extrabold text-neutral-900 dark:text-white"
          >
            Achievements
          </motion.h2>
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="w-16 h-1 bg-accent mx-auto mt-4 rounded-full"
          />
        </div>

        {/* Achievements Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {achievementsData.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glow-card glass p-6 md:p-8 rounded-2xl border border-neutral-200/50 dark:border-neutral-800 shadow-md hover:shadow-lg flex flex-col justify-between"
            >
              <div>
                {/* Header */}
                <div className="flex items-start justify-between gap-4 mb-6">
                  <div>
                    <span className="inline-flex px-2 py-0.5 rounded bg-neutral-100 dark:bg-neutral-900 border border-neutral-200/60 dark:border-neutral-800 text-[10px] font-bold text-neutral-500 dark:text-neutral-450 uppercase mb-2">
                      {item.category}
                    </span>
                    <h3 className="text-lg font-bold text-neutral-900 dark:text-white leading-tight">
                      {item.title}
                    </h3>
                  </div>
                  <div className="p-3 rounded-xl bg-accent/10 dark:bg-accent/25 shrink-0">
                    {item.icon}
                  </div>
                </div>

                <p className="text-xs sm:text-sm text-neutral-500 dark:text-neutral-400 leading-relaxed mb-6">
                  {item.description}
                </p>
              </div>

              {/* Footer row with Date tag */}
              <div className="flex items-center space-x-1.5 text-xs font-semibold text-accent dark:text-accent-light border-t border-neutral-100 dark:border-neutral-850 pt-4">
                <Calendar size={14} />
                <span>{item.date}</span>
              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
