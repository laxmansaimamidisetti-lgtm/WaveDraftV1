import { motion, useInView } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';
import { CheckCircle } from 'lucide-react';

function AnimatedCounter({ target }: { target: number }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (!isInView) return;

    let start = 0;
    const increment = target / 50;
    const interval = setInterval(() => {
      start += increment;
      if (start >= target) {
        setCount(target);
        clearInterval(interval);
      } else {
        setCount(Math.floor(start));
      }
    }, 30);

    return () => clearInterval(interval);
  }, [isInView, target]);

  return <span ref={ref}>{count}</span>;
}

export default function About() {
  const benefits = [
    'Expert team with 10+ years of experience',
    'Data-driven strategies and proven results',
    'Transparent communication and reporting',
    'Customized solutions for every business',
    'Dedicated account managers',
    'Continuous optimization and improvement',
  ];

  const stats = [
    { number: 2, label: 'Years of Experience', suffix: '+' },
    { number: 50, label: 'Projects Completed', suffix: '+' },
    { number: 98, label: 'Client Satisfaction', suffix: '%' },
    { number: 15, label: 'Team Members', suffix: '+' },
  ];

  return (
    <section
      id="about"
      className="section-padding bg-gradient-to-b from-white to-slate-50 dark:from-slate-900 dark:to-slate-800"
    >
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left - Image */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="relative aspect-square rounded-xl overflow-hidden">
              <img
                src="/portfolio-1.jpg"
                alt="About Wave Draft"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/20 to-transparent" />
            </div>

            {/* Floating Card */}
            <motion.div
              className="absolute -bottom-8 -right-8 bg-white dark:bg-slate-900 rounded-lg p-6 shadow-xl"
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              <div className="text-sm font-semibold text-slate-600 dark:text-slate-400">
                Award Winning
              </div>
              <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">
                #1 Agency
              </div>
            </motion.div>
          </motion.div>

          {/* Right - Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Why Choose
              <br />
              <span className="gradient-text">Wave Draft?</span>
            </h2>

            <p className="text-lg text-slate-600 dark:text-slate-400 mb-8 leading-relaxed">
              We're not just another digital marketing agency. We're your strategic partner
              committed to delivering measurable results and driving your business growth.
            </p>

            {/* Benefits List */}
            <div className="space-y-4 mb-8">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  className="flex items-start gap-3"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <CheckCircle size={24} className="text-blue-600 dark:text-blue-400 flex-shrink-0 mt-1" />
                  <span className="text-foreground font-medium">{benefit}</span>
                </motion.div>
              ))}
            </div>

            {/* CTA Button */}
            <motion.button
              className="btn-primary"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Get In Touch
            </motion.button>
          </motion.div>
        </div>

        {/* Stats Section */}
        <motion.div
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              className="text-center p-6 rounded-lg bg-gradient-to-br from-blue-50 to-blue-100/50 dark:from-blue-950/30 dark:to-blue-900/20"
              whileHover={{ y: -5 }}
            >
              <div className="text-4xl md:text-5xl font-bold text-blue-600 dark:text-blue-400 mb-2">
                <AnimatedCounter target={stat.number} />
                {stat.suffix}
              </div>
              <div className="text-sm md:text-base text-slate-600 dark:text-slate-400 font-medium">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
