
import React from 'react';
import { CLINIC_INFO } from '../constants';

const Contact: React.FC = () => {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 reveal">
        <div>
          <h2 className="text-4xl md:text-5xl font-serif text-dark mb-8">Nous Contacter</h2>
          <ul className="space-y-8">
            <li className="flex gap-6">
              <div className="w-14 h-14 bg-light text-primary rounded-2xl flex items-center justify-center text-2xl flex-shrink-0"><i className="fa-solid fa-location-dot"></i></div>
              <div><h4 className="font-bold text-xl mb-1">Adresse</h4><p className="text-dark/60">{CLINIC_INFO.address}</p></div>
            </li>
            <li className="flex gap-6">
              <div className="w-14 h-14 bg-light text-primary rounded-2xl flex items-center justify-center text-2xl flex-shrink-0"><i className="fa-solid fa-clock"></i></div>
              <div><h4 className="font-bold text-xl mb-1">Horaires</h4><p className="text-dark/60">{CLINIC_INFO.hours.week}</p><p className="text-primary font-bold">{CLINIC_INFO.hours.weekend}</p></div>
            </li>
          </ul>
        </div>
        <div className="rounded-[3rem] overflow-hidden shadow-2xl h-[450px] border-8 border-light">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2796.345842186716!2d-73.57017832328464!3d45.50346063086961!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4cc91a44e59f4295%3A0xc3f109055403067d!2sBoul.%20Saint-Laurent%2C%20Montr%C3%A9al%2C%20QC!5e0!3m2!1sfr!2sca!4v1714041234567!5m2!1sfr!2sca" 
            width="100%" height="100%" style={{ border: 0 }} allowFullScreen={true} loading="lazy" referrerPolicy="no-referrer-when-downgrade" className="grayscale hover:grayscale-0 transition-all duration-700"
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default Contact;
