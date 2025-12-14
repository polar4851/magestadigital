import React from 'react';
import { Star, Quote } from 'lucide-react';
import { Testimonial } from '../types';

const testimonials: Testimonial[] = [
  {
    id: '1',
    name: 'Ricardo Almeida',
    role: 'CEO',
    company: 'RA Construtora',
    content: 'A Magestà mudou a cara da nossa empresa. A nova identidade visual passou muito mais profissionalismo para nossos clientes.',
    avatar: 'https://picsum.photos/100/100?random=1'
  },
  {
    id: '2',
    name: 'Juliana Torres',
    role: 'Fundadora',
    company: 'Clínica Torres',
    content: 'Os posts do Instagram ficaram lindos! O design é impecável e recebemos elogios toda semana sobre a organização do feed.',
    avatar: 'https://picsum.photos/100/100?random=2'
  },
  {
    id: '3',
    name: 'Carlos Mendes',
    role: 'Diretor',
    company: 'Mendes Tech',
    content: 'Entregaram a logo exatamente como eu imaginava. Simples, moderna e marcante. Recomendo para quem quer qualidade.',
    avatar: 'https://picsum.photos/100/100?random=3'
  }
];

const Testimonials: React.FC = () => {
  return (
    <section id="testimonials" className="py-20 bg-slate-950 relative z-10">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4 text-white">Clientes Satisfeitos</h2>
          <p className="text-slate-400">
            Veja quem já transformou sua imagem com a gente.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((item) => (
            <div key={item.id} className="bg-slate-900 border border-slate-800 p-8 rounded-2xl relative">
              <Quote className="absolute top-6 right-6 text-slate-800" size={32} />
              
              <div className="flex gap-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={16} className="text-brand-cyan fill-brand-cyan" />
                ))}
              </div>

              <p className="text-slate-300 italic mb-6 leading-relaxed text-sm">"{item.content}"</p>

              <div className="flex items-center gap-4">
                <img 
                  src={item.avatar} 
                  alt={item.name} 
                  className="w-10 h-10 rounded-full bg-slate-800 object-cover"
                />
                <div>
                  <h4 className="text-white font-bold text-sm">{item.name}</h4>
                  <p className="text-slate-500 text-xs uppercase">{item.company}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Seção de Logos dos Clientes */}
        <div className="mt-20 border-t border-slate-900 pt-16">
          <p className="text-center text-slate-500 text-sm font-semibold uppercase tracking-widest mb-12">
            Empresas que confiam na Magestà
          </p>
          
          <div className="flex flex-wrap justify-center items-center gap-12 md:gap-24 opacity-80">
            {/* Logo 1 */}
            <div className="group transition-all duration-300 hover:scale-105">
              <img 
                src="logo1.svg" 
                alt="Cliente Parceiro 1" 
                className="h-16 md:h-20 w-auto grayscale group-hover:grayscale-0 transition-all duration-300 opacity-60 group-hover:opacity-100 object-contain"
              />
            </div>
            
            {/* Logo 2 */}
            <div className="group transition-all duration-300 hover:scale-105">
              <img 
                src="logo2.svg" 
                alt="Cliente Parceiro 2" 
                className="h-16 md:h-20 w-auto grayscale group-hover:grayscale-0 transition-all duration-300 opacity-60 group-hover:opacity-100 object-contain"
              />
            </div>

            {/* Logo 3 */}
            <div className="group transition-all duration-300 hover:scale-105">
              <img 
                src="logo3.svg" 
                alt="Cliente Parceiro 3" 
                className="h-16 md:h-20 w-auto grayscale group-hover:grayscale-0 transition-all duration-300 opacity-60 group-hover:opacity-100 object-contain"
              />
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Testimonials;