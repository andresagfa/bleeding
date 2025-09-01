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
    const timer1 = setTimeout(() => setStep(1), 1000);  // Show description after 1s
    const timer2 = setTimeout(() => setStep(2), 2500);  // Show CTA and form after 2.5s

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, []);

  return (
    <div className="w-full h-screen bg-gradient-to-br from-gray-50 to-white flex items-center justify-center px-6 overflow-hidden">
      <div className="text-center max-w-4xl space-y-12">
        {/* Header - always visible */}
        <div className="opacity-100 transform transition-all duration-1000">
          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6">
            <span className="bg-gradient-to-r from-black to-gray-600 bg-clip-text text-transparent">
              AI(+)
            </span>
          </h1>
        </div>

        {/* Description Text - appears when step >= 1 */}
        <div className={`transition-all duration-1000 ease-out transform ${
          step >= 1 
            ? 'opacity-100 translate-y-0 scale-100' 
            : 'opacity-0 translate-y-8 scale-95'
        }`}>
          <p className='text-center font-bold text-[32px] leading-[38px] text-[#9E1C20]'>New blood is rare.</p> 
          <p className="text-[32px] leading-[38px] text-[#333132] font-normal">
            Only 07 of 80 spaces left for the ones ready to carry it.
            <br />
            <span className="text-gray-500">Each scroll reveals a new chapter of innovation and creativity.</span>
          </p>
        </div>

        {/* Call to Action - appears when step >= 2 */}
        <div className={`transition-all duration-1000 ease-out transform ${
          step >= 2 
            ? 'opacity-100 translate-y-0 scale-100' 
            : 'opacity-0 translate-y-8 scale-95'
        }`}>
          <div className="space-y-6">   
            {/* Action buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button className="text-center text-[12.354px] leading-[18.825px] text-[#333132] font-normal rounded-[156.875px] border-[0.784px] border-[#333132] flex items-center gap-[3.138px] px-[7.844px] py-[7.059px]">
                To access the event, please confirm your attendance.
              </button>
            </div>
          </div>
        </div>

        {/* FORM */}
      <div className={`transition-all duration-1000 ease-out transform ${
  step >= 2 
    ? 'opacity-100 translate-y-0 scale-100'
    : 'opacity-0 translate-y-8 scale-95'
}`}>
  <div className="max-w-sm mx-auto bg-transparent p-4">
    <div className="space-y-4">
      {/* Name Field */}
      <div className="relative">
        <div className="flex items-center border-b border-[#333132] py-1">
          <label className="text-xs font-medium text-[#333132] uppercase tracking-wide min-w-0 flex-shrink-0">
            NAME
          </label>
          <input
            type="text"
            value={formData.name}
            onChange={(e) => handleInputChange('name', e.target.value)}
            className="flex-1 bg-transparent border-0 text-[#333132] text-center text-right py-1 px-2 focus:outline-none transition-colors text-sm"
          />
        </div>
      </div>

      {/* Company Field */}
      <div className="relative">
        <div className="flex items-center border-b border-[#333132] py-1">
          <label className="text-xs font-medium text-[#333132] uppercase tracking-wide min-w-0 flex-shrink-0">
            COMPANY
          </label>
          <input
            type="text"
            value={formData.company}
            onChange={(e) => handleInputChange('company', e.target.value)}
            className="flex-1 bg-transparent border-0 text-[#333132] text-center text-right py-1 px-2 focus:outline-none transition-colors text-sm"
          />
        </div>
      </div>

      {/* Phone Number Field */}
      <div className="relative">
        <div className="flex items-center border-b border-[#333132] py-1">
          <label className="text-xs font-medium text-[#333132] uppercase tracking-wide min-w-0 flex-shrink-0">
            PHONE NUMBER
          </label>
          <input
            type="tel"
            value={formData.phone}
            onChange={(e) => handleInputChange('phone', e.target.value)}
            className="flex-1 bg-transparent border-0 text-[#333132] text-center text-right py-1 px-2 focus:outline-none transition-colors text-sm"
          />
        </div>
      </div>

      {/* Email Field */}
      <div className="relative">
        <div className="flex items-center border-b border-[#333132] py-1">
          <label className="text-xs font-medium text-[#333132] uppercase tracking-wide min-w-0 flex-shrink-0">
            E-MAIL
          </label>
          <input
            type="email"
            value={formData.email}
            onChange={(e) => handleInputChange('email', e.target.value)}
            className="flex-1 bg-transparent border-0 text-[#333132] text-center text-right py-1 px-2 focus:outline-none transition-colors text-sm"
          />
        </div>
      </div>

      {/* Submit Button */}
      <div className="pt-2">
        <button
          onClick={handleSubmit}
          className="w-full bg-[#333132] hover:bg-[#9E1C20] text-white font-medium py-2 px-4 rounded-full transition-colors duration-200 focus:outline-none text-sm"
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