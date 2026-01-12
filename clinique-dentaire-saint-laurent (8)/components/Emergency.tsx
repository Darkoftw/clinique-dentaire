
import React from 'react';
import { CLINIC_INFO } from '../constants';

const Emergency: React.FC = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-primary to-dark text-white">
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-10 reveal">
        <div className="text-center md:text-left">
          <h2 className="text-3xl md:text-5xl font-serif mb-4">Urgence Dentaire ?</h2>
          <p className="text-xl text-white/80">Disponible 7j/7 pour soulager vos douleurs.</p>
        </div>
        <a href={`tel:${CLINIC_INFO.phone.replace(/\D/g,'')}`} className="bg-cta hover:bg-white hover:text-primary text-white font-bold py-6 px-10 rounded-2xl text-2xl transition-all shadow-2xl">
          <i className="fa-solid fa-phone-volume mr-3"></i>{CLINIC_INFO.phone}
        </a>
      </div>
    </section>
  );
};

export default Emergency;
