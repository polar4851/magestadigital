import React from 'react';
import { ArrowRight, Instagram, PenTool, TrendingUp, Layout } from 'lucide-react';
import { WHATSAPP_LINK, INSTAGRAM_LINK } from '../constants';

const Hero: React.FC = () => {
  return (
    <section className="relative pt-24 pb-16 md:pt-36 md:pb-24 flex flex-col items-center">
      <div className="container mx-auto px-6 relative z-10 text-center">
        
        <div className="inline-flex items-center gap-2 mb-6 px-4 py-1.5 bg-slate-900/80 border border-slate-800 rounded-full">
           <span className="flex h-2 w-2 rounded-full bg-brand-cyan"></span>
           <span className="text-slate-300 text-xs font-medium tracking-wide uppercase">
             Marketing & Design
           </span>
        </div>
        
        <h1 className="font-sans text-4xl sm:text-5xl md:text-6xl font-bold leading-tight mb-6 text-white tracking-tight">
          Design que <span className="text-gradient">Vende.</span>
        </h1>
        
        <p className="text-slate-400 text-base md:text-lg max-w-xl mx-auto mb-8 leading-relaxed font-normal">
          Identidade Visual profissional e gestão estratégica de Social Media para destacar sua empresa e atrair clientes.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary w-full sm:w-auto px-8 py-3.5 rounded-full font-bold text-base flex items-center justify-center gap-2"
          >
            Orçamento Rápido
            <ArrowRight size={18} />
          </a>
          <a
            href={INSTAGRAM_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline w-full sm:w-auto px-8 py-3.5 rounded-full font-medium text-base flex justify-center items-center gap-2"
          >
            <Instagram size={18} />
            Ver no Instagram
          </a>
        </div>

        <div className="mt-16 border-t border-slate-800/50 pt-8 w-full max-w-4xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 opacity-90">
             
             {/* Logomarcas */}
             <div className="flex flex-col items-center gap-3 group">
               <div className="p-3 bg-slate-900 rounded-xl border border-slate-800 text-brand-cyan group-hover:border-brand-cyan/30 transition-colors">
                 <PenTool size={22} />
               </div>
               <span className="text-slate-300 text-sm font-semibold">Logomarcas</span>
             </div>

             {/* Social Media */}
             <div className="flex flex-col items-center gap-3 group">
               <div className="p-3 bg-slate-900 rounded-xl border border-slate-800 text-brand-purple group-hover:border-brand-purple/30 transition-colors">
                 <Instagram size={22} />
               </div>
               <span className="text-slate-300 text-sm font-semibold">Social Media</span>
             </div>

             {/* Tráfego Pago */}
             <div className="flex flex-col items-center gap-3 group">
               <div className="p-3 bg-slate-900 rounded-xl border border-slate-800 text-white group-hover:border-white/30 transition-colors">
                 <TrendingUp size={22} />
               </div>
               <span className="text-slate-300 text-sm font-semibold">Tráfego Pago</span>
             </div>

             {/* Identidade Visual */}
             <div className="flex flex-col items-center gap-3 group">
               <div className="p-3 bg-slate-900 rounded-xl border border-slate-800 text-brand-cyan group-hover:border-brand-cyan/30 transition-colors">
                 <Layout size={22} />
               </div>
               <span className="text-slate-300 text-sm font-semibold">Identidade Visual</span>
             </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;