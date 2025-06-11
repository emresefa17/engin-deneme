import React from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-blue-950 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Google Maps Section */}
          <div className="w-full h-[300px] rounded-lg overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3023.9036692174845!2d29.81794167607106!3d40.72013707139237!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cb40cc55bd8f75%3A0x6cc0ad863fcc6942!2zTWVya2V6LCBGLiBUdXJndXQgU2F5xLFuIENkLiBObzo0IEQ6YiwgNDE5NTAgR8O2bGPDvGsvS29jYWVsaQ!5e0!3m2!1str!2str!4v1748772552165!5m2!1str!2str"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <Phone className="w-5 h-5 text-blue-400 mt-1 mr-3" />
                <div>
                  <p className="text-blue-300">Ayşe Çankaya</p>
                  <p className="text-blue-300">0533 728 7125</p>
                  <p className="text-blue-300 mt-2">Burak Çankal</p>
                  <p className="text-blue-300">0542 824 5308</p>
                </div>
              </li>
              <li className="flex items-start">
                <Mail className="w-5 h-5 text-blue-400 mt-1 mr-3" />
                <p className="text-blue-300">enginmakina41@outlook.com</p>
              </li>
              <li className="flex items-start">
                <MapPin className="w-5 h-5 text-blue-400 mt-1 mr-3" />
                <p className="text-blue-300">
                  Merkez Mahallesi Turgut Sayın Caddesi no:4/B<br />
                  Gölcük, Kocaeli<br />
                  Türkiye 431650
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>
      
      <div className="border-t border-blue-900">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col sm:flex-row justify-between items-center">
            <p className="text-blue-400 text-sm mb-4 sm:mb-0">
              &copy; {new Date().getFullYear()} Engin Gemi. All rights reserved.
            </p>
            <div className="flex space-x-4 text-sm text-blue-400">
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-white transition-colors">Sitemap</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;