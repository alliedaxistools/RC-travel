import React from 'react';
import { useTranslation } from 'react-i18next';
import { MessageSquare, Mail, MapPin, Clock, Code } from 'lucide-react';

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer id="contact" className="bg-[#0A2540] text-slate-100 pt-16 pb-8 border-t-4 border-[#00A8B5]">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        
        {/* Column 1: Company Info */}
        <div className="space-y-4">
          <h3 className="text-2xl font-extrabold text-white">PT Rute Cemerlang Travel</h3>
          <p className="text-[#00A8B5] font-semibold text-sm">{t('footer.companyTagline')}</p>
          <p className="text-slate-300 text-xs leading-relaxed">
            {t('footer.companyDesc')}
          </p>
        </div>

        {/* Column 2: Contact Details */}
        <div className="space-y-3 text-sm text-slate-300">
          <h4 className="font-bold text-white text-base mb-3 border-b border-[#00A8B5]/30 pb-1">{t('footer.contactHeader')}</h4>
          
          <div className="flex items-start gap-2.5">
            <MessageSquare className="w-4 h-4 text-[#00A8B5] mt-1 flex-shrink-0" />
            <div>
              <span className="block text-xs font-semibold text-[#00A8B5]">{t('footer.whatsappLabel')}</span>
              <a href="https://wa.me/6285195550372" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors text-xs">
                +62 851-9555-0372
              </a>
            </div>
          </div>

          <div className="flex items-start gap-2.5">
            <Mail className="w-4 h-4 text-[#00A8B5] mt-1 flex-shrink-0" />
            <div>
              <span className="block text-xs font-semibold text-[#00A8B5]">{t('footer.emailLabel')}</span>
              <a href="mailto:info@ptrutecemerlang.com" className="hover:text-white transition-colors text-xs">
                info@ptrutecemerlang.com
              </a>
            </div>
          </div>

          <div className="flex items-start gap-2.5">
            <Clock className="w-4 h-4 text-[#00A8B5] mt-1 flex-shrink-0" />
            <div>
              <span className="block text-xs font-semibold text-[#00A8B5]">{t('footer.hoursLabel')}</span>
              <p className="text-xs">{t('footer.hoursText')}</p>
            </div>
          </div>
        </div>

        {/* Column 3: Address */}
        <div className="space-y-3 text-sm text-slate-300">
          <h4 className="font-bold text-white text-base mb-3 border-b border-[#00A8B5]/30 pb-1">{t('footer.addressHeader')}</h4>
          <div className="flex items-start gap-2.5">
            <MapPin className="w-5 h-5 text-[#00A8B5] mt-1 flex-shrink-0" />
            <p className="text-xs leading-relaxed">
              {t('footer.addressText')}
            </p>
          </div>
        </div>

        {/* Column 4: Follow Us (Social Links with Icons) */}
        <div className="space-y-3 text-sm text-slate-300">
          <h4 className="font-bold text-white text-base mb-3 border-b border-[#00A8B5]/30 pb-1">{t('footer.socialHeader')}</h4>
          <div className="flex flex-col gap-2.5 text-xs">
            
            {/* Instagram */}
            <a 
              href="https://instagram.com/rutecemerlang" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="px-3 py-2 rounded-xl bg-[#0D2F4F] border border-[#00A8B5]/30 hover:border-[#00A8B5] transition-all flex items-center gap-2.5"
            >
              <svg className="w-4 h-4 text-[#00A8B5] fill-current" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5zm0 2a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3H7zm5 3.5A5.5 5.5 0 1 1 6.5 13 5.5 5.5 0 0 1 12 7.5zm0 2A3.5 3.5 0 1 0 15.5 13 3.5 3.5 0 0 0 12 9.5zm5.25-3.25a1.25 1.25 0 1 1-1.25 1.25 1.25 1.25 0 0 1 1.25-1.25z"/>
              </svg>
              <span>{t('footer.instaText')}</span>
            </a>

            {/* TikTok */}
            <a 
              href="https://tiktok.com/@pt.rutecemerlang" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="px-3 py-2 rounded-xl bg-[#0D2F4F] border border-[#00A8B5]/30 hover:border-[#00A8B5] transition-all flex items-center gap-2.5"
            >
              <span className="w-4 h-4 text-[#00A8B5] font-black flex items-center justify-center text-xs">🎵</span>
              <span>{t('footer.tiktokText')}</span>
            </a>

            {/* Facebook */}
            <a 
              href="https://facebook.com/share/1HR2F7fyTd/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="px-3 py-2 rounded-xl bg-[#0D2F4F] border border-[#00A8B5]/30 hover:border-[#00A8B5] transition-all flex items-center gap-2.5"
            >
              <svg className="w-4 h-4 text-[#00A8B5] fill-current" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
              <span>{t('footer.fbText')}</span>
            </a>

          </div>
        </div>

      </div>

      {/* Bottom Copyright & Allied Axis Branding */}
      <div className="max-w-7xl mx-auto px-6 lg:px-12 mt-12 pt-6 border-t border-slate-800 flex flex-col sm:flex-row justify-between items-center text-xs text-slate-400 gap-4">
        <p>© {new Date().getFullYear()} PT Rute Cemerlang Travel. {t('footer.rights')}</p>
        
        <a
          href="https://www.alliedaxis.digital/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1.5 text-slate-300 bg-[#0D2F4F] px-4 py-2 rounded-full border border-[#00A8B5]/30 hover:border-[#00A8B5] transition-all hover:text-white"
        >
          <Code className="w-3.5 h-3.5 text-[#00A8B5]" />
          <span>{t('footer.craftedBy')} <strong className="text-white tracking-wide">Allied Axis</strong></span>
        </a>
      </div>
    </footer>
  );
};

export default Footer;