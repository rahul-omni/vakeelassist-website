"use client";
import { useState } from "react";
import { Button } from "../../components/ui/button";
import Link from "next/link";
import LegalSearch from "../../components/LegalSearch";
import "aos/dist/aos.css";
import Image from "next/image";

export default function SupremeCourtCases() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="bg-white border-b border-gray-200 fixed w-full z-50 shadow-sm">
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

              {/* <div className="hidden md:ml-10 md:flex md:space-x-8 items-center">
                <Link
                  href="/#features"
                  className="text-gray-700 hover:text-gray-900 px-3 py-2 font-medium transition-colors"
                >
                  Features
                </Link>
                <Link
                  href="/supreme-court-cases"
                  className="text-professional hover:text-professional-light px-3 py-2 font-medium border-b-2 border-professional"
                >
                  Supreme Court Cases3
                </Link>
                <Link
                  href="/#pricing"
                  className="text-gray-700 hover:text-gray-900 px-3 py-2 font-medium transition-colors"
                >
                  Pricing
                </Link>
                <Link
                  href="/#faq"
                  className="text-gray-700 hover:text-gray-900 px-3 py-2 font-medium transition-colors"
                >
                  FAQ
                </Link>
                <Link
                  href="/blog"
                  className="text-gray-700 hover:text-gray-900 px-3 py-2 font-medium transition-colors"
                >
                  Blog
                </Link>
              </div> */}

              <div className="hidden md:ml-10 md:flex md:space-x-8 items-center">

                {/* Supreme Court Cases Link - Active State */}
                <Link
                  href="/supreme-court-cases"
                  className="text-professional hover:text-professional-light px-3 py-2 font-medium border-b-2 border-professional transition-colors duration-200"
                >
                  Supreme Court Cases
                </Link>

                {/* Pricing Link */}
                <Link
                  href="/#pricing"
                  className="text-gray-700 hover:text-gray-900 px-3 py-2 font-medium transition-colors duration-200"
                >
                  Pricing
                </Link>

                {/* FAQ Link */}
                <Link
                  href="/#faq"
                  className="text-gray-700 hover:text-gray-900 px-3 py-2 font-medium transition-colors duration-200"
                >
                  FAQ
                </Link>

                {/* Blog Link */}
                {/* <Link
                  href="/blog"
                  className="text-gray-700 hover:text-gray-900 px-3 py-2 font-medium transition-colors duration-200"
                >
                  Blog
                </Link> */}
              </div>
            </div>

            <div className="hidden md:flex items-center">
              <a
                href="https://portal.vakeelassist.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button className="bg-professional hover:bg-professional-light text-white py-2 px-6 rounded-md font-medium transition-colors">
                  Login
                </Button>
              </a>
            </div>

            <div className="flex md:hidden items-center">
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 rounded-md text-gray-600 hover:text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-gray-600 transition-colors"
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

        {mobileMenuOpen && (
          <div className="md:hidden absolute top-16 inset-x-0 bg-white shadow-lg rounded-b-lg z-50 border border-gray-200">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <Link
                href="/supreme-court-cases"
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-900 bg-gray-100"
              >
                Supreme Court Cases
              </Link>
              <Link
                href="/#pricing"
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-100 transition-colors"
              >
                Pricing
              </Link>
              <Link
                href="/#faq"
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-100 transition-colors"
              >
                FAQ
              </Link>
              {/* <Link
                href="/blog"
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-100 transition-colors"
              >
                Blog
              </Link> */}
              <div className="mt-4 px-3">
                <a
                  href="https://portal.vakeelassist.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full"
                >
                  <Button className="w-full bg-professional hover:bg-professional-light text-white py-2 rounded-md font-medium">
                    Login
                  </Button>
                </a>
              </div>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <div className="w-full bg-gray-900 pt-16 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-flex items-center px-4 py-2 bg-pastel text-white rounded-full text-sm font-medium mt-8 mb-4 border border-green-400">
              <svg
                className="w-4 h-4 mr-2"
                stroke="currentColor"
                fill="none"
                strokeWidth="2"
                viewBox="0 0 24 24"
                strokeLinecap="round"
                strokeLinejoin="round"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M16 16.5l3-4.5 3 4.5"></path>
                <path d="M2 8.5l3 4.5 3-4.5"></path>
                <path d="M7 13h10"></path>
                <path d="M12 21V7"></path>
                <path d="M5 13H2"></path>
                <path d="M19 13h3"></path>
              </svg>
              AI-Powered Legal Research
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 leading-tight">
              Supreme Court Case Research
            </h1>
            <p className="text-lg text-gray-200 max-w-3xl mx-auto mb-10 leading-relaxed">
              Advanced legal research powered by artificial intelligence. Search
              through Supreme Court judgments using natural language and receive
              precise, relevant results for your case preparation.
            </p>
          </div>

          <LegalSearch />

          {/* <div className="max-w-lg mx-auto mt-12">
            <ApiStatus />
          </div> */}
        </div>
      </div>

      {/* How It Works */}
      <div className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Research Methodology
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our systematic approach to legal research ensures comprehensive
              and accurate results
            </p>
          </div>

          <div className="max-w-5xl mx-auto">
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8 md:p-12">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-8">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-professional rounded-lg flex items-center justify-center flex-shrink-0">
                      <span className="text-white font-bold text-lg">1</span>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">
                        Natural Language Processing
                      </h3>
                      <p className="text-gray-600 leading-relaxed">
                        Advanced NLP algorithms analyze your query to understand
                        legal concepts and requirements
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-professional rounded-lg flex items-center justify-center flex-shrink-0">
                      <span className="text-white font-bold text-lg">2</span>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">
                        Semantic Search
                      </h3>
                      <p className="text-gray-600 leading-relaxed">
                        AI-powered search through comprehensive judgment
                        database using semantic analysis
                      </p>
                    </div>
                  </div>
                </div>

                <div className="space-y-8">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-professional rounded-lg flex items-center justify-center flex-shrink-0">
                      <span className="text-white font-bold text-lg">3</span>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">
                        Relevance Assessment
                      </h3>
                      <p className="text-gray-600 leading-relaxed">
                        Each result is evaluated for relevance to your specific
                        legal question
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-professional rounded-lg flex items-center justify-center flex-shrink-0">
                      <span className="text-white font-bold text-lg">4</span>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">
                        Comprehensive Results
                      </h3>
                      <p className="text-gray-600 leading-relaxed">
                        Detailed case information, excerpts, and source
                        references for further analysis
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Features Grid */}
      <div className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Advanced Research Capabilities
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Professional-grade features designed for legal practitioners and
              researchers
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-8 rounded-lg border border-gray-200 hover:shadow-md transition-shadow duration-300">
              <div className="w-12 h-12 bg-professional rounded-lg flex items-center justify-center mb-6">
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
                    d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                  ></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Semantic Understanding
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Advanced AI comprehends legal terminology and concepts,
                providing precise search results.
              </p>
            </div>

            <div className="bg-gray-50 p-8 rounded-lg border border-gray-200 hover:shadow-md transition-shadow duration-300">
              <div className="w-12 h-12 bg-professional rounded-lg flex items-center justify-center mb-6">
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
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  ></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Rapid Processing
              </h3>
              <p className="text-gray-600 leading-relaxed">
                High-performance search algorithms deliver relevant precedents
                in seconds.
              </p>
            </div>

            <div className="bg-gray-50 p-8 rounded-lg border border-gray-200 hover:shadow-md transition-shadow duration-300">
              <div className="w-12 h-12 bg-professional rounded-lg flex items-center justify-center mb-6">
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
                    d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                  ></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Relevance Scoring
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Each result includes a relevance score indicating applicability
                to your case.
              </p>
            </div>

            <div className="bg-gray-50 p-8 rounded-lg border border-gray-200 hover:shadow-md transition-shadow duration-300">
              <div className="w-12 h-12 bg-professional rounded-lg flex items-center justify-center mb-6">
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
                    d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                  ></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Current Database
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Regularly updated with latest judgments and automatic flagging
                of overruled cases.
              </p>
            </div>

            <div className="bg-gray-50 p-8 rounded-lg border border-gray-200 hover:shadow-md transition-shadow duration-300">
              <div className="w-12 h-12 bg-professional rounded-lg flex items-center justify-center mb-6">
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
                    d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                  ></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Legal Analysis
              </h3>
              <p className="text-gray-600 leading-relaxed">
                AI-generated insights explaining case relevance and application
                to your situation.
              </p>
            </div>

            <div className="bg-gray-50 p-8 rounded-lg border border-gray-200 hover:shadow-md transition-shadow duration-300">
              <div className="w-12 h-12 bg-professional rounded-lg flex items-center justify-center mb-6">
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
                    d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.367 2.684 3 3 0 00-5.367-2.684z"
                  ></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Workflow Integration
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Seamless integration with existing legal workflows and document
                preparation systems.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Waitlist Section */}

      <div className="py-20 bg-gray-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Early Access Program
          </h2>
          <p className="text-xl text-gray-300 mb-10 leading-relaxed">
            Join our exclusive early access program for legal professionals.
            Experience the future of legal research with priority access and
            special pricing.
          </p>
          <div className="flex justify-center">
            {submitted ? (
              <div className="bg-gray-800 text-white px-8 py-4 rounded-lg border border-gray-700 shadow-lg">
                <span className="text-lg font-medium">
                  Thank you for your interest. We&apos;ll be in touch shortly.
                </span>
              </div>
            ) : (
              <form
                className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-4 w-full max-w-md mx-auto"
                onSubmit={(e) => {
                  e.preventDefault();
                  if (email) setSubmitted(true);
                }}
              >
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email address"
                  className="w-full px-6 py-4 rounded-lg border border-gray-700 bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-lg transition-all"
                />
                <button
                  type="submit"
                  className="w-full sm:w-auto bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors duration-300 transform hover:scale-105 shadow-lg"
                >
                  Join Waitlist
                </button>
              </form>
            )}
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="w-full bg-professional-dark text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex items-center justify-center mb-6">
              <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center">
                <svg
                  className="w-6 h-6 text-professional"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                  ></path>
                </svg>
              </div>
              <span className="ml-3 text-2xl font-bold">Vakeel Assist</span>
            </div>
            <p className="text-gray-700 text-lg mb-8 max-w-4xl mx-auto leading-relaxed">
              Professional legal technology solutions for document drafting,
              workflow automation, and intelligent case management.
            </p>
            <div className="border-t border-gray-800 pt-8">
              <p className="text-gray-500">
                © 2023 Vakeel Assist. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
