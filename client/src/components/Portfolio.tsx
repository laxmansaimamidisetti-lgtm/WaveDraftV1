import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

const projects = [
  {
    id: 1,
    title: 'TechStart Branding',
    category: 'Branding',
    image: '/portfolio-1.jpg',
    description: 'Complete brand identity redesign for a tech startup, including logo, color palette, and brand guidelines.',
  },
  {
    id: 2,
    title: 'Social Campaign Success',
    category: 'Social Media',
    image: '/portfolio-2.jpg',
    description: 'Multi-platform social media campaign that increased engagement by 300% in 3 months.',
  },
  {
    id: 3,
    title: 'E-Commerce Platform',
    category: 'Web Design',
    image: '/portfolio-3.jpg',
    description: 'Full-stack e-commerce website with integrated payment gateway and inventory management.',
  },
  {
    id: 4,
    title: 'SEO Optimization',
    category: 'SEO',
    image: '/portfolio-1.jpg',
    description: 'Improved organic search rankings from page 5 to page 1 for 15+ target keywords.',
  },
  {
    id: 5,
    title: 'Paid Ads Strategy',
    category: 'Advertising',
    image: '/portfolio-2.jpg',
    description: 'Managed $500K+ in ad spend across Google and Facebook with 4.5x ROI.',
  },
  {
    id: 6,
    title: 'Content Marketing',
    category: 'Content',
    image: '/portfolio-3.jpg',
    description: 'Developed and executed comprehensive content strategy resulting in 50% more leads.',
  },
];

export default function Portfolio() {
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);

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
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section
      id="portfolio"
      className="section-padding bg-white dark:bg-slate-900"
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
            Our <span className="gradient-text">Portfolio</span>
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            Showcase of our best work and successful client projects
          </p>
        </motion.div>

        {/* Portfolio Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {projects.map((project) => (
            <motion.div
              key={project.id}
              variants={cardVariants}
              className="group cursor-pointer"
              onClick={() => setSelectedProject(project)}
              whileHover={{ y: -5 }}
            >
              <div className="relative overflow-hidden rounded-lg aspect-square bg-slate-200 dark:bg-slate-700">
                {/* Image */}
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/60 transition-colors duration-300 flex items-center justify-center">
                  <motion.div
                    className="text-center text-white opacity-0 group-hover:opacity-100 transition-opacity"
                    initial={{ y: 20 }}
                    whileHover={{ y: 0 }}
                  >
                    <div className="text-sm font-semibold text-blue-400 mb-2">
                      {project.category}
                    </div>
                    <h3 className="text-xl font-bold">{project.title}</h3>
                    <p className="text-sm text-white/80 mt-2">Click to view details</p>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              className="bg-white dark:bg-slate-900 rounded-xl max-w-2xl w-full overflow-hidden"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 z-10 p-2 bg-white/10 hover:bg-white/20 rounded-lg transition-colors"
              >
                <X size={24} className="text-foreground" />
              </button>

              {/* Image */}
              <div className="relative aspect-video overflow-hidden">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Content */}
              <div className="p-8">
                <div className="text-sm font-semibold text-blue-600 dark:text-blue-400 mb-2">
                  {selectedProject.category}
                </div>
                <h3 className="text-3xl font-bold mb-4">
                  {selectedProject.title}
                </h3>
                <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
                  {selectedProject.description}
                </p>

                {/* Action Button */}
                <motion.button
                  className="mt-6 px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  View Case Study
                </motion.button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
