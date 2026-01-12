import React from 'react';
import { CLINIC_INFO } from '../constants';

interface HeaderProps {
  isScrolled: boolean;
  isMenuOpen: boolean;
  setIsMenuOpen: (val: boolean) => void;
  onOpenPrivacy: () => void;
}

const Header: React.FC<HeaderProps> = ({ isScrolled, isMenuOpen, setIsMenuOpen, onOpenPrivacy }) => {

  const scrollToSection = (text: string) => {
    const id = text.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();
    setIsMenuOpen(false);
    
    setTimeout(() => {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };

  return (
    <>
      <header className={`fixed top-0 left-0 w-full z-[800] transition-all duration-300 ${isScrolled || isMenuOpen ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'}`}>
        <div className="container mx-auto px-6 flex justify-between items-center h-12 relative">
          
          <button onClick={() => scrollToSection('accueil')} className="flex flex-col text-left">
            <span className={`text-xl font-serif font-bold ${isScrolled || isMenuOpen ? 'text-primary' : 'text-white'}`}>
              Saint-Laurent
            </span>
            <span className={`text-[8px] uppercase tracking-widest ${isScrolled || isMenuOpen ? 'text-dark/60' : 'text-white/60'}`}>
              Clinique Dentaire
            </span>
          </button>

          <nav className="hidden lg:flex items-center space-x-8">
            {['Accueil', 'Services', 'Équipe', 'Avis', 'Contact'].map((item) => (
              <button key={item} onClick={() => scrollToSection(item)} className={`text-sm font-bold uppercase hover:text-cta ${isScrolled ? 'text-dark' : 'text-white'}`}>
                {item}
              </button>
            ))}
            <button onClick={() => scrollToSection('rdv')} className="bg-primary text-white px-6 py-2 rounded-full font-bold shadow-md hover:bg-dark transition-all">
              Prendre RDV
            </button>
          </nav>

          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className={`lg:hidden w-12 h-12 flex items-center justify-center rounded-full transition-all relative z-[950] ${isMenuOpen ? 'bg-dark text-white' : isScrolled ? 'bg-primary text-white' : 'bg-white/20 text-white backdrop-blur-md'}`}
          >
            <i className={`fa-solid ${isMenuOpen ? 'fa-xmark text-2xl' : 'fa-bars text-xl'}`}></i>
          </button>
        </div>
      </header>

      {isMenuOpen && (
        <div className="fixed inset-0 z-[900] bg-white animate-fadeIn lg:hidden flex flex-col pt-24 px-8 overflow-y-auto">
          <div className="flex flex-col gap-2 mb-10">
            {['Accueil', 'Services', 'Équipe', 'Avis', 'Contact'].map((item) => (
              <button 
                key={item} 
                className="text-3xl font-serif text-dark font-bold py-5 w-full text-left border-b border-gray-100 flex justify-between items-center" 
                onClick={() => scrollToSection(item)}
              >
                {item}
                <i className="fa-solid fa-chevron-right text-gray-200 text-sm"></i>
              </button>
            ))}
          </div>

          <div className="space-y-4 pb-10">
            <button 
              onClick={() => { setIsMenuOpen(false); scrollToSection('rdv'); }} 
              className="bg-primary text-white py-5 rounded-2xl font-bold text-xl w-full shadow-lg"
            >
              Prendre rendez-vous
            </button>
            
            <a 
              href={`tel:${CLINIC_INFO.phone.replace(/\D/g,'')}`} 
              className="bg-gray-100 text-primary py-5 rounded-2xl font-bold text-xl w-full flex items-center justify-center gap-3"
            >
              <i className="fa-solid fa-phone"></i> Appeler la Clinique
            </a>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;