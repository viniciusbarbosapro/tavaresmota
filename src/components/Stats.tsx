import React from 'react';

export default function Stats() {
  return (
    <section className="py-20 border-t border-gray-200 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 lg:gap-12">
          <div className="text-center md:text-left">
            <p className="font-display text-4xl lg:text-5xl font-medium text-primary mb-2">+50</p>
            <p className="text-xs uppercase tracking-widest text-gray-500">Projetos de Adequação</p>
          </div>
          <div className="text-center md:text-left">
            <p className="font-display text-4xl lg:text-5xl font-medium text-primary mb-2">R$ 2Bi</p>
            <p className="text-xs uppercase tracking-widest text-gray-500">Em ativos protegidos</p>
          </div>
          <div className="text-center md:text-left">
            <p className="font-display text-4xl lg:text-5xl font-medium text-primary mb-2">100%</p>
            <p className="text-xs uppercase tracking-widest text-gray-500">Foco Digital</p>
          </div>
          <div className="text-center md:text-left flex flex-col justify-center">
            <p className="font-display italic text-lg text-gray-900">
              "Referência em direito digital para empresas que não podem parar."
            </p>
            <p className="text-xs text-gray-500 mt-2">— TechReview Magazine</p>
          </div>
        </div>
      </div>
    </section>
  );
}
