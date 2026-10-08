import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import office from '../assets/office.jpeg';

const About = () => {
  const { t } = useTranslation();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.12, delayChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 24 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
    },
  };

  return (
    <div
      id="about"
      className="min-h-screen bg-slate-50 text-slate-800 overflow-x-hidden selection:bg-[#00A8B5] selection:text-white"
    >
      {/* =========================================================
          1. HERO SECTION
      ========================================================= */}
      <section className="relative overflow-hidden bg-[#0A2540] text-white">
        {/* Subtle background mesh and ambient light */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute inset-0 opacity-[0.06] bg-[radial-gradient(#00A8B5_1.5px,transparent_1.5px)] [background-size:24px_24px]" />
          <div className="absolute -top-36 -right-36 w-[550px] h-[550px] rounded-full bg-[#00A8B5]/15 blur-[120px]" />
          <div className="absolute -bottom-44 -left-36 w-[550px] h-[550px] rounded-full bg-[#00A8B5]/12 blur-[120px]" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[300px] bg-[#00A8B5]/5 blur-[100px]" />
        </div>

        <div className="relative max-w-7xl mx-auto px-6 lg:px-8 py-20 md:py-24 lg:py-28">
          <div className="grid lg:grid-cols-[0.95fr_1.05fr] gap-12 lg:gap-16 items-center">
            {/* LEFT — TEXT */}
            <motion.div
              initial={{ opacity: 0, x: -35 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="text-center lg:text-left z-10"
            >
              {/* Office badge */}
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="inline-flex items-center gap-2.5 px-4 py-2 mb-6 rounded-full border border-[#00A8B5]/40 bg-[#00A8B5]/10 text-[#66d5dc] text-xs font-semibold tracking-wide backdrop-blur-md shadow-sm shadow-[#00A8B5]/10"
              >
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00A8B5] opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-[#00A8B5]" />
                </span>
                <span>{t('about.officeName')}</span>
              </motion.div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.12] text-white">
                {t('about.pageTitle')}
              </h1>

              {/* Accent bar */}
              <div className="relative mt-6 mb-7 mx-auto lg:mx-0 flex items-center justify-center lg:justify-start">
                <div className="w-20 h-1.5 bg-[#00A8B5] rounded-full shadow-lg shadow-[#00A8B5]/40" />
                <div className="w-3 h-1.5 bg-[#66d5dc] rounded-full ml-1.5" />
              </div>

              <p className="text-base md:text-lg text-slate-300 max-w-xl mx-auto lg:mx-0 leading-relaxed font-normal">
                {t('about.whoWeAreDesc')}
              </p>

              {/* Mini information badges */}
              <div className="mt-9 flex flex-wrap justify-center lg:justify-start gap-3.5">
                <div className="flex items-center gap-2.5 px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 backdrop-blur-md hover:border-[#00A8B5]/40 hover:bg-white/[0.08] transition-all duration-200">
                  <span className="text-[#00A8B5] text-sm">✦</span>
                  <span className="text-xs font-semibold text-slate-200 tracking-wide">
                    Professional Excellence
                  </span>
                </div>

                <div className="flex items-center gap-2.5 px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 backdrop-blur-md hover:border-[#00A8B5]/40 hover:bg-white/[0.08] transition-all duration-200">
                  <span className="text-[#00A8B5] text-sm">✦</span>
                  <span className="text-xs font-semibold text-slate-200 tracking-wide">
                    Trusted Journey
                  </span>
                </div>
              </div>
            </motion.div>

            {/* RIGHT — IMAGE */}
            <motion.div
              initial={{ opacity: 0, x: 35, scale: 0.97 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              transition={{ duration: 0.85, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
              className="relative z-10"
            >
              {/* Decorative brackets */}
              <div className="absolute -top-3.5 -right-3.5 w-24 h-24 border-t-[3px] border-r-[3px] border-[#00A8B5] rounded-tr-3xl pointer-events-none z-20 opacity-80" />
              <div className="absolute -bottom-3.5 -left-3.5 w-24 h-24 border-b-[3px] border-l-[3px] border-[#00A8B5] rounded-bl-3xl pointer-events-none z-20 opacity-80" />

              {/* Glow backdrop */}
              <div className="absolute inset-0 bg-[#00A8B5]/15 rounded-[2rem] filter blur-xl -z-10" />

              <div className="relative rounded-[2rem] overflow-hidden border border-white/20 bg-white/10 p-2.5 shadow-2xl backdrop-blur-sm group">
                <div className="relative overflow-hidden rounded-[1.6rem] bg-[#0A2540]">
                  <img
                    src={office}
                    alt="Rute Cemerlang Travel Office"
                    className="w-full h-[340px] sm:h-[420px] lg:h-[490px] object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />

                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0A2540] via-[#0A2540]/40 to-transparent opacity-90 group-hover:opacity-80 transition-opacity duration-300" />

                  {/* Location floating card */}
                  <div className="absolute bottom-4 left-4 right-4 sm:bottom-5 sm:left-5 sm:right-5">
                    <div className="flex items-center gap-3.5 px-4 py-3.5 rounded-2xl bg-[#0A2540]/85 backdrop-blur-md border border-white/20 shadow-xl">
                      <div className="w-11 h-11 shrink-0 rounded-xl bg-[#00A8B5]/20 border border-[#00A8B5]/30 flex items-center justify-center text-xl shadow-inner">
                        📍
                      </div>

                      <div className="min-w-0 flex-1">
                        <p className="text-[11px] font-medium text-[#66d5dc] mb-0.5 truncate tracking-wide uppercase">
                          {t('about.officeName')}
                        </p>
                        <p className="text-xs sm:text-sm font-semibold text-white truncate leading-snug">
                          {t('about.officeAddress')}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Bottom subtle divider line */}
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#00A8B5]/60 to-transparent" />
      </section>

      {/* =========================================================
          2. WHO WE ARE + OUR STORY
      ========================================================= */}
      <section className="py-20 md:py-24 px-6 relative">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-7 lg:gap-8">
            {/* WHO WE ARE */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.65 }}
              whileHover={{ y: -6 }}
              className="group relative bg-white border border-slate-200/90 rounded-3xl p-7 md:p-9 shadow-lg hover:shadow-2xl hover:border-[#00A8B5]/40 transition-all duration-300 overflow-hidden flex flex-col justify-between"
            >
              <div className="absolute top-0 right-0 w-40 h-40 bg-[#00A8B5]/5 rounded-bl-[100%] transition-all duration-500 group-hover:bg-[#00A8B5]/12" />

              <div className="relative">
                <div className="flex items-center justify-between mb-7">
                  <div className="w-14 h-14 rounded-2xl bg-[#00A8B5]/10 border border-[#00A8B5]/20 flex items-center justify-center text-2xl shadow-sm group-hover:scale-105 transition-transform">
                    🏢
                  </div>

                  <span className="text-[11px] font-bold tracking-[0.2em] uppercase text-slate-400 bg-slate-100 px-3 py-1 rounded-full">
                    About Us
                  </span>
                </div>

                <h3 className="text-2xl font-bold text-[#0A2540] mb-4 tracking-tight">
                  {t('about.whoWeAreTitle')}
                </h3>

                <p className="text-slate-600 text-sm leading-relaxed">
                  {t('about.whoWeAreDesc')}
                </p>
              </div>

              <div className="relative mt-8 pt-5 border-t border-slate-100 flex items-center gap-2.5 text-xs font-semibold text-[#00A8B5]">
                <span className="w-6 h-6 rounded-full bg-[#00A8B5]/10 flex items-center justify-center font-bold text-xs">
                  ✓
                </span>
                <span>Professional Excellence</span>
              </div>
            </motion.div>

            {/* OUR STORY */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.65 }}
              whileHover={{ y: -6 }}
              className="group relative bg-white border border-slate-200/90 rounded-3xl p-7 md:p-9 shadow-lg hover:shadow-2xl hover:border-[#00A8B5]/40 transition-all duration-300 overflow-hidden flex flex-col justify-between"
            >
              <div className="absolute top-0 right-0 w-40 h-40 bg-[#0A2540]/5 rounded-bl-[100%] transition-all duration-500 group-hover:bg-[#0A2540]/10" />

              <div className="relative">
                <div className="flex items-center justify-between mb-7">
                  <div className="w-14 h-14 rounded-2xl bg-[#0A2540]/10 border border-[#0A2540]/15 flex items-center justify-center text-2xl shadow-sm group-hover:scale-105 transition-transform">
                    📖
                  </div>

                  <span className="text-[11px] font-bold tracking-[0.2em] uppercase text-slate-400 bg-slate-100 px-3 py-1 rounded-full">
                    Our Journey
                  </span>
                </div>

                <h3 className="text-2xl font-bold text-[#0A2540] mb-4 tracking-tight">
                  {t('about.ourStoryTitle')}
                </h3>

                <div className="space-y-3.5">
                  <p className="text-slate-600 text-sm leading-relaxed">
                    {t('about.ourStoryText1')}
                  </p>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    {t('about.ourStoryText2')}
                  </p>
                </div>
              </div>

              <div className="relative mt-8 pt-5 border-t border-slate-100 flex items-center gap-2.5 text-xs font-semibold text-[#0A2540]">
                <span className="w-6 h-6 rounded-full bg-[#0A2540]/10 flex items-center justify-center font-bold text-xs">
                  ✓
                </span>
                <span>Trusted Journey</span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* =========================================================
          3. MISSION + VALUES
      ========================================================= */}
      <section className="pb-20 md:pb-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-7 lg:gap-8 items-stretch">
            {/* MISSION */}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.65 }}
              className="relative bg-[#0A2540] text-white rounded-3xl p-8 md:p-9 overflow-hidden shadow-xl border border-white/10 flex flex-col justify-between"
            >
              <div className="absolute -right-20 -top-20 w-56 h-56 rounded-full bg-[#00A8B5]/15 blur-2xl" />
              <div className="absolute -left-20 -bottom-20 w-56 h-56 rounded-full bg-[#00A8B5]/10 blur-2xl" />

              <div className="relative">
                <div className="flex items-center gap-4 mb-7">
                  <div className="w-14 h-14 rounded-2xl bg-[#00A8B5]/15 border border-[#00A8B5]/30 flex items-center justify-center text-2xl shadow-inner">
                    🎯
                  </div>

                  <div>
                    <span className="block text-[10px] uppercase tracking-[0.2em] text-[#66d5dc] font-bold mb-1">
                      Purpose
                    </span>
                    <h3 className="text-2xl font-bold tracking-tight text-white">
                      {t('about.missionTitle')}
                    </h3>
                  </div>
                </div>

                <p className="text-slate-300 text-sm leading-relaxed mb-6">
                  {t('about.missionText')}
                </p>

                <div className="grid grid-cols-2 gap-3 mb-2">
                  <div className="p-3.5 rounded-2xl bg-white/5 border border-white/10 flex items-center gap-3 backdrop-blur-sm">
                    <span className="w-8 h-8 rounded-xl bg-[#00A8B5]/20 text-[#66d5dc] flex items-center justify-center text-sm">✈️</span>
                    <div>
                      <p className="text-xs font-semibold text-white">Easy Process</p>
                      <p className="text-[10px] text-slate-400">Step-by-step guidance</p>
                    </div>
                  </div>
                  <div className="p-3.5 rounded-2xl bg-white/5 border border-white/10 flex items-center gap-3 backdrop-blur-sm">
                    <span className="w-8 h-8 rounded-xl bg-[#00A8B5]/20 text-[#66d5dc] flex items-center justify-center text-sm">🛡️</span>
                    <div>
                      <p className="text-xs font-semibold text-white">100% Honest</p>
                      <p className="text-[10px] text-slate-400">Transparent handling</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="relative mt-6 pt-5 border-t border-white/10 flex items-center justify-between">
                <div className="flex items-center gap-2.5 text-xs text-[#66d5dc] font-semibold">
                  <span className="text-sm">✦</span>
                  <span>Driven by purpose and commitment</span>
                </div>
                <div className="px-3 py-1 rounded-full bg-[#00A8B5]/20 border border-[#00A8B5]/40 text-[11px] text-white font-medium">
                  Core Mission
                </div>
              </div>
            </motion.div>

            {/* VALUES */}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.65, delay: 0.1 }}
              className="bg-white border border-slate-200/90 rounded-3xl p-8 md:p-9 shadow-lg flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center gap-4 mb-7">
                  <div className="w-14 h-14 rounded-2xl bg-[#0A2540]/10 border border-[#0A2540]/15 flex items-center justify-center text-2xl">
                    ⭐
                  </div>

                  <div>
                    <span className="block text-[10px] uppercase tracking-[0.2em] text-slate-400 font-bold mb-1">
                      Principles
                    </span>
                    <h3 className="text-2xl font-bold text-[#0A2540] tracking-tight">
                      {t('about.valuesTitle')}
                    </h3>
                  </div>
                </div>

                <ul className="space-y-3.5">
                  <li className="group p-4 bg-slate-50 hover:bg-[#00A8B5]/5 border border-slate-200/70 hover:border-[#00A8B5]/40 rounded-2xl flex items-start gap-3.5 transition-all duration-200">
                    <span className="w-7 h-7 shrink-0 mt-0.5 rounded-full bg-[#00A8B5]/10 text-[#00A8B5] flex items-center justify-center font-bold text-xs group-hover:bg-[#00A8B5] group-hover:text-white transition-colors duration-200 shadow-sm">
                      ✓
                    </span>
                    <div className="text-sm leading-relaxed text-slate-600">
                      <strong className="text-[#0A2540] font-semibold">
                        {t('about.honestLabel')}
                      </strong>{' '}
                      {t('about.honestText')}
                    </div>
                  </li>

                  <li className="group p-4 bg-slate-50 hover:bg-[#00A8B5]/5 border border-slate-200/70 hover:border-[#00A8B5]/40 rounded-2xl flex items-start gap-3.5 transition-all duration-200">
                    <span className="w-7 h-7 shrink-0 mt-0.5 rounded-full bg-[#00A8B5]/10 text-[#00A8B5] flex items-center justify-center font-bold text-xs group-hover:bg-[#00A8B5] group-hover:text-white transition-colors duration-200 shadow-sm">
                      ✓
                    </span>
                    <div className="text-sm leading-relaxed text-slate-600">
                      <strong className="text-[#0A2540] font-semibold">
                        {t('about.carefulLabel')}
                      </strong>{' '}
                      {t('about.carefulText')}
                    </div>
                  </li>

                  <li className="group p-4 bg-slate-50 hover:bg-[#00A8B5]/5 border border-slate-200/70 hover:border-[#00A8B5]/40 rounded-2xl flex items-start gap-3.5 transition-all duration-200">
                    <span className="w-7 h-7 shrink-0 mt-0.5 rounded-full bg-[#00A8B5]/10 text-[#00A8B5] flex items-center justify-center font-bold text-xs group-hover:bg-[#00A8B5] group-hover:text-white transition-colors duration-200 shadow-sm">
                      ✓
                    </span>
                    <div className="text-sm leading-relaxed text-slate-600">
                      <strong className="text-[#0A2540] font-semibold">
                        {t('about.responsiveLabel')}
                      </strong>{' '}
                      {t('about.responsiveText')}
                    </div>
                  </li>
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* =========================================================
          4. OUR APPROACH
      ========================================================= */}
      <section className="pb-20 md:pb-24 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative bg-white border border-slate-200/90 rounded-[2.2rem] p-8 md:p-12 lg:p-14 shadow-xl overflow-hidden"
          >
            {/* Corner ambient highlights */}
            <div className="absolute top-0 left-0 w-48 h-48 bg-[#00A8B5]/5 rounded-br-full pointer-events-none" />
            <div className="absolute bottom-0 right-0 w-48 h-48 bg-[#0A2540]/5 rounded-tl-full pointer-events-none" />

            <div className="relative text-center">
              <div className="w-14 h-14 mx-auto rounded-2xl bg-[#00A8B5]/10 border border-[#00A8B5]/20 flex items-center justify-center text-2xl mb-5 shadow-sm">
                🚀
              </div>

              <h3 className="text-2xl md:text-3xl font-extrabold text-[#0A2540] tracking-tight">
                {t('about.approachTitle')}
              </h3>

              <div className="w-14 h-1 bg-[#00A8B5] rounded-full mx-auto mt-4 mb-4 shadow-sm" />

              <p className="text-slate-600 text-sm leading-relaxed max-w-2xl mx-auto">
                {t('about.approachDesc')}
              </p>

              {/* Steps grid */}
              <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="relative grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mt-11"
              >
                {/* Connecting track line */}
                <div className="hidden lg:block absolute top-[36px] left-[12%] right-[12%] h-[2px] bg-slate-200 pointer-events-none z-0" />

                {[
                  { num: '01', text: t('about.step1') },
                  { num: '02', text: t('about.step2') },
                  { num: '03', text: t('about.step3') },
                  { num: '04', text: t('about.step4') },
                ].map((step, idx) => (
                  <motion.div
                    key={idx}
                    variants={itemVariants}
                    whileHover={{ y: -6 }}
                    className="relative bg-slate-50 border border-slate-200/90 hover:border-[#00A8B5]/50 rounded-2xl p-6 transition-all duration-300 hover:shadow-lg group z-10"
                  >
                    <div className="relative w-14 h-14 mx-auto rounded-2xl bg-white border border-slate-200 text-[#00A8B5] flex items-center justify-center font-extrabold text-base shadow-sm mb-4 group-hover:bg-[#00A8B5] group-hover:text-white group-hover:border-[#00A8B5] transition-all duration-300">
                      {step.num}
                    </div>

                    <p className="text-sm font-semibold text-[#0A2540] leading-snug">
                      {step.text}
                    </p>
                  </motion.div>
                ))}
              </motion.div>

              <div className="mt-10 p-5 rounded-2xl bg-slate-50/80 border border-slate-200/70 max-w-3xl mx-auto">
                <p className="text-slate-600 text-sm leading-relaxed">
                  {t('about.approachDetail')}
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* =========================================================
          5. CEO MESSAGE — LUXURY LEADERSHIP CARD
      ========================================================= */}
      <section className="pb-20 md:pb-24 px-6">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.75 }}
            className="relative overflow-hidden rounded-[2.2rem] bg-[#0A2540] shadow-2xl border border-white/10"
          >
            {/* Background pattern and ambient cyan lamps */}
            <div className="absolute inset-0 opacity-[0.06] bg-[radial-gradient(#00A8B5_1.5px,transparent_1.5px)] [background-size:22px_22px] pointer-events-none" />
            <div className="absolute -top-36 -right-36 w-88 h-88 rounded-full bg-[#00A8B5]/15 blur-3xl pointer-events-none" />
            <div className="absolute -bottom-40 -left-36 w-88 h-88 rounded-full bg-[#00A8B5]/12 blur-3xl pointer-events-none" />

            <div className="relative p-8 md:p-12 lg:p-14">
              {/* Header */}
              <div className="flex flex-col sm:flex-row items-center sm:items-start gap-5 mb-9">
                <div className="relative shrink-0">
                  {/* Professional Leadership Vector/SVG Icon */}
                  <div className="w-20 h-20 rounded-2xl bg-[#00A8B5]/15 border border-[#00A8B5]/30 flex items-center justify-center shadow-xl text-[#00A8B5]">
                    <svg className="w-10 h-10" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  </div>
                  <div className="absolute -bottom-2 -right-2 w-7 h-7 rounded-full bg-[#00A8B5] border-4 border-[#0A2540] flex items-center justify-center text-white text-[10px] font-bold">
                    ✓
                  </div>
                </div>

                <div className="text-center sm:text-left">
                  <span className="inline-block text-[10px] uppercase tracking-[0.25em] text-[#66d5dc] font-bold mb-1.5">
                    Leadership Message
                  </span>
                  <h3 className="text-2xl md:text-3xl font-bold text-white tracking-tight">
                    {t('about.ceoMsgTitle')}
                  </h3>
                  <div className="w-12 h-1 bg-[#00A8B5] rounded-full mt-3 mx-auto sm:mx-0 shadow-sm" />
                </div>
              </div>

              {/* Quote area */}
              <div className="relative pl-0 md:pl-10">
                <span className="absolute -left-2 -top-10 hidden md:block text-9xl leading-none font-serif text-[#00A8B5]/20 select-none pointer-events-none">
                  “
                </span>

                <div className="space-y-4 relative">
                  <p className="text-slate-200 text-sm md:text-base leading-relaxed italic font-medium">
                    {t('about.ceoQuote1')}
                  </p>
                  <p className="text-slate-300 text-sm leading-relaxed">
                    {t('about.ceoQuote2')}
                  </p>
                  <p className="text-slate-300 text-sm leading-relaxed">
                    {t('about.ceoQuote3')}
                  </p>
                  <p className="text-slate-300 text-sm leading-relaxed">
                    {t('about.ceoQuote4')}
                  </p>

                  <div className="relative mt-8 pt-6 border-t border-white/10">
                    <p className="text-white text-sm md:text-base leading-relaxed font-semibold">
                      {t('about.ceoQuote5')}
                    </p>
                  </div>
                </div>
              </div>

              {/* Signature area */}
              <div className="mt-10 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center sm:items-end justify-between gap-4">
                <div className="text-center sm:text-left">
                  <p className="text-[#66d5dc] font-bold text-base sm:text-lg tracking-wide">
                    {t('about.ceoName')}
                  </p>
                  <p className="text-slate-400 text-[10px] uppercase tracking-[0.2em] font-semibold mt-0.5">
                    Director Leadership
                  </p>
                </div>

                <div className="flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs text-slate-300">
                  <span className="w-2 h-2 rounded-full bg-[#00A8B5] animate-pulse" />
                  <span>Leadership • Trust • Excellence</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* =========================================================
          6. OFFICE + CONTACT
      ========================================================= */}
      <section className="pb-24 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-7 lg:gap-8 items-stretch">
          {/* OFFICE */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            whileHover={{ y: -5 }}
            className="bg-white border border-slate-200/90 rounded-3xl p-8 shadow-lg hover:shadow-2xl hover:border-[#00A8B5]/40 transition-all flex flex-col justify-between"
          >
            <div>
              <div className="flex items-start gap-5">
                <div className="w-14 h-14 shrink-0 rounded-2xl bg-[#0A2540]/10 border border-[#0A2540]/15 flex items-center justify-center text-2xl shadow-sm">
                  📍
                </div>

                <div className="min-w-0">
                  <span className="text-[10px] uppercase tracking-[0.2em] text-slate-400 font-bold">
                    Visit Us
                  </span>
                  <h3 className="text-xl font-bold text-[#0A2540] mt-1 mb-2.5 tracking-tight">
                    {t('about.officeTitle')}
                  </h3>
                  <p className="font-semibold text-slate-800 text-sm mb-2">
                    {t('about.officeName')}
                  </p>
                  <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                    {t('about.officeAddress')}
                  </p>
                </div>
              </div>

              <div className="mt-6 p-3.5 rounded-2xl bg-slate-50 border border-slate-200/70 flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-[#00A8B5]/10 text-[#00A8B5] flex items-center justify-center text-sm font-bold">
                  🗺️
                </div>
                <div>
                  <p className="text-xs font-semibold text-[#0A2540]">Easy Accessibility</p>
                  <p className="text-[11px] text-slate-500">Centrally located for seamless client visits.</p>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-5 border-t border-slate-100 text-xs text-slate-500 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="text-[#00A8B5]">✦</span>
                <span>We are here to help</span>
              </div>
              <span className="text-[11px] font-medium text-slate-400">Open 24/7</span>
            </div>
          </motion.div>

          {/* CONTACT */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            whileHover={{ y: -5 }}
            className="relative overflow-hidden rounded-3xl bg-[#0A2540] text-white p-8 shadow-2xl border border-[#00A8B5]/40 flex flex-col justify-between"
          >
            <div className="absolute inset-0 opacity-[0.07] bg-[radial-gradient(#00A8B5_1.5px,transparent_1.5px)] [background-size:18px_18px] pointer-events-none" />
            <div className="absolute -right-24 -top-24 w-52 h-52 rounded-full bg-[#00A8B5]/15 blur-2xl pointer-events-none" />

            <div className="relative flex flex-col items-center text-center">
              <div className="w-14 h-14 rounded-2xl bg-[#00A8B5]/15 border border-[#00A8B5]/30 flex items-center justify-center text-2xl mb-5 shadow-inner">
                💬
              </div>

              <h3 className="text-2xl font-bold mb-3 tracking-tight">
                {t('about.contactTitle')}
              </h3>

              <p className="text-slate-300 text-sm leading-relaxed max-w-sm mb-7">
                {t('about.contactDesc')}
              </p>

              <motion.a
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.98 }}
                href="https://wa.me/6285195550372"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center justify-center gap-2.5 px-8 py-3.5 bg-[#00A8B5] hover:bg-[#008f9c] text-white font-bold text-sm rounded-full shadow-lg shadow-[#00A8B5]/30 transition-all duration-200"
              >
                <span className="text-lg group-hover:rotate-12 transition-transform duration-200">
                  💬
                </span>
                <span>{t('about.contactBtn')}</span>
              </motion.a>
            </div>

            <div className="relative mt-7 pt-5 border-t border-white/10 text-center">
              <span className="text-[11px] text-[#66d5dc] font-medium tracking-wide">
                Fast response via WhatsApp Customer Care
              </span>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default About;