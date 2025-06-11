import React from 'react';
import { Anchor, Ship, Compass, Wrench, Users, Globe } from 'lucide-react';
import { useInView } from '../hooks/useInView';

const About: React.FC = () => {
  const stats = [
    { value: '30+', label: 'Yıllık Deneyim', icon: <Anchor className="w-5 h-5" /> },
    { value: '100+', label: 'Tamamlanan Proje', icon: <Ship className="w-5 h-5" /> },
    
    { value: '100%', label: 'Müşteri Memnuniyeti', icon: <Users className="w-5 h-5" /> },
  ];

  const services = [
    {
      icon: <Ship className="w-8 h-8" />,
      title: 'Ship Design',
      description: 'Custom ship designs optimized for performance, efficiency, and specific operational requirements.'
    },
    {
      icon: <Compass className="w-8 h-8" />,
      title: 'Naval Architecture',
      description: 'Comprehensive naval architecture services including stability analysis, structural design, and performance optimization.'
    },
    {
      icon: <Wrench className="w-8 h-8" />,
      title: 'Marine Engineering',
      description: 'Specialized marine engineering solutions for propulsion systems, mechanical systems, and onboard equipment.'
    },
  ];

  const [ref, inView] = useInView({ threshold: 0.2 });

  return (
    <section id="about" ref={ref} className={`py-20 bg-slate-100 dark:bg-slate-800 transition-all duration-700 overflow-x-hidden ${inView ? 'animate-fadein-right' : 'opacity-0'}`}>
      <div className="container max-w-screen-xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900 dark:text-white mb-4">
            Hakkımızda <span className="text-blue-600 dark:text-blue-400">Engin Gemi</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16 animate-fadein-right">
          <div>
            <h3 className="text-2xl font-bold text-blue-900 dark:text-white mb-4">Misyonumuz</h3>
            <p className="text-slate-600 dark:text-slate-400 mb-4">
              Engin Gemi Malzemelerine hoş geldiniz. Alanında en iyi yerli, ve yabancı üreticilerin seçildiği 32 yıllık uzman ve tecrübeli kadromuzla bugüne kadar tedariklerin yapıldığı yerdesiniz.<br /><br />
              Gemi inşa malzemeleri alanında önde gelen şirketlerle sertifikalı ve standartlara uygun ürünleri savunma sanayimize katmak en büyük hedeflerimiz arasındadır.
            </p>
         
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {stats.map((stat, index) => (
                <div 
                  key={index} 
                  className="bg-white dark:bg-slate-700 rounded-lg p-4 text-center shadow-sm"
                >
                  <div className="w-12 h-12 mx-auto mb-3 rounded-full bg-blue-100 dark:bg-blue-900/50 flex items-center justify-center text-blue-600 dark:text-blue-400">
                    {stat.icon}
                  </div>
                  <div className="text-2xl font-bold text-blue-900 dark:text-white">{stat.value}</div>
                  <div className="text-sm text-slate-600 dark:text-slate-400">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="relative">
            <div className="aspect-[4/3] rounded-xl overflow-hidden shadow-xl">
              <img 
                src="src/images/gemi.jpg" 
                alt="Maritime engineering team" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-40 h-40 bg-blue-600 rounded-xl -z-10"></div>
            <div className="absolute -top-6 -left-6 w-40 h-40 bg-teal-500 rounded-xl -z-10 opacity-60"></div>
          </div>
        </div>

        <div className="mt-16">
          <h3 className="text-2xl font-bold text-blue-900 dark:text-white text-center mb-10">Hizmetlerimiz</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white dark:bg-slate-700 rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 mb-4 rounded-full bg-blue-100 dark:bg-blue-900/50 flex items-center justify-center text-blue-600 dark:text-blue-400">
                <Ship className="w-8 h-8" />
              </div>
              <h4 className="text-xl font-bold text-blue-900 dark:text-white mb-3">Gemi Parçaları</h4>
              <p className="text-slate-600 dark:text-slate-400">Yüksek kaliteli gemi parçaları ve ekipmanları ile filonuzun performansını ve güvenliğini artırın.</p>
            </div>
            <div className="bg-white dark:bg-slate-700 rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 mb-4 rounded-full bg-blue-100 dark:bg-blue-900/50 flex items-center justify-center text-blue-600 dark:text-blue-400">
                <Wrench className="w-8 h-8" />
              </div>
              <h4 className="text-xl font-bold text-blue-900 dark:text-white mb-3">Teknik Servis</h4>
              <p className="text-slate-600 dark:text-slate-400">Uzman ekibimiz ile deniz araçlarınızın bakım, onarım ve teknik servis hizmetlerini sağlıyoruz.</p>
            </div>
            <div className="bg-white dark:bg-slate-700 rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 mb-4 rounded-full bg-blue-100 dark:bg-blue-900/50 flex items-center justify-center text-blue-600 dark:text-blue-400">
                <Compass className="w-8 h-8" />
              </div>
              <h4 className="text-xl font-bold text-blue-900 dark:text-white mb-3">Proje Danışmanlığı</h4>
              <p className="text-slate-600 dark:text-slate-400">Denizcilik projelerinizde ihtiyaç duyduğunuz profesyonel danışmanlık hizmetleri sunuyoruz.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;