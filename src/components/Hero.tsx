import React from 'react';
import { Download, CheckCircle, ArrowRight, Shield, FileCheck } from 'lucide-react';
import { motion } from 'motion/react';

export default function Hero() {
  return (
    <header className="relative pt-32 pb-24 lg:pt-48 lg:pb-40 overflow-hidden bg-background-light">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-30">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-gray-200 to-transparent transform skew-x-12 origin-top-right"></div>
        <div className="absolute bottom-0 left-0 w-1/3 h-1/2 bg-gradient-to-r from-gray-100 to-transparent rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* Text Content */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7"
          >
            <div className="inline-flex items-center space-x-2 border-l-2 border-primary pl-4 mb-8">
              <span className="text-xs uppercase tracking-widest font-semibold text-gray-500">
                Direito Digital & Compliance Tecnológico
              </span>
            </div>
            
            <h1 className="font-display text-5xl lg:text-7xl leading-[1.1] font-medium text-gray-900 mb-8">
              Protegendo a Inovação em um <br />
              <span className="italic text-gray-500">Mundo Regulado.</span>
            </h1>
            
            <p className="text-lg lg:text-xl text-gray-600 max-w-2xl font-light mb-10 leading-relaxed">
              Oferecemos consultoria jurídica estratégica para C-Levels e DPOs navegando pelas complexidades da LGPD, GDPR e regulações emergentes de IA. Proteja seus ativos digitais com autoridade.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 mb-12">
              <button className="bg-primary text-white px-8 py-4 text-sm font-medium tracking-wide uppercase hover:bg-gray-800 transition-all shadow-lg hover:shadow-xl flex items-center justify-center group">
                Agendar Consulta
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="border border-gray-300 text-gray-900 px-8 py-4 text-sm font-medium tracking-wide uppercase hover:border-primary hover:text-primary transition-all flex items-center justify-center">
                Ver Áreas de Atuação
              </button>
            </div>

            <div className="flex items-center gap-8 text-gray-500 text-sm">
              <div className="flex items-center gap-2">
                <Shield className="w-5 h-5 text-primary" />
                <span>Certificado ISO 27001</span>
              </div>
              <div className="flex items-center gap-2">
                <FileCheck className="w-5 h-5 text-primary" />
                <span>Mais de 15 Anos de Experiência</span>
              </div>
            </div>
          </motion.div>

          {/* Form Card */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-5 relative"
          >
             <div className="absolute -top-10 -right-10 w-72 h-72 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-pulse"></div>
             <div className="absolute -bottom-10 -left-10 w-72 h-72 bg-gray-200 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-pulse" style={{ animationDelay: '2s' }}></div>
            
            <div className="relative bg-white border border-gray-100 rounded-sm shadow-2xl overflow-hidden">
              <div className="bg-primary px-8 py-6 text-white">
                <h3 className="font-display text-xl font-semibold tracking-wide flex items-center gap-3">
                  <Download className="w-5 h-5 text-gray-300" />
                  Recurso Executivo
                </h3>
                <p className="text-gray-300 text-sm mt-2 font-light">
                  Roteiro abrangente para compliance officers.
                </p>
              </div>
              
              <div className="p-8">
                <div className="flex items-start mb-8">
                  <div className="flex-shrink-0">
                    <div className="h-12 w-12 rounded bg-gray-50 flex items-center justify-center text-primary">
                      <CheckCircle className="w-6 h-6" />
                    </div>
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-medium text-gray-900">Checklist de Conformidade LGPD 2024</h4>
                    <p className="mt-1 text-sm text-gray-500">Framework de auditoria de 50 pontos para governança corporativa.</p>
                  </div>
                </div>

                <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
                  <div>
                    <label htmlFor="name" className="block text-xs font-medium text-gray-500 uppercase tracking-wider mb-1">Nome Completo</label>
                    <input 
                      type="text" 
                      id="name" 
                      className="block w-full rounded-sm border-gray-300 bg-gray-50 text-gray-900 shadow-sm focus:border-primary focus:ring-primary sm:text-sm py-3 px-4" 
                      placeholder="Dr. Eleanor Rigby" 
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-xs font-medium text-gray-500 uppercase tracking-wider mb-1">E-mail Corporativo</label>
                    <input 
                      type="email" 
                      id="email" 
                      className="block w-full rounded-sm border-gray-300 bg-gray-50 text-gray-900 shadow-sm focus:border-primary focus:ring-primary sm:text-sm py-3 px-4" 
                      placeholder="eleanor@acmecorp.com" 
                    />
                  </div>
                  <div>
                    <label htmlFor="role" className="block text-xs font-medium text-gray-500 uppercase tracking-wider mb-1">Cargo Corporativo</label>
                    <select 
                      id="role" 
                      className="block w-full rounded-sm border-gray-300 bg-gray-50 text-gray-900 shadow-sm focus:border-primary focus:ring-primary sm:text-sm py-3 px-4"
                    >
                      <option>Diretor Executivo (CEO)</option>
                      <option>Encarregado de Dados (DPO)</option>
                      <option>Diretor Jurídico</option>
                      <option>Outro</option>
                    </select>
                  </div>
                  <div className="pt-2">
                    <button 
                      type="submit" 
                      className="w-full flex justify-center py-3 px-4 border border-transparent rounded-sm shadow-sm text-sm font-medium text-white bg-gray-900 hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary transition-all"
                    >
                      Obter Acesso Imediato
                    </button>
                    <p className="mt-3 text-center text-xs text-gray-400">
                      Seus dados estão seguros. Respeitamos sua privacidade.
                    </p>
                  </div>
                </form>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </header>
  );
}
