
import React, { useState, useEffect, useCallback } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import LocationSection from './components/LocationSection';
import Offerings from './components/Offerings';
import JoinUs from './components/JoinUs';
import Footer from './components/Footer';
import LocationsPage from './components/LocationsPage';
import ContactPage from './components/ContactPage';
import ProductsPage from './components/ProductsPage';

const App: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [currentView, setCurrentView] = useState<'home' | 'locations' | 'contact' | 'registry'>('home');

  const handleScroll = useCallback(() => {
    setIsScrolled(window.scrollY > 50);
  }, []);

  const handleHashChange = useCallback(() => {
    const hash = window.location.hash;
    if (hash === '#network' || hash === '#locations-map') {
      setCurrentView('locations');
    } else if (hash === '#contact') {
      setCurrentView('contact');
    } else if (hash === '#registry') {
      setCurrentView('registry');
    } else {
      setCurrentView('home');
    }
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('hashchange', handleHashChange);
    
    // Check initial state
    handleHashChange();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, [handleHashChange, handleScroll]);

  const navigateTo = (view: 'home' | 'locations' | 'contact' | 'registry') => {
    if (view === 'home') {
      window.location.hash = '';
    } else if (view === 'locations') {
      window.location.hash = 'network';
    } else if (view === 'contact') {
      window.location.hash = 'contact';
    } else if (view === 'registry') {
      window.location.hash = 'registry';
    }
    window.scrollTo(0, 0);
  };

  return (
    <div className="min-h-screen selection:bg-white selection:text-black bg-[#050505] flex flex-col">
      <Navbar 
        isScrolled={isScrolled} 
        currentView={currentView} 
        onNavigate={navigateTo}
      />
      <main className="flex-grow">
        {currentView === 'home' && (
          <>
            <Hero onNavigate={() => navigateTo('locations')} />
            <About />
            <LocationSection onNavigate={() => navigateTo('locations')} />
            <Offerings />
            <JoinUs />
          </>
        )}
        {currentView === 'locations' && <LocationsPage />}
        {currentView === 'contact' && <ContactPage />}
        {currentView === 'registry' && <ProductsPage />}
      </main>
      <Footer onNavigate={navigateTo} />
    </div>
  );
};

export default App;
