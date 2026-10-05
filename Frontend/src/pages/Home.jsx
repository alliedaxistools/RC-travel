import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';

const Home = () => {
  const { t } = useTranslation();

  return (
    <div className="flex flex-col min-h-screen bg-white text-slate-800 overflow-x-hidden">
      
      {/* 1. HERO SECTION (White Background with Navy & Teal Accents) */}
      <section id="home" className="relative py-24 px-6 text-center flex flex-col items-center justify-center bg-slate-50 border-b border-slate-100">
        
        <motion.h1 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-5xl font-extrabold text-[#0A2540] max-w-4xl tracking-tight leading-tight"
        >
          {t('home.heroTitle')}
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-6 text-base md:text-lg text-slate-600 max-w-2xl leading-relaxed"
        >
          {t('home.heroSubtitle')}
        </motion.p>

        {/* Action Buttons in Navy/Teal */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4, delay: 0.4 }}
          className="mt-8 flex flex-wrap justify-center gap-4"
        >
          <a 
            href="https://wa.me/6285195550372" 
            target="_blank" 
            rel="noopener noreferrer"
            className="px-7 py-3.5 bg-[#00A8B5] hover:bg-[#008f9c] text-white font-semibold rounded-full shadow-lg shadow-[#00A8B5]/30 transition-all"
          >
            {t('home.waBtn')}
          </a>
          <a 
            href="#services" 
            className="px-7 py-3.5 bg-[#0A2540] hover:bg-[#123659] text-white font-semibold rounded-full shadow-lg transition-all"
          >
            {t('home.servicesBtn')}
          </a>
        </motion.div>
      </section>

      {/* 2. WHAT WE DO & WHO OUR SERVICE IS FOR */}
      <section className="py-16 px-6 max-w-6xl mx-auto w-full grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="p-8 bg-white border border-slate-200 rounded-3xl shadow-xl shadow-slate-100 hover:border-[#00A8B5] transition-all">
          <h3 className="text-2xl font-bold text-[#0A2540] mb-4">{t('home.whatWeDoTitle')}</h3>
          <p className="text-slate-600 text-sm leading-relaxed mb-4">{t('home.whatWeDoDesc1')}</p>
          <p className="text-slate-600 text-sm leading-relaxed">{t('home.whatWeDoDesc2')}</p>
        </div>

        <div id="about" className="p-8 bg-white border border-slate-200 rounded-3xl shadow-xl shadow-slate-100 hover:border-[#00A8B5] transition-all">
          <h3 className="text-2xl font-bold text-[#0A2540] mb-4">{t('home.whoForTitle')}</h3>
          <p className="text-slate-600 text-sm mb-4">{t('home.whoForDesc')}</p>
          <ul className="space-y-3 text-slate-700 text-sm">
            <li className="flex items-start gap-2 bg-slate-50 p-3 rounded-xl border border-slate-100">
              <span className="text-[#00A8B5] font-bold">•</span> <span>{t('home.holiday')}</span>
            </li>
            <li className="flex items-start gap-2 bg-slate-50 p-3 rounded-xl border border-slate-100">
              <span className="text-[#00A8B5] font-bold">•</span> <span>{t('home.tourism')}</span>
            </li>
            <li className="flex items-start gap-2 bg-slate-50 p-3 rounded-xl border border-slate-100">
              <span className="text-[#00A8B5] font-bold">•</span> <span>{t('home.family')}</span>
            </li>
          </ul>
        </div>
      </section>

      {/* 3. DESTINATIONS SECTION */}
      <section id="services" className="py-16 px-6 max-w-6xl mx-auto w-full text-center bg-slate-50 rounded-3xl my-8">
        <h3 className="text-2xl md:text-3xl font-bold text-[#0A2540] mb-2">{t('home.destTitle')}</h3>
        <p className="text-slate-600 text-sm mb-10">{t('home.destSubtitle')}</p>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 text-left px-4">
          <div className="p-6 bg-white border border-slate-200 rounded-2xl shadow-sm hover:border-[#00A8B5] transition-all">
            <h4 className="font-bold text-[#00A8B5] text-lg mb-1">{t('home.americaTitle')}</h4>
            <p className="text-xs text-slate-600">{t('home.americaDesc')}</p>
          </div>
          <div className="p-6 bg-white border border-slate-200 rounded-2xl shadow-sm hover:border-[#00A8B5] transition-all">
            <h4 className="font-bold text-[#00A8B5] text-lg mb-1">{t('home.europeTitle')}</h4>
            <p className="text-xs text-slate-600">{t('home.europeDesc')}</p>
          </div>
          <div className="p-6 bg-white border border-slate-200 rounded-2xl shadow-sm hover:border-[#00A8B5] transition-all">
            <h4 className="font-bold text-[#00A8B5] text-lg mb-1">{t('home.eastAsiaTitle')}</h4>
            <p className="text-xs text-slate-600">{t('home.eastAsiaDesc')}</p>
          </div>
          <div className="p-6 bg-white border border-slate-200 rounded-2xl shadow-sm hover:border-[#00A8B5] transition-all">
            <h4 className="font-bold text-[#00A8B5] text-lg mb-1">{t('home.southeastAsiaTitle')}</h4>
            <p className="text-xs text-slate-600">{t('home.southeastAsiaDesc')}</p>
          </div>
          <div className="p-6 bg-white border border-slate-200 rounded-2xl shadow-sm hover:border-[#00A8B5] transition-all">
            <h4 className="font-bold text-[#00A8B5] text-lg mb-1">{t('home.oceaniaTitle')}</h4>
            <p className="text-xs text-slate-600">{t('home.oceaniaDesc')}</p>
          </div>
          <div className="p-6 bg-white border border-slate-200 rounded-2xl shadow-sm hover:border-[#00A8B5] transition-all">
            <h4 className="font-bold text-[#00A8B5] text-lg mb-1">{t('home.middleEastTitle')}</h4>
            <p className="text-xs text-slate-600">{t('home.middleEastDesc')}</p>
          </div>
        </div>
      </section>

      {/* 4. HOW IT WORKS & VALUES */}
      <section className="py-16 px-6 max-w-6xl mx-auto w-full grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="p-8 bg-white border border-slate-200 rounded-3xl shadow-xl shadow-slate-100">
          <h3 className="text-2xl font-bold text-[#0A2540] mb-6">{t('home.howItWorksTitle')}</h3>
          <ul className="space-y-4 text-slate-700 text-sm">
            <li className="p-3 bg-slate-50 rounded-xl border border-slate-100"><strong className="text-[#0A2540]">{t('home.step1Label')}</strong> {t('home.step1Text')}</li>
            <li className="p-3 bg-slate-50 rounded-xl border border-slate-100"><strong className="text-[#0A2540]">{t('home.step2Label')}</strong> {t('home.step2Text')}</li>
            <li className="p-3 bg-slate-50 rounded-xl border border-slate-100"><strong className="text-[#0A2540]">{t('home.step3Label')}</strong> {t('home.step3Text')}</li>
            <li className="p-3 bg-slate-50 rounded-xl border border-slate-100"><strong className="text-[#0A2540]">{t('home.step4Label')}</strong> {t('home.step4Text')}</li>
          </ul>
        </div>

        <div className="p-8 bg-white border border-slate-200 rounded-3xl shadow-xl shadow-slate-100">
          <h3 className="text-2xl font-bold text-[#0A2540] mb-6">{t('home.valuesTitle')}</h3>
          <ul className="space-y-4 text-slate-700 text-sm">
            <li className="p-3 bg-slate-50 rounded-xl border border-slate-100"><strong className="text-[#0A2540]">{t('home.valueHonestLabel')}</strong> {t('home.valueHonestText')}</li>
            <li className="p-3 bg-slate-50 rounded-xl border border-slate-100"><strong className="text-[#0A2540]">{t('home.valueCarefulLabel')}</strong> {t('home.valueCarefulText')}</li>
            <li className="p-3 bg-slate-50 rounded-xl border border-slate-100"><strong className="text-[#0A2540]">{t('home.valueResponsiveLabel')}</strong> {t('home.valueResponsiveText')}</li>
          </ul>
        </div>
      </section>

      {/* 5. CEO QUOTE & CONTACT SECTION */}
      <section id="contact" className="py-20 px-6 max-w-4xl mx-auto w-full text-center">
        <blockquote className="text-xl md:text-2xl font-serif italic text-[#0A2540] mb-4 bg-slate-50 p-8 rounded-3xl border border-slate-200 shadow-lg">
          {t('home.ceoQuote')}
          <span className="block mt-4 text-[#00A8B5] font-sans font-semibold text-sm">{t('home.ceoName')}</span>
        </blockquote>

        <div className="mt-12 p-8 bg-[#0A2540] text-white rounded-3xl shadow-2xl border-2 border-[#00A8B5]">
          <h3 className="text-2xl font-bold mb-3">{t('home.talkTitle')}</h3>
          <p className="text-slate-300 text-sm mb-6">{t('home.talkDesc')}</p>
          <a 
            href="https://wa.me/6285195550372" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-block px-8 py-4 bg-[#00A8B5] hover:bg-[#008f9c] text-white font-bold rounded-full shadow-lg shadow-[#00A8B5]/50 transition-all"
          >
            {t('home.waBtn')}
          </a>
        </div>
      </section>

    </div>
  );
};

export default Home;