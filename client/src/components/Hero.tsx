import { motion } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';

export default function Hero() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8 },
    },
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: 'url(/hero-bg.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-black/40 dark:bg-black/60" />
      </div>

      {/* Animated Background Elements */}
      <motion.div
        className="absolute top-20 left-10 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20"
        animate={{
          y: [0, 50, 0],
          x: [0, 30, 0],
        }}
        transition={{ duration: 8, repeat: Infinity }}
      />
      <motion.div
        className="absolute bottom-20 right-10 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20"
        animate={{
          y: [0, -50, 0],
          x: [0, -30, 0],
        }}
        transition={{ duration: 8, repeat: Infinity, delay: 2 }}
      />

      {/* Content */}
      <motion.div
        className="relative z-10 container mx-auto px-4 text-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Badge */}
        <motion.div
          variants={itemVariants}
          className="mb-6 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 dark:bg-white/5 border border-white/20 backdrop-blur-md"
        >
          <Sparkles size={16} className="text-blue-400" />
          <span className="text-sm font-medium text-white">
            Welcome to Wave Draft
          </span>
        </motion.div>

        {/* Main Heading */}
        <motion.h1
          variants={itemVariants}
          className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight"
        >
          Accelerate Your
          <br />
          <span className="gradient-text">Digital Presence</span>
        </motion.h1>

        {/* Subheading */}
        <motion.p
          variants={itemVariants}
          className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto mb-8"
        >
          Unlock your brand's potential with cutting-edge digital marketing strategies.
          From branding to growth, we deliver results that matter.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <motion.button
            onClick={() => scrollToSection('contact')}
            className="px-8 py-4 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-all flex items-center justify-center gap-2 group"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Start Your Project
            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </motion.button>
          <motion.button
            onClick={() => scrollToSection('services')}
            className="px-8 py-4 border-2 border-white text-white rounded-lg font-semibold hover:bg-white/10 transition-all"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            View Services
          </motion.button>
        </motion.div>

        {/* Floating Stats */}
        <motion.div
  variants={itemVariants}
  className="mt-16 grid grid-cols-2 gap-6 max-w-md mx-auto place-items-center"
>
  {[
    { number: '500+', label: 'Projects Completed' },
    { number: '98%', label: 'Client Satisfaction' },
  ].map((stat, index) => (
    <motion.div
      key={index}
      className="text-center"
      whileHover={{ y: -5 }}
    >
      <div className="text-3xl font-bold text-white mb-1">
        {stat.number}
      </div>
      <div className="text-sm text-white/60">
        {stat.label}
      </div>
    </motion.div>
  ))}
</motion.div>

      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="text-white/60 text-sm mb-2">Scroll to explore</div>
        <div className="w-6 h-10 border-2 border-white/60 rounded-full flex items-start justify-center p-2">
          <motion.div
            className="w-1 h-2 bg-white/60 rounded-full"
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </div>
      </motion.div>
    </section>
  );
}
