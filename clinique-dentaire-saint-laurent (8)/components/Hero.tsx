import React from 'react';

interface HeroProps {
  onOpenQuiz: () => void;
}

const Hero: React.FC<HeroProps> = ({ onOpenQuiz }) => {
  return (
    <section 
      className="min-h-screen flex items-center justify-center px-6 py-24 relative"
      style={{ 
        background: 'linear-gradient(rgba(29,53,87,0.8), rgba(0,119,182,0.8)), url("https://images.pexels.com/photos/3845810/pexels-photo-3845810.jpeg") center/cover no-repeat'
      }}
    >
      <div className="max-w-2xl text-center relative z-20">
        <div className="inline-flex items-center gap-2 bg-white/20 text-white px-4 py-2 rounded-full text-xs font-bold mb-6">
          ⭐ 4.9 - 245 Avis Google
        </div>
        
        <h1 className="text-4xl md:text-6xl font-serif text-white mb-6 leading-tight font-bold">
          Votre sourire mérite les meilleurs soins
        </h1>
        
        <p className="text-lg md:text-xl text-white/90 mb-10">
          Dentisterie de pointe et approche humaine à Montréal.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a 
            href="#rdv"
            className="bg-cta text-dark px-10 py-5 rounded-2xl font-bold text-lg shadow-2xl hover:bg-white transition-all transform active:scale-95 text-center"
          >
            Prendre rendez-vous
          </a>
          <button 
            type="button"
            onClick={(e) => {
              e.preventDefault();
              onOpenQuiz();
            }}
            className="bg-white/10 backdrop-blur-md text-white px-10 py-5 rounded-2xl font-bold text-lg border-2 border-white/30 hover:bg-white hover:text-primary transition-all transform active:scale-95"
          >
            Évaluer mon sourire
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;