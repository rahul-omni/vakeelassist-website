"use client";
import { useState, useEffect } from "react";
import { Button } from "../components/ui/button";
import AOS from "aos";
import "aos/dist/aos.css";
import Image from "next/image";
import Link from "next/link";

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

  useEffect(() => {
    // Function to animate legal analysis process
    const animateLegalAnalysis = () => {
      // Step 3 animation (Case Law Analysis)
      setTimeout(() => {
        const progressBar = document.getElementById("progress-bar");
        if (progressBar) progressBar.style.width = "85%";

        const step3 = document.getElementById("step-3");
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
        const status = document.getElementById("analysis-status");
        if (status) status.innerText = "Finalizing Analysis";
      }, 3000); // 3 seconds after component mounts

      // Step 4 animation (Final Report)
      setTimeout(() => {
        const progressBar = document.getElementById("progress-bar");
        if (progressBar) progressBar.style.width = "100%";

        const step4 = document.getElementById("step-4");
        if (step4) {
          step4.classList.remove("opacity-50");
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
        const progressBar = document.getElementById("progress-bar");
        if (progressBar) progressBar.style.width = "100%";

        const step4 = document.getElementById("step-4");
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
        const status = document.getElementById("analysis-status");
        if (status) {
          status.innerText = "Analysis Complete";
          status.classList.remove("bg-gray-100", "text-gray-700");
          status.classList.add("bg-gray-800", "text-white");
        }

        // Update the analysis panel with final content
        const panel = document.getElementById("analysis-panel");
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
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            animateLegalAnalysis();
            if (observer) observer.disconnect();
          }
        });
      },
      { threshold: 0.3 }
    );

    const demoSection = document.getElementById("legal-analysis-demo");
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
      observer = new window.IntersectionObserver(
        (entries) => {
          if (entries[0].isIntersecting) {
            typeInput();
            if (observer) observer.disconnect();
          }
        },
        { threshold: 0.3 }
      );
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
                <Link href="/" className="cursor-pointer">
                  <Image
                    src="/images/VAlogo.png"
                    alt="VA Logo"
                    width={150}
                    height={50}
                    priority
                  />
                </Link>
              </div>
              <div className="hidden md:ml-8 md:flex md:space-x-8 items-center">
                <a
                  href="/supreme-court-cases"
                  className="relative text-gray-700 hover:text-gray-900 px-3 py-2 font-medium"
                >
                  Supreme Court Cases
                  <span className="absolute -top-1 -right-2 text-[10px] bg-red-500 text-white font-semibold px-1.5 py-0.5 rounded-full animate-pulse shadow-md">
                    NEW
                  </span>
                </a>
                <a
                  href="#pricing"
                  className="text-gray-700 hover:text-gray-900 px-3 py-2 font-medium"
                >
                  Pricing
                </a>
                <a
                  href="#faq"
                  className="text-gray-700 hover:text-gray-900 px-3 py-2 font-medium"
                >
                  FAQ
                </a>
                {/* <a
                  href="/blog"
                  className="text-gray-700 hover:text-gray-900 px-3 py-2 font-medium"
                >
                  Blog
                </a> */}
              </div>
            </div>

            {/* Login button */}
            <div className="hidden md:flex items-center">
              <a
                href="https://portal.vakeelassist.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button className="bg-gray-800 hover:bg-gray-900 text-white py-2 px-4">
                  Portal
                </Button>
              </a>
            </div>

            {/* Menu button for mobile */}
            <div className="flex md:hidden items-center">
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 rounded-md text-gray-600 hover:text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-gray-600"
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

        {/* Mobile menu - Grayscale */}
        {mobileMenuOpen && (
          <div className="md:hidden absolute top-16 inset-x-0 bg-white shadow-lg rounded-b-lg z-50">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <a
                href="/supreme-court-cases"
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-100"
              >
                Supreme Court Cases
              </a>
              <a
                href="#pricing"
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-100"
              >
                Pricing
              </a>
              <a
                href="#faq"
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-100"
              >
                FAQ
              </a>
              {/* <a
                href="/blog"
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-100"
              >
                Blog
              </a> */}
              <div className="mt-4 px-3">
                <a
                  href="https://portal.vakeelassist.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full"
                >
                  <Button className="w-full bg-gray-800 hover:bg-gray-900 text-white py-2">
                    Portal
                  </Button>
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
          <svg
            viewBox="0 0 1440 800"
            className="w-full h-full opacity-5"
            preserveAspectRatio="none"
          >
            <pattern
              id="grid-pattern"
              width="40"
              height="40"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M 40 0 L 0 0 0 40"
                fill="none"
                stroke="#333333"
                strokeWidth="1"
              />
            </pattern>
            <rect width="100%" height="100%" fill="url(#grid-pattern)" />
          </svg>

          {/* Large geometric shapes */}
          <svg
            className="absolute inset-0 w-full h-full opacity-10"
            viewBox="0 0 1000 1000"
            preserveAspectRatio="none"
          >
            {/* Large circle */}
            <circle
              cx="900"
              cy="100"
              r="250"
              fill="none"
              stroke="#555555"
              strokeWidth="2"
            />

            {/* Hexagon */}
            <polygon
              points="200,300 300,200 500,200 600,300 500,400 300,400"
              fill="none"
              stroke="#333333"
              strokeWidth="1.5"
            />

            {/* Abstract lines */}
            <path
              d="M0,200 L1000,600"
              stroke="#444444"
              strokeWidth="1.5"
              strokeDasharray="5,5"
            />
            <path
              d="M0,400 L1000,200"
              stroke="#444444"
              strokeWidth="1.5"
              strokeDasharray="5,5"
            />
            <path d="M100,0 L600,1000" stroke="#555555" strokeWidth="1" />

            {/* Connected dots */}
            <g className="opacity-30">
              <circle cx="100" cy="100" r="4" fill="#333333" />
              <circle cx="300" cy="150" r="4" fill="#333333" />
              <circle cx="450" cy="250" r="4" fill="#333333" />
              <circle cx="200" cy="250" r="4" fill="#333333" />
              <line
                x1="100"
                y1="100"
                x2="300"
                y2="150"
                stroke="#333333"
                strokeWidth="1"
              />
              <line
                x1="300"
                y1="150"
                x2="450"
                y2="250"
                stroke="#333333"
                strokeWidth="1"
              />
              <line
                x1="450"
                y1="250"
                x2="200"
                y2="250"
                stroke="#333333"
                strokeWidth="1"
              />
              <line
                x1="200"
                y1="250"
                x2="100"
                y2="100"
                stroke="#333333"
                strokeWidth="1"
              />
            </g>

            {/* Large translucent rectangles */}
            <rect
              x="700"
              y="500"
              width="300"
              height="300"
              fill="none"
              stroke="#222222"
              strokeWidth="2"
              opacity="0.2"
            />
            <rect
              x="750"
              y="550"
              width="300"
              height="300"
              fill="none"
              stroke="#222222"
              strokeWidth="2"
              opacity="0.2"
            />
          </svg>

          {/* Small floating elements */}
          <svg
            className="absolute inset-0 w-full h-full opacity-10"
            viewBox="0 0 1000 1000"
            preserveAspectRatio="none"
          >
            <g className="opacity-60">
              <rect
                x="150"
                y="650"
                width="40"
                height="40"
                fill="#444444"
                transform="rotate(45, 170, 670)"
              />
              <rect
                x="850"
                y="350"
                width="30"
                height="30"
                fill="#444444"
                transform="rotate(30, 865, 365)"
              />
              <rect
                x="450"
                y="750"
                width="25"
                height="25"
                fill="#444444"
                transform="rotate(10, 462, 762)"
              />
              <circle cx="750" cy="150" r="20" fill="#555555" />
              <circle cx="250" cy="550" r="15" fill="#555555" />
              <circle cx="550" cy="350" r="10" fill="#555555" />
            </g>
          </svg>

          {/* Abstract circuit-like pattern */}
          <svg
            className="absolute inset-0 w-full h-full opacity-8"
            viewBox="0 0 1000 1000"
            preserveAspectRatio="none"
          >
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
                <span className="text-gray-800">Legal Excellence</span> Powered
                by Artificial Intelligence
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Reduce billable hours spent on routine tasks. Our LLM-powered
                platform drafts briefs, analyzes precedents, manages discovery,
                and ensures regulatory compliance with unprecedented accuracy.
              </p>
            </div>
            {/* Animated Input and Streaming Output - now in right column */}
            <div
              className="flex justify-center lg:justify-end"
              data-aos="fade-left"
            >
              <div className="max-w-md w-full">
                <div className="bg-white rounded-xl shadow-lg border border-gray-200 p-6 flex flex-col items-center">
                  <div className="w-full flex items-center mb-4">
                    <span className="text-gray-400 mr-2">{">"}</span>
                    <span
                      id="animated-input"
                      className="font-mono text-gray-800 text-base whitespace-pre"
                    ></span>
                    <span className="blinking-cursor text-blue-600 ml-1">
                      |
                    </span>
                  </div>
                  <div
                    id="streaming-output"
                    className="w-full text-left font-mono text-gray-700 text-base mt-2 whitespace-pre-line h-80 overflow-y-auto"
                    style={{ minHeight: "3rem" }}
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* How It Works Section - Dark background */}
      <div id="features" className="w-full bg-gray-900 py-20">
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

      {/* AI in Action Section - Light background */}
      <div className="w-full bg-white text-gray-900 py-20 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-12" data-aos="fade-up">
            <span className="text-gray-600 font-semibold text-sm md:text-base">
              INTELLIGENT LEGAL ANALYSIS
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2 mb-4">
              AI Legal Assistant in Action
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Experience how our AI analyzes complex legal documents, identifies
              key provisions, and provides guidance based on relevant case law.
            </p>
          </div>

          {/* Legal Document Analysis Animation - With Automatic Progression */}
          <div
            className="mb-16 flex justify-center"
            data-aos="fade-up"
            id="legal-analysis-demo"
          >
            <div className="w-full max-w-2xl p-6 bg-white rounded-xl shadow-lg border border-gray-200">
              {/* Header with Case Information */}
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center">
                  <div className="w-12 h-12 rounded-full bg-gray-800 flex items-center justify-center mr-4">
                    <svg
                      className="w-6 h-6 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10"
                      ></path>
                    </svg>
                  </div>
                  <div>
                    <span className="text-xl text-gray-900 font-medium block">
                      Smith v. Johnson
                    </span>
                    <span className="text-sm text-gray-500">
                      Breach of Contract Analysis
                    </span>
                  </div>
                </div>

                {/* Document Status - will update via JS */}
                <div
                  className="px-3 py-1 bg-gray-100 rounded-full text-gray-700 text-sm font-medium"
                  id="analysis-status"
                >
                  Analysis in Progress
                </div>
              </div>

              {/* Split View of Document and Analysis */}
              <div className="flex flex-col md:flex-row gap-4 mb-6">
                {/* Document Preview Panel */}
                <div className="flex-1 p-4 bg-gray-50 rounded-lg border border-gray-200 h-52 overflow-hidden">
                  <div className="flex justify-between items-center mb-3">
                    <span className="text-sm font-medium text-gray-700">
                      Contract Document
                    </span>
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
                <div
                  className="flex-1 p-4 bg-white rounded-lg border border-gray-200 h-52 overflow-hidden"
                  id="analysis-panel"
                >
                  <div className="text-sm font-medium text-gray-700 mb-3">
                    AI Analysis
                  </div>

                  {/* Analysis Summary */}
                  <div className="mb-4">
                    <span className="text-xs uppercase font-semibold text-gray-500 block mb-1">
                      Key Provision Identified
                    </span>
                    <p className="text-sm text-gray-800 font-mono">
                      Section 8.2: Non-performance Remedies
                    </p>
                  </div>

                  {/* Legal Assessment */}
                  <div className="p-3 bg-gray-50 rounded-md border border-gray-200 mb-3">
                    <div className="flex items-start">
                      <svg
                        className="w-5 h-5 text-gray-700 mt-0.5 mr-2 flex-shrink-0"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                        ></path>
                      </svg>
                      <span className="text-sm text-gray-700">
                        Ambiguous termination clause may be unenforceable under{" "}
                        <span className="font-medium">Parker v. Smith</span>{" "}
                        precedent.
                      </span>
                    </div>
                  </div>

                  {/* Suggested Action */}
                  <div className="flex items-center mt-4">
                    <div className="w-2 h-2 bg-gray-600 rounded-full mr-2"></div>
                    <span className="text-sm font-medium text-gray-700">
                      Recommended: Clarify remedies with specific performance
                      metrics
                    </span>
                  </div>
                </div>
              </div>

              {/* AI Processing Steps with Auto-advance */}
              <div className="relative">
                {/* Progress Bar - Auto-advances */}
                <div className="h-1.5 bg-gray-200 rounded-full w-full mb-6">
                  <div
                    className="h-1.5 bg-gray-700 rounded-full transition-all duration-1000 ease-in-out"
                    id="progress-bar"
                    style={{ width: "65%" }}
                  ></div>
                </div>

                {/* Step Indicators */}
                <div className="grid grid-cols-4 gap-2">
                  {/* Step 1: Completed */}
                  <div className="text-center">
                    <div className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center mx-auto mb-2">
                      <svg
                        className="w-4 h-4 text-white"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M5 13l4 4L19 7"
                        ></path>
                      </svg>
                    </div>
                    <span className="text-xs text-gray-700 block">
                      Document Parsed
                    </span>
                  </div>

                  {/* Step 2: Completed */}
                  <div className="text-center">
                    <div className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center mx-auto mb-2">
                      <svg
                        className="w-4 h-4 text-white"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M5 13l4 4L19 7"
                        ></path>
                      </svg>
                    </div>
                    <span className="text-xs text-gray-700 block">
                      Clauses Extracted
                    </span>
                  </div>

                  {/* Step 3: Will auto-complete */}
                  <div className="text-center" id="step-3">
                    <div className="w-8 h-8 bg-gray-200 border-2 border-gray-700 rounded-full flex items-center justify-center mx-auto mb-2 relative">
                      <div className="w-4 h-4 bg-gray-700 rounded-full absolute animate-ping opacity-75"></div>
                      <span className="text-xs text-gray-800 relative z-10">
                        3
                      </span>
                    </div>
                    <span className="text-xs text-gray-700 block font-medium">
                      Case Law Analysis
                    </span>
                  </div>

                  {/* Step 4: Will auto-start */}
                  <div className="text-center opacity-50" id="step-4">
                    <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center mx-auto mb-2">
                      <span className="text-xs text-gray-600">4</span>
                    </div>
                    <span className="text-xs text-gray-600 block">
                      Final Report
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Timeline of Legal Process */}
          <div
            className="max-w-4xl mx-auto"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center text-center md:text-left space-y-4 md:space-y-0">
              <div className="px-6 py-4">
                <div className="text-4xl font-bold text-gray-800 mb-1">89%</div>
                <div className="text-sm text-gray-600">
                  Accuracy in Legal
                  <br />
                  Document Analysis
                </div>
              </div>

              <div className="h-12 w-px bg-gray-300 hidden md:block"></div>

              <div className="px-6 py-4">
                <div className="text-4xl font-bold text-gray-800 mb-1">75%</div>
                <div className="text-sm text-gray-600">
                  Time Saved on
                  <br />
                  Contract Review
                </div>
              </div>

              <div className="h-12 w-px bg-gray-300 hidden md:block"></div>

              <div className="px-6 py-4">
                <div className="text-4xl font-bold text-gray-800 mb-1">93%</div>
                <div className="text-sm text-gray-600">
                  Regulatory
                  <br />
                  Compliance Rate
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Pricing Section - Modern Design */}
      <div id="pricing" className="w-full bg-gray-100 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Simple, Transparent Pricing
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose the perfect plan for your legal practice needs. All plans
              include full platform access.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
            {/* Solo Practitioner Card */}
            <div className="bg-white rounded-2xl border border-gray-200 shadow-md hover:shadow-xl transition-shadow duration-300">
              <div className="p-8 pb-6">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-2xl font-bold text-gray-900">
                    Solo Practitioner
                  </h3>
                  <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-3 py-1 rounded-full">
                    FREE TRIAL
                  </span>
                </div>
                <div className="mb-6">
                  <div className="flex items-end">
                    <span className="text-5xl font-extrabold text-gray-900">
                      ₹0
                    </span>
                    {/* <span className="text-gray-500 ml-2 mb-1">
                      /first 2 months
                    </span> */}
                  </div>
                  <div className="text-white mt-1">.</div>
                  {/* <div className="text-gray-500 mt-1">then ₹1,500/month</div>
                */}
                </div>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-center">
                    <svg
                      className="h-5 w-5 text-green-500 mr-2"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    Up to 5 active cases
                  </li>
                  <li className="flex items-center">
                    <svg
                      className="h-5 w-5 text-green-500 mr-2"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    Basic document automation
                  </li>
                  <li className="flex items-center">
                    <svg
                      className="h-5 w-5 text-green-500 mr-2"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    Email support
                  </li>
                </ul>
              </div>
              {/* <div className="px-8 pb-8">
          <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3.5 rounded-lg text-lg font-medium shadow-sm hover:shadow-md transition-all">
            Start Free Trial
          </Button>
        </div> */}
            </div>

            {/* Law Firm Card (Featured) */}
            <div className="relative bg-white rounded-2xl border-2 border-gray-600 shadow-xl transform md:-translate-y-3">
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-2 bg-gray-600 text-white text-sm font-semibold px-4 py-1 rounded-full">
                MOST POPULAR
              </div>
              <div className="p-8 pb-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">
                  Law Firm
                </h3>
                <div className="mb-6">
                  <div className="flex items-end">
                    <span className="text-5xl font-extrabold text-gray-900">
                      ₹6,000
                    </span>
                    <span className="text-gray-500 ml-2 mb-1">/month</span>
                  </div>
                  <div className="text-gray-500 mt-1">
                    Billed annually (₹72,000/year)
                  </div>
                </div>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-center">
                    <svg
                      className="h-5 w-5 text-green-500 mr-2"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    Up to 20 active cases
                  </li>
                  <li className="flex items-center">
                    <svg
                      className="h-5 w-5 text-green-500 mr-2"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    Advanced document automation
                  </li>
                  <li className="flex items-center">
                    <svg
                      className="h-5 w-5 text-green-500 mr-2"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    Priority email & chat support
                  </li>
                  <li className="flex items-center">
                    <svg
                      className="h-5 w-5 text-green-500 mr-2"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    Team collaboration tools
                  </li>
                </ul>
              </div>
              {/* <div className="px-8 pb-8">
          <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3.5 rounded-lg text-lg font-medium shadow-md hover:shadow-lg transition-all">
            Get Started
          </Button>
        </div> */}
            </div>

            {/* Enterprise Card */}
            <div className="bg-white rounded-2xl border border-gray-200 shadow-md hover:shadow-xl transition-shadow duration-300">
              <div className="p-8 pb-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">
                  Enterprise
                </h3>
                <div className="mb-6">
                  <div className="flex items-end">
                    <span className="text-5xl font-extrabold text-gray-900">
                      ₹79,000
                    </span>
                    <span className="text-gray-500 ml-2 mb-1">/month</span>
                  </div>
                  <div className="text-gray-500 mt-1">
                    Custom billing available
                  </div>
                </div>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-center">
                    <svg
                      className="h-5 w-5 text-green-500 mr-2"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    Unlimited cases
                  </li>
                  <li className="flex items-center">
                    <svg
                      className="h-5 w-5 text-green-500 mr-2"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    Premium document automation
                  </li>
                  <li className="flex items-center">
                    <svg
                      className="h-5 w-5 text-green-500 mr-2"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    24/7 dedicated support
                  </li>
                  <li className="flex items-center">
                    <svg
                      className="h-5 w-5 text-green-500 mr-2"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    Custom integrations
                  </li>
                  <li className="flex items-center">
                    <svg
                      className="h-5 w-5 text-green-500 mr-2"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    On-premise deployment options
                  </li>
                </ul>
              </div>
              {/* <div className="px-8 pb-8">
          <Button className="w-full bg-gray-800 hover:bg-gray-900 text-white py-3.5 rounded-lg text-lg font-medium shadow-sm hover:shadow-md transition-all">
            Contact Sales
          </Button>
        </div> */}
            </div>
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

      {/* FAQ Section - Light background */}
      <div id="faq" className="w-full bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Everything you need to know about Vakeel Assist
            </p>
          </div>

          {/* FAQ items */}
          <div className="grid md:grid-cols-2 gap-8">
            {/* Column 1 */}
            <div className="space-y-6">
              {/* FAQ Item 1 */}
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  What is Vakeel Assist?
                </h3>
                <p className="text-gray-600">
                  Vakeel Assist is a comprehensive legal productivity platform
                  that helps lawyers, advocates, and legal teams manage cases,
                  collaborate with colleagues, automate documentation, and serve
                  clients more efficiently.
                </p>
              </div>

              {/* FAQ Item 2 - Team/Individual Work */}
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  Can I work individually or with a team?
                </h3>
                <div className="text-gray-600">
                  Vakeel Assist supports both individual practitioners and legal
                  teams. You can:
                  <ul className="list-disc pl-5 mt-2 space-y-1">
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
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  What signup options are available?
                </h3>
                <div className="text-gray-600">
                  We offer flexible onboarding:
                  <ul className="list-disc pl-5 mt-2 space-y-1">
                    <li>
                      <strong>Individual account:</strong> For solo
                      practitioners
                    </li>
                    <li>
                      <strong>Team account:</strong> For law firms with multiple
                      members
                    </li>
                    <li>
                      <strong>Google/Microsoft login:</strong> Quick access
                      using existing accounts (Soon will available)
                    </li>
                    <li>
                      <strong>Email signup:</strong> Traditional email/password
                      registration
                    </li>
                  </ul>
                </div>
              </div>
              {/* FAQ Item 7 - Login Options */}
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  How do I login to my account?
                </h3>
                <div className="text-gray-600">
                  Multiple secure login methods available:
                  <ul className="list-disc pl-5 mt-2 space-y-1">
                    <li>Email and password</li>
                    <li>Mobile Number via OTP</li>
                    <li>
                      Social login (Google, Microsoft) Soon will available
                    </li>
                    <li>Team member invites (for firm accounts)</li>
                  </ul>
                  All methods provide the same full access to your dashboard.
                </div>
              </div>
            </div>

            {/* Column 2 */}
            <div className="space-y-6">
              {/* FAQ Item 3 */}
               <div className="bg-gray-50 p-6 rounded-lg">
  <h3 className="text-xl font-semibold text-gray-800 mb-2">
    Is my client data secure?
  </h3>
  <p className="text-gray-600">
    Absolutely. We use enterprise-grade encryption, regular
    security audits, and comply with all legal data protection
    standards. Your clients&apos; confidential information remains
    protected at all times.
  </p>
