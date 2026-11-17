import React from 'react';

export default function AppPromoBanner({ variant = 'header', className = '' }) {
  const isFooter = variant === 'footer';

  return (
    <div
      className={`w-full select-none ${
        isFooter
          ? 'bg-white border-t border-[#E9DFC8]/60 text-[#252A24]'
          : 'bg-[#164E3D] border-t border-white/15 text-white leading-none overflow-x-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden'
      } ${className}`}
      style={{ minHeight: isFooter ? '26px' : '20px' }}
    >
      <div
        className={`max-w-7xl mx-auto flex flex-row items-center justify-center gap-1.5 sm:gap-2.5 text-center px-2 sm:px-6 ${
          isFooter ? 'py-1 flex-wrap sm:flex-nowrap' : 'py-0.5 whitespace-nowrap'
        }`}
      >
        <span
          className={`shrink-0 ${
            isFooter
              ? 'text-[11px] sm:text-xs text-[#252A24] font-medium'
              : 'text-[9.5px] sm:text-[10.5px] text-white font-medium'
          }`}
        >
          {isFooter ? (
            <>
              <span className="hidden sm:inline">
                Install Bhagvat Prasadam App &amp; Get{' '}
                <span className="text-[#164E3D] font-bold">2% Extra Discount</span> on App!
              </span>
              <span className="sm:hidden">
                Install App &amp; Get{' '}
                <span className="text-[#164E3D] font-bold">2% Off</span>:
              </span>
            </>
          ) : (
            <>
              <span className="hidden sm:inline">
                Install Bhagvat Prasadam App &amp; Get{' '}
                <span className="text-[#D8B879] font-bold">2% Extra Discount</span> on App!
              </span>
              <span className="sm:hidden">
                Install App &amp; Get{' '}
                <span className="text-[#D8B879] font-bold">2% Off</span>:
              </span>
            </>
          )}
        </span>

        <span
          className={`shrink-0 ${
            isFooter
              ? 'text-[10px] sm:text-xs text-[#555F58] font-medium hidden sm:inline'
              : 'text-[9px] sm:text-[10px] text-white/80 font-medium hidden sm:inline'
          }`}
        >
          Available on:
        </span>

        <div className="inline-flex items-center gap-1 sm:gap-1.5 shrink-0">
          <a
            href="https://play.google.com/store/apps/details?id=in.sellonapp.bhagvatprasadam&pcampaignid=web_share"
            target="_blank"
            rel="noopener noreferrer"
            className={`rounded-full font-semibold inline-flex items-center transition-all ${
              isFooter
                ? 'px-2 py-0.5 text-[9px] sm:text-[10px] gap-1 sm:gap-1.5 bg-black hover:bg-neutral-800 text-white shadow-2xs'
                : 'px-2 py-[1.5px] text-[8.5px] sm:text-[9.5px] gap-1 bg-black/90 hover:bg-black text-white border border-white/25 shadow-xs'
            }`}
            aria-label="Download Bhagvat Prasadam App on Play Store"
          >
            <svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg" className="w-2 h-2 sm:w-2.5 sm:h-2.5 fill-current shrink-0">
              <path d="M325.3 234.3L104.6 13l280.8 161.2-60.1 60.1zM47 0C34 6.8 25.3 19.2 25.3 35.3v441.3c0 16.1 8.7 28.5 21.7 35.3l256.6-256L47 0zm425.2 225.6l-58-33.3-60.7 60.7 60.7 60.7 58-33.3c16.2-9.3 24.3-21.7 24.3-37.4s-8.1-28.1-24.3-37.4zM385.4 337.8L104.6 499l220.7-220.7 60.1 59.5z" />
            </svg>
            <span>Play Store</span>
          </a>

          <a
            href="https://apps.apple.com/in/app/bhagvat-prasadam/id6751397354"
            target="_blank"
            rel="noopener noreferrer"
            className={`rounded-full font-semibold inline-flex items-center transition-all ${
              isFooter
                ? 'px-2 py-0.5 text-[9px] sm:text-[10px] gap-1 sm:gap-1.5 bg-black hover:bg-neutral-800 text-white shadow-2xs'
                : 'px-2 py-[1.5px] text-[8.5px] sm:text-[9.5px] gap-1 bg-black/90 hover:bg-black text-white border border-white/25 shadow-xs'
            }`}
            aria-label="Download Bhagvat Prasadam App on App Store"
          >
            <svg viewBox="0 0 384 512" xmlns="http://www.w3.org/2000/svg" className="w-2 h-2 sm:w-2.5 sm:h-2.5 fill-current shrink-0">
              <path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-46-19.1-73.4-19.1-34.9 0-73.7 20-94 54.7-41 70.4-10.7 175.7 29.4 233.1 19.6 28.2 43.1 59.6 73.8 58.4 29.4-1.2 40.4-19.1 76-19.1 35.6 0 45.6 19.1 76 19.1 31.3 0 52.2-28.3 71.6-56.3 22.4-32.4 31.6-63.7 32-65.3-.8-.3-62.7-24-63.3-96.6zm-46.3-176.7c15.7-19.2 26.2-45.9 23.3-72.6-22.9 1-50.7 15.3-67.1 34.5-14.4 16.6-27 43.6-23.7 69.9 25.5 2 51.8-12.6 67.5-31.8z" />
            </svg>
            <span>App Store</span>
          </a>
        </div>
      </div>
    </div>
  );
}
