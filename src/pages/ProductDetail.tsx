import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Check, Ship, Compass, Anchor } from 'lucide-react';
import { products } from '../data/products';

const ProductDetail: React.FC = () => {
  const { id } = useParams();
  const product = products.find(p => p.id === Number(id));
  const [selectedImage, setSelectedImage] = useState(0);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-blue-900 dark:text-white mb-4">Ürün Bulunamadı</h2>
          <Link to="/" className="text-blue-600 dark:text-blue-400 hover:underline">Ana Sayfaya Dön</Link>
        </div>
      </div>
    );
  }

  const IconComponent = {
    ship: Ship,
    compass: Compass,
    anchor: Anchor
  }[product.icon];

  return (
    <main className="min-h-screen bg-slate-50 dark:bg-slate-900 pt-20">
      <div className="container mx-auto px-4 py-8">
        <Link 
          to="/#products" 
          className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 mb-8"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Ürünlere Geri Dön
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="space-y-4">
            <div className="bg-white dark:bg-slate-800 rounded-xl shadow-lg overflow-hidden">
              <div className="aspect-video w-full">
                <img 
                  src={product.gallery[selectedImage]} 
                  alt={`${product.name} - Görsel ${selectedImage + 1}`}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div className="grid grid-cols-5 gap-4">
              {product.gallery.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`aspect-square rounded-lg overflow-hidden border-2 transition-all ${
                    selectedImage === index 
                      ? 'border-blue-600 dark:border-blue-400 opacity-100' 
                      : 'border-transparent opacity-70 hover:opacity-100'
                  }`}
                >
                  <img 
                    src={image} 
                    alt={`${product.name} - Küçük Görsel ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          <div className="bg-white dark:bg-slate-800 rounded-xl shadow-lg p-8">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 rounded-full bg-blue-100 dark:bg-blue-900/50 flex items-center justify-center text-blue-600 dark:text-blue-400">
                <IconComponent className="w-6 h-6" />
              </div>
              <h1 className="text-3xl font-bold text-blue-900 dark:text-white">{product.name}</h1>
            </div>

            <p className="text-slate-600 dark:text-slate-400 mb-8">{product.description}</p>

            <h2 className="text-xl font-bold text-blue-900 dark:text-white mb-4">Özellikler</h2>
            <div className="grid grid-cols-1 gap-4 mb-8">
              {product.features.map((feature, index) => (
                <div key={index} className="flex items-start gap-4 p-4 bg-slate-50 dark:bg-slate-700/50 rounded-lg">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-100 dark:bg-blue-900/50 flex items-center justify-center text-blue-600 dark:text-blue-400">
                    <Check className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="font-medium text-blue-900 dark:text-white mb-1">{feature.title}</h3>
                    <p className="text-sm text-slate-600 dark:text-slate-400">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href="#contact" 
                className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors flex items-center justify-center"
              >
                Teklif İste
              </a>
              <a 
                href="#specifications" 
                className="px-6 py-3 bg-transparent border-2 border-blue-600 dark:border-blue-500 text-blue-600 dark:text-blue-400 hover:bg-blue-600 hover:text-white dark:hover:bg-blue-600 dark:hover:text-white font-medium rounded-lg transition-colors flex items-center justify-center"
              >
                Teknik Özellikler
              </a>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default ProductDetail;