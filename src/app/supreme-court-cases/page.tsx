"use client";
import { useState } from "react";
import { Button } from "../../components/ui/button";
import Link from "next/link";
import "aos/dist/aos.css";

export default function SupremeCourtCases() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="bg-white border-b border-gray-200 fixed w-full z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex">
              <div className="flex-shrink-0 flex items-center">
                <svg className="w-8 h-8 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
                </svg>
                <span className="ml-2 text-xl font-semibold text-gray-900">Vakeel Assist</span>
              </div>
              <div className="hidden md:ml-8 md:flex md:space-x-8 items-center">
                <Link href="/#features" className="text-gray-700 hover:text-gray-900 px-3 py-2 font-medium">Features</Link>
                <Link href="/supreme-court-cases" className="text-blue-600 hover:text-blue-700 px-3 py-2 font-medium border-b-2 border-blue-600">Supreme Court Cases</Link>
                <Link href="/#pricing" className="text-gray-700 hover:text-gray-900 px-3 py-2 font-medium">Pricing</Link>
                <Link href="/#faq" className="text-gray-700 hover:text-gray-900 px-3 py-2 font-medium">FAQ</Link>
                <Link href="/blog" className="text-gray-700 hover:text-gray-900 px-3 py-2 font-medium">Blog</Link>
              </div>
            </div>

            <div className="hidden md:flex items-center">
              <a href="https://portal.vakeelassist.com" target="_blank" rel="noopener noreferrer">
                <Button className="bg-gray-800 hover:bg-gray-900 text-white py-2 px-4">Login</Button>
              </a>
            </div>

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

        {mobileMenuOpen && (
          <div className="md:hidden absolute top-16 inset-x-0 bg-white shadow-lg rounded-b-lg z-50">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <Link href="/#features" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-100">Features</Link>
              <Link href="/supreme-court-cases" className="block px-3 py-2 rounded-md text-base font-medium text-blue-600 bg-blue-50">Supreme Court Cases</Link>
              <Link href="/#pricing" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-100">Pricing</Link>
              <Link href="/#faq" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-100">FAQ</Link>
              <Link href="/blog" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-100">Blog</Link>
              <div className="mt-4 px-3">
                <a href="https://portal.vakeelassist.com" target="_blank" rel="noopener noreferrer" className="w-full">
                  <Button className="w-full bg-gray-800 hover:bg-gray-900 text-white py-2">Login</Button>
                </a>
              </div>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <div className="w-full bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium mb-6">
              <span className="animate-pulse mr-2">🚀</span>
              Coming Soon
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Supreme Court Cases
              <span className="block text-blue-600">Reimagined</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Say goodbye to endless scrolling through case law databases. Our AI-powered search understands legal concepts, not just keywords.
            </p>
            <div className="flex justify-center space-x-4">
              {submitted ? (
                <span className="text-green-600 text-lg font-semibold">Thank you for joining the waitlist!</span>
              ) : (
                <form
                  className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-2"
                  onSubmit={e => {
                    e.preventDefault();
                    if (email) setSubmitted(true);
                  }}
                >
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    className="px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 text-lg w-64"
                  />
                  <button type="submit" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg text-lg">
                    Join Waitlist
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Traditional vs AI Search Comparison */}
      <div className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Traditional Search is Like Finding a Needle in a Haystack
            </h2>
            <p className="text-xl text-gray-600">
              Let&apos;s see the difference between old-school search and our AI-powered approach
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Traditional Search - The Struggle */}
            <div className="bg-red-50 rounded-2xl p-8 border-2 border-red-200">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mr-4">
                  <span className="text-2xl">😤</span>
                </div>
                <h3 className="text-2xl font-bold text-red-800">Traditional Search</h3>
              </div>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <span className="text-red-500 mr-3 mt-1">❌</span>
                  <div>
                    <h4 className="font-semibold text-red-800 mb-1">Keyword Hell</h4>
                    <p className="text-red-700">&quot;contract breach damages&quot; returns 50,000 results. Good luck finding the right one!</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <span className="text-red-500 mr-3 mt-1">❌</span>
                  <div>
                    <h4 className="font-semibold text-red-800 mb-1">Manual Filtering</h4>
                    <p className="text-red-700">Spend hours reading through irrelevant cases that don&apos;t match your specific scenario.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <span className="text-red-500 mr-3 mt-1">❌</span>
                  <div>
                    <h4 className="font-semibold text-red-800 mb-1">Outdated Results</h4>
                    <p className="text-red-700">Find a great precedent, only to discover it was overruled 5 years ago.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <span className="text-red-500 mr-3 mt-1">❌</span>
                  <div>
                    <h4 className="font-semibold text-red-800 mb-1">No Context</h4>
                    <p className="text-red-700">Get case names but no explanation of why they&apos;re relevant to your situation.</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-8 p-4 bg-red-100 rounded-lg">
                <p className="text-red-800 font-medium text-center">
                  &quot;I spent 3 hours searching and found nothing useful&quot; 
                  <span className="block text-sm mt-1">- Every lawyer, ever</span>
                </p>
              </div>
            </div>

            {/* AI-Powered Search - The Solution */}
            <div className="bg-green-50 rounded-2xl p-8 border-2 border-green-200">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mr-4">
                  <span className="text-2xl">🤖</span>
                </div>
                <h3 className="text-2xl font-bold text-green-800">Vakeel Assist AI</h3>
              </div>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <span className="text-green-500 mr-3 mt-1">✅</span>
                  <div>
                    <h4 className="font-semibold text-green-800 mb-1">Natural Language</h4>
                    <p className="text-green-700">&quot;My client breached a software development contract, what damages can I claim?&quot; - AI understands your exact situation.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <span className="text-green-500 mr-3 mt-1">✅</span>
                  <div>
                    <h4 className="font-semibold text-green-800 mb-1">Smart Filtering</h4>
                    <p className="text-green-700">AI automatically filters out irrelevant cases and focuses on precedents that match your facts.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <span className="text-green-500 mr-3 mt-1">✅</span>
                  <div>
                    <h4 className="font-semibold text-green-800 mb-1">Real-time Updates</h4>
                    <p className="text-green-700">Always get the latest precedents with automatic updates on overruled cases.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <span className="text-green-500 mr-3 mt-1">✅</span>
                  <div>
                    <h4 className="font-semibold text-green-800 mb-1">Context & Analysis</h4>
                    <p className="text-green-700">Get not just case names, but explanations of why each case is relevant to your situation.</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-8 p-4 bg-green-100 rounded-lg">
                <p className="text-green-800 font-medium text-center">
                  &quot;Found the perfect precedent in 30 seconds&quot; 
                  <span className="block text-sm mt-1">- Lawyers using Vakeel Assist</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Interactive Demo Preview */}
      <div className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              See It in Action
            </h2>
            <p className="text-xl text-gray-600">
              A sneak peek at how our AI understands your legal questions
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-200">
              <div className="mb-6">
                <h3 className="text-lg font-semibold text-gray-800 mb-2">Sample Query:</h3>
                <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500">
                  <p className="text-blue-800 font-medium">
                    &quot;What are the damages available for breach of a software development contract where the developer delivered incomplete work?&quot;
                  </p>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex items-center">
                  <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-3">
                    <span className="text-blue-600 text-sm font-bold">1</span>
                  </div>
                  <span className="text-gray-700">AI analyzes your specific scenario and legal requirements</span>
                </div>
                
                <div className="flex items-center">
                  <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-3">
                    <span className="text-blue-600 text-sm font-bold">2</span>
                  </div>
                  <span className="text-gray-700">Searches through 70+ years of Supreme Court judgments</span>
                </div>
                
                <div className="flex items-center">
                  <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-3">
                    <span className="text-blue-600 text-sm font-bold">3</span>
                  </div>
                  <span className="text-gray-700">Identifies relevant precedents with similarity scores</span>
                </div>
                
                <div className="flex items-center">
                  <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-3">
                    <span className="text-blue-600 text-sm font-bold">4</span>
                  </div>
                  <span className="text-gray-700">Provides detailed analysis and reasoning for each case</span>
                </div>
              </div>

              <div className="mt-8 p-4 bg-gray-50 rounded-lg">
                <p className="text-gray-600 text-center">
                  <span className="font-semibold">Coming Soon:</span> Full interactive demo with real Supreme Court judgments
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Features Grid */}
      <div className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              What Makes This Revolutionary?
            </h2>
            <p className="text-xl text-gray-600">
              Features that will transform how you research case law
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-6 rounded-xl border border-blue-200">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <span className="text-2xl">🧠</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Semantic Understanding</h3>
              <p className="text-gray-700">Our AI understands legal concepts, not just keywords. Ask in plain English and get precise results.</p>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-6 rounded-xl border border-green-200">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                <span className="text-2xl">⚡</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Lightning Fast</h3>
              <p className="text-gray-700">Get relevant precedents in seconds, not hours. AI-powered search that works at the speed of thought.</p>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-6 rounded-xl border border-purple-200">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                <span className="text-2xl">📊</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Relevance Scoring</h3>
              <p className="text-gray-700">Each result comes with a relevance score, so you know which cases are most applicable to your situation.</p>
            </div>

            <div className="bg-gradient-to-br from-orange-50 to-red-50 p-6 rounded-xl border border-orange-200">
              <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                <span className="text-2xl">🔄</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Always Updated</h3>
              <p className="text-gray-700">Automatic updates ensure you&apos;re always working with the latest precedents and overruled cases are flagged.</p>
            </div>

            <div className="bg-gradient-to-br from-teal-50 to-cyan-50 p-6 rounded-xl border border-teal-200">
              <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center mb-4">
                <span className="text-2xl">💡</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Smart Insights</h3>
              <p className="text-gray-700">Get AI-generated insights explaining why each case is relevant and how it applies to your situation.</p>
            </div>

            <div className="bg-gradient-to-br from-yellow-50 to-amber-50 p-6 rounded-xl border border-yellow-200">
              <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center mb-4">
                <span className="text-2xl">🔗</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Seamless Integration</h3>
              <p className="text-gray-700">Works with your existing workflow. Export results, cite cases, and integrate with your document drafting.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
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