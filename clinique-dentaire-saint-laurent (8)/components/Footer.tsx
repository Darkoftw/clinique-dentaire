import React from 'react';
import { CLINIC_INFO } from '../constants';

interface FooterProps {
  onOpenPrivacy: () => void;
}

const Footer: React.FC<FooterProps> = ({ onOpenPrivacy }) => {
  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: CLINIC_INFO.name,
          text: CLINIC_INFO.slogan,
          url: window.location.href,
        });
      } catch (err) {
        console.log('Erreur de partage:', err);
      }
    } else {
      window.location.href = `mailto:?subject=Découvrez la ${CLINIC_INFO.name}&body=Voici le site de la clinique dentaire que je voulais te montrer : ${window.location.href}`;
    }
  };

  return (
    <footer className="bg-dark text-white pt-20 pb-10">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="space-y-6">
            <h4 className="text-3xl font-serif font-bold">Saint-Laurent</h4>
            <p className="text-white/50 text-sm">{CLINIC_INFO.slogan}</p>
            <div className="text-[10px] text-accent/60 font-bold uppercase tracking-widest">{CLINIC_INFO.license}</div>
            
            <button 
              onClick={handleShare}
              className="flex items-center gap-3 text-cta hover:text-white transition-colors text-sm font-bold bg-white/5 px-4 py-2 rounded-xl border border-white/10"
            >
              <i className="fa-solid fa-envelope"></i>
              Partager par courriel
            </button>
          </div>
          <div>
            <h4 className="text-xl font-serif font-bold mb-6 text-cta">Horaires</h4>
            <ul className="text-sm text-white/70 space-y-2">
              <li>{CLINIC_INFO.hours.week}</li>
              <li>{CLINIC_INFO.hours.weekend}</li>
            </ul>
          </div>
          <div>
            <h4 className="text-xl font-serif font-bold mb-6 text-cta">Contact</h4>
            <ul className="text-sm text-white/70 space-y-2">
              <li className="flex items-start gap-2">
                <i className="fa-solid fa-location-dot mt-1 text-cta"></i>
                {CLINIC_INFO.address}
              </li>
              <li className="flex items-center gap-2">
                <i className="fa-solid fa-phone text-cta"></i>
                <a href={`tel:${CLINIC_INFO.phone.replace(/\D/g,'')}`} className="hover:text-cta transition-colors">{CLINIC_INFO.phone}</a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-xl font-serif font-bold mb-6 text-cta">Réseaux</h4>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-primary transition-all text-xl"><i className="fa-brands fa-facebook-f"></i></a>
              <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-primary transition-all text-xl"><i className="fa-brands fa-instagram"></i></a>
            </div>
          </div>
        </div>
        <div className="border-t border-white/10 pt-8 text-center text-[10px] text-white/40">
          <p>&copy; {new Date().getFullYear()} {CLINIC_INFO.name}. Dr. Sophie Martin, dentiste propriétaire.</p>
          <div className="mt-2 flex flex-wrap justify-center gap-4 tracking-widest uppercase">
            <span>Site conforme aux normes de l'ODQ</span>
            <span className="hidden md:inline">|</span>
            <button onClick={onOpenPrivacy} className="hover:text-white underline decoration-accent/30">Confidentialité Loi 25</button>
          </div>
          <p className="mt-4 text-[9px] opacity-30">Conçu avec soin par Milone Digital</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;