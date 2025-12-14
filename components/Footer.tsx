import React from 'react';
import { Instagram, Mail, Phone, ArrowUpRight } from 'lucide-react';
import { WHATSAPP_LINK, INSTAGRAM_LINK } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-950 border-t border-slate-900 pt-16 pb-8">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <img src="/logo.svg" alt="Magestà Digital" className="h-8 w-auto" />
            </div>
            <p className="text-slate-400 text-sm leading-relaxed">
              Elevando o padrão do marketing digital. Design estratégico e gestão de redes sociais para quem quer crescer.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-bold mb-4 uppercase tracking-wider text-xs">Menu</h3>
            <ul className="space-y-2">
              <li><a href="#services" className="text-slate-400 hover:text-brand-cyan text-sm transition-colors">Serviços</a></li>
              <li><a href="#about" className="text-slate-400 hover:text-brand-cyan text-sm transition-colors">Sobre a Agência</a></li>
              <li><a href="#testimonials" className="text-slate-400 hover:text-brand-cyan text-sm transition-colors">Portfólio & Clientes</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div className="lg:col-span-2">
             <h3 className="text-white font-bold mb-4 uppercase tracking-wider text-xs">Fale Conosco</h3>
             <ul className="space-y-4">
               <li className="flex items-center gap-3 text-slate-300 text-sm">
                 <div className="w-8 h-8 rounded-full bg-slate-900 flex items-center justify-center text-brand-cyan">
                    <Phone size={16} />
                 </div>
                 <a href={WHATSAPP_LINK} className="hover:text-white transition-colors">+55 (63) 99221-5782</a>
               </li>
               <li className="flex items-center gap-3 text-slate-300 text-sm">
                 <div className="w-8 h-8 rounded-full bg-slate-900 flex items-center justify-center text-brand-purple">
                    <Mail size={16} />
                 </div>
                 <span>magestadigital@gmail.com</span>
               </li>
             </ul>

             {/* Instagram Highlight */}
             <div className="mt-8 pt-8 border-t border-slate-900">
                <a 
                  href={INSTAGRAM_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-4 p-4 rounded-2xl bg-gradient-to-r from-slate-900 to-slate-800 hover:from-slate-800 hover:to-slate-700 transition-all border border-slate-800 hover:border-brand-purple/50"
                >
                  <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-yellow-500 via-red-500 to-purple-600 flex items-center justify-center text-white shrink-0">
                    <Instagram size={20} />
                  </div>
                  <div>
                    <p className="text-xs text-slate-400 uppercase tracking-wide mb-0.5">Siga nosso Instagram</p>
                    <p className="text-white font-bold flex items-center gap-1 group-hover:text-brand-cyan transition-colors">
                      @magestadigital <ArrowUpRight size={14} />
                    </p>
                  </div>
                </a>
             </div>
          </div>
        </div>

        <div className="border-t border-slate-900 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-600 text-xs">
            © {new Date().getFullYear()} Magestà Digital. Todos os direitos reservados.
          </p>
          <p className="text-slate-600 text-xs flex items-center gap-2">
            Tocantins - Brasil
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;