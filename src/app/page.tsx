"use client";
import { useState, useEffect } from "react";
import { Button } from "../components/ui/button";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: "ease-out",
      once: true,
    });
  }, []);

  useEffect(() => {
    // Simple animation sequence for voice process
    const runVoiceAnimation = () => {
      const statusText = document.querySelector('.bg-gray-100 p');
      const step1 = document.getElementById('step-1');
      const step2 = document.getElementById('step-2');
      const step3 = document.getElementById('step-3');
      const step4 = document.getElementById('step-4');
      const progressBars = document.querySelectorAll('.flex.space-x-2 .h-2');
      
      if (!statusText || !step1 || !step2 || !step3 || !step4 || !progressBars.length) return;
      
      // Initial state
      setTimeout(() => {
        if (statusText) statusText.textContent = 'Processing input...';
      }, 3000);
      
      // Step 1 active (already active by default)
      setTimeout(() => {
        if (statusText) statusText.textContent = 'Updating contact information...';
      }, 4000);
      
      // Step 2 active
      setTimeout(() => {
        if (progressBars[1]) progressBars[1].classList.remove('bg-gray-300');
        if (progressBars[1]) progressBars[1].classList.add('bg-blue-500');
        if (progressBars[0]) progressBars[0].classList.remove('bg-blue-500');
        if (progressBars[0]) progressBars[0].classList.add('bg-green-500');
        
        if (step1) step1.classList.add('opacity-70');
        if (step2) {
          step2.classList.remove('opacity-50');
          step2.classList.add('animate-fadeIn');
          const circle = step2.querySelector('.rounded-full');
          if (circle) {
            circle.classList.remove('bg-gray-300');
            circle.classList.add('bg-yellow-500');
            circle.classList.add('animate-pulse');
          }
        }
        
        if (statusText) statusText.textContent = 'Scheduling follow-up appointment...';
      }, 6000);
      
      // Step 3 active
      setTimeout(() => {
        if (progressBars[2]) progressBars[2].classList.remove('bg-gray-300');
        if (progressBars[2]) progressBars[2].classList.add('bg-blue-500');
        if (progressBars[1]) progressBars[1].classList.remove('bg-blue-500');
        if (progressBars[1]) progressBars[1].classList.add('bg-green-500');
        
        if (step2) step2.classList.add('opacity-70');
        if (step3) {
          step3.classList.remove('opacity-50');
          step3.classList.add('animate-fadeIn');
          const circle = step3.querySelector('.rounded-full');
          if (circle) {
            circle.classList.remove('bg-gray-300');
            circle.classList.add('bg-blue-500');
            circle.classList.add('animate-pulse');
          }
        }
        
        if (statusText) statusText.textContent = 'Updating pipeline status...';
      }, 9000);
      
      // Step 4 active
      setTimeout(() => {
        if (progressBars[3]) progressBars[3].classList.remove('bg-gray-300');
        if (progressBars[3]) progressBars[3].classList.add('bg-blue-500');
        if (progressBars[2]) progressBars[2].classList.remove('bg-blue-500');
        if (progressBars[2]) progressBars[2].classList.add('bg-green-500');
        
        if (step3) step3.classList.add('opacity-70');
        if (step4) {
          step4.classList.remove('opacity-50');
          step4.classList.add('animate-fadeIn');
          const circle = step4.querySelector('.rounded-full');
          if (circle) {
            circle.classList.remove('bg-gray-300');
            circle.classList.add('bg-purple-500');
            circle.classList.add('animate-pulse');
          }
        }
        
        if (statusText) statusText.textContent = 'Sending property listings via email...';
      }, 12000);
      
      // Complete
      setTimeout(() => {
        if (progressBars[3]) progressBars[3].classList.remove('bg-blue-500');
        if (progressBars[3]) progressBars[3].classList.add('bg-green-500');
        
        if (statusText) statusText.textContent = 'All actions completed successfully!';
      }, 15000);
    };
    
    // Run the animation when visible
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            runVoiceAnimation();
            if (observer) observer.disconnect();
          }
        });
      },
      { threshold: 0.3 }
    );
    
    const voiceSection = document.querySelector('#voice-action-steps');
    if (voiceSection) {
      observer.observe(voiceSection);
    }
    
    return () => {
      if (observer !== undefined) observer.disconnect();
    };
  }, []);

  useEffect(() => {
    // Function to animate legal analysis process
    const animateLegalAnalysis = () => {
      // Step 3 animation (Case Law Analysis)
      setTimeout(() => {
        const progressBar = document.getElementById('progress-bar');
        if (progressBar) progressBar.style.width = '85%';
        
        const step3 = document.getElementById('step-3');
        if (step3) {
          step3.innerHTML = `
            <div class="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center mx-auto mb-2">
              <svg class="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
              </svg>
            </div>
            <span class="text-xs text-gray-700 block">Case Law Analysis</span>
          `;
        }
        
        // Status update
        const status = document.getElementById('analysis-status');
        if (status) status.innerText = 'Finalizing Analysis';
        
      }, 3000); // 3 seconds after component mounts
      
      // Step 4 animation (Final Report)
      setTimeout(() => {
        const progressBar = document.getElementById('progress-bar');
        if (progressBar) progressBar.style.width = '100%';
        
        const step4 = document.getElementById('step-4');
        if (step4) {
          step4.classList.remove('opacity-50');
          step4.innerHTML = `
            <div class="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center mx-auto mb-2 relative">
              <div class="w-4 h-4 bg-gray-700 rounded-full absolute animate-ping opacity-75"></div>
              <span class="text-xs text-white relative z-10">4</span>
            </div>
            <span class="text-xs text-gray-700 block font-medium">Final Report</span>
          `;
        }
        
      }, 6000); // 6 seconds after component mounts
      
      // Complete the animation
      setTimeout(() => {
        const progressBar = document.getElementById('progress-bar');
        if (progressBar) progressBar.style.width = '100%';
        
        const step4 = document.getElementById('step-4');
        if (step4) {
          step4.innerHTML = `
            <div class="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center mx-auto mb-2">
              <svg class="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
              </svg>
            </div>
            <span class="text-xs text-gray-700 block">Final Report</span>
          `;
        }
        
        // Status update
        const status = document.getElementById('analysis-status');
        if (status) {
          status.innerText = 'Analysis Complete';
          status.classList.remove('bg-gray-100', 'text-gray-700');
          status.classList.add('bg-gray-800', 'text-white');
        }
        
        // Update the analysis panel with final content
        const panel = document.getElementById('analysis-panel');
        if (panel) {
          panel.innerHTML += `
            <div class="mt-6 p-3 bg-gray-100 rounded-md border border-gray-300">
              <div class="flex items-center">
                <svg class="w-5 h-5 text-gray-800 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
                <span class="text-sm font-medium text-gray-800">Analysis complete. Final report ready for download.</span>
              </div>
            </div>
          `;
        }
        
      }, 9000); // 9 seconds after component mounts
    };
    
    // Trigger the animation when the component is visible
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            animateLegalAnalysis();
            if (observer) observer.disconnect();
          }
        });
      },
      { threshold: 0.3 }
    );
    
    const demoSection = document.getElementById('legal-analysis-demo');
    if (demoSection) {
      observer.observe(demoSection);
    }
    
    return () => {
      if (observer !== undefined) observer.disconnect();
    };
  }, []);

  useEffect(() => {
    // Animated typing and streaming output
    const inputText = "generate a draft challenging the FIR";
    const outputText = `This is a draft petition challenging the First Information Report (FIR) registered against my client. The FIR, as currently framed, is vague and does not disclose any cognizable offence. It is respectfully submitted that the continuation of investigation under the impugned FIR amounts to an abuse of process of law.\n\nIt is prayed that this Hon&apos;ble Court may be pleased to quash the FIR in the interest of justice.`;
    const inputEl = document.getElementById("animated-input");
    const outputEl = document.getElementById("streaming-output");
    let inputIdx = 0;
    let outputIdx = 0;
    function typeInput() {
      if (inputEl) inputEl.textContent = inputText.slice(0, inputIdx);
      if (inputIdx < inputText.length) {
        inputIdx++;
        setTimeout(typeInput, 60);
      } else {
        streamOutput();
      }
    }
    function streamOutput() {
      if (outputEl) outputEl.textContent = outputText.slice(0, outputIdx);
      if (outputIdx < outputText.length) {
        outputIdx++;
        setTimeout(streamOutput, 18);
      }
    }
    // Start animation when hero section is visible
    const heroSection = document.querySelector(".bg-gradient-to-r");
    let observer: IntersectionObserver | undefined;
    if (heroSection) {
      observer = new window.IntersectionObserver((entries) => {
        if (entries[0].isIntersecting) {
          typeInput();
          if (observer) observer.disconnect();
        }
      }, { threshold: 0.3 });
      observer.observe(heroSection);
    } else {
      // fallback: just run
      typeInput();
    }
    return () => {
      if (observer !== undefined) observer.disconnect();
    };
  }, []);

  return (
    <div className="min-h-screen bg-white flex flex-col items-center">
      {/* Navigation */}
      <nav className="bg-white border-b border-gray-200 fixed w-full z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex">
            <div className="flex-shrink-0 flex items-center">
                {/* Updated logo and brand name back to Vakeel Assist */}
                <svg className="w-8 h-8 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
                </svg>
                <span className="ml-2 text-xl font-semibold text-gray-900">Vakeel Assist</span>
            </div>
              <div className="hidden md:ml-8 md:flex md:space-x-8 items-center">
                <a href="#features" className="text-gray-700 hover:text-gray-900 px-3 py-2 font-medium">Features</a>
                <a href="/supreme-court-cases" className="text-gray-700 hover:text-gray-900 px-3 py-2 font-medium">Supreme Court Cases</a>
                <a href="#pricing" className="text-gray-700 hover:text-gray-900 px-3 py-2 font-medium">Pricing</a>
                <a href="#faq" className="text-gray-700 hover:text-gray-900 px-3 py-2 font-medium">FAQ</a>
                <a href="/blog" className="text-gray-700 hover:text-gray-900 px-3 py-2 font-medium">Blog</a>
            </div>
            </div>

            {/* Login button */}
            <div className="hidden md:flex items-center">
              <a href="https://portal.vakeelassist.com" target="_blank" rel="noopener noreferrer">
                <Button className="bg-gray-800 hover:bg-gray-900 text-white py-2 px-4">Login</Button>
              </a>
            </div>

            {/* Menu button for mobile */}
            <div className="flex md:hidden items-center">
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 rounded-md text-gray-600 hover:text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-gray-600"
              >
                <span className="sr-only">Open main menu</span>
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu - Grayscale */}
        {mobileMenuOpen && (
          <div className="md:hidden absolute top-16 inset-x-0 bg-white shadow-lg rounded-b-lg z-50">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <a href="#features" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-100">Features</a>
              <a href="/supreme-court-cases" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-100">Supreme Court Cases</a>
              <a href="#pricing" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-100">Pricing</a>
              <a href="#faq" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-100">FAQ</a>
              <a href="/blog" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-100">Blog</a>
              <div className="mt-4 px-3">
                <a href="https://portal.vakeelassist.com" target="_blank" rel="noopener noreferrer" className="w-full">
                  <Button className="w-full bg-gray-800 hover:bg-gray-900 text-white py-2">Login</Button>
                </a>
              </div>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section with Enhanced Geometric Background */}
      <div className="w-full bg-gradient-to-r from-gray-50 to-gray-100 text-gray-900 pt-24 md:pt-28 pb-12 md:pb-20 relative overflow-hidden">
        {/* Enhanced Enterprise-Level Geometric Background */}
        <div className="absolute inset-0 z-0">
          {/* Base grid pattern */}
          <svg viewBox="0 0 1440 800" className="w-full h-full opacity-5" preserveAspectRatio="none">
            <pattern id="grid-pattern" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#333333" strokeWidth="1" />
            </pattern>
            <rect width="100%" height="100%" fill="url(#grid-pattern)" />
          </svg>
          
          {/* Large geometric shapes */}
          <svg className="absolute inset-0 w-full h-full opacity-10" viewBox="0 0 1000 1000" preserveAspectRatio="none">
            {/* Large circle */}
            <circle cx="900" cy="100" r="250" fill="none" stroke="#555555" strokeWidth="2" />
            
            {/* Hexagon */}
            <polygon points="200,300 300,200 500,200 600,300 500,400 300,400" fill="none" stroke="#333333" strokeWidth="1.5" />
            
            {/* Abstract lines */}
            <path d="M0,200 L1000,600" stroke="#444444" strokeWidth="1.5" strokeDasharray="5,5" />
            <path d="M0,400 L1000,200" stroke="#444444" strokeWidth="1.5" strokeDasharray="5,5" />
            <path d="M100,0 L600,1000" stroke="#555555" strokeWidth="1" />
            
            {/* Connected dots */}
            <g className="opacity-30">
              <circle cx="100" cy="100" r="4" fill="#333333" />
              <circle cx="300" cy="150" r="4" fill="#333333" />
              <circle cx="450" cy="250" r="4" fill="#333333" />
              <circle cx="200" cy="250" r="4" fill="#333333" />
              <line x1="100" y1="100" x2="300" y2="150" stroke="#333333" strokeWidth="1" />
              <line x1="300" y1="150" x2="450" y2="250" stroke="#333333" strokeWidth="1" />
              <line x1="450" y1="250" x2="200" y2="250" stroke="#333333" strokeWidth="1" />
              <line x1="200" y1="250" x2="100" y2="100" stroke="#333333" strokeWidth="1" />
            </g>
            
            {/* Large translucent rectangles */}
            <rect x="700" y="500" width="300" height="300" fill="none" stroke="#222222" strokeWidth="2" opacity="0.2" />
            <rect x="750" y="550" width="300" height="300" fill="none" stroke="#222222" strokeWidth="2" opacity="0.2" />
          </svg>
          
          {/* Small floating elements */}
          <svg className="absolute inset-0 w-full h-full opacity-10" viewBox="0 0 1000 1000" preserveAspectRatio="none">
            <g className="opacity-60">
              <rect x="150" y="650" width="40" height="40" fill="#444444" transform="rotate(45, 170, 670)" />
              <rect x="850" y="350" width="30" height="30" fill="#444444" transform="rotate(30, 865, 365)" />
              <rect x="450" y="750" width="25" height="25" fill="#444444" transform="rotate(10, 462, 762)" />
              <circle cx="750" cy="150" r="20" fill="#555555" />
              <circle cx="250" cy="550" r="15" fill="#555555" />
              <circle cx="550" cy="350" r="10" fill="#555555" />
            </g>
          </svg>
          
          {/* Abstract circuit-like pattern */}
          <svg className="absolute inset-0 w-full h-full opacity-8" viewBox="0 0 1000 1000" preserveAspectRatio="none">
            <g stroke="#333333" strokeWidth="1" fill="none">
              <path d="M100,100 L100,300 L300,300 L300,500 L500,500 L500,700 L700,700 L700,900" />
              <path d="M300,100 L300,200 L500,200 L500,400 L700,400 L700,600 L900,600" />
              <circle cx="100" cy="100" r="5" fill="#555555" />
              <circle cx="100" cy="300" r="5" fill="#555555" />
              <circle cx="300" cy="300" r="5" fill="#555555" />
              <circle cx="300" cy="500" r="5" fill="#555555" />
              <circle cx="500" cy="500" r="5" fill="#555555" />
              <circle cx="500" cy="700" r="5" fill="#555555" />
              <circle cx="700" cy="700" r="5" fill="#555555" />
              <circle cx="700" cy="900" r="5" fill="#555555" />
              <circle cx="300" cy="100" r="5" fill="#555555" />
              <circle cx="300" cy="200" r="5" fill="#555555" />
              <circle cx="500" cy="200" r="5" fill="#555555" />
              <circle cx="500" cy="400" r="5" fill="#555555" />
              <circle cx="700" cy="400" r="5" fill="#555555" />
              <circle cx="700" cy="600" r="5" fill="#555555" />
              <circle cx="900" cy="600" r="5" fill="#555555" />
            </g>
          </svg>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left" data-aos="fade-right">
              <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
                <span className="text-gray-800">Legal Excellence</span> Powered by Artificial Intelligence
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Reduce billable hours spent on routine tasks. Our LLM-powered platform drafts briefs, analyzes precedents, manages discovery, and ensures regulatory compliance with unprecedented accuracy.
              </p>
              <div className="flex justify-center lg:justify-start">
                <Button className="bg-blue-700 hover:bg-blue-800 text-white py-3 px-8 rounded-lg text-lg shadow-lg transition-all duration-300">
                  Try Now
                </Button>
              </div>
            </div>
            {/* Animated Input and Streaming Output - now in right column */}
            <div className="flex justify-center lg:justify-end" data-aos="fade-left">
              <div className="max-w-md w-full">
                <div className="bg-white rounded-xl shadow-lg border border-gray-200 p-6 flex flex-col items-center">
                  <div className="w-full flex items-center mb-4">
                    <span className="text-gray-400 mr-2">{">"}</span>
                    <span id="animated-input" className="font-mono text-gray-800 text-base whitespace-pre"></span>
                    <span className="blinking-cursor text-blue-600 ml-1">|</span>
                  </div>
                  <div id="streaming-output" className="w-full text-left font-mono text-gray-700 text-base mt-2 whitespace-pre-line h-80 overflow-y-auto" style={{ minHeight: '3rem' }}></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* How It Works Section - Dark background */}
      <div id="how-it-works" className="w-full bg-gray-900 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-blue-400 font-semibold text-sm md:text-base">HOW VAKEEL ASSIST WORKS</span>
            <h2 className="text-3xl md:text-4xl font-bold text-white mt-2 mb-4">Advanced Legal AI Workflow</h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Our platform applies artificial intelligence to every stage of your legal workflow, creating unparalleled efficiency.
            </p>
          </div>
            
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            {/* Step 1 - Warmer beige circle */}
            <div className="relative">
              <div className="bg-amber-50 rounded-lg p-8 h-full border border-amber-100 relative z-10">
                <div className="absolute -top-5 -left-5 w-10 h-10 rounded-full bg-amber-200 text-gray-900 flex items-center justify-center text-xl font-bold shadow-lg">1</div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Document Analysis</h3>
                <p className="text-gray-700">
                  Our AI analyzes legal documents to extract key information, identify relevant clauses, and categorize document types.
                </p>
              </div>
            </div>
            
            {/* Step 2 - Warmer beige circle */}
            <div className="relative">
              <div className="bg-amber-50 rounded-lg p-8 h-full border border-amber-100 relative z-10">
                <div className="absolute -top-5 -left-5 w-10 h-10 rounded-full bg-amber-200 text-gray-900 flex items-center justify-center text-xl font-bold shadow-lg">2</div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Legal Research</h3>
                <p className="text-gray-700">
                  Leverage our powerful AI to conduct comprehensive legal research across case law, statutes, and regulations.
                </p>
              </div>
            </div>
            
            {/* Step 3 - Warmer beige circle */}
            <div className="relative">
              <div className="bg-amber-50 rounded-lg p-8 h-full border border-amber-100 relative z-10">
                <div className="absolute -top-5 -left-5 w-10 h-10 rounded-full bg-amber-200 text-gray-900 flex items-center justify-center text-xl font-bold shadow-lg">3</div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Document Generation</h3>
                <p className="text-gray-700">
                  Create customized legal documents in minutes with our intelligent drafting system that incorporates firm best practices.
                </p>
              </div>
            </div>
            
            {/* Step 4 - Warmer beige circle */}
            <div className="relative">
              <div className="bg-amber-50 rounded-lg p-8 h-full border border-amber-100 relative z-10">
                <div className="absolute -top-5 -left-5 w-10 h-10 rounded-full bg-amber-200 text-gray-900 flex items-center justify-center text-xl font-bold shadow-lg">4</div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Review & Improve</h3>
                <p className="text-gray-700">
                  Our AI continuously learns from user feedback to enhance accuracy and adapt to your firm unique practice areas.
                </p>
              </div>
            </div>
          </div>
          
          {/* CTA Section - No animation */}
          <div className="mt-16 text-center">
            <p className="text-xl text-gray-700 max-w-3xl mx-auto mb-6">
              Vakeel Assist seamlessly integrates with your existing legal practice management tools, requiring no change to your current workflow.
            </p>
            <Button className="bg-gray-800 hover:bg-gray-900 text-white px-8 py-3 rounded-lg text-lg">
              Schedule a Demo
            </Button>
          </div>
        </div>
      </div>

      {/* AI in Action Section - Light background */}
      <div className="w-full bg-white text-gray-900 py-20 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-12" data-aos="fade-up">
            <span className="text-gray-600 font-semibold text-sm md:text-base">INTELLIGENT LEGAL ANALYSIS</span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2 mb-4">AI Legal Assistant in Action</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Experience how our AI analyzes complex legal documents, identifies key provisions, and provides guidance based on relevant case law.
            </p>
          </div>
          
          {/* Legal Document Analysis Animation - With Automatic Progression */}
          <div className="mb-16 flex justify-center" data-aos="fade-up" id="legal-analysis-demo">
            <div className="w-full max-w-2xl p-6 bg-white rounded-xl shadow-lg border border-gray-200">
              {/* Header with Case Information */}
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center">
                  <div className="w-12 h-12 rounded-full bg-gray-800 flex items-center justify-center mr-4">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10"></path>
                    </svg>
                  </div>
                  <div>
                    <span className="text-xl text-gray-900 font-medium block">Smith v. Johnson</span>
                    <span className="text-sm text-gray-500">Breach of Contract Analysis</span>
                  </div>
                </div>
                
                {/* Document Status - will update via JS */}
                <div className="px-3 py-1 bg-gray-100 rounded-full text-gray-700 text-sm font-medium" id="analysis-status">
                  Analysis in Progress
                </div>
              </div>
              
              {/* Split View of Document and Analysis */}
              <div className="flex flex-col md:flex-row gap-4 mb-6">
                {/* Document Preview Panel */}
                <div className="flex-1 p-4 bg-gray-50 rounded-lg border border-gray-200 h-52 overflow-hidden">
                  <div className="flex justify-between items-center mb-3">
                    <span className="text-sm font-medium text-gray-700">Contract Document</span>
                    <span className="text-xs text-gray-500">24 pages</span>
              </div>
              
                  {/* Document text representation */}
                  <div className="space-y-2">
                    <div className="w-3/4 h-2 bg-gray-300 rounded-full"></div>
                    <div className="w-full h-2 bg-gray-300 rounded-full"></div>
                    <div className="w-5/6 h-2 bg-gray-300 rounded-full"></div>
                    
                    {/* Highlighted Section */}
                    <div className="p-2 bg-gray-200 border-l-2 border-gray-700 my-3">
                      <div className="w-full h-2 bg-gray-400 rounded-full"></div>
                      <div className="w-4/5 h-2 bg-gray-400 rounded-full mt-1"></div>
                      <div className="w-full h-2 bg-gray-400 rounded-full mt-1"></div>
                </div>
                
                    <div className="w-full h-2 bg-gray-300 rounded-full"></div>
                    <div className="w-4/5 h-2 bg-gray-300 rounded-full"></div>
                  </div>
                </div>
                
                {/* Analysis Panel - Gets updated by JS */}
                <div className="flex-1 p-4 bg-white rounded-lg border border-gray-200 h-52 overflow-hidden" id="analysis-panel">
                  <div className="text-sm font-medium text-gray-700 mb-3">AI Analysis</div>
                  
                  {/* Analysis Summary */}
                  <div className="mb-4">
                    <span className="text-xs uppercase font-semibold text-gray-500 block mb-1">Key Provision Identified</span>
                    <p className="text-sm text-gray-800 font-mono">Section 8.2: Non-performance Remedies</p>
          </div>

                  {/* Legal Assessment */}
                  <div className="p-3 bg-gray-50 rounded-md border border-gray-200 mb-3">
                    <div className="flex items-start">
                      <svg className="w-5 h-5 text-gray-700 mt-0.5 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
                      <span className="text-sm text-gray-700">Ambiguous termination clause may be unenforceable under <span className="font-medium">Parker v. Smith</span> precedent.</span>
              </div>
            </div>
            
                  {/* Suggested Action */}
                  <div className="flex items-center mt-4">
                    <div className="w-2 h-2 bg-gray-600 rounded-full mr-2"></div>
                    <span className="text-sm font-medium text-gray-700">Recommended: Clarify remedies with specific performance metrics</span>
              </div>
        </div>
      </div>

              {/* AI Processing Steps with Auto-advance */}
              <div className="relative">
                {/* Progress Bar - Auto-advances */}
                <div className="h-1.5 bg-gray-200 rounded-full w-full mb-6">
                  <div className="h-1.5 bg-gray-700 rounded-full transition-all duration-1000 ease-in-out" id="progress-bar" style={{width: '65%'}}></div>
            </div>
            
                {/* Step Indicators */}
                <div className="grid grid-cols-4 gap-2">
                  {/* Step 1: Completed */}
                  <div className="text-center">
                    <div className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center mx-auto mb-2">
                      <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                  </div>
                    <span className="text-xs text-gray-700 block">Document Parsed</span>
                  </div>
                  
                  {/* Step 2: Completed */}
                  <div className="text-center">
                    <div className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center mx-auto mb-2">
                      <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                  </div>
                    <span className="text-xs text-gray-700 block">Clauses Extracted</span>
                  </div>
                  
                  {/* Step 3: Will auto-complete */}
                  <div className="text-center" id="step-3">
                    <div className="w-8 h-8 bg-gray-200 border-2 border-gray-700 rounded-full flex items-center justify-center mx-auto mb-2 relative">
                      <div className="w-4 h-4 bg-gray-700 rounded-full absolute animate-ping opacity-75"></div>
                      <span className="text-xs text-gray-800 relative z-10">3</span>
                  </div>
                    <span className="text-xs text-gray-700 block font-medium">Case Law Analysis</span>
      </div>

                  {/* Step 4: Will auto-start */}
                  <div className="text-center opacity-50" id="step-4">
                    <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center mx-auto mb-2">
                      <span className="text-xs text-gray-600">4</span>
            </div>
                    <span className="text-xs text-gray-600 block">Final Report</span>
            </div>
            </div>
          </div>
        </div>
      </div>

          {/* Timeline of Legal Process */}
          <div className="max-w-4xl mx-auto" data-aos="fade-up" data-aos-delay="100">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center text-center md:text-left space-y-4 md:space-y-0">
              <div className="px-6 py-4">
                <div className="text-4xl font-bold text-gray-800 mb-1">89%</div>
                <div className="text-sm text-gray-600">Accuracy in Legal<br/>Document Analysis</div>
          </div>
          
              <div className="h-12 w-px bg-gray-300 hidden md:block"></div>
              
              <div className="px-6 py-4">
                <div className="text-4xl font-bold text-gray-800 mb-1">75%</div>
                <div className="text-sm text-gray-600">Time Saved on<br/>Contract Review</div>
      </div>

              <div className="h-12 w-px bg-gray-300 hidden md:block"></div>
              
              <div className="px-6 py-4">
                <div className="text-4xl font-bold text-gray-800 mb-1">93%</div>
                <div className="text-sm text-gray-600">Regulatory<br/>Compliance Rate</div>
          </div>
              </div>
            </div>
              </div>
            </div>
            
      {/* Integration CTA - Dark background */}
      <div className="w-full bg-gray-900 py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">
            Vakeel Assist seamlessly integrates with your existing legal practice management tools, requiring no change to your current workflow.
          </h2>
          <Button className="bg-amber-50 text-gray-900 hover:bg-amber-100 text-lg py-4 px-8 rounded-lg font-medium shadow-lg">
            Schedule a Demo
          </Button>
        </div>
      </div>
      
      {/* Pricing Section - Darker background for better contrast */}
      <div id="pricing" className="w-full bg-gray-200 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2 mb-4">Simple, Transparent Pricing</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Choose the plan that fits your legal practice needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Pricing cards with white background */}
            <div className="bg-white rounded-xl border border-gray-200 shadow-lg overflow-hidden">
              <div className="p-8 border-b border-gray-200">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Solo Practitioner</h3>
                <div className="text-5xl font-extrabold text-gray-900 mb-6 flex">
                  <div className="line-through">
                    <span className="text-gray-500">₹1,500</span>
                    <span className="block text-gray-500 text-sm mt-1">/month</span>
                  </div>
                  <span className="ml-3 font-extrabold text-gray-900 text-2xl text-center">Free for 2 months</span>
                </div>
                </div>
              <div className="p-8 bg-gray-50">
                <Button className="w-full bg-gray-800 hover:bg-gray-900 text-white py-3 rounded-lg">Start Free Trial</Button>
                </div>
              </div>
              
            <div className="bg-white rounded-xl border-2 border-gray-800 shadow-xl scale-105 relative">
              <div className="absolute top-0 inset-x-0 bg-gray-800 text-white text-center py-1 text-sm font-medium">MOST POPULAR</div>
              <div className="p-8 border-b border-gray-200 mt-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Law Firm</h3>
                <div className="text-5xl font-extrabold text-gray-900 mb-6">₹6,000<span className="text-gray-500 text-sm">/month</span></div>
                </div>
              <div className="p-8 bg-gray-100">
                <Button className="w-full bg-gray-800 hover:bg-gray-900 text-white py-3 rounded-lg">Start Free Trial</Button>
              </div>
            </div>
            
            <div className="bg-white rounded-xl border border-gray-200 shadow-lg overflow-hidden">
              <div className="p-8 border-b border-gray-200">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Enterprise</h3>
                <div className="text-5xl font-extrabold text-gray-900 mb-6">₹79,000<span className="text-gray-500 text-sm">/month</span></div>
                </div>
              <div className="p-8 bg-gray-50">
                <Button className="w-full bg-gray-800 hover:bg-gray-900 text-white py-3 rounded-lg">Contact Sales</Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ Section - Light background */}
      <div id="faq" className="w-full bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2 mb-4">Frequently Asked Questions</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Everything you need to know about Vakeel Assist
            </p>
          </div>
          
          {/* FAQ items here */}
        </div>
      </div>

      {/* Footer - DARK background (black) */}
      <footer className="w-full bg-black text-white py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-xl font-semibold mb-4">Vakeel Assist</h3>
          <p className="text-gray-400 mb-6">
            Transforming legal practice through AI-powered document drafting, workflow automation, and case management.
          </p>
          <p className="text-gray-500">© 2023 Vakeel Assist. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}