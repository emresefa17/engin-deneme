import React, { useState } from 'react';
import { Ship, Compass, Anchor, Info } from 'lucide-react';
import { Link } from 'react-router-dom';
import { products } from '../data/products';
import { useInView } from '../hooks/useInView';

const Products: React.FC = () => {
  const [activeProduct, setActiveProduct] = useState(products[0].id);
  const [ref, inView] = useInView({ threshold: 0.2 });

  return (
    <section id="products" ref={ref} className={`py-20 bg-gradient-to-b from-slate-50 to-white dark:from-slate-950 dark:to-slate-900 relative overflow-hidden transition-all duration-700 overflow-x-hidden ${inView ? 'animate-fadein-left' : 'opacity-0'}`}>
      <div className="absolute top-0 left-0 w-full h-40 bg-blue-500/5 -skew-y-3 transform-gpu"></div>
      <div className="absolute bottom-0 right-0 w-full h-40 bg-blue-500/5 skew-y-3 transform-gpu"></div>
      
      <div className="container max-w-screen-xl mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900 dark:text-white mb-4">
            Projelerimiz <span className="text-blue-600 dark:text-blue-400"></span>
          </h2>
          <p className="max-w-2xl mx-auto text-slate-600 dark:text-slate-400">
            Çeşitli denizcilik uygulamaları için verimlilik, güvenlik ve performans odaklı 
            yenilikçi çözümlerimizi keşfedin.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center animate-fadein-left">
          <div className="bg-white dark:bg-slate-800 rounded-xl shadow-xl p-6 lg:p-8 order-2 lg:order-1">
            {products.map((product) => (
              <div 
                key={product.id}
                className={`transition-all duration-300 ${
                  activeProduct === product.id ? 'opacity-100 max-h-[1000px]' : 'opacity-0 max-h-0 overflow-hidden'
                } hover:scale-105`}
              >
                <div className="aspect-video rounded-lg overflow-hidden mb-6">
                  <img 
                    src={product.imageUrl} 
                    alt={product.name} 
                    className="w-full h-full object-cover object-center"
                  />
                </div>
                
                <h3 className="text-2xl font-bold text-blue-900 dark:text-white mb-4">{product.name}</h3>
                <p className="text-slate-600 dark:text-slate-400 mb-6">{product.description}</p>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                  {product.features.map((feature, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <div className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-100 dark:bg-blue-900/50 flex items-center justify-center text-blue-600 dark:text-blue-400">
                        <Info className="w-4 h-4" />
                      </div>
                      <div>
                        <h4 className="font-medium text-blue-900 dark:text-white">{feature.title}</h4>
                        <p className="text-sm text-slate-600 dark:text-slate-400">{feature.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
                
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link 
                    to={`/product/${product.id}`}
                    className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors flex items-center justify-center"
                  >
                    Detayları Görüntüle
                  </Link>
                  <a 
                    href="#about" 
                    className="px-6 py-3 bg-transparent border-2 border-blue-600 dark:border-blue-500 text-blue-600 dark:text-blue-400 hover:bg-blue-600 hover:text-white dark:hover:bg-blue-600 dark:hover:text-white font-medium rounded-lg transition-colors flex items-center justify-center"
                  >
                    Teklif İste
                  </a>
                </div>
              </div>
            ))}
          </div>

          <div className="flex flex-col gap-4 order-1 lg:order-2">
            {products.map((product) => (
              <button
                key={product.id}
                onClick={() => setActiveProduct(product.id)}
                className={`text-left p-4 rounded-lg transition-all flex items-start gap-4 ${
                  activeProduct === product.id
                    ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/20'
                    : 'bg-white dark:bg-slate-800 hover:bg-slate-100 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 shadow-md'
                }`}
              >
                <div className="flex-shrink-0">
                  {product.icon === 'ship' && <Ship className="w-6 h-6" />}
                  {product.icon === 'compass' && <Compass className="w-6 h-6" />}
                  {product.icon === 'anchor' && <Anchor className="w-6 h-6" />}
                </div>
                <div>
                  <h3 className={`font-bold ${
                    activeProduct === product.id ? 'text-white' : 'text-blue-900 dark:text-white'
                  }`}>
                    {product.name}
                  </h3>
                  <p className={`text-sm ${
                    activeProduct === product.id ? 'text-blue-100' : 'text-slate-600 dark:text-slate-400'
                  }`}>
                    {product.shortDescription}
                  </p>
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Products;