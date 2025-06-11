import React, { useState } from 'react';
import { Award } from 'lucide-react';
import { projects, ProjectCategory } from '../data/projects';

const Projects: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<ProjectCategory | 'all'>('all');
  
  const categories: { label: string; value: ProjectCategory | 'all' }[] = [
    { label: 'Tüm Projeler', value: 'all' },
    { label: 'Gemi Tasarımı', value: 'ship-design' },
    { label: 'Denizcilik Mimarisi', value: 'naval-architecture' },
    { label: 'Deniz Mühendisliği', value: 'marine-engineering' },
    { label: 'Açık Deniz', value: 'offshore' },
  ];

  const filteredProjects = activeCategory === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeCategory);

  const getCategoryColor = (category: ProjectCategory) => {
    switch (category) {
      case 'ship-design':
        return 'bg-blue-500';
      case 'naval-architecture':
        return 'bg-teal-500';
      case 'marine-engineering':
        return 'bg-indigo-500';
      case 'offshore':
        return 'bg-cyan-500';
      default:
        return 'bg-slate-500';
    }
  };

  return (
    <section id="projects" className="py-20 bg-white dark:bg-slate-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-100 dark:bg-blue-900/50 text-blue-800 dark:text-blue-300 text-sm font-medium mb-6">
           
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-blue-900 dark:text-white mb-6">
            Ürünlerimiz <span className="text-blue-600 dark:text-blue-400"></span>
          </h2>
          <p className="max-w-3xl mx-auto text-lg text-slate-600 dark:text-slate-400">
            Çeşitli denizcilik uygulamalarında gerçekleştirdiğimiz yenilikçi projeler ile 
            sektörde fark yaratıyoruz. Her proje, mükemmellik ve sürdürülebilirlik odaklı yaklaşımımızın bir yansımasıdır.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category.value}
              onClick={() => setActiveCategory(category.value)}
              className={`px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 ${
                activeCategory === category.value
                  ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/25 scale-105'
                  : 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700 hover:shadow-md'
              }`}
            >
              {category.label}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <div 
              key={project.id}
              className="group relative bg-slate-50 dark:bg-slate-800 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Decorative corner accent */}
              <div className={`absolute top-0 right-0 w-20 h-20 ${getCategoryColor(project.category)} opacity-10 rounded-bl-full`}></div>
              
              <div className="relative z-10">
                <h3 className="text-xl font-bold text-blue-900 dark:text-white mb-4 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  {project.title}
                </h3>
                
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                  {project.description}
                </p>
              </div>

              {/* Hover effect overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600/5 to-teal-600/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <div className="text-center py-16">
            <div className="w-24 h-24 mx-auto mb-6 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center">
              <Award className="w-12 h-12 text-slate-400" />
            </div>
            <h3 className="text-xl font-bold text-slate-600 dark:text-slate-400 mb-2">
              Bu kategoride proje bulunamadı
            </h3>
            <p className="text-slate-500 dark:text-slate-500">
              Diğer kategorileri kontrol edin veya tüm projeleri görüntüleyin.
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;