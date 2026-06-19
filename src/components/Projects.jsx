import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Briefcase, Filter, ExternalLink, Code2, ListTodo } from 'lucide-react';

const projectsData = [
  {
    id: 1,
    title: 'Campus Mailroom Management System',
    category: 'python-django',
    tech: ['Python', 'Django', 'MongoDB', 'Bootstrap'],
    features: [
      'Package Tracking',
      'Recipient Notifications',
      'Delivery Status Updates',
      'Staff Management',
      'Search Functionality',
    ],
    description: 'An automation platform for campus mailrooms that optimizes incoming mail sortation, tracks packages, and sends instant automated notifications to students upon package arrival.',
    bgGrad: 'from-red-650/40 to-neutral-900',
    svgGraphic: (
      <svg className="w-full h-full opacity-80" viewBox="0 0 400 200" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="400" height="200" fill="#17171f"/>
        {/* Abstract mailroom items */}
        <rect x="50" y="60" width="100" height="70" rx="6" fill="#dc2626" fillOpacity="0.2" stroke="#dc2626" strokeWidth="2"/>
        <path d="M50 70L100 100L150 70" stroke="#dc2626" strokeWidth="2"/>
        <circle cx="280" cy="100" r="45" stroke="#f43f5e" strokeWidth="2" strokeDasharray="5 5"/>
        <circle cx="280" cy="100" r="15" fill="#f43f5e"/>
        {/* Connecting line */}
        <path d="M150 95H235" stroke="#ffe3e3" strokeWidth="1.5" strokeDasharray="3 3"/>
      </svg>
    )
  },
  {
    id: 2,
    title: 'Password Generator',
    category: 'python-django',
    tech: ['Python', 'Django', 'MongoDB'],
    features: [
      'Strong Password Generation',
      'Multiple Character Options',
      'Secure Generation',
      'User Friendly Interface',
    ],
    description: 'A security tool developed to generate cryptographically secure, random passwords. Users can fine-tune length, number constraints, and special characters via a clean UI.',
    bgGrad: 'from-amber-600/20 to-neutral-900',
    svgGraphic: (
      <svg className="w-full h-full opacity-80" viewBox="0 0 400 200" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="400" height="200" fill="#17171f"/>
        {/* Shield and Key abstract representation */}
        <path d="M200 40C200 40 240 50 240 80C240 120 200 150 200 150C200 150 160 120 160 80C160 50 200 40 200 40Z" stroke="#dc2626" strokeWidth="2" fill="#dc2626" fillOpacity="0.1"/>
        <circle cx="200" cy="85" r="18" stroke="#ffe3e3" strokeWidth="2"/>
        <path d="M200 103V125M192 115H208M192 125H208" stroke="#ffe3e3" strokeWidth="2"/>
      </svg>
    )
  },
  {
    id: 3,
    title: 'Bicycle Sharing System',
    category: 'mern',
    tech: ['MERN Stack', 'React', 'Node.js', 'Express', 'MongoDB'],
    features: [
      'Bicycle Booking',
      'Rent and Return System',
      'Real-time Slot Availability',
      'Secure Payments',
      'Maintenance Tracking',
    ],
    description: 'A full-stack rental platform supporting localized micro-mobility. Built with React and Express, it manages bicycle inventories, geolocated hubs, and rental schedules.',
    bgGrad: 'from-rose-600/30 to-neutral-900',
    svgGraphic: (
      <svg className="w-full h-full opacity-80" viewBox="0 0 400 200" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="400" height="200" fill="#17171f"/>
        {/* Bicycle wheels abstract */}
        <circle cx="120" cy="110" r="30" stroke="#dc2626" strokeWidth="2"/>
        <circle cx="120" cy="110" r="8" fill="#dc2626"/>
        <circle cx="280" cy="110" r="30" stroke="#dc2626" strokeWidth="2"/>
        <circle cx="280" cy="110" r="8" fill="#dc2626"/>
        {/* Bike frame */}
        <path d="M120 110L180 60H260L280 110M180 60L230 110M120 110L230 110" stroke="#ffe3e3" strokeWidth="2"/>
        <path d="M165 48H195M250 55L270 48" stroke="#ffe3e3" strokeWidth="2"/>
      </svg>
    )
  },
];

