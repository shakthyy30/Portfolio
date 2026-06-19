import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Phone, MapPin, Send, CheckCircle2, AlertCircle } from 'lucide-react';

const GithubIcon = ({ size = 20, className = "" }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
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
    xmlns="http://www.w3.org/2000/svg"
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

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }
    if (!formData.message.trim()) newErrors.message = 'Message is required';
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = validate();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setErrors({});
    setIsSubmitting(true);

    // Simulate API request delay
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);
      setFormData({ name: '', email: '', message: '' });
      
      // Auto close success popup after 5 seconds
      setTimeout(() => {
        setSubmitSuccess(false);
      }, 5000);
    }, 1500);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  return (
    <section 
      id="contact" 
      className="py-20 md:py-28 bg-neutral-50 dark:bg-neutral-900/50 transition-colors duration-300 relative overflow-hidden"
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
            <Mail size={16} />
            <span>Get In Touch</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl sm:text-4xl font-extrabold text-neutral-900 dark:text-white"
          >
            Contact Me
          </motion.h2>
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="w-16 h-1 bg-accent mx-auto mt-4 rounded-full"
          />
        </div>

        {/* Form & Info Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 max-w-5xl mx-auto">
          
          {/* Left Column: Direct Info Cards */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 flex flex-col justify-between space-y-6"
          >
            <div className="space-y-6">
              <h3 className="text-xl font-bold text-neutral-900 dark:text-white mb-2">
                Let's Discuss Opportunities!
              </h3>
              <p className="text-sm text-neutral-500 dark:text-neutral-400 mb-8 leading-relaxed">
                Whether you have a full-stack project scope, an internship opportunity, or simply want to say hello, feel free to drop a message or reach out on my socials.
              </p>

              {/* Direct Info List */}
              <div className="space-y-4">
                
                {/* Email card */}
                <div className="flex items-center space-x-4 p-4 rounded-xl glass border border-neutral-200/50 dark:border-neutral-800 shadow-sm hover:border-accent/30 transition-colors">
                  <div className="p-3 rounded-lg bg-accent/10 dark:bg-accent/25 text-accent dark:text-accent-light shrink-0">
                    <Mail size={18} />
                  </div>
                  <div>
                    <span className="block text-[10px] text-neutral-400 dark:text-neutral-550 font-semibold uppercase tracking-wider">Email Me</span>
                    <a href="mailto:shakthilogitha.h2024it@sece.ac.in" className="text-sm font-bold text-neutral-805 dark:text-neutral-200 hover:text-accent dark:hover:text-accent-light transition-colors break-all">
                      shakthilogitha.h2024it@sece.ac.in
                    </a>
                  </div>
                </div>

                {/* Phone card */}
                <div className="flex items-center space-x-4 p-4 rounded-xl glass border border-neutral-200/50 dark:border-neutral-800 shadow-sm hover:border-accent/30 transition-colors">
                  <div className="p-3 rounded-lg bg-accent/10 dark:bg-accent/25 text-accent dark:text-accent-light shrink-0">
                    <Phone size={18} />
                  </div>
                  <div>
                    <span className="block text-[10px] text-neutral-400 dark:text-neutral-550 font-semibold uppercase tracking-wider">Call Me</span>
                    <a href="tel:+917305770344" className="text-sm font-bold text-neutral-805 dark:text-neutral-200 hover:text-accent dark:hover:text-accent-light transition-colors">
                      +91 7305770344
                    </a>
                  </div>
                </div>

                {/* Location card */}
                <div className="flex items-center space-x-4 p-4 rounded-xl glass border border-neutral-200/50 dark:border-neutral-800 shadow-sm">
                  <div className="p-3 rounded-lg bg-accent/10 dark:bg-accent/25 text-accent dark:text-accent-light shrink-0">
                    <MapPin size={18} />
                  </div>
                  <div>
                    <span className="block text-[10px] text-neutral-400 dark:text-neutral-550 font-semibold uppercase tracking-wider">Location</span>
                    <span className="text-sm font-bold text-neutral-805 dark:text-neutral-200">
                      Coimbatore, Tamil Nadu, India
                    </span>
                  </div>
                </div>

              </div>
            </div>

            {/* Social handles mini-row */}
            <div className="flex space-x-4 pt-6">
              <a
                href="https://linkedin.com/in/shakthilogitha-h"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center space-x-2 px-4 py-2.5 rounded-xl border border-neutral-200 dark:border-neutral-800 text-neutral-600 dark:text-neutral-400 hover:text-white hover:bg-[#0077b5] dark:hover:bg-[#0077b5] hover:border-[#0077b5] transition-all duration-300 font-semibold text-xs sm:text-sm cursor-pointer flex-1"
              >
                <LinkedinIcon size={16} />
                <span>LinkedIn</span>
              </a>
              <a
                href="https://github.com/shakthilogitha"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center space-x-2 px-4 py-2.5 rounded-xl border border-neutral-200 dark:border-neutral-800 text-neutral-600 dark:text-neutral-400 hover:text-white hover:bg-black dark:hover:bg-neutral-800 hover:border-black transition-all duration-300 font-semibold text-xs sm:text-sm cursor-pointer flex-1"
              >
                <GithubIcon size={16} />
                <span>GitHub</span>
              </a>
            </div>
          </motion.div>

          {/* Right Column: Contact Message Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7"
          >
            <div className="glow-card glass p-6 md:p-8 rounded-2xl border border-neutral-200/50 dark:border-neutral-800 shadow-xl relative">
              
              {/* Form Element */}
              <form onSubmit={handleSubmit} className="space-y-5">
                
                {/* Name field */}
                <div className="space-y-1.5">
                  <label htmlFor="name" className="text-xs sm:text-sm font-bold text-neutral-700 dark:text-neutral-300">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 rounded-xl border bg-white/50 dark:bg-neutral-900/50 text-neutral-900 dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-accent/50 transition-all duration-200 ${
                      errors.name ? 'border-red-500' : 'border-neutral-200 dark:border-neutral-800'
                    }`}
                    placeholder="Your name"
                  />
                  {errors.name && (
                    <div className="flex items-center space-x-1.5 text-xs text-red-500 mt-1">
                      <AlertCircle size={12} />
                      <span>{errors.name}</span>
                    </div>
                  )}
                </div>

                {/* Email field */}
                <div className="space-y-1.5">
                  <label htmlFor="email" className="text-xs sm:text-sm font-bold text-neutral-700 dark:text-neutral-300">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 rounded-xl border bg-white/50 dark:bg-neutral-900/50 text-neutral-900 dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-accent/50 transition-all duration-200 ${
                      errors.email ? 'border-red-500' : 'border-neutral-200 dark:border-neutral-800'
                    }`}
                    placeholder="you@example.com"
                  />
                  {errors.email && (
                    <div className="flex items-center space-x-1.5 text-xs text-red-500 mt-1">
                      <AlertCircle size={12} />
                      <span>{errors.email}</span>
                    </div>
                  )}
                </div>

                {/* Message field */}
                <div className="space-y-1.5">
                  <label htmlFor="message" className="text-xs sm:text-sm font-bold text-neutral-700 dark:text-neutral-300">
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows="4"
                    value={formData.message}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 rounded-xl border bg-white/50 dark:bg-neutral-900/50 text-neutral-900 dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-accent/50 transition-all duration-200 resize-none ${
                      errors.message ? 'border-red-500' : 'border-neutral-200 dark:border-neutral-800'
                    }`}
                    placeholder="Hi Shakthi, I would like to discuss..."
                  />
                  {errors.message && (
                    <div className="flex items-center space-x-1.5 text-xs text-red-500 mt-1">
                      <AlertCircle size={12} />
                      <span>{errors.message}</span>
                    </div>
                  )}
                </div>

                {/* Submit button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3.5 px-6 rounded-xl bg-accent hover:bg-accent-dark text-white font-semibold flex items-center justify-center space-x-2 shadow-lg shadow-accent/25 hover:shadow-accent/45 transition-all duration-300 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      <span className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      <span>Sending message...</span>
                    </>
                  ) : (
                    <>
                      <span>Send Message</span>
                      <Send size={16} />
                    </>
                  )}
                </button>

              </form>

              {/* Success Pop-up overlay */}
              <AnimatePresence>
                {submitSuccess && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    className="absolute inset-0 rounded-2xl bg-white/95 dark:bg-neutral-950/95 flex flex-col items-center justify-center p-8 text-center backdrop-blur-sm z-20"
                  >
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ type: 'spring', stiffness: 200, damping: 15 }}
                      className="w-16 h-16 rounded-full bg-emerald-500/10 dark:bg-emerald-500/25 flex items-center justify-center text-emerald-500 mb-6"
                    >
                      <CheckCircle2 size={36} />
                    </motion.div>
                    <h3 className="text-xl font-bold text-neutral-905 dark:text-white mb-2">
                      Message Sent Successfully!
                    </h3>
                    <p className="text-xs sm:text-sm text-neutral-500 dark:text-neutral-450 max-w-sm mb-6 leading-relaxed">
                      Thank you for reaching out! I have received your message and will respond to you as soon as possible.
                    </p>
                    <button
                      onClick={() => setSubmitSuccess(false)}
                      className="px-5 py-2.5 rounded-lg border border-neutral-200 dark:border-neutral-850 font-semibold text-xs sm:text-sm hover:bg-neutral-100 dark:hover:bg-neutral-900 transition-colors cursor-pointer text-neutral-700 dark:text-neutral-300"
                    >
                      Close Window
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
