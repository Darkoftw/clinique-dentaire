import React, { useState } from 'react';
import { SERVICES } from '../constants';

const Booking: React.FC = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    date: '',
    painLevel: 0,
    consent: false,
    honeypot: ''
  });
  
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [sent, setSent] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (formState.honeypot) return;
    if (!formState.consent) {
      setError("Veuillez accepter la politique de confidentialité.");
      return;
    }

    setLoading(true);
    // Simulation d'envoi pour éviter les erreurs d'API externes pendant le test
    setTimeout(() => {
      setSent(true);
      setLoading(false);
    }, 1000);
  };

  return (
    <section className="py-24 md:py-32 bg-gray-50" id="rdv">
      <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12">
        <div className="flex flex-col justify-center">
          <h2 className="text-4xl md:text-5xl font-serif text-dark mb-6 leading-tight font-bold">
            Réservez votre <br/><span className="text-primary italic">nouveau</span> sourire.
          </h2>
          <p className="text-lg text-dark/70 mb-8">
            Simple, confidentiel et conforme à la Loi 25. Nous vous rappelons sous 24h.
          </p>
          <div className="flex items-center gap-4 p-5 bg-white rounded-3xl border border-gray-200 shadow-sm">
            <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center text-xl">
              <i className="fa-solid fa-shield-halved"></i>
            </div>
            <div>
              <p className="font-bold text-dark text-sm">Sécurité Loi 25</p>
              <p className="text-xs text-dark/50">Données chiffrées & protégées</p>
            </div>
          </div>
        </div>

        <div className="bg-white p-8 md:p-12 rounded-[2.5rem] shadow-xl border border-gray-100">
          {sent ? (
            <div className="text-center py-10 animate-fadeIn">
              <div className="w-20 h-20 bg-green-100 text-green-500 rounded-full flex items-center justify-center text-4xl mx-auto mb-6">
                <i className="fa-solid fa-check"></i>
              </div>
              <h3 className="text-2xl font-bold text-dark mb-2">Demande envoyée !</h3>
              <p className="text-dark/60">Nous vous contacterons très prochainement.</p>
              <button onClick={() => setSent(false)} className="mt-6 text-primary font-bold underline">Envoyer un autre message</button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <input 
                required 
                type="text"
                placeholder="Nom complet *" 
                className="w-full px-5 py-4 rounded-xl border-2 border-gray-200 focus:border-primary outline-none text-dark bg-white" 
                value={formState.name} 
                onChange={(e) => setFormState({...formState, name: e.target.value})} 
              />
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input required type="email" placeholder="Email *" className="w-full px-5 py-4 rounded-xl border-2 border-gray-200 focus:border-primary outline-none text-dark bg-white" value={formState.email} onChange={(e) => setFormState({...formState, email: e.target.value})} />
                <input required type="tel" placeholder="Téléphone *" className="w-full px-5 py-4 rounded-xl border-2 border-gray-200 focus:border-primary outline-none text-dark bg-white" value={formState.phone} onChange={(e) => setFormState({...formState, phone: e.target.value})} />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <select required className="w-full px-5 py-4 rounded-xl border-2 border-gray-200 focus:border-primary outline-none text-dark bg-white" value={formState.service} onChange={(e) => setFormState({...formState, service: e.target.value})}>
                  <option value="">Service...</option>
                  {SERVICES.map(s => <option key={s.id} value={s.title}>{s.title}</option>)}
                </select>
                <input required type="date" className="w-full px-5 py-4 rounded-xl border-2 border-gray-200 focus:border-primary outline-none text-dark bg-white" value={formState.date} onChange={(e) => setFormState({...formState, date: e.target.value})} />
              </div>

              <div className="bg-gray-50 p-4 rounded-xl">
                <div className="flex justify-between mb-2">
                  <span className="text-xs font-bold text-dark/50">Niveau de douleur</span>
                  <span className="text-primary font-bold">{formState.painLevel}/10</span>
                </div>
                <input type="range" min="0" max="10" className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-primary" value={formState.painLevel} onChange={(e) => setFormState({...formState, painLevel: parseInt(e.target.value)})} />
              </div>

              <label className="flex items-start gap-3 cursor-pointer p-2">
                <input type="checkbox" required className="mt-1 w-5 h-5 accent-primary" checked={formState.consent} onChange={(e) => setFormState({...formState, consent: e.target.checked})} />
                <span className="text-xs text-dark/70 font-medium">J'accepte le traitement de mes données personnelles.</span>
              </label>

              {error && <p className="text-red-500 text-xs font-bold">{error}</p>}

              <button 
                type="submit" 
                disabled={loading}
                className="w-full bg-primary text-white font-bold py-5 rounded-xl shadow-lg hover:bg-dark transition-all transform active:scale-95 flex items-center justify-center"
              >
                {loading ? <i className="fa-solid fa-circle-notch fa-spin mr-2"></i> : "Confirmer le rendez-vous"}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};

export default Booking;