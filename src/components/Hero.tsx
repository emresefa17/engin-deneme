import React, { useEffect, useRef } from 'react';
import { Anchor, ArrowDown } from 'lucide-react';

const Hero: React.FC = () => {
  const waveRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const wave = waveRef.current;
    if (!wave) return;
    
    let position = 0;
    const animate = () => {
      position -= 1;
      if (position <= -100) position = 0;
      if (wave) {
        wave.style.backgroundPosition = `${position}px bottom`;
      }
      requestAnimationFrame(animate);
    };
    
    const animationId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationId);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center bg-cover bg-center overflow-hidden" style={{ backgroundImage: 'url(src/images/bac.jpg)' }}>
      <div className="container mx-auto px-4 z-10">
        <div className="max-w-3xl ml-auto text-right">
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-blue-100 dark:bg-blue-900/50 text-blue-800 dark:text-blue-300 text-sm font-medium mb-4 animate-fadein-down">
            <Anchor className="w-4 h-4 mr-2" />
            <span>2010'dan Beri Denizcilik Mükemmeliyeti</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold text-white-900 dark:text-white mb-6 animate-typing">
           Engin Gemi Malzemeleri <span className="text-white-600 dark:text-white-400"></span> 
          </h1>
          
          <p className="text-lg md:text-xl text-slate-700 dark:text-slate-300 mb-8 animate-fadein-up">
            Modern denizcilik endüstrisi için yenilikçi gemi tasarımları, öncü denizcilik çözümleri 
            ve üstün işçilik.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-end">
            <a 
              href="#products" 
              className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors flex items-center justify-center"
            >
              Ürünlerimizi İnceleyin
            </a>
            <a 
              href="#about" 
              className="px-6 py-3 bg-transparent border-2 border-blue-600 dark:border-blue-500 text-blue-600 dark:text-blue-400 hover:bg-blue-600 hover:text-white dark:hover:bg-blue-600 dark:hover:text-white font-medium rounded-lg transition-colors flex items-center justify-center"
            >
              Hakkımızda
            </a>
          </div>
        </div>
      </div>
      
      <a 
        href="#about" 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce p-2 bg-white/20 dark:bg-white/10 rounded-full"
        aria-label="Aşağı kaydır"
      >
        <ArrowDown className="w-6 h-6 text-blue-600 dark:text-blue-400" />
      </a>
    </section>
  );
};

export default Hero;