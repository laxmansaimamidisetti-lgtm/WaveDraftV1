import { motion } from 'framer-motion';
import {
  Palette,
  Share2,
  Search,
  TrendingUp,
  Code,
  PenTool,
} from 'lucide-react';

const services = [
  {
    icon: Palette,
    title: 'Branding Strategy',
    description: 'Create a powerful brand identity that resonates with your audience and sets you apart from competitors.',
  },
  {
    icon: Share2,
    title: 'Social Media Marketing',
    description: 'Engage your audience across all platforms with strategic content and community management.',
  },
  {
    icon: Search,
    title: 'SEO Optimization',
    description: 'Boost your online visibility with proven SEO strategies that drive organic traffic.',
  },
  {
    icon: TrendingUp,
    title: 'Paid Ads Management',
    description: 'Maximize ROI with targeted advertising campaigns across Google, Facebook, and Instagram.',
  },
  {
    icon: Code,
    title: 'Web Design & Development',
    description: 'Build stunning, responsive websites that convert visitors into customers.',
  },
  {
    icon: PenTool,
    title: 'Content Creation',
    description: 'Craft compelling content that tells your story and drives engagement.',
  },
];

export default function Services() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section
      id="services"
      className="section-padding bg-gradient-to-b from-slate-50 to-white dark:from-slate-900 dark:to-slate-800"
    >
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Our <span className="gradient-text">Services</span>
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            Comprehensive digital marketing solutions tailored to your business needs
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={index}
                variants={cardVariants}
                className="glass-effect p-8 rounded-xl hover:shadow-xl transition-all duration-300 group"
                whileHover={{
                  y: -10,
                  boxShadow: '0 20px 40px rgba(59, 130, 246, 0.15)',
                }}
              >
                {/* Icon */}
                <motion.div
                  className="w-14 h-14 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center mb-6 group-hover:bg-blue-200 dark:group-hover:bg-blue-800/50 transition-colors"
                  whileHover={{ rotate: 10, scale: 1.1 }}
                >
                  <Icon size={28} className="text-blue-600 dark:text-blue-400" />
                </motion.div>

                {/* Title */}
                <h3 className="text-xl font-bold mb-3 text-foreground">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                  {service.description}
                </p>

                {/* Hover Arrow */}
                <motion.div
                  className="mt-6 flex items-center text-blue-600 dark:text-blue-400 font-semibold opacity-0 group-hover:opacity-100 transition-opacity"
                  initial={{ x: 0 }}
                  whileHover={{ x: 5 }}
                >
                  Learn More →
                </motion.div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
