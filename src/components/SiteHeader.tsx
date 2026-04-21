"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function SiteHeader() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [featuresDropdownOpen, setFeaturesDropdownOpen] = useState(false);
  const [caseAlertsDropdownOpen, setCaseAlertsDropdownOpen] = useState(false);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (featuresDropdownOpen && !target.closest(".features-dropdown")) {
        setFeaturesDropdownOpen(false);
      }
      if (caseAlertsDropdownOpen && !target.closest(".case-alerts-dropdown")) {
        setCaseAlertsDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [featuresDropdownOpen, caseAlertsDropdownOpen]);

  return (
    <nav className="fixed w-full z-50" style={{ backgroundColor: "#0f0e0d" }}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
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

          <div className="flex">
            <div className="hidden md:flex md:space-x-8 items-center">
              <div className="relative features-dropdown">
                <button
                  onClick={() => setFeaturesDropdownOpen(!featuresDropdownOpen)}
                  className="text-gray-300 hover:text-white px-3 py-2 font-medium transition-colors flex items-center gap-1"
                  type="button"
                >
                  Features
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>

                {featuresDropdownOpen && (
                  <div
                    className="absolute top-full left-0 mt-2 w-64 rounded-lg shadow-xl border border-gray-700 z-50"
                    style={{ backgroundColor: "#0f0e0d" }}
                  >
                    <div className="py-2">
                      <a
                        href="/#assistant"
                        className="block px-4 py-3 text-gray-300 hover:text-white hover:bg-gray-800 transition-colors"
                        onClick={() => setFeaturesDropdownOpen(false)}
                      >
                        <div className="font-medium">AI Assistant</div>
                        <div className="text-sm text-gray-500">Ask questions and analyze documents</div>
                      </a>
                      <a
                        href="/#translation"
                        className="block px-4 py-3 text-gray-300 hover:text-white hover:bg-gray-800 transition-colors"
                        onClick={() => setFeaturesDropdownOpen(false)}
                      >
                        <div className="font-medium">Document Translation</div>
                        <div className="text-sm text-gray-500">Translate legal documents instantly</div>
                      </a>
                      <a
                        href="/#alerts"
                        className="block px-4 py-3 text-gray-300 hover:text-white hover:bg-gray-800 transition-colors"
                        onClick={() => setFeaturesDropdownOpen(false)}
                      >
                        <div className="font-medium">Cause List Alerts</div>
                        <div className="text-sm text-gray-500">Never miss a court date</div>
                      </a>
                      <a
                        href="/#assistant"
                        className="block px-4 py-3 text-gray-300 hover:text-white hover:bg-gray-800 transition-colors"
                        onClick={() => setFeaturesDropdownOpen(false)}
                      >
                        <div className="font-medium">Document Drafting</div>
                        <div className="text-sm text-gray-500">Draft legal documents with AI</div>
                      </a>
                    </div>
                  </div>
                )}
              </div>

              <a
                href="/#pricing"
                className="text-gray-300 hover:text-white px-3 py-2 font-medium transition-colors"
              >
                Pricing
              </a>
              <a
                href="/#contact"
                className="text-gray-300 hover:text-white px-3 py-2 font-medium transition-colors"
              >
                Contact
              </a>
              <a
                href="/blog"
                className="text-gray-300 hover:text-white px-3 py-2 font-medium transition-colors"
              >
                Blog
              </a>
            </div>
          </div>

          <div className="hidden md:flex items-center">
            <a href="https://portal.vakeelassist.com" target="_blank" rel="noopener noreferrer">
              <Button className="bg-white hover:bg-gray-100 text-black py-2 px-4 text-sm font-medium rounded-full transition-all duration-300 shadow-sm hover:shadow-md">
                Login
              </Button>
            </a>
          </div>

          <div className="flex md:hidden items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-md text-gray-300 hover:text-white hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-gray-600"
              type="button"
            >
              <span className="sr-only">Open main menu</span>
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
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

      {mobileMenuOpen && (
        <div
          className="md:hidden absolute top-16 inset-x-0 shadow-lg rounded-b-lg z-50 border-t border-gray-800"
          style={{ backgroundColor: "#0f0e0d" }}
        >
          <div className="px-2 pt-2 pb-3 space-y-1">
            <div className="px-3 py-2">
              <div className="text-gray-500 text-xs uppercase font-semibold mb-2">Features</div>
              <a
                href="/#assistant"
                className="block px-3 py-2 rounded-md text-sm text-gray-300 hover:text-white hover:bg-gray-800"
              >
                AI Assistant
              </a>
              <a
                href="/#translation"
                className="block px-3 py-2 rounded-md text-sm text-gray-300 hover:text-white hover:bg-gray-800"
              >
                Document Translation
              </a>
              <a
                href="/#alerts"
                className="block px-3 py-2 rounded-md text-sm text-gray-300 hover:text-white hover:bg-gray-800"
              >
                Cause List Alerts
              </a>
              <a
                href="/#research"
                className="block px-3 py-2 rounded-md text-sm text-gray-300 hover:text-white hover:bg-gray-800"
              >
                Legal Research
              </a>
              <a
                href="/#drafting"
                className="block px-3 py-2 rounded-md text-sm text-gray-300 hover:text-white hover:bg-gray-800"
              >
                Document Drafting
              </a>
            </div>

            <a
              href="/#pricing"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-gray-800"
            >
              Pricing
            </a>
            <a
              href="/#contact"
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
  );
}

