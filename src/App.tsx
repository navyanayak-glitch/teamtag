import React, { useState, useEffect } from 'react';
import { Header } from './components/Layout/Header';
import { Footer } from './components/Layout/Footer';
import { Hero } from './components/sections/Hero';
import { About } from './components/sections/About';
import { Societies } from './components/sections/Societies';
import { Team } from './components/sections/Team';
import { Achievements } from './components/sections/Achievements';
import { Publications } from './components/sections/Publications';
import { Events } from './components/sections/Events';
import { LoginModal } from './components/auth/LoginModal';
import { AuthProvider } from './contexts/AuthContext';

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [showLoginModal, setShowLoginModal] = useState(false);

  useEffect(() => {
    // Check for saved theme preference
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      setDarkMode(savedTheme === 'dark');
    } else {
      // Check system preference
      setDarkMode(window.matchMedia('(prefers-color-scheme: dark)').matches);
    }
  }, []);

  useEffect(() => {
    // Save theme preference
    localStorage.setItem('theme', darkMode ? 'dark' : 'light');
    
    // Apply theme to document
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  useEffect(() => {
    // Handle login link clicks
    const handleLoginClick = (e: Event) => {
      const target = e.target as HTMLElement;
      if (target.getAttribute('href') === '#login') {
        e.preventDefault();
        setShowLoginModal(true);
      }
    };

    document.addEventListener('click', handleLoginClick);
    return () => document.removeEventListener('click', handleLoginClick);
  }, []);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <AuthProvider>
      <div className={`min-h-screen transition-colors duration-300 ${
        darkMode ? 'bg-gray-900 text-white' : 'bg-white text-gray-900'
      }`}>
        <Header darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
        
        <main>
          <Hero darkMode={darkMode} />
          <About darkMode={darkMode} />
          <Societies darkMode={darkMode} />
          <Team darkMode={darkMode} />
          <Achievements darkMode={darkMode} />
          <Publications darkMode={darkMode} />
          <Events darkMode={darkMode} />
        </main>

        <Footer darkMode={darkMode} />

        <LoginModal 
          isOpen={showLoginModal} 
          onClose={() => setShowLoginModal(false)} 
          darkMode={darkMode} 
        />
      </div>
    </AuthProvider>
  );
}

export default App;