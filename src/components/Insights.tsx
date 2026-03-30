import React from 'react';
import { ArrowRight, Calendar } from 'lucide-react';

const posts = [
  {
    category: "Regulação de IA",
    date: "12 Fev, 2024",
    title: "O Impacto do EU AI Act nas Empresas Brasileiras",
    excerpt: "Como a nova legislação europeia afeta startups e corporações nacionais que utilizam sistemas de inteligência artificial de alto risco.",
    image: "/insights/ai-regulation.png"
  },
  {
    category: "Proteção de Dados",
    date: "05 Fev, 2024",
    title: "ANPD: Novas Diretrizes para Dosimetria de Sanções",
    excerpt: "Uma análise detalhada sobre como a autoridade nacional está calculando multas para violações da LGPD em 2024.",
    image: "/insights/lgpd.png"
  },
  {
    category: "Startups",
    date: "28 Jan, 2024",
    title: "Marco Legal das Startups: 2 Anos Depois",
    excerpt: "Balanço sobre os avanços e desafios ainda enfrentados pelo ecossistema de inovação no Brasil.",
    image: "/insights/startup.png"
  }
];

export default function Insights() {
  return (
    <section id="insights" className="py-24 bg-white border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16">
          <div className="max-w-xl">
            <h2 className="font-display text-4xl text-gray-900 mb-4">Insights & Atualizações</h2>
            <p className="text-gray-500 font-light">
              Análise jurídica aprofundada sobre as fronteiras da tecnologia e regulação.
            </p>
          </div>
          <a href="#" className="hidden md:flex items-center text-sm font-medium text-primary border-b border-primary pb-1 hover:opacity-70 transition-opacity mt-6 md:mt-0">
            Ler todos os artigos
            <ArrowRight className="ml-1 w-4 h-4" />
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {posts.map((post, index) => (
            <div key={index} className="group cursor-pointer">
              <div className="mb-4 overflow-hidden rounded-sm">
                <div className="h-48 bg-gray-100 w-full object-cover transition-transform duration-500 group-hover:scale-105 relative">
                    <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent"></div>
                    <img src={post.image} alt={post.title} className="w-full h-full object-cover" />
                </div>
              </div>
              <div className="flex items-center gap-4 text-xs text-gray-500 mb-3">
                <span className="font-medium text-primary uppercase tracking-wider">{post.category}</span>
                <span className="flex items-center gap-1"><Calendar className="w-3 h-3" /> {post.date}</span>
              </div>
              <h3 className="font-display text-xl font-medium text-gray-900 mb-3 group-hover:text-primary transition-colors">
                {post.title}
              </h3>
              <p className="text-sm text-gray-500 font-light leading-relaxed mb-4">
                {post.excerpt}
              </p>
              <span className="inline-flex items-center text-xs font-semibold text-primary uppercase tracking-wider group-hover:underline">
                Ler Artigo
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
