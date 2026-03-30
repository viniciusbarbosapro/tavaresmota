import React from 'react';
import { Linkedin, Twitter, Mail, ShieldCheck } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-charcoal text-gray-100 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-6 py-16 lg:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8">
          
          <div className="lg:col-span-4 space-y-6">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 border border-gray-100 flex items-center justify-center text-white font-bold font-display text-xl bg-transparent">
                TM
              </div>
              <span className="text-2xl font-display font-medium tracking-wide text-white">Tavares & Mota</span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed max-w-sm font-light">
              Boutique jurídica especializada em Direito Digital e Compliance Tecnológico. Estratégia legal para C-Levels e DPOs navegarem na complexidade regulatória.
            </p>
            <div className="flex space-x-5 pt-2">
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div className="lg:col-span-2">
            <h3 className="text-white font-display font-medium text-lg mb-4">Escritório</h3>
            <ul className="space-y-3 text-sm text-gray-400 font-light">
              <li><a href="#" className="hover:text-white transition-colors">Sobre Nós</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Sócios</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Carreiras</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Contato</a></li>
            </ul>
          </div>

          <div className="lg:col-span-3">
            <h3 className="text-white font-display font-medium text-lg mb-4">Expertise</h3>
            <ul className="space-y-3 text-sm text-gray-400 font-light">
              <li><a href="#" className="hover:text-white transition-colors">Proteção de Dados & LGPD</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Compliance Digital</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Contratos de Tecnologia</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Propriedade Intelectual</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Crimes Cibernéticos</a></li>
            </ul>
          </div>

          <div className="lg:col-span-3 space-y-6">
            <h3 className="text-white font-display font-medium text-lg mb-4">São Paulo</h3>
            <address className="text-sm text-gray-400 not-italic font-light leading-relaxed">
              Av. Brigadeiro Faria Lima, 3477<br/>
              12º Andar - Itaim Bibi<br/>
              São Paulo - SP, 04538-133
            </address>
            <div className="pt-4">
              <div className="inline-flex items-center border border-gray-700 px-3 py-2 bg-gray-900/50">
                <ShieldCheck className="text-white mr-2 w-5 h-5 font-light" />
                <div className="flex flex-col">
                  <span className="text-[10px] text-gray-400 uppercase tracking-wider">LGPD Certified</span>
                  <span className="text-xs text-white font-medium">Compliance Verified</span>
                </div>
              </div>
            </div>
          </div>

        </div>

        <div className="mt-16 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500 font-light">
          <p>© 2024 Tavares & Mota Advogados. Todos os direitos reservados.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-white transition-colors">Política de Privacidade</a>
            <a href="#" className="hover:text-white transition-colors">Termos de Uso</a>
            <a href="#" className="hover:text-white transition-colors">Gerenciar Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
