"use client";

import React, { useState, useEffect } from 'react';

export default function LegalWorkflowStrip() {
  const [currentPhase, setCurrentPhase] = useState(0); // 0 = input phase, 1 = output phase
  const [typingText, setTypingText] = useState('');
  const [summaryText, setSummaryText] = useState('');
  const [showCursor, setShowCursor] = useState(true);

  const inputText = "Summarize the operating covenants for AvantiBio's General Counsel";
  const summary = `Based on the Merger Agreement document, here are the key operating covenants for AvantiBio:

• Maintain ordinary course of business operations
• Obtain consent for material contracts exceeding $500K  
• Preserve key customer and supplier relationships
• Continue R&D activities within approved budget parameters
• Maintain regulatory compliance and IP protections`;

  useEffect(() => {
    const animationCycle = () => {
      // Reset all states
      setCurrentPhase(0);
      setTypingText('');
      setSummaryText('');
      setShowCursor(true);

      // Phase 1: Type the input text (2 seconds)
      let currentIndex = 0;
      const typeInterval = setInterval(() => {
        if (currentIndex < inputText.length) {
          setTypingText(inputText.slice(0, currentIndex + 1));
          currentIndex++;
        } else {
          clearInterval(typeInterval);
          
          // Show "Ask AI" button click after typing completes
          setTimeout(() => {
            setShowCursor(false);
            
            // Phase 2: Transition to output phase (1 second transition)
            setTimeout(() => {
              setCurrentPhase(1);
              
              // Phase 3: Type the summary text (3 seconds)
              let summaryIndex = 0;
              const summaryInterval = setInterval(() => {
                if (summaryIndex < summary.length) {
                  setSummaryText(summary.slice(0, summaryIndex + 1));
                  summaryIndex++;
                } else {
                  clearInterval(summaryInterval);
                  
                  // Hold final state for 2 seconds before restarting
                  setTimeout(() => {
                    animationCycle(); // Restart the cycle
                  }, 2000);
                }
              }, 20); // Faster typing for summary
            }, 1000);
          }, 500);
        }
      }, 50); // Typing speed for input
    };

    animationCycle();
  }, [inputText, summary]);

  return (
    <div className="w-full py-16" style={{ backgroundColor: '#0f0e0d' }}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
        </div>

        <div className="flex justify-center">
          <div className="bg-white shadow-lg w-full max-w-[63.8rem] min-h-[31.9rem] flex flex-col lg:flex-row">
            <div className="relative bg-white overflow-hidden h-[31.9rem] w-full lg:w-[31.9rem]">
          {/* Input Phase */}
          <div className={`transition-all duration-1000 ${
            currentPhase === 0 ? 'opacity-100' : 'opacity-0 absolute inset-0'
          }`}>
            <div className="p-8 h-full flex flex-col justify-center">
              <div className="max-w-lg mx-auto w-full">
                {/* Query Input */}
                <div className="mb-6">
                  <div className="relative">
                    <input
                      type="text"
                      value={typingText}
                      readOnly
                      className="w-full px-4 py-4 border border-gray-200 rounded-xl focus:outline-none text-gray-500 bg-white"
                      placeholder="Enter your query..."
                    />
                    {showCursor && currentPhase === 0 && (
                      <span className="absolute right-4 top-1/2 transform -translate-y-1/2 animate-pulse text-gray-400">
                        |
                      </span>
                    )}
                  </div>
                </div>

                {/* File Upload Area */}
                <div className="mb-8">
                  <div className="border border-gray-200 rounded-xl p-4 bg-white flex items-center">
                    <div className="flex items-center mr-3">
                      <svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div className="flex-1">
                      <div className="text-gray-700 font-medium">Merger Agreement.docx</div>
                    </div>
                    <div className="w-6 h-6">
                      <svg className="w-full h-full text-gray-400" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M13.5 3L7 3C5.9 3 5 3.9 5 5L5 19C5 20.1 5.9 21 7 21L17 21C18.1 21 19 20.1 19 19L19 9L13.5 3ZM17 19L7 19L7 5L13 5L13 9L17 9L17 19Z"/>
                      </svg>
                    </div>
                  </div>
                </div>

                {/* Ask VakeelAssist Button */}
                <div className="text-center">
                  <button
                    className={`w-full py-4 text-white rounded-xl font-medium transition-all duration-300 ${
                      typingText === inputText ? 'cursor-pointer' : 'opacity-50'
                    }`}
                    style={{ backgroundColor: '#0f0e0d' }}
                  >
                    Ask VakeelAssist
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Output Phase */}
          <div className={`transition-all duration-1000 absolute inset-0 ${
            currentPhase === 1 ? 'opacity-100' : 'opacity-0'
          }`}>
            <div className="p-8 h-full flex flex-col">
              <div className="max-w-3xl mx-auto w-full flex-1 flex flex-col">
                {/* AI Response Header */}
                <div className="flex items-center mb-4">
                  <div className="w-8 h-8 rounded-full flex items-center justify-center mr-3" style={{ backgroundColor: '#0f0e0d' }}>
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <div>
                    <div className="font-medium text-gray-800">Legal AI Assistant</div>
                    <div className="text-sm text-gray-500">Analyzing document...</div>
                  </div>
                </div>

                {/* AI Response Content */}
                <div className="bg-gray-50 rounded-lg p-6 flex-1 min-h-0 mb-6 overflow-y-auto">
                  <div className="prose max-w-none">
                    <div className="text-gray-800 leading-relaxed whitespace-pre-line">
                      {summaryText}
                      {currentPhase === 1 && summaryText.length < summary.length && (
                        <span className="animate-pulse text-blue-500">|</span>
                      )}
                    </div>
                  </div>
                </div>

                {/* Action Buttons */}
                {summaryText === summary && (
                  <div className="flex gap-2 animate-fade-in flex-wrap">
                    <button className="px-3 py-2 text-blue-600 border border-blue-600 rounded-lg hover:bg-blue-50 transition-colors text-xs">
                      Ask Follow-up
                    </button>
                    <button className="px-3 py-2 text-gray-600 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors text-xs">
                      Export Summary
                    </button>
                    <button className="px-3 py-2 text-gray-600 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors text-xs">
                      Share
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
            </div>


            {/* Right side content area */}
            <div className="w-full lg:w-[31.9rem] h-[31.9rem] flex items-center justify-center p-8" style={{ backgroundColor: '#1f1d1a' }}>
              <div className="text-white">
                <div className="text-base text-gray-400 mb-2">Assistant</div>
                <h3 className="text-4xl font-bold mb-6 leading-tight">
                  Tailored to<br />
                  Your Expertise
                </h3>
                <p className="text-gray-300 mb-8 leading-relaxed text-lg">
                  Delegate complex tasks in natural language to your domain-specific personal assistant.
                </p>
                <div className="flex items-center text-gray-400 hover:text-white transition-colors cursor-pointer text-lg">
                  <span className="mr-2">Explore Assistant</span>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
