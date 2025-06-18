"use client";
import { useState, useEffect, useRef } from "react";
import { Button } from "../../components/ui/button";
import AOS from "aos";
import "aos/dist/aos.css";
import Link from 'next/link';

export default function HowItWorks() {
  const [activeStep, setActiveStep] = useState(0);
  const processRef = useRef<HTMLDivElement>(null);
  const [isInView, setIsInView] = useState(false);
  
  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: "ease-out",
      once: false,
    });
    
    // Check if element is in view
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          startAnimation();
        } else {
          setIsInView(false);
          setActiveStep(0);
        }
      },
      {
        root: null,
        threshold: 0.3,
      }
    );
    
    if (processRef.current) {
      observer.observe(processRef.current);
    }
    
    return () => observer.disconnect();
  }, []);
  
  // Animation sequence that automatically progresses
  const startAnimation = () => {
    setActiveStep(0);
    
    const timers = [
      setTimeout(() => setActiveStep(1), 2000),
      setTimeout(() => setActiveStep(2), 4000),
      setTimeout(() => setActiveStep(3), 6000),
    ];
    
    return () => timers.forEach(timer => clearTimeout(timer));
  };

  return (
    <div className="min-h-screen bg-white flex flex-col">
      {/* Navigation */}
      <nav className="w-full bg-white border-b border-gray-200 fixed top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex-shrink-0 flex items-center">
              <Link href="/" className="text-xl md:text-2xl font-bold text-blue-600">VoiceAI Real Estate</Link>
            </div>
            <div className="hidden md:ml-6 md:flex md:items-center md:space-x-6">
              <Link href="/#features" className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors duration-200">Features</Link>
              <Link href="/how-it-works" className="text-blue-600 border-b-2 border-blue-600 px-3 py-2 text-sm font-medium">How It Works</Link>
              <Link href="/#testimonials" className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors duration-200">Testimonials</Link>
              <Link href="/#pricing" className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors duration-200">Pricing</Link>
              <Link href="/#faq" className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors duration-200">FAQ</Link>
              <Button className="ml-6 bg-blue-600 hover:bg-blue-700 text-white">Contact Us</Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Page Header */}
      <div className="w-full bg-gradient-to-r from-gray-50 to-blue-50 pt-32 pb-12 md:pt-40 md:pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6" data-aos="fade-up">
            How <span className="text-blue-600">VoiceAI</span> Works
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8" data-aos="fade-up" data-aos-delay="100">
            Our advanced AI technology streamlines your real estate business communication in four simple steps
          </p>
        </div>
      </div>

      {/* Premium Animated Process Flow */}
      <div className="w-full bg-white py-20" ref={processRef}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Hexagon Flow Animation */}
          <div className="relative">
            {/* Background pattern */}
            <div className="absolute inset-0 bg-blue-50 bg-opacity-50 -skew-y-3 transform rounded-3xl"></div>
            
            {/* Flow container */}
            <div className="relative py-20 px-4 overflow-hidden">
              {/* Flowing line animation */}
              <div className="absolute top-1/2 left-0 w-full h-2 bg-gradient-to-r from-transparent via-blue-100 to-transparent">
                <div 
                  className="absolute top-0 left-0 h-full bg-gradient-to-r from-blue-400 via-blue-600 to-blue-400 transition-all duration-1000 ease-in-out"
                  style={{ 
                    width: isInView ? '100%' : '0%', 
                    transitionDelay: '500ms',
                    boxShadow: '0 0 15px rgba(37, 99, 235, 0.5)' 
                  }}
                ></div>
              </div>
              
              {/* Four process steps in connected hexagons */}
              <div className="grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-0 z-20 relative">
                {/* Step 1 */}
                <div className={`transform transition-all duration-700 ease-in-out ${activeStep >= 0 ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                  <div className="relative">
                    {/* Hexagon shape */}
                    <div className={`mx-auto w-28 h-28 bg-white relative shadow-lg ${activeStep === 0 ? 'ring-4 ring-blue-400 ring-opacity-50' : ''}`} 
                         style={{ clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)' }}>
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className={`w-20 h-20 ${activeStep >= 0 ? 'bg-blue-500' : 'bg-gray-300'} transition-colors duration-500`} 
                             style={{ clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)' }}>
                          <div className="h-full w-full flex items-center justify-center">
                            <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                            </svg>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    {/* Number indicator */}
                    <div className={`absolute -top-3 -right-3 w-8 h-8 rounded-full bg-white shadow-md flex items-center justify-center border-2 ${activeStep >= 0 ? 'border-blue-500 text-blue-600' : 'border-gray-300 text-gray-400'} font-bold transition-colors duration-500`}>1</div>
                    
                    {/* Connecting line to next step (desktop only) */}
                    <div className="hidden md:block absolute top-1/2 left-full w-full h-1 bg-gray-200 -translate-y-1/2 transform">
                      <div 
                        className="h-full bg-blue-500 transition-all duration-700 ease-in-out"
                        style={{ width: activeStep > 0 ? '100%' : '0%' }}
                      ></div>
                    </div>
                  </div>
                  
                  {/* Step content */}
                  <div className="text-center pt-6 px-2">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Incoming Leads</h3>
                    <p className="text-gray-600 text-sm">
                      VoiceAI automatically initiates contact with new leads through your preferred channel.
                    </p>
                  </div>
                </div>
                
                {/* Step 2 */}
                <div className={`transform transition-all duration-700 ease-in-out ${activeStep >= 1 ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`} 
                     style={{ transitionDelay: '200ms' }}>
                  <div className="relative">
                    {/* Hexagon shape */}
                    <div className={`mx-auto w-28 h-28 bg-white relative shadow-lg ${activeStep === 1 ? 'ring-4 ring-blue-400 ring-opacity-50' : ''}`} 
                         style={{ clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)' }}>
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className={`w-20 h-20 ${activeStep >= 1 ? 'bg-blue-500' : 'bg-gray-300'} transition-colors duration-500`} 
                             style={{ clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)' }}>
                          <div className="h-full w-full flex items-center justify-center">
                            <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"></path>
                            </svg>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    {/* Number indicator */}
                    <div className={`absolute -top-3 -right-3 w-8 h-8 rounded-full bg-white shadow-md flex items-center justify-center border-2 ${activeStep >= 1 ? 'border-blue-500 text-blue-600' : 'border-gray-300 text-gray-400'} font-bold transition-colors duration-500`}>2</div>
                    
                    {/* Connecting line to next step (desktop only) */}
                    <div className="hidden md:block absolute top-1/2 left-full w-full h-1 bg-gray-200 -translate-y-1/2 transform">
                      <div 
                        className="h-full bg-blue-500 transition-all duration-700 ease-in-out"
                        style={{ width: activeStep > 1 ? '100%' : '0%' }}
                      ></div>
                    </div>
                  </div>
                  
                  {/* Step content */}
                  <div className="text-center pt-6 px-2">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Natural Conversations</h3>
                    <p className="text-gray-600 text-sm">
                      Our AI engages in human-like conversations to qualify leads and collect requirements.
                    </p>
                  </div>
                </div>
                
                {/* Step 3 */}
                <div className={`transform transition-all duration-700 ease-in-out ${activeStep >= 2 ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`} 
                     style={{ transitionDelay: '400ms' }}>
                  <div className="relative">
                    {/* Hexagon shape */}
                    <div className={`mx-auto w-28 h-28 bg-white relative shadow-lg ${activeStep === 2 ? 'ring-4 ring-blue-400 ring-opacity-50' : ''}`} 
                         style={{ clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)' }}>
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className={`w-20 h-20 ${activeStep >= 2 ? 'bg-blue-500' : 'bg-gray-300'} transition-colors duration-500`} 
                             style={{ clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)' }}>
                          <div className="h-full w-full flex items-center justify-center">
                            <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                            </svg>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    {/* Number indicator */}
                    <div className={`absolute -top-3 -right-3 w-8 h-8 rounded-full bg-white shadow-md flex items-center justify-center border-2 ${activeStep >= 2 ? 'border-blue-500 text-blue-600' : 'border-gray-300 text-gray-400'} font-bold transition-colors duration-500`}>3</div>
                    
                    {/* Connecting line to next step (desktop only) */}
                    <div className="hidden md:block absolute top-1/2 left-full w-full h-1 bg-gray-200 -translate-y-1/2 transform">
                      <div 
                        className="h-full bg-blue-500 transition-all duration-700 ease-in-out"
                        style={{ width: activeStep > 2 ? '100%' : '0%' }}
                      ></div>
                    </div>
                  </div>
                  
                  {/* Step content */}
                  <div className="text-center pt-6 px-2">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Scheduling & Follow-up</h3>
                    <p className="text-gray-600 text-sm">
                      VoiceAI handles appointment scheduling and timely follow-ups to keep prospects engaged.
                    </p>
                  </div>
                </div>
                
                {/* Step 4 */}
                <div className={`transform transition-all duration-700 ease-in-out ${activeStep >= 3 ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`} 
                     style={{ transitionDelay: '600ms' }}>
                  <div className="relative">
                    {/* Hexagon shape */}
                    <div className={`mx-auto w-28 h-28 bg-white relative shadow-lg ${activeStep === 3 ? 'ring-4 ring-blue-400 ring-opacity-50' : ''}`} 
                         style={{ clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)' }}>
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className={`w-20 h-20 ${activeStep >= 3 ? 'bg-blue-500' : 'bg-gray-300'} transition-colors duration-500`} 
                             style={{ clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)' }}>
                          <div className="h-full w-full flex items-center justify-center">
                            <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path>
                            </svg>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    {/* Number indicator */}
                    <div className={`absolute -top-3 -right-3 w-8 h-8 rounded-full bg-white shadow-md flex items-center justify-center border-2 ${activeStep >= 3 ? 'border-blue-500 text-blue-600' : 'border-gray-300 text-gray-400'} font-bold transition-colors duration-500`}>4</div>
                  </div>
                  
                  {/* Step content */}
                  <div className="text-center pt-6 px-2">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Analytics & Insights</h3>
                    <p className="text-gray-600 text-sm">
                      Get real-time insights on lead quality and conversation analytics to optimize your sales.
                    </p>
                  </div>
                </div>
              </div>
              
              {/* Visual elements */}
              <div className={`absolute bottom-4 right-8 w-20 h-20 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full opacity-20 transform transition-all duration-1000 ${isInView ? 'scale-100' : 'scale-0'}`}></div>
              <div className={`absolute top-10 left-10 w-16 h-16 bg-gradient-to-br from-blue-300 to-blue-500 rounded-full opacity-20 transform transition-all duration-1000 ${isInView ? 'scale-100' : 'scale-0'}`} style={{ transitionDelay: '300ms' }}></div>
              <div className={`absolute bottom-20 left-1/4 w-12 h-12 bg-gradient-to-br from-blue-300 to-blue-500 rounded-full opacity-20 transform transition-all duration-1000 ${isInView ? 'scale-100' : 'scale-0'}`} style={{ transitionDelay: '600ms' }}></div>
            </div>
          </div>
          
          {/* Feature details that highlight upon activation */}
          <div className="mt-20">
            <div className={`transition-all duration-700 ease-in-out transform ${activeStep === 0 ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
              <div className="bg-white rounded-xl p-8 shadow-lg border border-blue-100">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Automated Lead Contact</h3>
                <p className="text-gray-600">
                  When leads come in from your website, social media, or CRM, VoiceAI immediately responds through their preferred communication channel. Our system prioritizes leads based on your custom criteria, ensuring the most promising prospects receive immediate attention.
                </p>
                <div className="mt-6 bg-blue-50 p-4 rounded-lg border border-blue-100">
                  <div className="flex items-start">
                    <svg className="w-6 h-6 text-blue-500 mt-0.5 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd"></path>
                    </svg>
                    <p className="text-sm text-blue-700">
                      <strong>Pro Tip:</strong> VoiceAI attempts multiple contact methods if the primary channel doesn&apos;t get a response, maximizing your lead connection rate.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className={`transition-all duration-700 ease-in-out transform ${activeStep === 1 ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
              <div className="bg-white rounded-xl p-8 shadow-lg border border-blue-100">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Human-Like Conversations</h3>
                <p className="text-gray-600">
                  Our VoiceAI technology delivers remarkably natural conversations that feel authentic to clients. The AI responds intelligently to questions, collects preferences on property types, budget, location, and other requirements, and dynamically adjusts to the conversation flow.
                </p>
                <div className="mt-6 bg-blue-50 p-4 rounded-lg border border-blue-100">
                  <div className="flex items-start">
                    <svg className="w-6 h-6 text-blue-500 mt-0.5 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd"></path>
                    </svg>
                    <p className="text-sm text-blue-700">
                      <strong>Pro Tip:</strong> You can customize the AI&apos;s voice, tone, and personality to perfectly match your brand&apos;s communication style.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className={`transition-all duration-700 ease-in-out transform ${activeStep === 2 ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
              <div className="bg-white rounded-xl p-8 shadow-lg border border-blue-100">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Intelligent Scheduling & Follow-up</h3>
                <p className="text-gray-600">
                  VoiceAI handles appointment scheduling by synchronizing with your calendar to find available times. It sends personalized property recommendations based on client preferences and automatically follows up with leads at optimal intervals to maximize engagement without being intrusive.
                </p>
                <div className="mt-6 bg-blue-50 p-4 rounded-lg border border-blue-100">
                  <div className="flex items-start">
                    <svg className="w-6 h-6 text-blue-500 mt-0.5 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd"></path>
                    </svg>
                    <p className="text-sm text-blue-700">
                      <strong>Pro Tip:</strong> Set custom follow-up sequences based on lead source, property interest, or budget range for more targeted nurturing.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className={`transition-all duration-700 ease-in-out transform ${activeStep === 3 ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
              <div className="bg-white rounded-xl p-8 shadow-lg border border-blue-100">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Comprehensive Analytics & Insights</h3>
                <p className="text-gray-600">
                  Our dashboard provides detailed analytics on lead quality, conversion rates, and conversation performance. You can review transcripts, identify common client questions, and gain insights on market trends based on aggregate client interests and requirements.
                </p>
                <div className="mt-6 bg-blue-50 p-4 rounded-lg border border-blue-100">
                  <div className="flex items-start">
                    <svg className="w-6 h-6 text-blue-500 mt-0.5 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd"></path>
                    </svg>
                    <p className="text-sm text-blue-700">
                      <strong>Pro Tip:</strong> Export custom reports to share with your team or integrate with your existing BI tools for comprehensive business analysis.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Process completion indicator */}
          <div className="mt-12 text-center">
            <div className="inline-flex items-center bg-blue-50 py-2 px-4 rounded-full border border-blue-100">
              <div className="flex space-x-1 mr-3">
                {[0, 1, 2, 3].map((step) => (
                  <div 
                    key={step}
                    className={`w-2 h-2 rounded-full transition-colors duration-300 ${activeStep >= step ? 'bg-blue-600' : 'bg-gray-300'}`}
                  ></div>
                ))}
              </div>
              <p className="text-sm text-gray-600">
                {activeStep === 0 && "Step 1: Initial Contact"}
                {activeStep === 1 && "Step 2: AI Conversation"}
                {activeStep === 2 && "Step 3: Scheduling"}
                {activeStep === 3 && "Step 4: Analytics"}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="w-full bg-gradient-to-r from-blue-600 to-blue-800 py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-6" data-aos="fade-up">Ready to Transform Your Business?</h2>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto mb-8" data-aos="fade-up" data-aos-delay="100">
            VoiceAI seamlessly handles client communications so you can focus on closing deals and growing your business.
          </p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <Button className="bg-white text-blue-700 hover:bg-blue-50 px-8 py-3 rounded-lg text-lg shadow-lg">
              Schedule a Demo
            </Button>
            <Button className="bg-transparent border-2 border-white text-white hover:bg-white hover:bg-opacity-10 px-8 py-3 rounded-lg text-lg">
              View Pricing
            </Button>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="w-full bg-black text-white py-10 md:py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center md:text-left">
            <h3 className="text-xl font-semibold mb-4">VoiceAI Real Estate</h3>
            <p className="text-gray-400">
              Transforming real estate communication through cutting-edge AI technology.
            </p>
            <p className="text-gray-400 mt-8">
              © {new Date().getFullYear()} VoiceAI Real Estate. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
} 