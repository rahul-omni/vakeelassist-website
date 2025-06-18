import Link from 'next/link';
import { Button } from "../../components/ui/button";

export const metadata = {
  title: 'Vakeel Assist Blog - Latest Legal Technology Insights',
  description: 'Stay updated with the latest developments in legal technology, AI applications in law, and best practices for modern legal professionals.',
};

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-white flex flex-col items-center">
      {/* Navigation - reused from main page */}
      <nav className="bg-white border-b border-gray-200 fixed w-full z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex">
              <div className="flex-shrink-0 flex items-center">
                <Link href="/">
                  <div className="flex items-center cursor-pointer">
                    <svg className="w-8 h-8 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
                    </svg>
                    <span className="ml-2 text-xl font-semibold text-gray-900">Vakeel Assist</span>
                  </div>
                </Link>
              </div>
              <div className="hidden md:ml-8 md:flex md:space-x-8 items-center">
                <Link href="/#features" className="text-gray-700 hover:text-gray-900 px-3 py-2 font-medium">Features</Link>
                <Link href="/#how-it-works" className="text-gray-700 hover:text-gray-900 px-3 py-2 font-medium">How It Works</Link>
                <Link href="/#pricing" className="text-gray-700 hover:text-gray-900 px-3 py-2 font-medium">Pricing</Link>
                <Link href="/#faq" className="text-gray-700 hover:text-gray-900 px-3 py-2 font-medium">FAQ</Link>
                <Link href="/blog" className="text-blue-700 border-b-2 border-blue-700 px-3 py-2 font-medium">Blog</Link>
              </div>
            </div>

            {/* Contact Us button */}
            <div className="hidden md:flex items-center">
              <Button className="bg-blue-700 hover:bg-blue-800 text-white py-2 px-4">Contact Us</Button>
            </div>

            {/* Mobile menu button */}
            <div className="flex md:hidden items-center">
              <button
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
      </nav>

      {/* Blog Header */}
      <div className="w-full bg-gray-200 pt-24 pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Vakeel Assist Blog</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Insights on legal technology, AI in law, and the future of legal practice
            </p>
          </div>
        </div>
      </div>

      {/* Featured Article */}
      <div className="w-full bg-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gray-100 rounded-xl overflow-hidden shadow-lg">
            <div className="md:flex">
              <div className="md:flex-shrink-0 md:w-1/3 h-64 bg-gray-300 relative">
                <div className="w-full h-full flex items-center justify-center">
                  <svg className="w-16 h-16 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"></path>
                  </svg>
                </div>
              </div>
              <div className="p-8">
                <div className="uppercase tracking-wide text-sm text-blue-700 font-semibold mb-1">Featured Article</div>
                <h2 className="text-2xl font-bold text-gray-900 mb-2">
                  How AI is Transforming Legal Research and Case Preparation
                </h2>
                <p className="text-gray-600 mb-4">
                  The integration of artificial intelligence in legal research has revolutionized how attorneys prepare for cases. This article explores how AI-powered platforms are reducing research time by up to 70% while improving accuracy and comprehensiveness.
                </p>
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 rounded-full bg-gray-400 mr-3"></div>
                  <div>
                    <span className="text-gray-900 font-medium block">Sarah Mitchell, J.D.</span>
                    <span className="text-gray-500 text-sm">May 15, 2023 • 12 min read</span>
                  </div>
                </div>
                <Link href="/blog/ai-transforming-legal-research">
                  <Button className="text-blue-700 bg-white hover:bg-gray-100 border border-blue-700 px-4 py-2 rounded">
                    Read Article
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Recent Articles */}
      <div className="w-full bg-gray-200 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">Recent Articles</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Article 1 */}
            <div className="bg-white rounded-xl overflow-hidden shadow border border-gray-200">
              <div className="h-48 bg-gray-300 flex items-center justify-center">
                <svg className="w-12 h-12 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path>
                </svg>
              </div>
              <div className="p-6">
                <div className="text-xs text-blue-700 font-semibold uppercase tracking-wide mb-1">Legal Compliance</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  GDPR Compliance for Law Firms: AI Solutions for Data Protection
                </h3>
                <p className="text-gray-600 mb-4 line-clamp-3">
                  Maintaining GDPR compliance can be challenging for law firms handling sensitive client data. Learn how AI-powered tools can automate compliance processes and reduce risk.
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-gray-500 text-sm">April 28, 2023</span>
                  <Link href="/blog/gdpr-compliance-law-firms">
                    <span className="text-blue-700 font-medium">Read More →</span>
                  </Link>
                </div>
              </div>
            </div>

            {/* Article 2 */}
            <div className="bg-white rounded-xl overflow-hidden shadow border border-gray-200">
              <div className="h-48 bg-gray-300 flex items-center justify-center">
                <svg className="w-12 h-12 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                </svg>
              </div>
              <div className="p-6">
                <div className="text-xs text-blue-700 font-semibold uppercase tracking-wide mb-1">Productivity</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  5 Ways AI Can Reduce Billable Hours While Improving Client Outcomes
                </h3>
                <p className="text-gray-600 mb-4 line-clamp-3">
                  The billable hour model is being challenged by AI efficiency. Discover how progressive firms are using AI to reduce costs while delivering better results for clients.
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-gray-500 text-sm">April 12, 2023</span>
                  <Link href="/blog/ai-reducing-billable-hours">
                    <span className="text-blue-700 font-medium">Read More →</span>
                  </Link>
                </div>
              </div>
            </div>

            {/* Article 3 */}
            <div className="bg-white rounded-xl overflow-hidden shadow border border-gray-200">
              <div className="h-48 bg-gray-300 flex items-center justify-center">
                <svg className="w-12 h-12 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path>
                </svg>
              </div>
              <div className="p-6">
                <div className="text-xs text-blue-700 font-semibold uppercase tracking-wide mb-1">Case Studies</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  How a Mid-Size Litigation Firm Saved 30% on Document Review Costs
                </h3>
                <p className="text-gray-600 mb-4 line-clamp-3">
                  Johnson & Partners implemented AI document review and saw dramatic improvements in both cost and accuracy. This case study breaks down their implementation process and results.
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-gray-500 text-sm">March 30, 2023</span>
                  <Link href="/blog/litigation-firm-ai-case-study">
                    <span className="text-blue-700 font-medium">Read More →</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Popular Topics */}
      <div className="w-full bg-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">Popular Topics</h2>
          
          <div className="flex flex-wrap gap-3">
            <Link href="/blog/topic/ai-legal-research">
              <span className="px-4 py-2 bg-gray-100 text-gray-800 rounded-full hover:bg-gray-200 transition-colors">
                AI Legal Research
              </span>
            </Link>
            <Link href="/blog/topic/document-automation">
              <span className="px-4 py-2 bg-gray-100 text-gray-800 rounded-full hover:bg-gray-200 transition-colors">
                Document Automation
              </span>
            </Link>
            <Link href="/blog/topic/legal-analytics">
              <span className="px-4 py-2 bg-gray-100 text-gray-800 rounded-full hover:bg-gray-200 transition-colors">
                Legal Analytics
              </span>
            </Link>
            <Link href="/blog/topic/compliance">
              <span className="px-4 py-2 bg-gray-100 text-gray-800 rounded-full hover:bg-gray-200 transition-colors">
                Compliance
              </span>
            </Link>
            <Link href="/blog/topic/client-management">
              <span className="px-4 py-2 bg-gray-100 text-gray-800 rounded-full hover:bg-gray-200 transition-colors">
                Client Management
              </span>
            </Link>
            <Link href="/blog/topic/legal-tech-trends">
              <span className="px-4 py-2 bg-gray-100 text-gray-800 rounded-full hover:bg-gray-200 transition-colors">
                Legal Tech Trends
              </span>
            </Link>
            <Link href="/blog/topic/case-studies">
              <span className="px-4 py-2 bg-gray-100 text-gray-800 rounded-full hover:bg-gray-200 transition-colors">
                Case Studies
              </span>
            </Link>
          </div>
        </div>
      </div>

      {/* Newsletter Signup */}
      <div className="w-full bg-gray-200 py-16">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-3">Stay Updated on Legal Tech Trends</h2>
          <p className="text-gray-600 mb-6">
            Subscribe to our newsletter for the latest insights on AI in legal practice, delivered straight to your inbox.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <input 
              type="email" 
              placeholder="Your email address" 
              className="px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent w-full sm:w-auto"
            />
            <Button className="bg-blue-700 hover:bg-blue-800 text-white py-3 px-6 rounded-lg">
              Subscribe
            </Button>
          </div>
        </div>
      </div>

      {/* Footer - Matches main site */}
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