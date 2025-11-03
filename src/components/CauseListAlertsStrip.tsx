"use client";

import React, { useState, useEffect } from 'react';

export default function CauseListAlertsStrip() {
  const [currentPhase, setCurrentPhase] = useState(0); // 0 = listing, 1 = processing, 2 = notifications
  const [caseDetails, setCaseDetails] = useState('');
  const [showNotifications, setShowNotifications] = useState(false);
  const [whatsappSent, setWhatsappSent] = useState(false);
  const [emailSent, setEmailSent] = useState(false);

  const caseInfo = {
    caseNumber: "CRL.A. 1234/2024",
    parties: "Rajesh Kumar vs. State of Delhi",
    court: "Delhi High Court",
    date: "September 10, 2025",
    time: "10:30 AM",
    courtroom: "Court Room No. 15"
  };

  useEffect(() => {
    const animationCycle = () => {
      // Reset states
      setCurrentPhase(0);
      setCaseDetails('');
      setShowNotifications(false);
      setWhatsappSent(false);
      setEmailSent(false);

      // Phase 1: Show case listing (3 seconds)
      setTimeout(() => {
        setCaseDetails(`${caseInfo.caseNumber}\n${caseInfo.parties}`);
        
        setTimeout(() => {
          // Phase 2: Processing phase (1 second)
          setCurrentPhase(1);
          
          setTimeout(() => {
            // Phase 3: Show notifications (3 seconds)
            setCurrentPhase(2);
            setShowNotifications(true);
            
            // Show WhatsApp notification first
            setTimeout(() => {
              setWhatsappSent(true);
            }, 500);

            // Show Email notification second
            setTimeout(() => {
              setEmailSent(true);

              // Hold final state for 3 seconds AFTER email fully appears
              setTimeout(() => {
                animationCycle();
              }, 3000);
            }, 1500);
          }, 1000);
        }, 2500);
      }, 500);
    };

    animationCycle();
  }, []);

  return (
    <div className="w-full py-16" style={{ backgroundColor: '#0f0e0d' }}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-center">
          <div className="bg-white shadow-lg w-full max-w-[63.8rem] min-h-[31.9rem] flex flex-col lg:flex-row">
            {/* Left side - Animation */}
            <div className="relative bg-white overflow-hidden h-[31.9rem] w-full lg:w-[31.9rem]">
              
              {/* Phase 1: Case Listing */}
              <div className={`transition-all duration-1000 ${
                currentPhase === 0 ? 'opacity-100' : 'opacity-0 absolute inset-0'
              }`}>
                <div className="p-8 h-full flex flex-col">
                  {/* Header - New Case Listed Alert */}
                  <div className="mb-6">
                    <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mb-4">
                      <div className="flex items-center">
                        <div className="w-8 h-8 rounded-full flex items-center justify-center mr-3" style={{ backgroundColor: '#0f0e0d' }}>
                          <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.664-.833-2.464 0L4.35 16.5c-.77.833.192 2.5 1.732 2.5z" />
                          </svg>
                        </div>
                        <div>
                          <div className="font-bold text-blue-800 text-lg">NEW CASE LISTED</div>
                          <div className="text-sm text-blue-600">Court hearing scheduled</div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Case Details Card */}
                  <div className="bg-gray-50 rounded-lg p-6 flex-1">
                    <div className="mb-4">
                      <div className="text-sm text-gray-500 mb-1">Case Number</div>
                      <div className="font-semibold text-gray-800">{caseInfo.caseNumber}</div>
                    </div>
                    
                    <div className="mb-4">
                      <div className="text-sm text-gray-500 mb-1">Parties</div>
                      <div className="text-gray-800">{caseInfo.parties}</div>
                    </div>
                    
                    <div className="mb-4">
                      <div className="text-sm text-gray-500 mb-1">Court</div>
                      <div className="text-gray-800">{caseInfo.court}</div>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <div className="text-sm text-gray-500 mb-1">Date</div>
                        <div className="font-medium text-gray-800">{caseInfo.date}</div>
                      </div>
                      <div>
                        <div className="text-sm text-gray-500 mb-1">Time</div>
                        <div className="font-medium text-gray-800">{caseInfo.time}</div>
                      </div>
                    </div>
                    
                    <div className="mt-4">
                      <div className="text-sm text-gray-500 mb-1">Venue</div>
                      <div className="text-gray-800">{caseInfo.courtroom}</div>
                    </div>
                  </div>

                  {/* Status */}
                  <div className="mt-4 flex items-center justify-center">
                    <div className="bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-bold animate-pulse">
                      🔔 NEW CASE LISTED
                    </div>
                  </div>
                </div>
              </div>

              {/* Phase 2: Processing */}
              <div className={`transition-all duration-1000 absolute inset-0 ${
                currentPhase === 1 ? 'opacity-100' : 'opacity-0'
              }`}>
                <div className="p-8 h-full flex flex-col justify-center items-center">
                  <div className="text-center">
                    <div className="w-12 h-12 border-4 border-t-transparent rounded-full animate-spin mb-4" style={{ borderColor: '#0f0e0d', borderTopColor: 'transparent' }}></div>
                    <div className="text-xl font-medium text-gray-800 mb-2">Sending Alerts...</div>
                    <div className="text-gray-600">Notifying all parties</div>
                  </div>
                </div>
              </div>

              {/* Phase 3: Notifications */}
              <div className={`transition-all duration-1000 absolute inset-0 ${
                currentPhase === 2 ? 'opacity-100' : 'opacity-0'
              }`}>
                <div className="p-8 h-full flex flex-col">
                  <div className="text-center mb-6">
                    <h3 className="text-lg font-semibold text-gray-800">Alerts Sent Successfully</h3>
                  </div>
                  
                  <div className="flex-1 space-y-4">
                    {/* WhatsApp Notification */}
                    <div className={`transition-all duration-500 ${whatsappSent ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-4'}`}>
                      <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                        <div className="flex items-start">
                          <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                            <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.700"/>
                            </svg>
                          </div>
                          <div className="flex-1">
                            <div className="font-medium text-gray-800 mb-1">WhatsApp</div>
                            <div className="text-sm text-gray-600">Alert sent to +91 98765 43210</div>
                            <div className="text-xs text-gray-500 mt-1">Case hearing on Sept 10, 2025 at 10:30 AM</div>
                          </div>
                          <div className="text-green-600">✓</div>
                        </div>
                      </div>
                    </div>

                    {/* Email Notification */}
                    <div className={`transition-all duration-500 ${emailSent ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-4'}`}>
                      <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                        <div className="flex items-start">
                          <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                            <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                            </svg>
                          </div>
                          <div className="flex-1">
                            <div className="font-medium text-gray-800 mb-1">Email</div>
                            <div className="text-sm text-gray-600">Alert sent to rajesh.kumar@email.com</div>
                            <div className="text-xs text-gray-500 mt-1">Court hearing reminder with calendar invite</div>
                          </div>
                          <div className="text-blue-600">✓</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

            </div>

            {/* Right side content */}
            <div className="w-full lg:w-[31.9rem] h-[31.9rem] flex items-center justify-center p-8" style={{ backgroundColor: '#1f1d1a' }}>
              <div className="text-white">
                <div className="text-base text-gray-400 mb-2">Alerts</div>
                <h3 className="text-4xl font-bold mb-6 leading-tight">
                  Never Miss a<br />
                  Court Date
                </h3>
                <p className="text-gray-300 leading-relaxed text-lg">
                  Get instant notifications via WhatsApp and Email when your cases are listed. Stay informed about hearing dates, venue changes, and important updates.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
