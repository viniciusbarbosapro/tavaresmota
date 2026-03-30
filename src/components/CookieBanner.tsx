import React, { useState } from 'react';
import { Cookie, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function CookieBanner() {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <AnimatePresence>
      <motion.div 
        initial={{ y: 100 }}
        animate={{ y: 0 }}
        exit={{ y: 100 }}
        className="fixed bottom-0 left-0 w-full z-50 bg-charcoal border-t border-gray-800 shadow-2xl"
      >
        <div className="max-w-7xl mx-auto px-6 py-6 lg:py-8">
          <div className="flex flex-col lg:flex-row lg:items-start lg:space-x-12">
            <div className="flex-1 mb-8 lg:mb-0">
              <div className="flex items-center space-x-3 mb-3">
                <Cookie className="text-white w-5 h-5" />
                <h3 className="text-lg font-display font-medium text-white">Gerenciamento de Privacidade</h3>
              </div>
              <p className="text-sm text-gray-400 font-light leading-relaxed">
                Utilizamos cookies para aprimorar sua experiência de navegação, analisar tráfego e personalizar conteúdo. Em estrita conformidade com a <strong>LGPD (Lei Geral de Proteção de Dados)</strong>, garantimos transparência e controle sobre seus dados.
              </p>
              <a href="#" className="inline-block mt-3 text-xs font-medium text-white border-b border-gray-500 hover:border-white pb-0.5 transition-colors">
                Leia nossa Política de Cookies completa
              </a>
            </div>
            
            <div className="lg:w-1/2 xl:w-5/12">
              <div className="bg-gray-900/50 border border-gray-800 p-5 mb-6 grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="flex items-center justify-between md:flex-col md:items-start md:space-y-3">
                  <div className="flex flex-col">
                    <span className="text-sm font-medium text-white">Essenciais</span>
                    <span className="text-[10px] uppercase tracking-wide text-gray-500">Obrigatório</span>
                  </div>
                  <div className="relative inline-block w-10 mr-2 align-middle select-none">
                    <input type="checkbox" checked disabled className="opacity-0 w-0 h-0" />
                    <span className="block w-10 h-5 bg-gray-600 rounded-full opacity-50 cursor-not-allowed"></span>
                    <span className="absolute right-0 top-0 block w-5 h-5 bg-gray-400 rounded-full border-2 border-gray-600"></span>
                  </div>
                </div>
                
                <div className="flex items-center justify-between md:flex-col md:items-start md:space-y-3">
                  <div className="flex flex-col">
                    <span className="text-sm font-medium text-white">Analíticos</span>
                    <span className="text-[10px] uppercase tracking-wide text-gray-500">Performance</span>
                  </div>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input type="checkbox" className="sr-only peer" />
                    <div className="w-11 h-6 bg-gray-700 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
                  </label>
                </div>

                <div className="flex items-center justify-between md:flex-col md:items-start md:space-y-3">
                  <div className="flex flex-col">
                    <span className="text-sm font-medium text-white">Marketing</span>
                    <span className="text-[10px] uppercase tracking-wide text-gray-500">Publicidade</span>
                  </div>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input type="checkbox" className="sr-only peer" />
                    <div className="w-11 h-6 bg-gray-700 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
                  </label>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4">
                <button 
                  onClick={() => setIsVisible(false)}
                  className="flex-1 px-6 py-3 border border-gray-600 text-white hover:bg-gray-800 hover:border-white text-xs uppercase tracking-widest font-medium transition-all"
                >
                  Preferências
                </button>
                <button 
                  onClick={() => setIsVisible(false)}
                  className="flex-1 px-6 py-3 bg-white hover:bg-gray-200 text-charcoal text-xs uppercase tracking-widest font-semibold shadow-sm transition-all"
                >
                  Aceitar Todos
                </button>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
