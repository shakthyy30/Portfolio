import React from 'react';
import { motion } from 'framer-motion';
import { Terminal, ExternalLink, Code2, Award, CheckCircle2 } from 'lucide-react';

const profilesData = [
  {
    platform: 'LeetCode',
    statLabel: 'Problems Solved',
    statValue: '50+',
    accentColor: 'hover:border-[#ffa116]/40 dark:hover:border-[#ffa116]/40',
    btnBg: 'hover:bg-[#ffa116]/10 hover:text-[#ffa116]',
    url: 'https://leetcode.com/u/shakthilogitha/',
    description: 'Active practice in algorithmic puzzle solving, arrays, hash maps, and recursion to boost logic optimization and efficiency.',
  },
  {
    platform: 'SkillRack',
    statLabel: 'Daily Challenge Problems',
    statValue: '50+',
    accentColor: 'hover:border-emerald-500/40 dark:hover:border-emerald-500/40',
    btnBg: 'hover:bg-emerald-500/10 hover:text-emerald-500',
    url: 'https://www.skillrack.com/',
    description: 'Engaged in routine challenges tracking computer programming algorithms, syntax, and complex logical assessments.',
  },
  {
    platform: 'CodeChef',
    statLabel: 'Badge Earned',
    statValue: 'Bronze Badge',
    accentColor: 'hover:border-[#5b4636]/50 dark:hover:border-[#5b4636]/50',
    btnBg: 'hover:bg-[#5b4636]/10 hover:text-[#b18a6a]',
    url: 'https://www.codechef.com/',
    description: 'Participated in structural competitive contests validating performance structures and mathematical codebases.',
  },
];

export default function CodingProfiles() {
  return (
    <section 
      id="coding-profiles" 
      className="py-20 bg-neutral-50 dark:bg-neutral-900/50 transition-colors duration-300 relative"
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
            <Code2 size={16} />
            <span>Problem Solving Metrics</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl sm:text-4xl font-extrabold text-neutral-900 dark:text-white"
          >
            Coding Profiles
          </motion.h2>
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="w-16 h-1 bg-accent mx-auto mt-4 rounded-full"
          />
        </div>

        {/* Profiles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {profilesData.map((profile, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`glow-card glass p-6 md:p-8 rounded-2xl border border-neutral-200/50 dark:border-neutral-800 shadow-md flex flex-col justify-between transition-all duration-300 ${profile.accentColor}`}
            >
              <div>
                {/* Header */}
                <div className="flex items-center justify-between mb-6">
                  <span className="font-bold text-lg text-neutral-900 dark:text-white">
                    {profile.platform}
                  </span>
                  <div className="p-2 rounded-lg bg-accent/5 dark:bg-accent/10">
                    <Terminal size={18} className="text-accent" />
                  </div>
                </div>

                {/* Score highlight */}
                <div className="mb-4">
                  <div className="text-3xl font-extrabold text-accent dark:text-accent-light">
                    {profile.statValue}
                  </div>
                  <div className="text-xs text-neutral-500 mt-1 uppercase tracking-wider font-semibold">
                    {profile.statLabel}
                  </div>
                </div>

                <p className="text-xs sm:text-sm text-neutral-500 dark:text-neutral-400 mb-6 leading-relaxed">
                  {profile.description}
                </p>
              </div>

              {/* Visit Profile Button */}
              <a
                href={profile.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`w-full py-2.5 rounded-xl border border-neutral-200 dark:border-neutral-800 text-center font-semibold text-xs sm:text-sm text-neutral-700 dark:text-neutral-300 flex items-center justify-center space-x-2 bg-transparent transition-all duration-300 cursor-pointer ${profile.btnBg}`}
              >
                <span>Visit Profile</span>
                <ExternalLink size={14} />
              </a>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
