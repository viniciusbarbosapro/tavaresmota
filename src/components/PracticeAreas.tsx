import React from 'react';
import { Brain, Cloud, ShieldAlert, CreditCard, Fingerprint, ArrowRight, Check } from 'lucide-react';

export default function PracticeAreas() {
  return (
    <section id="expertise" className="py-24 bg-gray-50 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16">
          <div className="max-w-xl">
            <h2 className="font-display text-4xl text-gray-900 mb-4">Áreas de Atuação</h2>
            <p className="text-gray-500 font-light">
              Soluções jurídicas desenhadas para a arquitetura de negócios digitais.
            </p>
          </div>
          <a href="#" className="hidden md:flex items-center text-sm font-medium text-primary border-b border-primary pb-1 hover:opacity-70 transition-opacity mt-6 md:mt-0">
            Ver todas as áreas
            <ArrowRight className="ml-1 w-4 h-4" />
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          
          {/* AI & Data Ethics */}
          <div className="lg:col-span-2 group relative overflow-hidden bg-white p-8 md:p-12 border border-gray-100 rounded-sm hover:-translate-y-1 transition-transform duration-300 shadow-sm hover:shadow-md">
            <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity">
              <Brain className="w-40 h-40" />
            </div>
            <div className="relative z-10 h-full flex flex-col justify-between min-h-[300px]">
              <div>
                <Brain className="w-10 h-10 mb-6 text-primary font-light" />
                <h3 className="font-display text-2xl font-medium mb-4 text-gray-900">Inteligência Artificial & Ética de Dados</h3>
                <p className="text-gray-500 font-light leading-relaxed max-w-md">
                  Governança de algoritmos, compliance com o AI Act europeu e regulação brasileira. Avaliação de impacto algorítmico e mitigação de vieses para sistemas de alta performance.
                </p>
              </div>
              <div className="mt-8">
                <span className="inline-flex items-center text-sm font-medium text-primary group-hover:translate-x-2 transition-transform cursor-pointer">
                  Saiba mais <ArrowRight className="ml-1 w-4 h-4" />
                </span>
              </div>
            </div>
          </div>

          {/* SaaS & Cloud */}
          <div className="lg:row-span-2 group relative overflow-hidden bg-primary text-white p-8 md:p-12 rounded-sm flex flex-col justify-between hover:-translate-y-1 transition-transform duration-300 shadow-xl">
            <div className="relative z-10">
              <Cloud className="w-10 h-10 mb-6 text-white/90" />
              <h3 className="font-display text-2xl font-medium mb-4">Contratos SaaS & Cloud Computing</h3>
              <p className="text-gray-300 font-light leading-relaxed mb-6">
                Estruturação jurídica de modelos de negócio "as a Service". SLAs, termos de uso, políticas de privacidade e negociação de contratos enterprise de alta complexidade.
              </p>
              <ul className="space-y-3 mt-8 border-t border-white/20 pt-8">
                {['Master Service Agreements (MSA)', 'Service Level Agreements (SLA)', 'Data Processing Agreements (DPA)'].map((item) => (
                  <li key={item} className="flex items-start text-sm font-light text-gray-200">
                    <Check className="w-4 h-4 mr-2 mt-0.5" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Cybersecurity */}
          <div className="group relative overflow-hidden bg-white p-8 border border-gray-100 rounded-sm hover:-translate-y-1 transition-transform duration-300 shadow-sm hover:shadow-md">
            <div className="absolute top-4 right-4 opacity-50">
              <ShieldAlert className="w-8 h-8 text-gray-300" />
            </div>
            <div className="relative z-10">
              <h3 className="font-display text-xl font-medium mb-3 text-gray-900">Cibersegurança & Resposta a Incidentes</h3>
              <p className="text-sm text-gray-500 font-light leading-relaxed mb-6">
                Protocolos jurídicos para gestão de crises cibernéticas. Notificação a autoridades (ANPD) e titulares.
              </p>
              <a href="#" className="inline-block text-xs uppercase tracking-wider font-semibold text-primary border-b border-transparent hover:border-current transition-all">Detalhes</a>
            </div>
          </div>

          {/* FinTech */}
          <div className="group relative overflow-hidden bg-white p-8 border border-gray-100 rounded-sm hover:-translate-y-1 transition-transform duration-300 shadow-sm hover:shadow-md">
            <div className="absolute top-4 right-4 opacity-50">
              <CreditCard className="w-8 h-8 text-gray-300" />
            </div>
            <div className="relative z-10">
              <h3 className="font-display text-xl font-medium mb-3 text-gray-900">FinTech & Meios de Pagamento</h3>
              <p className="text-sm text-gray-500 font-light leading-relaxed mb-6">
                Regulação BACEN e CVM. Estruturação de Instituições de Pagamento e compliance cripto.
              </p>
              <a href="#" className="inline-block text-xs uppercase tracking-wider font-semibold text-primary border-b border-transparent hover:border-current transition-all">Detalhes</a>
            </div>
          </div>

          {/* Privacy */}
          <div className="lg:col-span-2 group relative overflow-hidden bg-gray-100 p-8 flex flex-col sm:flex-row items-center gap-6 border border-gray-200 rounded-sm hover:-translate-y-1 transition-transform duration-300">
            <div className="flex-shrink-0 bg-white p-4 rounded-full shadow-sm">
              <Fingerprint className="w-8 h-8 text-primary" />
            </div>
            <div className="flex-grow text-center sm:text-left">
              <h3 className="font-display text-xl font-medium mb-2 text-gray-900">Privacidade e Proteção de Dados (LGPD/GDPR)</h3>
              <p className="text-sm text-gray-500 font-light">Implementação de programas de governança e DPO as a Service.</p>
            </div>
            <div className="flex-shrink-0">
              <button className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center hover:bg-primary hover:border-primary hover:text-white transition-colors">
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
