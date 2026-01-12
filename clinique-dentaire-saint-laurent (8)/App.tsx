import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Stats from './components/Stats';
import Services from './components/Services';
import WhyChooseUs from './components/WhyChooseUs';
import Team from './components/Team';
import Reviews from './components/Reviews';
import Emergency from './components/Emergency';
import Booking from './components/Booking';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ChatBox from './components/ChatBox';
import QuizModal from './components/QuizModal';
import CookieConsent from './components/CookieConsent';
import PrivacyPolicy from './components/PrivacyPolicy';

const App: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isQuizOpen, setIsQuizOpen] = useState(false);
  const [isPrivacyOpen, setIsPrivacyOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    if (isQuizOpen || isPrivacyOpen || isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isQuizOpen, isPrivacyOpen, isMenuOpen]);

  return (
    <div className="font-sans min-h-screen bg-white">
      <Header 
        isScrolled={isScrolled} 
        isMenuOpen={isMenuOpen}
        setIsMenuOpen={setIsMenuOpen}
        onOpenPrivacy={() => setIsPrivacyOpen(true)} 
      />
      
      <main>
        <section id="accueil">
          <Hero onOpenQuiz={() => setIsQuizOpen(true)} />
        </section>
        
        <Stats />
        
        <section id="services">
          <Services />
        </section>
        
        <WhyChooseUs />
        
        <section id="equipe">
          <Team />
        </section>
        
        <section id="avis">
          <Reviews />
        </section>
        
        <Emergency />
        
        <section id="rdv">
          <Booking />
        </section>
        
        <section id="contact">
          <Contact />
        </section>
      </main>
      
      <Footer onOpenPrivacy={() => setIsPrivacyOpen(true)} />
      
      <ChatBox />
      
      {isQuizOpen && <QuizModal onClose={() => setIsQuizOpen(false)} />}
      {isPrivacyOpen && <PrivacyPolicy onClose={() => setIsPrivacyOpen(false)} />}
      <CookieConsent />
    </div>
  );
};

export default App;