import React from 'react';
import { Ship } from 'lucide-react';
import { useInView } from '../hooks/useInView';

const Testimonials: React.FC = () => {
  const companies = [
    'Gölcük Tersanesi Komutanlığı',
    'Marmara Aksaz İkmal Destek Komutanlığı',
    'İzmir Foça İkmal Destek Komutanlığı',
    'Deniz İkmal Merkezi Komutanlığı Golcük',
    'Envanter Kontrol Merkezi Müdürlüğü Gölcük',
    'Mersin Tersanesi Komutanlığı',
    'Marmaris Aksaz Tersanesi Komutanlığı',
    'İzmir İkmal Grup Komutanlığı',
    'İzmir Tersanesi Komutanlığı',
    'İzmir Tersanesi Komutanlığı'
  ];

  const [ref, inView] = useInView({ threshold: 0.2 });

  return (
    <section id="testimonials" ref={ref} className={`py-20 bg-blue-900 dark:bg-blue-950 text-white relative overflow-hidden transition-all duration-700 overflow-x-hidden ${inView ? 'animate-fadein-left' : 'opacity-0'}`}>
      <div className="container max-w-screen-xl mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Referans <span className="text-blue-400">Firmalarımız</span>
          </h2>
          <p className="max-w-2xl mx-auto text-blue-200">
            Dünya çapında önde gelen denizcilik şirketleri tarafından tercih ediliyoruz
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 animate-fadein-left">
          {companies.map((company, index) => (
            <div 
              key={index}
              className="bg-white/10 backdrop-blur-sm rounded-xl p-6 flex flex-col items-center justify-center text-center hover:bg-white/20 transition-colors hover:scale-105"
            >
              <Ship className="w-8 h-8 mb-3 text-blue-400" />
              <p className="text-sm font-medium text-white">{company}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;