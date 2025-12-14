import React from 'react';
import { PenTool, Instagram, Layout, TrendingUp } from 'lucide-react';
import { Service } from '../types';
import { WHATSAPP_LINK } from '../constants';

const services: Service[] = [
  {
    id: 'social-media',
    title: 'Gestão de Social Media',
    description: 'Transformamos seu perfil em uma máquina de vendas. Calendário editorial, legendas persuasivas e análise de métricas.',
    icon: Instagram,
  },
  {
    id: 'id-visual',
    title: 'Identidade Visual',
    description: 'Sua marca precisa ser inesquecível. Criamos logomarcas, paletas e tipografias que transmitem profissionalismo e confiança.',
    icon: PenTool,
  },
  {
    id: 'posts',
    title: 'Design de Alto Nível',
    description: 'Chega de posts amadores. Criamos artes que param o scroll e destacam seu produto no feed dos seus clientes.',
    icon: Layout,
  },
  {
    id: 'ads',
    title: 'Tráfego Pago',
    description: 'Não dependa da sorte. Criamos campanhas de anúncios para colocar sua oferta na frente de quem quer comprar.',
    icon: TrendingUp,
  },
];

const Services: React.FC = () => {
  return (
    <section id="services" className="py-20 bg-slate-950 relative z-10">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">O Que Fazemos de Melhor</h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            Soluções completas para tirar sua marca do anonimato e colocá-la em destaque no mercado.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {services.map((service) => (
            <div
              key={service.id}
              className="clean-panel p-8 rounded-2xl flex flex-col h-full"
            >
              <div className="mb-6 inline-flex p-3 rounded-lg bg-slate-800 text-brand-cyan w-fit">
                <service.icon size={28} />
              </div>
              <h3 className="text-xl font-bold mb-3 text-white">
                {service.title}
              </h3>
              <p className="text-slate-400 text-sm leading-relaxed flex-grow">
                {service.description}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center">
            <a href={WHATSAPP_LINK} className="text-brand-cyan font-bold hover:text-white transition-colors border-b border-brand-cyan pb-0.5 hover:border-white">
                Ver todos os serviços em detalhes →
            </a>
        </div>
      </div>
    </section>
  );
};

export default Services;