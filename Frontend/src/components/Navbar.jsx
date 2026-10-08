import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const { t, i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);

  const toggleLanguage = () => {
    const nextLang = i18n.language === 'en' ? 'id' : 'en';
    i18n.changeLanguage(nextLang);
  };

  return (
    <motion.nav 
      initial={{ y: -30, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.4 }}
      className="sticky top-0 z-50 w-full bg-gradient-to-r from-[#0A2540] via-[#006670] to-[#0A2540] border-b-4 border-[#00A8B5] shadow-xl backdrop-blur-md"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-3.5 flex justify-between items-center">
        
        {/* Logo Section */}
        <div className="flex items-center">
          <Link to="/" className="flex items-center gap-3 group">
            <img 
              src="/logo.jpeg" 
              alt="Rute Cemerlang Travel Logo" 
              className="h-12 md:h-14 w-auto object-contain rounded-lg filter drop-shadow-md group-hover:scale-105 transition-transform duration-300 bg-white/10 p-1" 
            />
          </Link>
        </div>

        {/* Desktop Nav Links */}
        <ul className="hidden md:flex items-center gap-6 font-medium text-white text-base">
          <li>
            <Link to="/" className="px-4 py-2 rounded-full hover:bg-white/10 transition-all">
              {t('nav.home')}
            </Link>
          </li>
          <li>
            <Link to="/about" className="px-4 py-2 rounded-full hover:bg-white/10 transition-all">
              {t('nav.about')}
            </Link>
          </li>
          <li>
            <Link to="/services" className="px-4 py-2 rounded-full hover:bg-white/10 transition-all">
              {t('nav.services')}
            </Link>
          </li>
          <li>
            <Link to="/contact" className="px-4 py-2 rounded-full hover:bg-white/10 transition-all">
              {t('nav.contact')}
            </Link>
          </li>
        </ul>

        {/* Right Actions: Language Toggle & Mobile Menu */}
        <div className="flex items-center gap-4">
          
          <motion.button
            whileTap={{ scale: 0.92 }}
            whileHover={{ scale: 1.05 }}
            onClick={toggleLanguage}
            className="px-4 py-2 rounded-full bg-[#0A2540] hover:bg-[#07192b] text-white font-semibold text-xs tracking-wider border border-[#00A8B5] flex items-center gap-2 shadow-md transition-all"
          >
            <span className="text-sm">🌐</span>
            <span>{i18n.language === 'id' ? 'EN (English)' : 'ID (Indonesian)'}</span>
          </motion.button>

          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-white focus:outline-none p-2 rounded-lg bg-[#0A2540] border border-[#00A8B5]"
            aria-label="Toggle Menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          className="md:hidden bg-[#0A2540] border-t border-[#00A8B5] px-6 py-5 shadow-2xl space-y-3"
        >
          <Link to="/" onClick={() => setIsOpen(false)} className="block py-2 text-white hover:text-[#00A8B5]">{t('nav.home')}</Link>
          <Link to="/about" onClick={() => setIsOpen(false)} className="block py-2 text-white hover:text-[#00A8B5]">{t('nav.about')}</Link>
          <Link to="/services" onClick={() => setIsOpen(false)} className="block py-2 text-white hover:text-[#00A8B5]">{t('nav.services')}</Link>
          <Link to="/contact" onClick={() => setIsOpen(false)} className="block py-2 text-white hover:text-[#00A8B5]">{t('nav.contact')}</Link>
        </motion.div>
      )}
    </motion.nav>
  );
};

export default Navbar;