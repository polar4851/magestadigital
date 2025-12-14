import React from 'react';
import { CheckCircle2 } from 'lucide-react';
import { WHATSAPP_LINK } from '../constants';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-slate-950">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          
          <div className="w-full lg:w-1/2">
            <div className="rounded-2xl overflow-hidden border border-slate-800 bg-slate-900">
               {/* Optimized Image Size: Reduced width from 2070 to 800 */}
               <img 
                 src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=800&auto=format&fit=crop" 
                 alt="Equipe Magestà Digital" 
                 className="w-full h-auto object-cover opacity-90"
                 loading="lazy"
               />
            </div>
          </div>

          <div className="w-full lg:w-1/2">
            <h2 className="text-3xl font-bold mb-6 text-white">
              Sobre a <span className="text-brand-cyan">Magestà Digital</span>
            </h2>
            <p className="text-slate-400 text-lg mb-6 leading-relaxed">
              Não vendemos apenas design, vendemos percepção de valor. Ajudamos empresas a se posicionarem como líderes em seus nichos através de uma imagem profissional.
            </p>
            <p className="text-slate-400 text-lg mb-8 leading-relaxed">
              Seja na criação de uma marca do zero ou na gestão mensal do seu Instagram, nosso foco é um só: resultado.
            </p>

            <ul className="space-y-3 mb-8">
              {[
                'Design que passa credibilidade',
                'Estratégias validadas para Social Media',
                'Atendimento ágil e humano',
                'Foco em vendas e autoridade'
              ].map((item, idx) => (
                <li key={idx} className="flex items-center gap-3 text-slate-300">
                  <CheckCircle2 className="text-brand-purple" size={20} />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline px-8 py-3 rounded-full font-bold text-sm inline-block"
            >
              Falar com Especialista
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;