"use client";
import { useState, useEffect } from "react";
import { Button } from "../components/ui/button";
import AOS from "aos";
import "aos/dist/aos.css";
import Image from "next/image";
import Link from "next/link";
import LegalWorkflowStrip from "../components/LegalWorkflowStrip";
import TranslationWorkflowStrip from "../components/TranslationWorkflowStrip";
import CauseListAlertsStrip from "../components/CauseListAlertsStrip";

// TypewriterText Component with word-by-word animation
function TypewriterText() {
  const texts = [
    "Translate now using Sarvam API",
    "Cause list alerts for Supreme Court and High Court"
  ];
  
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [displayedWords, setDisplayedWords] = useState<string[]>([]);
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    const currentText = texts[currentTextIndex];
    const words = currentText.split(' ');
    
    if (isPaused) {
      const pauseTimeout = setTimeout(() => {
        setIsPaused(false);
        // Move to next text
        setCurrentTextIndex(prev => (prev + 1) % texts.length);
        setDisplayedWords([]);
        setCurrentWordIndex(0);
      }, 3000); // 3 second pause
      return () => clearTimeout(pauseTimeout);
    }

    if (currentWordIndex < words.length) {
      const timeout = setTimeout(() => {
        setDisplayedWords(prev => [...prev, words[currentWordIndex]]);
        setCurrentWordIndex(prev => prev + 1);
      }, 150); // 150ms delay between each word for smoother animation

      return () => clearTimeout(timeout);
    } else {
      // All words are complete, pause before next text
      setIsPaused(true);
    }
  }, [currentWordIndex, currentTextIndex, isPaused, texts]);

  return (
    <span className="text-white text-xs font-medium">
      {displayedWords.join(' ')}
      <span className="animate-pulse">|</span>
    </span>
  );
}

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [featuresDropdownOpen, setFeaturesDropdownOpen] = useState(false);
  const [pricingMode, setPricingMode] = useState<'annual' | 'monthly'>('monthly');

  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: "ease-out",
      once: true,
    });
  }, []);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (featuresDropdownOpen) {
        const target = event.target as HTMLElement;
        if (!target.closest('.features-dropdown')) {
          setFeaturesDropdownOpen(false);
        }
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [featuresDropdownOpen]);

  useEffect(() => {
    // Scroll-triggered image scaling effect
    const handleScroll = () => {
      const imageContainer = document.getElementById('scroll-image-container');
      if (!imageContainer) return;

      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      
      // Calculate scale based on scroll position
      // Image starts at scale 1 and grows to scale 2 as you scroll down
      const maxScroll = windowHeight * 0.8; // Scale effect over 80% of viewport height
      const scrollProgress = Math.min(scrollY / maxScroll, 1);
      
      // Scale from 1 to 2.5 as you scroll
      const scale = 1 + (scrollProgress * 1.5);
      
      // Opacity effect - fade in as you scroll
      const opacity = Math.min(scrollProgress * 2, 1);
      
      imageContainer.style.transform = `scale(${scale})`;
      imageContainer.style.opacity = opacity.toString();
    };

    window.addEventListener('scroll', handleScroll);
    
    // Initial call to set starting state
    handleScroll();
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);


  useEffect(() => {
    // Simple animation sequence for voice process
    const runVoiceAnimation = () => {
      const statusText = document.querySelector(".bg-gray-100 p");
      const step1 = document.getElementById("step-1");
      const step2 = document.getElementById("step-2");
      const step3 = document.getElementById("step-3");
      const step4 = document.getElementById("step-4");
      const progressBars = document.querySelectorAll(".flex.space-x-2 .h-2");

      if (
        !statusText ||
        !step1 ||
        !step2 ||
        !step3 ||
        !step4 ||
        !progressBars.length
      )
        return;

      // Initial state
      setTimeout(() => {
        if (statusText) statusText.textContent = "Processing input...";
      }, 3000);

      // Step 1 active (already active by default)
      setTimeout(() => {
        if (statusText)
          statusText.textContent = "Updating contact information...";
      }, 4000);

      // Step 2 active
      setTimeout(() => {
        if (progressBars[1]) progressBars[1].classList.remove("bg-gray-300");
        if (progressBars[1]) progressBars[1].classList.add("bg-blue-500");
        if (progressBars[0]) progressBars[0].classList.remove("bg-blue-500");
        if (progressBars[0]) progressBars[0].classList.add("bg-green-500");

        if (step1) step1.classList.add("opacity-70");
        if (step2) {
          step2.classList.remove("opacity-50");
          step2.classList.add("animate-fadeIn");
          const circle = step2.querySelector(".rounded-full");
          if (circle) {
            circle.classList.remove("bg-gray-300");
            circle.classList.add("bg-yellow-500");
            circle.classList.add("animate-pulse");
          }
        }

        if (statusText)
          statusText.textContent = "Scheduling follow-up appointment...";
      }, 6000);

      // Step 3 active
      setTimeout(() => {
        if (progressBars[2]) progressBars[2].classList.remove("bg-gray-300");
        if (progressBars[2]) progressBars[2].classList.add("bg-blue-500");
        if (progressBars[1]) progressBars[1].classList.remove("bg-blue-500");
        if (progressBars[1]) progressBars[1].classList.add("bg-green-500");

        if (step2) step2.classList.add("opacity-70");
        if (step3) {
          step3.classList.remove("opacity-50");
          step3.classList.add("animate-fadeIn");
          const circle = step3.querySelector(".rounded-full");
          if (circle) {
            circle.classList.remove("bg-gray-300");
            circle.classList.add("bg-blue-500");
            circle.classList.add("animate-pulse");
          }
        }

        if (statusText) statusText.textContent = "Updating pipeline status...";
      }, 9000);

      // Step 4 active
      setTimeout(() => {
        if (progressBars[3]) progressBars[3].classList.remove("bg-gray-300");
        if (progressBars[3]) progressBars[3].classList.add("bg-blue-500");
        if (progressBars[2]) progressBars[2].classList.remove("bg-blue-500");
        if (progressBars[2]) progressBars[2].classList.add("bg-green-500");

        if (step3) step3.classList.add("opacity-70");
        if (step4) {
          step4.classList.remove("opacity-50");
          step4.classList.add("animate-fadeIn");
          const circle = step4.querySelector(".rounded-full");
          if (circle) {
            circle.classList.remove("bg-gray-300");
            circle.classList.add("bg-purple-500");
            circle.classList.add("animate-pulse");
          }
        }

        if (statusText)
          statusText.textContent = "Sending property listings via email...";
      }, 12000);

      // Complete
      setTimeout(() => {
        if (progressBars[3]) progressBars[3].classList.remove("bg-blue-500");
        if (progressBars[3]) progressBars[3].classList.add("bg-green-500");

        if (statusText)
          statusText.textContent = "All actions completed successfully!";
      }, 15000);
    };

    // Run the animation when visible
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            runVoiceAnimation();
            if (observer) observer.disconnect();
          }
        });
      },
      { threshold: 0.3 }
    );

    const voiceSection = document.querySelector("#voice-action-steps");
    if (voiceSection) {
      observer.observe(voiceSection);
    }

    return () => {
      if (observer !== undefined) observer.disconnect();
    };
  }, []);


  return (
    <div className="min-h-screen bg-white flex flex-col items-center">
      {/* Navigation - Clean Professional */}
      <nav className="fixed w-full z-50" style={{ backgroundColor: '#0f0e0d' }}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex">
              <div className="flex-shrink-0 flex items-center">
                <Link href="/" className="cursor-pointer">
                  <Image
                    src="/images/ChatGPT Image Oct 27, 2025, 10_17_07 AM.png"
                    alt="Vakeel Assist"
                    width={120}
                    height={40}
                    className="h-8 w-auto"
                  />
                </Link>
              </div>
              <div className="hidden md:ml-12 md:flex md:space-x-8 items-center">
                <div className="relative features-dropdown">
                  <button
                    onClick={() => setFeaturesDropdownOpen(!featuresDropdownOpen)}
                    className="text-gray-300 hover:text-white px-3 py-2 font-medium transition-colors flex items-center gap-1"
                  >
                    Features
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>

                  {featuresDropdownOpen && (
                    <div className="absolute top-full left-0 mt-2 w-64 bg-black rounded-lg shadow-xl border border-gray-700 z-50" style={{ backgroundColor: '#0f0e0d' }}>
                      <div className="py-2">
                        <a href="#assistant" className="block px-4 py-3 text-gray-300 hover:text-white hover:bg-gray-800 transition-colors">
                          <div className="font-medium">AI Assistant</div>
                          <div className="text-sm text-gray-500">Ask questions and analyze documents</div>
                        </a>
                        <a href="#translation" className="block px-4 py-3 text-gray-300 hover:text-white hover:bg-gray-800 transition-colors">
                          <div className="font-medium">Document Translation</div>
                          <div className="text-sm text-gray-500">Translate legal documents instantly</div>
                        </a>
                        <a href="#alerts" className="block px-4 py-3 text-gray-300 hover:text-white hover:bg-gray-800 transition-colors">
                          <div className="font-medium">Cause List Alerts</div>
                          <div className="text-sm text-gray-500">Never miss a court date</div>
                        </a>
                        <a href="#research" className="block px-4 py-3 text-gray-300 hover:text-white hover:bg-gray-800 transition-colors">
                          <div className="font-medium">Legal Research</div>
                          <div className="text-sm text-gray-500">Access India's largest legal library</div>
                        </a>
                        <a href="#drafting" className="block px-4 py-3 text-gray-300 hover:text-white hover:bg-gray-800 transition-colors">
                          <div className="font-medium">Document Drafting</div>
                          <div className="text-sm text-gray-500">Draft legal documents with AI</div>
                        </a>
                      </div>
                    </div>
                  )}
                </div>
                <a
                  href="/supreme-court-cases"
                  className="text-gray-300 hover:text-white px-3 py-2 font-medium transition-colors"
                >
                  Library
                </a>
                <a
                  href="#pricing"
                  className="text-gray-300 hover:text-white px-3 py-2 font-medium transition-colors"
                >
                  Pricing
                </a>
                <a
                  href="#about"
                  className="text-gray-300 hover:text-white px-3 py-2 font-medium transition-colors"
                >
                  About
                </a>
                <a
                  href="#faq"
                  className="text-gray-300 hover:text-white px-3 py-2 font-medium transition-colors"
                >
                  Contact
                </a>
              </div>
            </div>

            {/* Login button */}
            <div className="hidden md:flex items-center">
              <a
                href="https://portal.vakeelassist.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button className="bg-white hover:bg-gray-100 text-black py-2 px-4 text-sm font-medium rounded-full transition-all duration-300 shadow-sm hover:shadow-md">
                  Login
                </Button>
              </a>
            </div>

            {/* Menu button for mobile */}
            <div className="flex md:hidden items-center">
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 rounded-md text-gray-300 hover:text-white hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-gray-600"
              >
                <span className="sr-only">Open main menu</span>
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu - Dark theme */}
        {mobileMenuOpen && (
          <div className="md:hidden absolute top-16 inset-x-0 shadow-lg rounded-b-lg z-50 border-t border-gray-800" style={{ backgroundColor: '#0f0e0d' }}>
            <div className="px-2 pt-2 pb-3 space-y-1">
              <div className="px-3 py-2">
                <div className="text-gray-500 text-xs uppercase font-semibold mb-2">Features</div>
                <a href="#assistant" className="block px-3 py-2 rounded-md text-sm text-gray-300 hover:text-white hover:bg-gray-800">
                  AI Assistant
                </a>
                <a href="#translation" className="block px-3 py-2 rounded-md text-sm text-gray-300 hover:text-white hover:bg-gray-800">
                  Document Translation
                </a>
                <a href="#alerts" className="block px-3 py-2 rounded-md text-sm text-gray-300 hover:text-white hover:bg-gray-800">
                  Cause List Alerts
                </a>
                <a href="#research" className="block px-3 py-2 rounded-md text-sm text-gray-300 hover:text-white hover:bg-gray-800">
                  Legal Research
                </a>
                <a href="#drafting" className="block px-3 py-2 rounded-md text-sm text-gray-300 hover:text-white hover:bg-gray-800">
                  Document Drafting
                </a>
              </div>
              <a
                href="/supreme-court-cases"
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-gray-800"
              >
                Library
              </a>
              <a
                href="#pricing"
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-gray-800"
              >
                Pricing
              </a>
              <a
                href="#about"
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-gray-800"
              >
                About
              </a>
              <a
                href="#faq"
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-gray-800"
              >
                Contact
              </a>
              <div className="mt-4 px-3">
                <a
                  href="https://portal.vakeelassist.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full"
                >
                  <span className="block w-full text-center bg-gray-700 hover:bg-gray-600 text-white py-2 px-4 rounded-md font-medium transition-colors">
                    Login
                  </span>
                </a>
              </div>
            </div>
          </div>
        )}
      </nav>

      {/* Animated Announcement Bar */}
      <div className="w-full flex justify-center py-12 mt-16" style={{ backgroundColor: '#0f0e0d' }}>
        <div className="rounded-full px-4 py-2 shadow-lg backdrop-blur-sm" style={{ backgroundColor: '#0f0e0d', border: '1px solid #374151' }}>
          <div className="flex items-center space-x-2">
            <div className="w-6 h-6 rounded-lg flex items-center justify-center shadow-lg" style={{ backgroundColor: '#0f0e0d' }}>
              <svg className="w-4 h-4" fill="#3B82F6" stroke="#60A5FA" strokeWidth="1" strokeLinejoin="round" viewBox="0 0 24 24">
                <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/>
          </svg>
        </div>
            <TypewriterText />
                </div>
        </div>
      </div>

      {/* Hero Section - Clean Professional Design */}
      <div className="w-full text-white pt-4 md:pt-8 pb-16 md:pb-24" style={{ backgroundColor: '#0f0e0d' }}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-6 text-white" style={{ fontFamily: '"Times New Roman", Times, serif', fontWeight: '700', letterSpacing: '0.01em' }}>
                The Fastest Way to Research, Manage, and Access Law in India
              </h1>
              <p className="text-base md:text-lg text-gray-300 mb-6 max-w-4xl mx-auto leading-relaxed">
                Get accurate answers, manage cases across courts, and access India's largest free legal library all in one platform built for Indian lawyers.
              </p>
            <div className="flex justify-center gap-4">
              <a
                href="https://portal.vakeelassist.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button className="bg-white hover:bg-gray-100 text-black py-3 px-6 text-base font-medium rounded-full transition-all duration-300 shadow-sm hover:shadow-md">
                  Start for free
                </Button>
              </a>
              <a
                href="https://portal.vakeelassist.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button className="bg-gray-700 hover:bg-gray-600 text-white py-3 px-6 text-base font-medium rounded-full transition-all duration-300 shadow-sm hover:shadow-md">
                  Book Demo
                </Button>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Cause List Alerts Animation Strip */}
      <CauseListAlertsStrip />

      {/* Translation Workflow Animation Strip */}
      <TranslationWorkflowStrip />

      {/* Legal Workflow Animation Strip */}
      <LegalWorkflowStrip />

      {/* Professional AI Features Section */}
      <div className="w-full py-16 relative overflow-hidden" style={{ backgroundColor: '#0f0e0d' }}>
        {/* Background gradient effects */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-3">
              Unlock Professional Class AI For Your Firm
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
            {/* Feature 1: Enterprise-Grade Security */}
            <div className="group relative rounded-2xl border border-neutral-800/50 bg-gradient-to-br from-neutral-900/40 to-neutral-900/20 backdrop-blur-sm p-6 transition-all duration-300 hover:border-blue-500/50 hover:shadow-lg hover:shadow-blue-500/10">
              <div className="w-12 h-12 mb-4 flex items-center justify-center rounded-xl bg-blue-500/10 group-hover:bg-blue-500/20 transition-colors">
                <svg className="w-7 h-7 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"/>
                </svg>
              </div>
              <h3 className="text-lg md:text-xl font-semibold text-white mb-2 group-hover:text-blue-400 transition-colors">
                Enterprise-Grade Security
              </h3>
              <p className="text-neutral-400 text-sm md:text-base leading-relaxed">
                Robust, industry-standard protection with zero training on your data.
              </p>
            </div>

            {/* Feature 2: Agentic Workflows */}
            <div className="group relative rounded-2xl border border-neutral-800/50 bg-gradient-to-br from-neutral-900/40 to-neutral-900/20 backdrop-blur-sm p-6 transition-all duration-300 hover:border-emerald-500/50 hover:shadow-lg hover:shadow-emerald-500/10">
              <div className="w-12 h-12 mb-4 flex items-center justify-center rounded-xl bg-emerald-500/10 group-hover:bg-emerald-500/20 transition-colors">
                <svg className="w-7 h-7 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"/>
                </svg>
              </div>
              <h3 className="text-lg md:text-xl font-semibold text-white mb-2 group-hover:text-emerald-400 transition-colors">
                Agentic Workflows
              </h3>
              <p className="text-neutral-400 text-sm md:text-base leading-relaxed">
                Produce expert-quality work product for complex workflows, with no prompting required.
              </p>
            </div>

            {/* Feature 3: Domain-Specific Models */}
            <div className="group relative rounded-2xl border border-neutral-800/50 bg-gradient-to-br from-neutral-900/40 to-neutral-900/20 backdrop-blur-sm p-6 transition-all duration-300 hover:border-purple-500/50 hover:shadow-lg hover:shadow-purple-500/10">
              <div className="w-12 h-12 mb-4 flex items-center justify-center rounded-xl bg-purple-500/10 group-hover:bg-purple-500/20 transition-colors">
                <svg className="w-7 h-7 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3"/>
                </svg>
              </div>
              <h3 className="text-lg md:text-xl font-semibold text-white mb-2 group-hover:text-purple-400 transition-colors">
                Domain-Specific Models
              </h3>
              <p className="text-neutral-400 text-sm md:text-base leading-relaxed">
                High-performing custom models built for complex professional work.
              </p>
            </div>

            {/* Feature 4: 24/7 Customer Support */}
            <div className="group relative rounded-2xl border border-neutral-800/50 bg-gradient-to-br from-neutral-900/40 to-neutral-900/20 backdrop-blur-sm p-6 transition-all duration-300 hover:border-amber-500/50 hover:shadow-lg hover:shadow-amber-500/10">
              <div className="w-12 h-12 mb-4 flex items-center justify-center rounded-xl bg-amber-500/10 group-hover:bg-amber-500/20 transition-colors">
                <svg className="w-7 h-7 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
                </svg>
              </div>
              <h3 className="text-lg md:text-xl font-semibold text-white mb-2 group-hover:text-amber-400 transition-colors">
                24/7 Customer Support
              </h3>
              <p className="text-neutral-400 text-sm md:text-base leading-relaxed">
                White glove support to resolve issues and maximize your Vakeel Assist experience.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* How It Works Section - Dark background - HIDDEN */}
      <div id="features" className="hidden w-full bg-gray-900 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-blue-400 font-semibold text-sm md:text-base">
              HOW VAKEEL ASSIST WORKS
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-white mt-2 mb-4">
              Advanced Legal AI Workflow
            </h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Our platform applies artificial intelligence to every stage of
              your legal workflow, creating unparalleled efficiency.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            {/* Step 1 - Warmer beige circle */}
            <div className="relative">
              <div className="bg-amber-50 rounded-lg p-8 h-full border border-amber-100 relative z-10">
                <div className="absolute -top-5 -left-5 w-10 h-10 rounded-full bg-amber-200 text-gray-900 flex items-center justify-center text-xl font-bold shadow-lg">
                  1
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  Document Analysis
                </h3>
                <p className="text-gray-700">
                  Our AI analyzes legal documents to extract key information,
                  identify relevant clauses, and categorize document types.
                </p>
              </div>
            </div>

            {/* Step 2 - Warmer beige circle */}
            <div className="relative">
              <div className="bg-amber-50 rounded-lg p-8 h-full border border-amber-100 relative z-10">
                <div className="absolute -top-5 -left-5 w-10 h-10 rounded-full bg-amber-200 text-gray-900 flex items-center justify-center text-xl font-bold shadow-lg">
                  2
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  Legal Research
                </h3>
                <p className="text-gray-700">
                  Leverage our powerful AI to conduct comprehensive legal
                  research across case law, statutes, and regulations.
                </p>
              </div>
            </div>

            {/* Step 3 - Warmer beige circle */}
            <div className="relative">
              <div className="bg-amber-50 rounded-lg p-8 h-full border border-amber-100 relative z-10">
                <div className="absolute -top-5 -left-5 w-10 h-10 rounded-full bg-amber-200 text-gray-900 flex items-center justify-center text-xl font-bold shadow-lg">
                  3
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  Document Generation
                </h3>
                <p className="text-gray-700">
                  Create customized legal documents in minutes with our
                  intelligent drafting system that incorporates firm best
                  practices.
                </p>
              </div>
            </div>

            {/* Step 4 - Warmer beige circle */}
            <div className="relative">
              <div className="bg-amber-50 rounded-lg p-8 h-full border border-amber-100 relative z-10">
                <div className="absolute -top-5 -left-5 w-10 h-10 rounded-full bg-amber-200 text-gray-900 flex items-center justify-center text-xl font-bold shadow-lg">
                  4
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  Review & Improve
                </h3>
                <p className="text-gray-700">
                  Our AI continuously learns from user feedback to enhance
                  accuracy and adapt to your firm unique practice areas.
                </p>
              </div>
            </div>
          </div>

          {/* CTA Section - Modern Styling */}
          <div className="mt-20 text-center">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
              <p className="text-xl md:text-2xl text-white leading-relaxed mb-8">
                Vakeel Assist seamlessly integrates with your existing legal
                practice management tools,
                <span className="font-semibold text-blue-600">
                  {" "}
                  requiring no changes
                </span>{" "}
                to your current workflow.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Pricing Section - Clean Dark Design */}
      <div id="pricing" className="w-full py-16" style={{ backgroundColor: '#0f0e0d' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-3">
              Choose a plan that's right for you
            </h2>
            <p className="text-base md:text-lg text-gray-300 max-w-3xl mx-auto mb-6">
              Start with our Individual plan for free. Switch plans or cancel any time.
            </p>
            
            {/* Pricing Toggle */}
            <div className="flex justify-center">
              <div className="bg-gray-700 rounded-full p-1 flex">
                <button
                  onClick={() => setPricingMode('annual')}
                  className={`px-6 py-2 rounded-full text-sm font-medium transition-colors ${
                    pricingMode === 'annual' ? 'bg-gray-600 text-white' : 'text-gray-400'
                  }`}
                >
                  Annual pricing
                </button>
                <button
                  onClick={() => setPricingMode('monthly')}
                  className={`px-6 py-2 rounded-full text-sm font-medium transition-colors ${
                    pricingMode === 'monthly' ? 'bg-gray-600 text-white' : 'text-gray-400'
                  }`}
                >
                  Monthly pricing
                </button>
              </div>
            </div>
          </div>

          {/* Cards */}
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {/* Individual Plan Card */}
            <article className="relative rounded-3xl border border-neutral-800/70 bg-neutral-900/60 backdrop-blur shadow-[0_0_0_1px_rgba(255,255,255,0.02)] transition-all duration-300 hover:translate-y-[-2px] hover:border-neutral-700">
              {/* Corner cube icon */}
              <div className="absolute right-4 top-4 h-8 w-8 rounded-xl bg-neutral-800/70 grid place-items-center">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4 text-neutral-300">
                  <path d="M12 2 3 7v10l9 5 9-5V7l-9-5Zm0 2.2 6.8 3.8v7.9L12 19.8 5.2 15.9V8l6.8-3.8Z" />
                </svg>
              </div>

              <div className="flex flex-col h-full p-6 md:p-7">
                <h3 className="text-xl font-semibold text-white">Individual</h3>
                <p className="mt-2 text-neutral-400 leading-relaxed text-sm">Perfect for individual practitioners.</p>

                <div className="mt-6">
                  <div className="flex items-baseline gap-3">
                    <span className="text-3xl font-bold tracking-tight text-neutral-500 line-through decoration-2">
                      {pricingMode === 'annual' ? '₹2,999' : '₹299'}
                    </span>
                    <span className="text-4xl font-bold tracking-tight text-emerald-400">Free</span>
                  </div>
                  <span className="text-neutral-400 text-sm mt-2">{pricingMode === 'annual' ? 'per year' : 'per month'}</span>
                </div>

                {/* Divider */}
                <div className="my-6 h-px w-full bg-gradient-to-r from-transparent via-neutral-700/60 to-transparent" />

                {/* Features */}
                <ul className="space-y-2 text-sm text-neutral-300">
                  <li className="flex items-center gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-4 w-4 text-emerald-400">
                      <path d="M20 6 9 17l-5-5" />
                    </svg>
                    Up to 5 active cases
                  </li>
                  <li className="flex items-center gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-4 w-4 text-emerald-400">
                      <path d="M20 6 9 17l-5-5" />
                    </svg>
                    AI-powered document automation
                  </li>
                  <li className="flex items-center gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-4 w-4 text-emerald-400">
                      <path d="M20 6 9 17l-5-5" />
                    </svg>
                    Email support
                  </li>
                </ul>

                <div className="mt-8">
                  <button className="w-full rounded-2xl px-4 py-3 text-sm font-medium bg-neutral-800 text-neutral-100 hover:bg-neutral-700 focus:ring-4 focus:ring-neutral-700/40">
                    Get started
                  </button>
                </div>
              </div>
            </article>

            {/* Business Plan Card */}
            <article className="relative rounded-3xl border border-neutral-800/70 bg-neutral-900/60 backdrop-blur shadow-[0_0_0_1px_rgba(255,255,255,0.02)] transition-all duration-300 hover:translate-y-[-2px] hover:border-neutral-700">
              {/* Corner cube icon */}
              <div className="absolute right-4 top-4 h-8 w-8 rounded-xl bg-neutral-800/70 grid place-items-center">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4 text-neutral-300">
                  <path d="M12 2 3 7v10l9 5 9-5V7l-9-5Zm0 2.2 6.8 3.8v7.9L12 19.8 5.2 15.9V8l6.8-3.8Z" />
                </svg>
              </div>

              <div className="flex flex-col h-full p-6 md:p-7">
                <h3 className="text-xl font-semibold text-white">Business plan</h3>
                <p className="mt-2 text-neutral-400 leading-relaxed text-sm">Best for growing teams.</p>

                <div className="mt-6">
                  {pricingMode === 'annual' ? (
                    <>
                      <div className="flex items-end gap-2">
                        <span className="text-4xl font-bold tracking-tight text-white">₹5,999</span>
                        <span className="mb-1 text-neutral-400 text-sm">per seat/year</span>
                      </div>
                      <div className="mt-2">
                        <span className="inline-block px-2 py-1 bg-emerald-500/20 text-emerald-400 text-xs font-semibold rounded">
                          Save 10%
                        </span>
                      </div>
                    </>
                  ) : (
                    <div className="flex items-end gap-2">
                      <span className="text-4xl font-bold tracking-tight text-white">₹499</span>
                      <span className="mb-1 text-neutral-400 text-sm">per seat/month</span>
                    </div>
                  )}
                </div>

                {/* Divider */}
                <div className="my-6 h-px w-full bg-gradient-to-r from-transparent via-neutral-700/60 to-transparent" />

                {/* Features */}
                <ul className="space-y-2 text-sm text-neutral-300">
                  <li className="flex items-center gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-4 w-4 text-emerald-400">
                      <path d="M20 6 9 17l-5-5" />
                    </svg>
                    Up to 20 active cases
                  </li>
                  <li className="flex items-center gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-4 w-4 text-emerald-400">
                      <path d="M20 6 9 17l-5-5" />
                    </svg>
                    Advanced AI document automation
                  </li>
                  <li className="flex items-center gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-4 w-4 text-emerald-400">
                      <path d="M20 6 9 17l-5-5" />
                    </svg>
                    Priority email & chat support
                  </li>
                </ul>

                <div className="mt-8">
                  <button className="w-full rounded-2xl px-4 py-3 text-sm font-medium bg-neutral-800 text-neutral-100 hover:bg-neutral-700 focus:ring-4 focus:ring-neutral-700/40">
                    Get started
                  </button>
                </div>
              </div>
            </article>

            {/* Enterprise Plan Card */}
            <article className="relative rounded-3xl border border-neutral-800/70 bg-neutral-900/60 backdrop-blur shadow-[0_0_0_1px_rgba(255,255,255,0.02)] transition-all duration-300 hover:translate-y-[-2px] hover:border-neutral-700">
              {/* Corner cube icon */}
              <div className="absolute right-4 top-4 h-8 w-8 rounded-xl bg-neutral-800/70 grid place-items-center">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4 text-neutral-300">
                  <path d="M12 2 3 7v10l9 5 9-5V7l-9-5Zm0 2.2 6.8 3.8v7.9L12 19.8 5.2 15.9V8l6.8-3.8Z" />
                </svg>
              </div>

              <div className="flex flex-col h-full p-6 md:p-7">
                <h3 className="text-xl font-semibold text-white">Enterprise plan</h3>
                <p className="mt-2 text-neutral-400 leading-relaxed text-sm">Best for large organizations.</p>

                <div className="mt-6 flex items-end gap-2">
                  <span className="text-4xl font-bold tracking-tight text-white">Custom</span>
                  <span className="mb-1 text-neutral-400 text-sm">pricing</span>
                </div>

                {/* Divider */}
                <div className="my-6 h-px w-full bg-gradient-to-r from-transparent via-neutral-700/60 to-transparent" />

                {/* Features */}
                <ul className="space-y-2 text-sm text-neutral-300">
                  <li className="flex items-center gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-4 w-4 text-emerald-400">
                      <path d="M20 6 9 17l-5-5" />
                    </svg>
                    Unlimited cases
                  </li>
                  <li className="flex items-center gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-4 w-4 text-emerald-400">
                      <path d="M20 6 9 17l-5-5" />
                    </svg>
                    Enterprise-grade security
                  </li>
                  <li className="flex items-center gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-4 w-4 text-emerald-400">
                      <path d="M20 6 9 17l-5-5" />
                    </svg>
                    24/7 dedicated support
                  </li>
                </ul>

                <div className="mt-8">
                  <button className="w-full rounded-2xl px-4 py-3 text-sm font-medium bg-neutral-800 text-neutral-100 hover:bg-neutral-700 focus:ring-4 focus:ring-neutral-700/40">
                    Get started
                  </button>
                </div>
              </div>
            </article>
          </div>

          {/* Additional Info */}

          {/* <div className="mt-16 text-center">
            <p className="text-gray-600 mb-4">Need help deciding?</p>
            <button className="bg-black text-white border border-gray-700 hover:border-white hover:bg-gray-700 px-6 py-2.5 rounded-lg transition-colors duration-300 shadow-md">
              Compare all features
            </button>
          </div> */}
        </div>
      </div>

      {/* FAQ Section - Dark Theme */}
      <div id="faq" className="w-full py-16" style={{ backgroundColor: '#0f0e0d' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-3">
              Frequently Asked Questions
            </h2>
            <p className="text-base md:text-lg text-gray-300 max-w-3xl mx-auto">
              Everything you need to know about Vakeel Assist
            </p>
          </div>

          {/* FAQ items */}
          <div className="grid md:grid-cols-2 gap-6">
            {/* Column 1 */}
            <div className="space-y-6">
              {/* FAQ Item 1 */}
              <div className="relative rounded-3xl border border-neutral-800/70 bg-neutral-900/60 backdrop-blur p-6 md:p-7 transition-all duration-300 hover:border-neutral-700">
                <h3 className="text-lg font-semibold text-white mb-2">
                  What is Vakeel Assist?
                </h3>
                <p className="text-neutral-300 leading-relaxed">
                  Vakeel Assist is a comprehensive legal productivity platform
                  that helps lawyers, advocates, and legal teams manage cases,
                  collaborate with colleagues, automate documentation, and serve
                  clients more efficiently.
                </p>
              </div>

              {/* FAQ Item 2 - Team/Individual Work */}
              <div className="relative rounded-3xl border border-neutral-800/70 bg-neutral-900/60 backdrop-blur p-6 md:p-7 transition-all duration-300 hover:border-neutral-700">
                <h3 className="text-lg font-semibold text-white mb-2">
                  Can I work individually or with a team?
                </h3>
                <div className="text-neutral-300 leading-relaxed">
                  Vakeel Assist supports both individual practitioners and legal
                  teams. You can:
                  <ul className="list-disc pl-5 mt-3 space-y-2">
                    <li>Sign up as an individual advocate</li>
                    <li>Create or join a law firm team</li>
                    <li>Switch between individual and team workspaces</li>
                    <li>
                      Manage separate case lists for different practice areas
                    </li>
                  </ul>
                </div>
              </div>

              {/* FAQ Item 4 - Signup Options */}
              <div className="relative rounded-3xl border border-neutral-800/70 bg-neutral-900/60 backdrop-blur p-6 md:p-7 transition-all duration-300 hover:border-neutral-700">
                <h3 className="text-lg font-semibold text-white mb-2">
                  What signup options are available?
                </h3>
                <div className="text-neutral-300 leading-relaxed">
                  We offer flexible onboarding:
                  <ul className="list-disc pl-5 mt-3 space-y-2">
                    <li>
                      <strong className="text-white">Individual account:</strong> For solo
                      practitioners
                    </li>
                    <li>
                      <strong className="text-white">Team account:</strong> For law firms with multiple
                      members
                    </li>
                    <li>
                      <strong className="text-white">Google/Microsoft login:</strong> Quick access
                      using existing accounts (Coming soon)
                    </li>
                    <li>
                      <strong className="text-white">Email signup:</strong> Traditional email/password
                      registration
                    </li>
                  </ul>
                </div>
              </div>

              {/* FAQ Item 7 - Login Options */}
              <div className="relative rounded-3xl border border-neutral-800/70 bg-neutral-900/60 backdrop-blur p-6 md:p-7 transition-all duration-300 hover:border-neutral-700">
                <h3 className="text-lg font-semibold text-white mb-2">
                  How do I login to my account?
                </h3>
                <div className="text-neutral-300 leading-relaxed">
                  Multiple secure login methods available:
                  <ul className="list-disc pl-5 mt-3 space-y-2">
                    <li>Email and password</li>
                    <li>Mobile Number via OTP</li>
                    <li>
                      Social login (Google, Microsoft) - Coming soon
                    </li>
                    <li>Team member invites (for firm accounts)</li>
                  </ul>
                  <p className="mt-3">All methods provide the same full access to your dashboard.</p>
                </div>
              </div>
            </div>

            {/* Column 2 */}
            <div className="space-y-6">
              {/* FAQ Item 3 */}
              <div className="relative rounded-3xl border border-neutral-800/70 bg-neutral-900/60 backdrop-blur p-6 md:p-7 transition-all duration-300 hover:border-neutral-700">
                <h3 className="text-lg font-semibold text-white mb-2">
                  Is my client data secure?
                </h3>
                <p className="text-neutral-300 leading-relaxed">
                  Absolutely. We use enterprise-grade encryption, regular
                  security audits, and comply with all legal data protection
                  standards. Your clients&apos; confidential information remains
                  protected at all times.
                </p>
              </div>

              {/* FAQ Item 5 */}
              <div className="relative rounded-3xl border border-neutral-800/70 bg-neutral-900/60 backdrop-blur p-6 md:p-7 transition-all duration-300 hover:border-neutral-700">
                <h3 className="text-lg font-semibold text-white mb-2">
                  Can I automate legal documents?
                </h3>
                <p className="text-neutral-300 leading-relaxed">
                  Yes! Our AI-powered document assistant helps draft, review,
                  and modify legal documents in minutes. You can customize
                  templates, auto-fill case details, and generate court-ready
                  paperwork with minimal effort.
                </p>
              </div>

              {/* FAQ Item 6 */}
              <div className="relative rounded-3xl border border-neutral-800/70 bg-neutral-900/60 backdrop-blur p-6 md:p-7 transition-all duration-300 hover:border-neutral-700">
                <h3 className="text-lg font-semibold text-white mb-2">
                  How to Find Supreme Court & High Court Judgments?
                </h3>
                <div className="text-neutral-300 leading-relaxed space-y-3">
                  <p>
                    Our legal research module helps you instantly access and
                    analyze judgments from all Indian courts:
                  </p>

                  <ul className="list-disc pl-5 space-y-2">
                    <li>
                      <strong className="text-white">Comprehensive Database:</strong> Search complete
                      collections of SC, HC judgments with regular updates
                    </li>
                    <li>
                      <strong className="text-white">Multiple Search Options:</strong>
                      <ul className="list-circle pl-5 mt-1 space-y-1">
                        <li>By diary number/case number/Year</li>
                        <li>By Supreme Court or High Court</li>
                      </ul>
                    </li>
                    <li>
                      <strong className="text-white">Document Access:</strong> Download full judgments
                      as PDF with original formatting
                    </li>
                    <li>
                      <strong className="text-white">AI Summarization:</strong> Get instant case
                      summaries with:
                      <ul className="list-circle pl-5 mt-1 space-y-1">
                        <li>Key legal principles / Final decision / Important paragraphs / Precedent value</li>
                      </ul>
                    </li>
                    <li>
                      <strong className="text-white">Ask Questions:</strong> Get answers to specific
                      queries about any judgment using natural language
                    </li>
                  </ul>

                  <p className="pt-2">
                    The system maintains proper citations and helps you build
                    your case references with authenticated documents.
                  </p>
                </div>
              </div>

              {/* FAQ Item 8 */}
              <div className="relative rounded-3xl border border-neutral-800/70 bg-neutral-900/60 backdrop-blur p-6 md:p-7 transition-all duration-300 hover:border-neutral-700">
                <h3 className="text-lg font-semibold text-white mb-2">
                  How do I get started?
                </h3>
                <p className="text-neutral-300 leading-relaxed">
                  Simply sign up for an account (individual or team), choose
                  your plan, and our onboarding team will guide you through
                  setup. You can import existing cases or start new ones
                  immediately. We offer free training sessions for all new
                  users.
                </p>
              </div>
            </div>
          </div>

          {/* CTA at bottom */}
          <div className="text-center mt-12">
            <p className="text-gray-300 text-base mb-5">Still have questions?</p>
            <div className="flex justify-center space-x-4">
              <a
                href="https://wa.me/919903758670"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-500 hover:bg-green-600 text-white px-8 py-3 rounded-2xl transition-all duration-300 shadow-lg hover:shadow-xl flex items-center font-medium"
              >
                <svg
                  className="w-5 h-5 mr-2"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-6.29 3.617c-.545.244-1.213.4-1.861.381-.653-.019-1.369-.198-1.369-.198s1.171-3.579 1.273-3.912c.102-.332.173-.332.239-.332.074 0 .148.074.223.248.074.174.298.607.371.785.074.174.149.26.223.26.074 0 .149-.074.298-.26.149-.182.26-.306.387-.471.124-.165.26-.289.347-.289.074 0 .124.025.173.124.05.099.223.533.434 1.005.198.454.384.84.384 1.133.001.304-.1.534-.296.785"/>
                </svg>
                WhatsApp Us
              </a>
            </div>
          </div>
        </div>
      </div>
      
      {/* Footer - Enhanced Design */}
      <footer className="w-full bg-black text-white border-t border-neutral-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Main Footer Content */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 py-12">
            {/* Company Info */}
            <div className="lg:col-span-1">
              <h3 className="text-xl font-bold mb-4">Vakeel Assist</h3>
              <p className="text-neutral-400 text-sm leading-relaxed mb-4">
                Transforming legal practice through AI-powered document drafting,
                workflow automation, and case management.
              </p>
              <div className="flex space-x-4">
                {/* Social Media Icons */}
                <a href="#" className="text-neutral-400 hover:text-white transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </a>
                <a href="#" className="text-neutral-400 hover:text-white transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                  </svg>
                </a>
                <a href="#" className="text-neutral-400 hover:text-white transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-base font-semibold mb-4 text-white">Quick Links</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="/supreme-court-cases" className="text-neutral-400 hover:text-white transition-colors">
                    Library
                  </a>
                </li>
                <li>
                  <a href="#features" className="text-neutral-400 hover:text-white transition-colors">
                    Features
                  </a>
                </li>
                <li>
                  <a href="#pricing" className="text-neutral-400 hover:text-white transition-colors">
                    Pricing
                  </a>
                </li>
                <li>
                  <a href="#faq" className="text-neutral-400 hover:text-white transition-colors">
                    FAQ
                  </a>
                </li>
              </ul>
            </div>

            {/* Legal */}
            <div>
              <h4 className="text-base font-semibold mb-4 text-white">Legal</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="#" className="text-neutral-400 hover:text-white transition-colors">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="text-neutral-400 hover:text-white transition-colors">
                    Terms of Service
                  </a>
                </li>
                <li>
                  <a href="#" className="text-neutral-400 hover:text-white transition-colors">
                    Cookie Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="text-neutral-400 hover:text-white transition-colors">
                    Disclaimer
                  </a>
                </li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="text-base font-semibold mb-4 text-white">Contact</h4>
              <div className="space-y-3 text-sm text-neutral-400">
                <div>
                  <div className="font-medium text-white mb-1">Corporate Office</div>
                  <div className="leading-relaxed">
                    The Circle, 3rd Floor,<br />
                    Huda City Centre Metro Station,<br />
                    Sector 29, Gurugram,<br />
                    Haryana 122002
                  </div>
                </div>
                <div>
                  <a href="mailto:contact@vakeelassist.com" className="hover:text-white transition-colors">
                    contact@vakeelassist.com
                  </a>
                </div>
                <div>
                  <a href="tel:+919903758670" className="hover:text-white transition-colors">
                    +91 99037 58670
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-neutral-800 py-6">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <p className="text-neutral-500 text-sm">
                © 2023 Vakeel Assist. All rights reserved.
              </p>
              <div className="flex items-center space-x-6 text-sm">
                <a href="#" className="text-neutral-400 hover:text-white transition-colors">
                  Sitemap
                </a>
                <a href="#" className="text-neutral-400 hover:text-white transition-colors">
                  Accessibility
                </a>
                <a href="#" className="text-neutral-400 hover:text-white transition-colors">
                  Support
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>

      
    </div>
  );
}