</div>
              {/* FAQ Item 5 */}
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  Can I automate legal documents?
                </h3>
                <p className="text-gray-600">
                  Yes! Our AI-powered document assistant helps draft, review,
                  and modify legal documents in minutes. You can customize
                  templates, auto-fill case details, and generate court-ready
                  paperwork with minimal effort.
                </p>
              </div>

              {/* FAQ Item 6 */}

              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  How to Find Supreme Court & High Court Judgments?
                </h3>
                <div className="text-gray-600 space-y-3">
                  <p>
                    Our legal research module helps you instantly access and
                    analyze judgments from all Indian courts:
                  </p>

                  <ul className="list-disc pl-5 space-y-2">
                    <li>
                      <strong>Comprehensive Database:</strong> Search complete
                      collections of SC, HC judgments with regular updates
                    </li>
                    <li>
                      <strong>Multiple Search Options:</strong>
                      <ul className="list-circle pl-5 mt-1">
                        <li>By diary number/case number/Year</li>
                         
                        <li>By Supreme Court or High Court</li>
                      </ul>
                    </li>
                    <li>
                      <strong>Document Access:</strong> Download full judgments
                      as PDF with original formatting
                    </li>
                    <li>
                      <strong>AI Summarization:</strong> Get instant case
                      summaries with:
                      <ul className="list-circle pl-5 mt-1">
                        <li>Key legal principles / Final decision / Important paragraphs/ Precedent value</li>
                         
                      </ul>
                    </li>
                    <li>
                      <strong>Ask Questions:</strong> Get answers to specific
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
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  How do I get started?
                </h3>
                <p className="text-gray-600">
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
<div className="text-center mt-16">
  <p className="text-gray-600 mb-4">Still have questions?</p>
  <div className="flex justify-center space-x-4">
    <a 
      href="https://wa.me/919903758670" // Replace with your actual WhatsApp number
      target="_blank"
      rel="noopener noreferrer"
      className="bg-green-500 hover:bg-green-600 text-white px-6 py-2.5 rounded-lg transition-colors duration-300 shadow-md flex items-center"
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
      
      {/* Footer - DARK background (black) */}
      <footer className="w-full bg-black text-white py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-xl font-semibold mb-4">Vakeel Assist</h3>
          <p className="text-gray-400 mb-6">
            Transforming legal practice through AI-powered document drafting,
            workflow automation, and case management.
          </p>
            <div className="mb-6 text-gray-300">
              <div className="font-semibold text-base mb-1">CORPORATE OFFICE</div>
              <div>The Circle, 3rd Floor, Huda City Centre Metro Station,</div>
              <div>Sector 29, Gurugram,</div>
              <div>Haryana 122002</div>
            </div>
          <p className="text-gray-500">
            © 2023 Vakeel Assist. All rights reserved.
          </p>
        </div>
      </footer>

      
    </div>
  );
}
