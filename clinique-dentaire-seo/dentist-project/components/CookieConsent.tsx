import React, { useState, useEffect } from 'react';

const CookieConsent: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookie-consent');
    if (!consent) {
      setIsVisible(true);
    }
  }, []);

  const handleConsent = (type: 'essential' | 'all') => {
    localStorage.setItem('cookie-consent', type);
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-6 left-6 right-6 md:right-auto md:max-w-sm z-[250] animate-slideUp pointer-events-none">
      <div className="bg-dark/95 backdrop-blur-md text-white p-5 rounded-[2rem] shadow-2xl border border-white/10 pointer-events-auto">
        <div className="flex flex-col gap-4">
          <div className="flex items-start gap-3">
            <span className="text-2xl mt-1">🍪</span>
            <div>
              <h3 className="text-base font-bold mb-1 tracking-tight">Respect de votre vie privée</h3>
              <p className="text-[11px] text-white/70 leading-relaxed">
                Nous utilisons des cookies essentiels pour le fonctionnement de notre site et de notre assistant IA. 
                Conformément à la <span className="text-white font-semibold">Loi 25</span>.
                <br />
                <a href="#politique" className="text-cta underline hover:text-white transition-colors">Politique de confidentialité</a>
              </p>
            </div>
          </div>
          <div className="flex gap-2">
            <button 
              onClick={() => handleConsent('essential')}
              className="flex-1 px-4 py-2.5 rounded-xl border border-white/20 text-white text-[10px] font-bold hover:bg-white/10 transition-all whitespace-nowrap"
            >
              Essentiels
            </button>
            <button 
              onClick={() => handleConsent('all')}
              className="flex-1 px-4 py-2.5 rounded-xl bg-cta text-dark text-[10px] font-bold hover:bg-white transition-all shadow-lg whitespace-nowrap"
            >
              Tout accepter
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CookieConsent;