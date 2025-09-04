import React from 'react';

const Footer = () => {
  return (
    <div className="fixed bottom-4 sm:bottom-8 left-1/2 transform -translate-x-1/2 w-auto px-4 ">
      <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 whitespace-nowrap">
        {/* Social Icons - centered on mobile, inline on desktop */}
        <div className="flex items-center gap-3 flex-shrink-0 order-1 sm:order-1">
          <a 
            href="#"
            className="w-auto sm:w-6 sm:h-6 rounded-sm flex items-center justify-center transition-colors"
            aria-label="Instagram"
          >
            <img 
              src="/ig.svg" 
              alt="Instagram" 
              className=""
            />
          </a>
          <a 
            href="#"
            className="w-auto sm:w-6 sm:h-6 rounded-sm flex items-center justify-center transition-colors"
            aria-label="LinkedIn"
          >
            <img 
              src="/linkedin.svg" 
              alt="LinkedIn" 
              className=""
            />
          </a>
        </div>
        
        {/* Terms Text - stacked on mobile, inline on desktop */}
        <div className="text-center flex-shrink-0 order-2 sm:order-2">
          {/* Mobile layout - stacked */}
          <div className="block sm:hidden">
            <p className="text-xs text-gray-700 leading-tight">
              BY INTERACTING WITH THIS FORM YOU ARE ACCEPTING OUR
            </p>
            <a 
              href="#"
              className="text-xs text-gray-700 underline hover:text-gray-900 transition-colors"
            >
              TERMS AND CONDITIONS
            </a>
          </div>
          
          {/* Desktop layout - inline with decorative line */}
          <div className="hidden sm:block">
            <p className="text-xs sm:text-xs md:text-sm text-gray-700">
              ────────────   BY INTERACTING WITH THIS FORM YOU ARE ACCEPTING OUR{' '}
              <a 
                href="#"
                className="underline hover:text-gray-900 transition-colors"
              >
                TERMS AND CONDITIONS
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;