import React, { useState } from 'react';

const QuizModal: React.FC<{ onClose: () => void }> = ({ onClose }) => {
  const [step, setStep] = useState(1);
  const steps = [
    { q: "Êtes-vous satisfait de la couleur de vos dents ?", options: ["Oui, tout à fait", "Non, j'aimerais plus blanc"] },
    { q: "Souffrez-vous de douleurs ou sensibilités ?", options: ["Jamais / Rarement", "Assez souvent"] }
  ];

  return (
    <div className="fixed inset-0 z-[999] bg-dark flex items-center justify-center p-4">
      <div className="bg-white w-full max-w-lg rounded-[2rem] shadow-2xl p-8 relative animate-slideUp">
        <button 
          onClick={onClose} 
          className="absolute top-4 right-4 w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-xl text-dark hover:bg-primary hover:text-white transition-all"
        >
          <i className="fa-solid fa-xmark"></i>
        </button>
        
        <div className="text-center mb-8">
          <h3 className="text-2xl font-serif font-bold text-primary mb-2">Analyse de Sourire</h3>
          <div className="h-1 w-24 bg-cta mx-auto rounded-full"></div>
        </div>

        {step <= steps.length ? (
          <div>
            <p className="text-xl font-bold mb-8 text-center text-dark leading-snug">
              Question {step} :<br/>
              <span className="text-gray-600 font-medium">{steps[step-1].q}</span>
            </p>
            <div className="space-y-3">
              {steps[step-1].options.map((opt, i) => (
                <button 
                  key={i} 
                  onClick={() => setStep(step + 1)} 
                  className="w-full px-6 py-4 rounded-xl border-2 border-gray-100 bg-gray-50 text-dark font-bold hover:border-primary hover:bg-primary/5 transition-all text-left flex justify-between items-center group"
                >
                  {opt}
                  <i className="fa-solid fa-chevron-right text-gray-300 group-hover:text-primary"></i>
                </button>
              ))}
            </div>
          </div>
        ) : (
          <div className="text-center py-4">
            <div className="w-16 h-16 bg-primary/10 text-primary rounded-full flex items-center justify-center text-3xl mx-auto mb-6">
              <i className="fa-solid fa-sparkles"></i>
            </div>
            <h4 className="text-2xl font-bold mb-4 text-dark">Résultat de votre analyse</h4>
            <p className="text-dark/70 mb-8 leading-relaxed">
              Un <span className="text-primary font-bold">blanchiment professionnel</span> ou des <span className="text-primary font-bold">facettes</span> pourraient transformer votre sourire durablement.
            </p>
            <button 
              onClick={() => { 
                onClose(); 
                document.getElementById('rdv')?.scrollIntoView({behavior:'smooth'});
              }} 
              className="w-full bg-primary text-white py-5 rounded-xl font-bold shadow-xl hover:bg-dark transition-all transform active:scale-95"
            >
              Prendre mon RDV conseil gratuit
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default QuizModal;