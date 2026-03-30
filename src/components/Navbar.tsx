import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav 
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-white/90 backdrop-blur-md border-b border-gray-200 py-4 shadow-sm' 
          : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex-shrink-0 flex items-center">
            <span className="font-display text-2xl font-semibold tracking-tight text-primary">
              Tavares <span className="text-gray-400 font-light">&</span> Mota
            </span>
          </div>
          
          <div className="hidden md:flex space-x-12 items-center">
            {[
              { name: 'A Firma', href: '#firma' },
              { name: 'Expertise', href: '#expertise' },
              { name: 'Insights', href: '#insights' },
              { name: 'Carreiras', href: '#carreiras' }
            ].map((item) => (
              <a 
                key={item.name}
                href={item.href} 
                className="text-sm font-medium text-gray-900 hover:text-primary transition-colors relative group"
              >
                {item.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full"></span>
              </a>
            ))}
          </div>

          <div className="flex items-center space-x-6">
            <button className="hidden md:flex items-center text-sm font-medium text-gray-900 group hover:text-primary transition-colors">
              <span className="mr-2">PT</span>
              <ChevronDown className="w-4 h-4" />
            </button>
            <a 
              href="#" 
              className="hidden md:inline-flex items-center justify-center px-5 py-2 border border-primary text-sm font-medium text-primary hover:bg-primary hover:text-white transition-all duration-300"
            >
              Portal do Cliente
            </a>
            <button 
              className="md:hidden text-gray-900"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-b border-gray-200 overflow-hidden"
          >
            <div className="px-6 py-8 space-y-6">
              {[
                { name: 'A Firma', href: '#firma' },
                { name: 'Expertise', href: '#expertise' },
                { name: 'Insights', href: '#insights' },
                { name: 'Carreiras', href: '#carreiras' }
              ].map((item) => (
                <a 
                  key={item.name}
                  href={item.href} 
                  className="block text-lg font-medium text-gray-900 hover:text-primary"
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </a>
              ))}
              <a 
                href="#" 
                className="block w-full text-center px-5 py-3 bg-primary text-white text-sm font-medium hover:bg-gray-800 transition-colors"
              >
                Portal do Cliente
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
