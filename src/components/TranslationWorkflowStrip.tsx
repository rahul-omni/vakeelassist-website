"use client";

import React, { useState, useEffect } from 'react';

export default function TranslationWorkflowStrip() {
  const [currentPhase, setCurrentPhase] = useState(0); // 0 = input, 1 = translating, 2 = output
  const [displayText, setDisplayText] = useState('');
  const [translatedText, setTranslatedText] = useState('');
  const [showDropdown, setShowDropdown] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState('English');
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const [showCursor, setShowCursor] = useState(false);

  const originalText = `This Agreement shall be governed by and construed in accordance with the laws of the State of Delaware, without regard to its conflict of laws principles. Any disputes arising under this Agreement shall be resolved through binding arbitration in accordance with the rules of the American Arbitration Association.`;

  const marathiText = `हा करार डेलावेअर राज्याच्या कायद्यांद्वारे नियंत्रित आणि स्पष्ट केला जाईल, त्याच्या कायदेशीर संघर्षाच्या तत्त्वांकडे दुर्लक्ष करून. या करारांतर्गत उद्भवणारे कोणतेही विवाद अमेरिकन आर्बिट्रेशन असोसिएशनच्या नियमांनुसार बंधनकारक लवादाद्वारे सोडवले जातील.`;

  useEffect(() => {
    const animationCycle = () => {
      // Reset states
      setCurrentPhase(0);
      setDisplayText('');
      setTranslatedText('');
      setShowDropdown(false);
      setSelectedLanguage('English');
      setShowCursor(false);
      setCursorPosition({ x: 0, y: 0 });

      // Phase 1: Show original text immediately, then show cursor (2 seconds)
      setDisplayText(originalText);
      
      setTimeout(() => {
        setShowCursor(true);
        
        // Animate cursor to dropdown
        setTimeout(() => {
          setCursorPosition({ x: 300, y: 50 });
          setTimeout(() => {
            setShowDropdown(true);
            // Select Marathi
            setTimeout(() => {
              setSelectedLanguage('Marathi');
              setShowDropdown(false);
              
              // Move cursor to translate button and click
              setTimeout(() => {
                setCursorPosition({ x: 400, y: 100 });
                
                // Phase 2: Translation phase (1 second)
                setTimeout(() => {
                  setCurrentPhase(1);
                  setShowCursor(false);
                  
                  // Phase 3: Show translated text (3 seconds)
                  setTimeout(() => {
                    setCurrentPhase(2);
                    let marathiIndex = 0;
                    const marathiInterval = setInterval(() => {
                      if (marathiIndex < marathiText.length) {
                        setTranslatedText(marathiText.slice(0, marathiIndex + 1));
                        marathiIndex++;
                      } else {
                        clearInterval(marathiInterval);
                        
                        // Hold final state (1.5 seconds) then restart
                        setTimeout(() => {
                          animationCycle();
                        }, 1500);
                      }
                    }, 15); // Faster typing for Marathi
                  }, 1000);
                }, 500);
              }, 500);
            }, 800);
          }, 300);
        }, 500);
      }, 2000)
    };

    animationCycle();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="w-full py-16" style={{ backgroundColor: '#0f0e0d' }}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="flex justify-center">
          <div className="bg-white shadow-lg w-full max-w-[63.8rem] min-h-[31.9rem] flex flex-col lg:flex-row">
            {/* Left side content */}
            <div className="w-full lg:w-[31.9rem] h-[31.9rem] flex items-center justify-center p-8" style={{ backgroundColor: '#1f1d1a' }}>
              <div className="text-white">
                <div className="text-base text-gray-400 mb-2">Translation</div>
                <h3 className="text-4xl font-bold mb-6 leading-tight">
                  Break Language<br />
                  Barriers
                </h3>
               <p className="text-gray-300 leading-relaxed text-lg">
                 Instantly translate legal documents into 100+ languages while preserving legal terminology and context.
               </p>
              </div>
            </div>

            <div className="relative bg-white overflow-hidden h-[31.9rem] w-full lg:w-[31.9rem]">
              
              {/* Animated Mouse Cursor */}
              {showCursor && (
                <div 
                  className="absolute z-50 pointer-events-none transition-all duration-500 ease-out"
                  style={{ 
                    left: `${cursorPosition.x}px`, 
                    top: `${cursorPosition.y}px`,
                    transform: 'translate(-2px, -2px)'
                  }}
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="text-gray-800">
                    <path d="M5 3L19 12L12 14L10 21L5 3Z" fill="currentColor" stroke="white" strokeWidth="1"/>
                  </svg>
                </div>
              )}

              {/* Input/Original Text Phase */}
              <div className={`transition-all duration-1000 ${
                currentPhase === 0 ? 'opacity-100' : 'opacity-0 absolute inset-0'
              }`}>
                <div className="p-8 h-full flex flex-col">
                  {/* Header with controls */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center space-x-4">
                      <div className="text-sm text-gray-600">Document Language:</div>
                      <div className="relative">
                        <button className="flex items-center space-x-2 px-3 py-2 border border-gray-300 rounded-lg bg-white">
                          <span className="text-sm">{selectedLanguage}</span>
                          <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                          </svg>
                        </button>
                        
                        {/* Dropdown */}
                        {showDropdown && (
                          <div className="absolute top-full left-0 mt-1 w-48 bg-white border border-gray-200 rounded-lg shadow-lg z-40">
                            <div className="py-1">
                              <div className="px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer">English</div>
                              <div className="px-3 py-2 text-sm text-gray-700 hover:bg-blue-50 bg-blue-50 cursor-pointer">Marathi</div>
                              <div className="px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer">Hindi</div>
                              <div className="px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer">Tamil</div>
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                    
                    <button className="px-6 py-2 text-white rounded-lg font-medium transition-colors" style={{ backgroundColor: '#0f0e0d' }}>
                      Translate
                    </button>
                  </div>

                  {/* Document Content */}
                  <div className="flex-1 bg-gray-50 rounded-lg p-6 overflow-y-auto">
                  <div className="text-gray-800 leading-relaxed">
                    {displayText}
                  </div>
                  </div>
                </div>
              </div>

              {/* Translating Phase */}
              <div className={`transition-all duration-1000 absolute inset-0 ${
                currentPhase === 1 ? 'opacity-100' : 'opacity-0'
              }`}>
                <div className="p-8 h-full flex flex-col justify-center items-center">
                  <div className="text-center">
                    <div className="w-12 h-12 border-4 border-t-transparent rounded-full animate-spin mb-4" style={{ borderColor: '#0f0e0d', borderTopColor: 'transparent' }}></div>
                    <div className="text-xl font-medium text-gray-800 mb-2">Translating...</div>
                    <div className="text-gray-600">Converting to Marathi</div>
                  </div>
                </div>
              </div>

              {/* Output/Translated Text Phase */}
              <div className={`transition-all duration-1000 absolute inset-0 ${
                currentPhase === 2 ? 'opacity-100' : 'opacity-0'
              }`}>
                <div className="p-8 h-full flex flex-col">
                  {/* Header */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center space-x-4">
                      <div className="text-sm text-gray-600">Translated to:</div>
                      <div className="px-3 py-2 border border-gray-300 rounded-lg bg-gray-50">
                        <span className="text-sm font-medium">Marathi</span>
                      </div>
                    </div>
                    
                    <div className="flex space-x-2">
                      <button className="px-4 py-2 text-white rounded-lg transition-colors text-sm" style={{ backgroundColor: '#0f0e0d' }}>
                        Copy
                      </button>
                      <button className="px-4 py-2 text-white rounded-lg transition-colors text-sm" style={{ backgroundColor: '#0f0e0d' }}>
                        Download
                      </button>
                    </div>
                  </div>

                  {/* Translated Content */}
                  <div className="flex-1 bg-gray-50 rounded-lg p-6 overflow-y-auto">
                    <div className="text-gray-800 leading-relaxed" style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}>
                      {translatedText}
                      {currentPhase === 2 && translatedText.length < marathiText.length && (
                        <span className="animate-pulse text-blue-500">|</span>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}
