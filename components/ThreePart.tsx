"use client";

import React, { useState, useEffect } from 'react';

const ThreePart = () => {
    const [formData, setFormData] = useState({
    name: 'Carlos Pérez',
    company: 'Budget',
    phone: '55 0000 0000',
    email: 'contact@company.com'
  });

  const handleInputChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSubmit = () => {
    console.log('Form submitted:', formData);
  };
  const [step, setStep] = useState(0);

  useEffect(() => {
    // Automatically advance through the steps with delays
    const timer0 = setTimeout(() => setStep(1), 500);   // Show header after 0.5s
    const timer1 = setTimeout(() => setStep(2), 1500);  // Show description after 1.5s
    const timer2 = setTimeout(() => setStep(3), 3000);  // Show CTA and form after 3s

    return () => {
      clearTimeout(timer0);
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, []);

  return (
    <div className="w-full flex-1 flex items-center justify-center px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="text-center w-full max-w-xs sm:max-w-sm md:max-w-2xl lg:max-w-4xl space-y-6 sm:space-y-8 md:space-y-10 lg:space-y-12">
        {/* Header - responsive font sizes */}
        <div className={`transition-all duration-1000 ease-out transform ${
          step >= 1 
            ? 'opacity-100 translate-y-0 scale-100' 
            : 'opacity-0 translate-y-8 scale-95'
        }`}>
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-3 sm:mb-4 md:mb-6">
            <span className="bg-gradient-to-r from-black to-gray-600 bg-clip-text text-transparent">
              AI(+)
            </span>
          </h1>
        </div>

        {/* Description Text - responsive font sizes and spacing */}
        <div className={`transition-all duration-1000 ease-out transform ${
          step >= 2 
            ? 'opacity-100 translate-y-0 scale-100' 
            : 'opacity-0 translate-y-8 scale-95'
        }`}>
          <p className='text-center font-bold text-lg sm:text-xl md:text-2xl lg:text-[32px] leading-tight sm:leading-relaxed md:leading-[38px] text-[#9E1C20] mb-2 sm:mb-3'>
            New blood is rare.
          </p> 
          <p className="text-lg sm:text-xl md:text-2xl lg:text-[32px] leading-tight sm:leading-relaxed md:leading-[38px] text-[#333132] font-normal px-2 sm:px-4">
            This invitation is personal, non-transferable, and built exclusively for you and the future of your business.
            <br className="hidden sm:block" />
              </p>

              <div className="flex flex-col">
             <span className="block sm:inline text-gray-500 text-base sm:text-lg md:text-xl lg:text-2xl mt-2 sm:mt-0">
             Your new blood type is waiting </span>
                 <span className="block sm:inline text-gray-500 text-base sm:text-lg md:text-xl lg:text-2xl mt-2 sm:mt-0">
          Tuesday, October 14th
6:00 PM</span>

        <span className="block sm:inline text-gray-500 text-base sm:text-lg md:text-xl lg:text-2xl mt-2 sm:mt-0">
Claudio Bernard 111, Doctores, Cuauhtémoc, 06720 Ciudad de México, CDMX</span>

          
        </div>
        </div>

        {/* Call to Action - responsive button */}
        <div className={`transition-all duration-1000 ease-out transform ${
          step >= 3 
            ? 'opacity-100 translate-y-0 scale-100' 
            : 'opacity-0 translate-y-8 scale-95'
        }`}>
          <div className="space-y-4 sm:space-y-6">   
            <div className="flex justify-center items-center">
    <button className="flex z-50  items-center justify-center gap-[3.138px] text-xs sm:text-sm text-[#333132] font-normal rounded-full border border-[#333132] px-[8.628px] py-[7.059px] max-w-xs sm:max-w-sm hover:bg-gray-50 transition-colors">
  <img 
    src="./peace.svg" 
    alt=""  
    className="w-[16px] h-[17px] sm:w-[19px] sm:h-[20.188px]"  
  />
  Register Now
</button>
            </div>
          </div>
        </div>

        {/* FORM - responsive layout */}
        <div className={`transition-all duration-1000 ease-out transform ${
          step >= 3 
            ? 'opacity-100 translate-y-0 scale-100'
            : 'opacity-0 translate-y-8 scale-95'
        }`}>
         <div className="w-full sm:w-3/4 max-w-4xl mx-auto bg-transparent p-2 sm:p-4">

            <div className="space-y-3 sm:space-y-4">
              {/* Name Field */}
              <div className="relative">
                <div className="flex items-center border-b border-[#6E6D6C] py-1 sm:py-2">
                  <label className="text-xs sm:text-sm font-medium text-[#6E6D6C] uppercase tracking-wide min-w-0 flex-shrink-0 w-20 sm:w-24 text-left">
                    NAME
                  </label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => handleInputChange('name', e.target.value)}
                    className="flex-1 bg-transparent border-0 text-[#6E6D6C] text-right py-1 px-2 focus:outline-none transition-colors text-sm sm:text-base"
                  />
                </div>
              </div>

              {/* Company Field */}
              <div className="relative">
                <div className="flex items-center border-b border-[#6E6D6C] py-1 sm:py-2">
                  <label className="text-xs sm:text-sm font-medium text-[#6E6D6C] uppercase tracking-wide min-w-0 flex-shrink-0 w-20 sm:w-24 text-left">
                    COMPANY
                  </label>
                  <input
                    type="text"
                    value={formData.company}
                    onChange={(e) => handleInputChange('company', e.target.value)}
                    className="flex-1 bg-transparent border-0 text-[#6E6D6C] text-right py-1 px-2 focus:outline-none transition-colors text-sm sm:text-base"
                  />
                </div>
              </div>

              {/* Phone Number Field */}
              <div className="relative">
                <div className="flex items-center border-b border-[#6E6D6C] py-1 sm:py-2">
                  <label className="text-xs sm:text-sm font-medium text-[#6E6D6C] uppercase tracking-wide min-w-0 flex-shrink-0 w-20 sm:w-24 text-left">
                    PHONE
                  </label>
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => handleInputChange('phone', e.target.value)}
                    className="flex-1 bg-transparent border-0 text-[#6E6D6C] text-right py-1 px-2 focus:outline-none transition-colors text-sm sm:text-base"
                  />
                </div>
              </div>

              {/* Email Field */}
              <div className="relative">
                <div className="flex items-center border-b border-[#6E6D6C] py-1 sm:py-2">
                  <label className="text-xs sm:text-sm font-medium text-[#6E6D6C] uppercase tracking-wide min-w-0 flex-shrink-0 w-20 sm:w-24 text-left">
                    E-MAIL
                  </label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => handleInputChange('email', e.target.value)}
                    className="flex-1 bg-transparent border-0 text-[#6E6D6C] text-right py-1 px-2 focus:outline-none transition-colors text-sm sm:text-base"
                  />
                </div>
              </div>

              {/* Submit Button */}
              <div className="pt-3 sm:pt-4">
                <button
                  onClick={handleSubmit}
                  className="w-full bg-[#333132] hover:bg-[#9E1C20] text-white font-medium py-2 sm:py-3 px-4 rounded-full transition-colors duration-200 focus:outline-none text-sm sm:text-base"
                >
                  Confirm
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThreePart;