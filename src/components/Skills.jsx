import React from 'react';
import { motion } from 'framer-motion';
import { Code, Layout, Server, Database, Wrench, BookOpen, Terminal } from 'lucide-react';

const skillCategories = [
  {
    title: 'Programming Languages',
    icon: <Terminal size={20} className="text-accent" />,
    skills: [
      { name: 'C', level: '85%' },
      { name: 'C++', level: '80%' },
      { name: 'Java', level: '75%' },
      { name: 'JavaScript', level: '85%' },
      { name: 'Python', level: '80%' },
      { name: 'HTML', level: '95%' },
      { name: 'CSS', level: '90%' },
    ],
  },
  {
    title: 'Frontend Development',
    icon: <Layout size={20} className="text-accent" />,
    skills: [
      { name: 'ReactJS', level: '85%' },
      { name: 'Bootstrap', level: '90%' },
      { name: 'Tailwind CSS', level: '90%' },
    ],
  },
  {
    title: 'Backend Development',
    icon: <Server size={20} className="text-accent" />,
    skills: [
      { name: 'Node.js', level: '80%' },
      { name: 'Express.js', level: '80%' },
      { name: 'REST APIs', level: '85%' },
      { name: 'Spring Boot', level: '65%' },
    ],
  },
  {
    title: 'Databases',
    icon: <Database size={20} className="text-accent" />,
    skills: [
      { name: 'MongoDB', level: '80%' },
      { name: 'SQL', level: '85%' },
    ],
  },
  {
    title: 'Tools & DevOps',
    icon: <Wrench size={20} className="text-accent" />,
    skills: [
      { name: 'Git', level: '90%' },
      { name: 'GitHub', level: '90%' },
      { name: 'Postman', level: '85%' },
      { name: 'GitHub Actions', level: '70%' },
      { name: 'AWS', level: '65%' },
    ],
  },
  {
    title: 'Core Concepts',
    icon: <BookOpen size={20} className="text-accent" />,
    skills: [
      { name: 'DSA', level: '80%' },
      { name: 'OOPS', level: '85%' },
      { name: 'DBMS', level: '85%' },
    ],
  },
];

export default function Skills() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: 'easeOut' },
    },
  };

  return (
    <section 
      id="skills" 
      className="py-20 md:py-28 bg-neutral-50 dark:bg-neutral-900/50 transition-colors duration-300 relative"
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
            <Code size={16} />
            <span>Abilities & Toolkit</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl sm:text-4xl font-extrabold text-neutral-900 dark:text-white"
          >
            My Skills
          </motion.h2>
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="w-16 h-1 bg-accent mx-auto mt-4 rounded-full"
          />
        </div>

        {/* Skill Card Deck */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              className="glow-card glass p-6 md:p-8 rounded-2xl border border-neutral-200/50 dark:border-neutral-800 shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
            >
              {/* Category Header */}
              <div className="flex items-center space-x-3 mb-6 pb-3 border-b border-neutral-100 dark:border-neutral-800">
                <div className="p-2 rounded-lg bg-accent/10 dark:bg-accent/20">
                  {category.icon}
                </div>
                <h3 className="text-lg font-bold text-neutral-900 dark:text-white">
                  {category.title}
                </h3>
              </div>

              {/* Skills List inside Card */}
              <div className="space-y-4">
                {category.skills.map((skill, sIdx) => (
                  <div key={sIdx} className="space-y-1.5">
                    <div className="flex justify-between items-center text-xs sm:text-sm">
                      <span className="font-semibold text-neutral-700 dark:text-neutral-300">
                        {skill.name}
                      </span>
                      <span className="text-neutral-500 dark:text-neutral-500 font-mono">
                        {skill.level}
                      </span>
                    </div>

                    {/* Progress Bar Container */}
                    <div className="w-full h-1.5 bg-neutral-200 dark:bg-neutral-800 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: skill.level }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.1 + (sIdx * 0.05), ease: 'easeOut' }}
                        className="h-full bg-gradient-to-r from-accent to-red-500 rounded-full"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
