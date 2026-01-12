import React from 'react';
import { CLINIC_INFO } from '../constants';

interface PrivacyPolicyProps {
  onClose: () => void;
}

const PrivacyPolicy: React.FC<PrivacyPolicyProps> = ({ onClose }) => {
  return (
    <div className="fixed inset-0 z-[300] bg-dark/90 backdrop-blur-md flex items-center justify-center p-4 md:p-6 animate-fadeIn">
      <div className="bg-white w-full max-w-4xl h-full max-h-[90vh] rounded-[2rem] md:rounded-[3rem] overflow-hidden shadow-2xl relative flex flex-col">
        {/* Header Modal */}
        <div className="p-6 md:p-10 border-b border-gray-100 flex justify-between items-center bg-light">
          <div>
            <h2 className="text-2xl md:text-3xl font-serif text-dark font-bold">Politique de confidentialité</h2>
            <p className="text-sm text-dark/60 mt-1">Conformité Loi 25 - Clinique Dentaire Saint-Laurent</p>
          </div>
          <button onClick={onClose} className="w-12 h-12 rounded-full bg-white border border-gray-200 flex items-center justify-center text-2xl text-gray-400 hover:text-primary hover:border-primary transition-all shadow-sm">
            <i className="fa-solid fa-xmark"></i>
          </button>
        </div>

        {/* Content Scrollable */}
        <div className="flex-grow overflow-y-auto p-6 md:p-12 space-y-10">
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-primary flex items-center gap-3">
              <i className="fa-solid fa-user-shield"></i>
              1. Responsable du traitement
            </h3>
            <p className="text-dark/70 leading-relaxed pl-8 text-sm md:text-base">
              Le responsable du traitement des renseignements personnels est : <br />
              <span className="font-bold text-dark block mt-2 underline decoration-accent">{CLINIC_INFO.name}</span>
              {CLINIC_INFO.address}<br />
              Coordonnées : {CLINIC_INFO.phone}
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-bold text-primary flex items-center gap-3">
              <i className="fa-solid fa-database"></i>
              2. Données collectées
            </h3>
            <div className="pl-8 space-y-3">
              <p className="text-dark/70 text-sm md:text-base italic">Nous recueillons les renseignements suivants de manière sécurisée :</p>
              <ul className="space-y-3">
                <li className="p-4 bg-light rounded-2xl border border-gray-100 text-sm">
                  <span className="font-bold text-dark block mb-1">Formulaire :</span> Nom, email, téléphone et motif de consultation.
                </li>
                <li className="p-4 bg-light rounded-2xl border border-gray-100 text-sm">
                  <span className="font-bold text-dark block mb-1">Clavardage IA :</span> Historique crypté pour l'assistance virtuelle.
                </li>
                <li className="p-4 bg-light rounded-2xl border border-gray-100 text-sm">
                  <span className="font-bold text-dark block mb-1">Cookies :</span> Uniquement les cookies techniques essentiels.
                </li>
              </ul>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-bold text-primary flex items-center gap-3">
              <i className="fa-solid fa-hourglass-half"></i>
              3. Conservation & Droits
            </h3>
            <p className="text-dark/70 leading-relaxed pl-8 text-sm">
              Conservation limitée à <span className="font-bold text-dark">2 ans</span>. Vous disposez d'un droit d'accès, de rectification et de retrait. Pour toute demande : <br/>
              <a href="mailto:privacy@cliniquestlaurent.ca" className="text-primary font-bold hover:underline">privacy@cliniquestlaurent.ca</a>
            </p>
          </div>

          <div className="bg-primary/5 p-6 rounded-3xl border border-primary/10">
            <p className="text-xs text-dark/60 leading-relaxed">
              <strong>Note sur l'IA :</strong> Les interactions avec Dre Sophie Martin sont conçues pour la prise de RDV. Ne transmettez pas de dossiers médicaux complets via le chat.
            </p>
          </div>
        </div>

        {/* Footer Modal */}
        <div className="p-6 border-t border-gray-100 text-center">
          <button onClick={onClose} className="bg-primary text-white px-10 py-4 rounded-2xl font-bold hover:bg-dark transition-all shadow-lg">
            J'ai compris
          </button>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;