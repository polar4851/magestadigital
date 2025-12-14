import React from 'react';
import { Target, Zap, ShieldCheck } from 'lucide-react';

const Features: React.FC = () => {
  return (
    <section className="py-16 bg-slate-900/30 border-y border-slate-800 relative z-10">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          
          <div className="flex flex-col items-center text-center">
            {/* Removed heavy colored shadows */}
            <div className="w-14 h-14 rounded-xl bg-slate-800 border border-slate-700 flex items-center justify-center mb-4">
              <Target className="text-brand-cyan" size={28} />
            </div>
            <h3 className="text-lg font-bold text-white mb-2">Estratégia Única</h3>
            <p className="text-slate-400 text-sm leading-relaxed max-w-xs">
              Analisamos seu mercado para criar uma identidade que destaca sua empresa da concorrência.
            </p>
          </div>

          <div className="flex flex-col items-center text-center">
            <div className="w-14 h-14 rounded-xl bg-slate-800 border border-slate-700 flex items-center justify-center mb-4">
              <Zap className="text-brand-purple" size={28} />
            </div>
            <h3 className="text-lg font-bold text-white mb-2">Entrega Ágil</h3>
            <p className="text-slate-400 text-sm leading-relaxed max-w-xs">
              Processos otimizados para entregar seus materiais com rapidez e qualidade máxima.
            </p>
          </div>

          <div className="flex flex-col items-center text-center">
            <div className="w-14 h-14 rounded-xl bg-slate-800 border border-slate-700 flex items-center justify-center mb-4">
              <ShieldCheck className="text-white" size={28} />
            </div>
            <h3 className="text-lg font-bold text-white mb-2">Autoridade</h3>
            <p className="text-slate-400 text-sm leading-relaxed max-w-xs">
              Uma marca forte vende mais caro. Elevamos o nível de percepção do seu negócio.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Features;