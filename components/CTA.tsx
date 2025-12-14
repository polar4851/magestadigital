import React from 'react';
import { ArrowRight } from 'lucide-react';
import { WHATSAPP_LINK } from '../constants';

const CTA: React.FC = () => {
  return (
    <section className="py-24 relative overflow-hidden z-10">
      <div className="container mx-auto px-6">
        <div className="bg-gradient-to-r from-slate-900 to-slate-900 border border-slate-800 rounded-3xl p-10 md:p-16 text-center relative">
          
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            Vamos criar algo incrível?
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto mb-10">
            Sua identidade visual e suas redes sociais são a vitrine do seu negócio. Não deixe para depois.
          </p>

          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-10 py-4 bg-white text-slate-900 font-bold text-lg rounded-full hover:bg-brand-cyan hover:text-white transition-all shadow-lg"
          >
            Falar no WhatsApp
            <ArrowRight size={20} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default CTA;