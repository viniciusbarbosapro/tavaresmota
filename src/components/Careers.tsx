import React from 'react';
import { ArrowRight } from 'lucide-react';

export default function Careers() {
  return (
    <section id="carreiras" className="py-24 bg-charcoal text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute right-0 top-0 w-1/2 h-full bg-gradient-to-l from-gray-800 to-transparent"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="inline-flex items-center space-x-2 border-l-2 border-white/30 pl-4 mb-8">
              <span className="text-xs uppercase tracking-widest font-semibold text-gray-400">
                Junte-se ao Time
              </span>
            </div>
            <h2 className="font-display text-4xl lg:text-5xl font-medium mb-6">
              Construa o futuro do <br/>
              <span className="text-gray-400 italic">Direito Digital.</span>
            </h2>
            <p className="text-gray-400 text-lg font-light leading-relaxed mb-8 max-w-lg">
              Buscamos mentes inquietas que queiram desafiar o status quo. Se você é apaixonado por tecnologia e excelência jurídica, seu lugar é aqui.
            </p>
            <button className="bg-white text-charcoal px-8 py-4 text-sm font-medium tracking-wide uppercase hover:bg-gray-200 transition-all flex items-center justify-center group">
              Ver Vagas Abertas
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="bg-white/5 border border-white/10 p-8 hover:bg-white/10 transition-colors duration-300">
              <h3 className="font-display text-xl mb-2">Advogado Sênior</h3>
              <p className="text-xs text-gray-400 uppercase tracking-widest mb-4">Proteção de Dados</p>
              <p className="text-sm text-gray-300 font-light mb-6">
                Liderança de projetos de adequação e consultoria estratégica para grandes players de tecnologia.
              </p>
              <span className="text-xs font-medium border-b border-white/30 pb-1">São Paulo (Híbrido)</span>
            </div>
            <div className="bg-white/5 border border-white/10 p-8 hover:bg-white/10 transition-colors duration-300 mt-8 sm:mt-0">
              <h3 className="font-display text-xl mb-2">Estagiário</h3>
              <p className="text-xs text-gray-400 uppercase tracking-widest mb-4">Direito Digital</p>
              <p className="text-sm text-gray-300 font-light mb-6">
                Suporte em pesquisas, contratos e monitoramento legislativo. Mentoria direta com sócios.
              </p>
              <span className="text-xs font-medium border-b border-white/30 pb-1">São Paulo (Presencial)</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
