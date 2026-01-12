
import { Service, TeamMember, Testimonial } from './types';

export const CLINIC_INFO = {
  name: "Clinique Dentaire Saint-Laurent",
  city: "Montréal, Québec",
  googleRating: 4.9,
  reviewsCount: 245,
  phone: "(514) 555-0123",
  email: "info@cliniquedentairesaintlaurent.ca",
  url: "https://cliniquedentairesaintlaurent.ca",
  address: "1234 Boulevard Saint-Laurent, Montréal, QC H2X 2T1",
  hours: {
    week: "Lundi-Vendredi 8h-18h",
    weekend: "Samedi 9h-14h"
  },
  slogan: "Votre sourire, notre passion",
  license: "Permis ODQ #123456"
};

export const SERVICES: Service[] = [
  { id: 1, title: "Examen et nettoyage", description: "Prévention et hygiène dentaire complète pour un sourire sain au quotidien.", icon: "fa-solid fa-tooth" },
  { id: 2, title: "Blanchiment dentaire", description: "Retrouvez un sourire éclatant avec des traitements sécuritaires et professionnels.", icon: "fa-solid fa-wand-magic-sparkles" },
  { id: 3, title: "Implants dentaires", description: "Solutions permanentes et naturelles pour remplacer les dents manquantes.", icon: "fa-solid fa-vial" },
  { id: 4, title: "Orthodontie invisible", description: "Alignez vos dents en toute discrétion avec des technologies de pointe.", icon: "fa-solid fa-mask" },
  { id: 5, title: "Urgences dentaires", description: "Disponible 7j/7 pour vos urgences, avec réponse ultra-rapide.", icon: "fa-solid fa-truck-medical" },
  { id: 6, title: "Soins pour enfants", description: "Une approche douce et rassurante pour les plus jeunes patients.", icon: "fa-solid fa-child" }
];

export const TEAM: TeamMember[] = [
  { 
    id: 1, 
    name: "Dr. Sophie Martin", 
    title: "Dentiste propriétaire", 
    specialty: "Diplômée UdeM - 15 ans d'exp.", 
    bio: "Spécialisée en soins esthétiques. Membre active de l'ODQ.", 
    image: "https://images.pexels.com/photos/5215024/pexels-photo-5215024.jpeg?auto=compress&cs=tinysrgb&w=400" 
  },
  { 
    id: 2, 
    name: "Dr. Marc Tremblay", 
    title: "Chirurgien-dentiste", 
    specialty: "Expert en implantologie", 
    bio: "Passionné par les technologies de reconstruction dentaire durable.", 
    image: "https://images.pexels.com/photos/5327585/pexels-photo-5327585.jpeg?auto=compress&cs=tinysrgb&w=400" 
  },
  { 
    id: 3, 
    name: "Dr. Julie Chen", 
    title: "Orthodontiste", 
    specialty: "Certifiée Invisalign", 
    bio: "Dédiée à la création de sourires harmonieux pour petits et grands.", 
    image: "https://images.pexels.com/photos/5452201/pexels-photo-5452201.jpeg?auto=compress&cs=tinysrgb&w=400" 
  }
];

export const TESTIMONIALS: Testimonial[] = [
  { id: 1, name: "Jean-Luc P.", text: "Une expérience incroyable. Dr. Martin est d'une douceur rare. Je ne changerai plus jamais !", stars: 5, initials: "JL" },
  { id: 2, name: "Marie R.", text: "Urgence traitée un samedi après-midi avec une efficacité redoutable. Merci à toute l'équipe.", stars: 5, initials: "MR" },
  { id: 3, name: "Samuel T.", text: "L'orthodontie invisible a changé ma vie. Le suivi est impeccable et les résultats rapides.", stars: 5, initials: "ST" }
];
