
import React from 'react';
import { SERVICES } from '../constants';

const Services: React.FC = () => {
  return (
    <section className="py-24 bg-light">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 reveal">
          <h2 className="text-4xl md:text-5xl font-serif text-dark mb-4">Nos Services</h2>
          <p className="text-xl text-dark/60 max-w-2xl mx-auto">Des soins complets utilisant les technologies les plus avancées.</p>
          <div className="w-24 h-1 bg-cta mx-auto mt-6"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map((service) => (
            <div key={service.id} className="bg-white p-8 rounded-3xl shadow-sm hover:shadow-xl transition-all reveal">
              <div className="w-16 h-16 bg-accent/20 text-primary rounded-2xl flex items-center justify-center text-3xl mb-8">
                <i className={service.icon}></i>
              </div>
              <h3 className="text-2xl font-serif font-bold mb-4 text-dark">{service.title}</h3>
              <p className="text-dark/70 leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
