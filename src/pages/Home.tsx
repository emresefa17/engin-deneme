import React from 'react';
import Hero from '../components/Hero';
import About from '../components/About';
import Projects from '../components/Projects';
import Products from '../components/Products';
import Testimonials from '../components/Testimonials';

const Home: React.FC = () => {
  return (
    <main>
      <Hero />
      <About />
      <Projects />
      <Products />
      <Testimonials />
    </main>
  );
};

export default Home;