import React from 'react';
import { Linkedin } from 'lucide-react';

export default function Partners() {
  return (
    <section id="firma" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-xs font-bold text-primary tracking-widest uppercase mb-3">Liderança</h2>
          <p className="text-4xl font-display font-semibold text-gray-900 mb-6">
            Sócios & Líderes Técnicos
          </p>
          <p className="max-w-2xl mx-auto text-xl text-gray-500 font-light">
            Unindo profunda expertise jurídica com conhecimento técnico avançado em cibersegurança e compliance.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 lg:gap-24 max-w-5xl mx-auto">
          {/* Partner 1 */}
          <div className="group">
            <div className="flex flex-col sm:flex-row gap-8 items-start">
              <div className="relative w-48 h-64 flex-shrink-0 mx-auto sm:mx-0">
                <div className="absolute inset-0 border border-gray-200 transform translate-x-3 translate-y-3 transition-transform group-hover:translate-x-2 group-hover:translate-y-2"></div>
                <img 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDDhy9sMSqA8WYse3ZpwucbL0z5f0o_0f9T4rNzNcMs3YgShdmQEUDaDJmMfag5PkCLI-iX1jUcUuSbLCP74R2Nq02cJQOBjwB1d4F85OsxE2hr-mthVW4SeEwYDrTi7BdIsqOdJ-l5p2PUFO0qz_5fcKoYbi2VHQOjVvlDKwuDf84-MtXoNkO-mTqhf8zUxN3yx9iGV5Ot0IpOftaW5BsUnhx3kCS614rThVOrN2sXXxW3QAEKXJraLS6pwyKeJehOyVdD0LUS5kqJ" 
                  alt="Carlos Tavares" 
                  className="absolute inset-0 w-full h-full object-cover grayscale contrast-125 group-hover:grayscale-0 transition-all duration-700 ease-in-out shadow-lg"
                />
              </div>
              <div className="text-center sm:text-left">
                <h3 className="text-2xl font-display font-semibold text-gray-900">Carlos Tavares</h3>
                <p className="text-sm font-medium text-primary mb-4 uppercase tracking-wide">Sócio Fundador</p>
                <p className="text-gray-600 mb-6 text-sm leading-relaxed">
                  Ex-procurador federal especializado em crimes cibernéticos. Carlos assessora conselhos em respostas a violações de dados de alto risco e estratégias de defesa regulatória.
                </p>
                <div className="space-y-2 mb-6">
                  <div className="flex items-center justify-center sm:justify-start gap-2 text-xs text-gray-500 font-medium">
                    <span className="w-1.5 h-1.5 bg-gray-400 rounded-full"></span>
                    Doutor em Direito & Tecnologia, USP
                  </div>
                  <div className="flex items-center justify-center sm:justify-start gap-2 text-xs text-gray-500 font-medium">
                    <span className="w-1.5 h-1.5 bg-gray-400 rounded-full"></span>
                    Certificado CIPP/E
                  </div>
                </div>
                <a href="#" className="inline-flex items-center text-gray-400 hover:text-[#0077b5] transition-colors">
                  <Linkedin className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>

          {/* Partner 2 */}
          <div className="group">
            <div className="flex flex-col sm:flex-row gap-8 items-start">
              <div className="relative w-48 h-64 flex-shrink-0 mx-auto sm:mx-0">
                <div className="absolute inset-0 border border-gray-200 transform translate-x-3 translate-y-3 transition-transform group-hover:translate-x-2 group-hover:translate-y-2"></div>
                <img 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDVXvLYqFeLwrmbrLp6O8AiIPxN7u14Z-EpDWoGfM0Og4gQ97PHqpGfBxtRhP9qO_wFm9mYFOwMzbEe1Ne7h40M4r0HoSvEDoD08PrR4R6NY2tfYBzz-er3TkCGO4uTnZXecyUw1MCOJHAgBVBdeVKLm43jGzF5vmz3fGTczg3Nlpt_CWkiguPG-TSgtoEQqTxRKjuRsAxh1z77VDNk08yz0tL_NRiipJS3VysLCQJLxlpZcORQmlo019qmdUfBZevHKVN_mJD0rws2" 
                  alt="Mariana Mota" 
                  className="absolute inset-0 w-full h-full object-cover grayscale contrast-125 group-hover:grayscale-0 transition-all duration-700 ease-in-out shadow-lg"
                />
              </div>
              <div className="text-center sm:text-left">
                <h3 className="text-2xl font-display font-semibold text-gray-900">Mariana Mota</h3>
                <p className="text-sm font-medium text-primary mb-4 uppercase tracking-wide">Sócia, Head de Compliance</p>
                <p className="text-gray-600 mb-6 text-sm leading-relaxed">
                  Especialista em governança corporativa e frameworks de privacidade. Mariana lidera projetos de implementação para multinacionais entrando no mercado LATAM.
                </p>
                <div className="space-y-2 mb-6">
                  <div className="flex items-center justify-center sm:justify-start gap-2 text-xs text-gray-500 font-medium">
                    <span className="w-1.5 h-1.5 bg-gray-400 rounded-full"></span>
                    LL.M. em Direito Digital, Sorbonne
                  </div>
                  <div className="flex items-center justify-center sm:justify-start gap-2 text-xs text-gray-500 font-medium">
                    <span className="w-1.5 h-1.5 bg-gray-400 rounded-full"></span>
                    Certificada CIPM
                  </div>
                </div>
                <a href="#" className="inline-flex items-center text-gray-400 hover:text-[#0077b5] transition-colors">
                  <Linkedin className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
