import { useEffect, useState } from 'react';
import { Menu, X, Moon, Sun } from 'lucide-react';
import { motion } from 'framer-motion';
import { useTheme } from '@/contexts/ThemeContext';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'Services', href: '#services' },
    { label: 'Portfolio', href: '#portfolio' },
    { label: 'About', href: '#about' },
    { label: 'Contact', href: '#contact' },
  ];

  const scrollToSection = (href: string) => {
    const id = href.replace('#', '');
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  return (
    <motion.header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/90 dark:bg-slate-900/90 backdrop-blur-md shadow-lg'
          : 'bg-transparent'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <motion.div
            className="text-2xl font-bold gradient-text"
            whileHover={{ scale: 1.05 }}
          >
            Wave Draft
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <motion.button
                key={link.label}
                onClick={() => scrollToSection(link.href)}
                className="text-foreground hover:text-blue-600 dark:hover:text-blue-400 font-medium transition-colors"
                whileHover={{ y: -2 }}
              >
                {link.label}
              </motion.button>
            ))}
          </nav>

          {/* Right Section */}
          <div className="flex items-center gap-4">
            {/* Theme Toggle */}
            <motion.button
              onClick={toggleTheme}
              className="p-2 rounded-lg bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              {theme === 'dark' ? (
                <Sun size={20} className="text-yellow-500" />
              ) : (
                <Moon size={20} className="text-slate-700" />
              )}
            </motion.button>

            {/* CTA Button */}
            <motion.button
              onClick={() => scrollToSection('#contact')}
              className="hidden sm:block btn-primary"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Get Started
            </motion.button>

            {/* Mobile Menu Button */}
            <motion.button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2"
              whileTap={{ scale: 0.95 }}
            >
              {isOpen ? (
                <X size={24} />
              ) : (
                <Menu size={24} />
              )}
            </motion.button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <motion.nav
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: isOpen ? 1 : 0, height: isOpen ? 'auto' : 0 }}
          transition={{ duration: 0.3 }}
          className="md:hidden overflow-hidden"
        >
          <div className="pb-4 space-y-2">
            {navLinks.map((link) => (
              <motion.button
                key={link.label}
                onClick={() => scrollToSection(link.href)}
                className="block w-full text-left px-4 py-2 text-foreground hover:bg-blue-50 dark:hover:bg-slate-800 rounded-lg transition-colors"
                whileHover={{ x: 4 }}
              >
                {link.label}
              </motion.button>
            ))}
            <motion.button
              onClick={() => scrollToSection('#contact')}
              className="w-full btn-primary mt-4"
              whileHover={{ scale: 1.02 }}
            >
              Get Started
            </motion.button>
          </div>
        </motion.nav>
      </div>
    </motion.header>
  );
}