export default function Projects() {
  const [filter, setFilter] = useState('all');

  const filteredProjects = projectsData.filter((project) => {
    if (filter === 'all') return true;
    return project.category === filter;
  });

  return (
    <section 
      id="projects" 
      className="py-20 md:py-28 bg-neutral-50 dark:bg-neutral-900/50 transition-colors duration-300 relative"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex items-center justify-center space-x-2 text-accent dark:text-accent-light font-semibold tracking-wider text-sm uppercase mb-3"
          >
            <Briefcase size={16} />
            <span>My Works</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl sm:text-4xl font-extrabold text-neutral-900 dark:text-white"
          >
            Projects
          </motion.h2>
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="w-16 h-1 bg-accent mx-auto mt-4 rounded-full"
          />
        </div>

        {/* Filter Tabs */}
        <div className="flex justify-center items-center space-x-2 sm:space-x-4 mb-16">
          <button
            onClick={() => setFilter('all')}
            className={`px-4 py-2 text-xs sm:text-sm font-semibold rounded-xl border transition-all duration-300 flex items-center space-x-2 cursor-pointer ${
              filter === 'all'
                ? 'bg-accent border-accent text-white shadow-md shadow-accent/20'
                : 'border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 text-neutral-600 dark:text-neutral-400 hover:border-accent dark:hover:border-accent hover:text-accent dark:hover:text-accent-light'
            }`}
          >
            <Filter size={14} />
            <span>All Projects</span>
          </button>
          
          <button
            onClick={() => setFilter('mern')}
            className={`px-4 py-2 text-xs sm:text-sm font-semibold rounded-xl border transition-all duration-300 flex items-center space-x-2 cursor-pointer ${
              filter === 'mern'
                ? 'bg-accent border-accent text-white shadow-md shadow-accent/20'
                : 'border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 text-neutral-600 dark:text-neutral-400 hover:border-accent dark:hover:border-accent hover:text-accent dark:hover:text-accent-light'
            }`}
          >
            <Code2 size={14} />
            <span>MERN Stack</span>
          </button>

          <button
            onClick={() => setFilter('python-django')}
            className={`px-4 py-2 text-xs sm:text-sm font-semibold rounded-xl border transition-all duration-300 flex items-center space-x-2 cursor-pointer ${
              filter === 'python-django'
                ? 'bg-accent border-accent text-white shadow-md shadow-accent/20'
                : 'border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 text-neutral-600 dark:text-neutral-400 hover:border-accent dark:hover:border-accent hover:text-accent dark:hover:text-accent-light'
            }`}
          >
            <Code2 size={14} />
            <span>Python & Django</span>
          </button>
        </div>

        {/* Projects Grid */}
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                layout
                key={project.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                className="glow-card glass flex flex-col h-full rounded-2xl border border-neutral-200/50 dark:border-neutral-800 overflow-hidden shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
              >
                
                {/* SVG Graphics Frame */}
                <div className="relative aspect-video w-full overflow-hidden border-b border-neutral-200 dark:border-neutral-800 flex items-center justify-center bg-neutral-950">
                  {project.svgGraphic}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent pointer-events-none" />
                  <span className="absolute bottom-3 left-4 text-xs font-semibold px-2 py-0.5 rounded bg-black/60 text-white backdrop-blur-sm uppercase">
                    {project.category === 'mern' ? 'MERN Stack' : 'Django / Python'}
                  </span>
                </div>

                {/* Card Info Content */}
                <div className="p-6 md:p-8 flex flex-col flex-1">
                  
                  {/* Technology Badges */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((t, idx) => (
                      <span
                        key={idx}
                        className="px-2.5 py-0.5 rounded-md bg-neutral-100 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 text-[10px] sm:text-xs font-bold text-neutral-600 dark:text-neutral-400"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  {/* Title & Description */}
                  <h3 className="text-lg md:text-xl font-bold text-neutral-900 dark:text-white mb-2 leading-tight">
                    {project.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-neutral-500 dark:text-neutral-400 mb-6 leading-relaxed flex-1">
                    {project.description}
                  </p>

                  {/* Features List */}
                  <div className="border-t border-neutral-100 dark:border-neutral-850 pt-5">
                    <h4 className="text-xs font-bold text-neutral-850 dark:text-neutral-300 uppercase tracking-wider mb-3 flex items-center space-x-1.5">
                      <ListTodo size={14} className="text-accent" />
                      <span>Key Features:</span>
                    </h4>
                    
                    <ul className="space-y-1.5 text-xs sm:text-sm text-neutral-600 dark:text-neutral-450 mb-4">
                      {project.features.map((feature, fIdx) => (
                        <li key={fIdx} className="flex items-center space-x-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-accent shrink-0" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

      </div>
    </section>
  );
}
