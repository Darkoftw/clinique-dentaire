
import React from 'react';
import { TEAM } from '../constants';

const Team: React.FC = () => {
  return (
    <section className="py-24 bg-light" id="equipe">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif text-dark mb-4 font-bold">Notre Équipe</h2>
          <p className="text-xl text-dark/60 max-w-2xl mx-auto">Des spécialistes qualifiés à votre écoute.</p>
          <div className="w-24 h-1 bg-cta mx-auto mt-6"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {TEAM.map((member) => (
            <div key={member.id} className="bg-white rounded-[2.5rem] p-8 text-center shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 flex flex-col items-center">
              <div className="relative mb-8">
                <div className="w-44 h-44 rounded-full overflow-hidden border-8 border-accent/10 shadow-inner bg-gray-100">
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    className="w-full h-full object-cover" 
                    loading="lazy"
                  />
                </div>
                <div className="absolute bottom-2 right-2 w-10 h-10 bg-primary text-white rounded-full flex items-center justify-center border-4 border-white shadow-md">
                  <i className="fa-solid fa-stethoscope text-xs"></i>
                </div>
              </div>
              <h3 className="text-2xl font-serif font-bold text-dark mb-1">{member.name}</h3>
              <p className="text-primary font-bold text-sm uppercase tracking-wide mb-4">{member.title}</p>
              <div className="h-px w-12 bg-gray-100 mb-4"></div>
              <p className="text-dark/70 text-sm italic leading-relaxed max-w-[250px]">"{member.bio}"</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
