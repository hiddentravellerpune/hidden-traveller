import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import UdupiGokarnaPage from './pages/UdupiGokarnaPage';
import VaranasiAyodhyaPage from './pages/VaranasiAyodhyaPage';
import PondicherryPage from './pages/PondicherryPage';
import TermsAndConditions from './pages/TermsAndConditions';
import PrivacyPolicy from './pages/PrivacyPolicyPage';

// A custom component to handle scrolling to the top on route change.
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

// =======================================================================================
// MAIN APP COMPONENT
// This component now handles all routing using react-router-dom and includes a scroll-to-top feature.
// =======================================================================================
export default function App() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <Router>
      <ScrollToTop /> {/* This is the key addition to fix the scrolling */}
      <div className="bg-gray-50 min-h-screen font-sans text-gray-800">
        <Header
          isMobileMenuOpen={isMobileMenuOpen}
          setIsMobileMenuOpen={setIsMobileMenuOpen}
        />
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/udupi-gokarna" element={<UdupiGokarnaPage />} />
            <Route path="/varanasi-ayodhya" element={<VaranasiAyodhyaPage />} />
            <Route path="/pondicherry" element={<PondicherryPage />} />
            <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="*" element={<HomePage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}