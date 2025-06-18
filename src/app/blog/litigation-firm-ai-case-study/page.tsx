import Link from 'next/link';
import { Button } from "../../../components/ui/button";

export const metadata = {
  title: 'Case Study: Law Firm Saves 30% on Document Review | Vakeel Assist Blog',
  description: 'Learn how Johnson & Partners implemented AI document review technology and achieved significant cost savings while improving accuracy in this detailed case study.',
};

export default function BlogPost() {
  return (
    <div className="min-h-screen bg-white flex flex-col items-center">
      {/* Navigation */}
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
                <Link href="/blog" className="text-blue-700 hover:text-blue-800 px-3 py-2 font-medium">Blog</Link>
              </div>
            </div>
            <div className="hidden md:flex items-center">
              <Button className="bg-blue-700 hover:bg-blue-800 text-white py-2 px-4">Contact Us</Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Article Header */}
      <div className="w-full bg-gray-200 pt-28 pb-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-6">
            <Link href="/blog" className="text-blue-700 hover:text-blue-800 flex items-center">
              <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path>
              </svg>
              Back to Blog
            </Link>
          </div>
          <div>
            <span className="text-blue-700 font-semibold text-sm uppercase tracking-wider">Case Study</span>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mt-2 mb-6">How a Mid-Size Litigation Firm Saved 30% on Document Review Costs</h1>
            <div className="flex items-center mb-8">
              <div className="w-12 h-12 rounded-full bg-gray-400 mr-4"></div>
              <div>
                <span className="text-gray-900 font-medium block">Daniel Wright</span>
                <span className="text-gray-500 text-sm">March 30, 2023 • 8 min read</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Article Content */}
      <div className="w-full bg-white py-12">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <p className="text-xl text-gray-700 mb-8 leading-relaxed">
              Document review has traditionally been one of the most labor-intensive and costly aspects of litigation. This case study examines how Johnson & Partners, a mid-size litigation firm with 45 attorneys, implemented AI-powered document review technology and achieved remarkable cost savings while improving accuracy and case outcomes.
            </p>

            <div className="bg-blue-50 p-6 rounded-lg border border-blue-100 my-8">
              <h4 className="text-lg font-semibold text-gray-900 mb-2">Quick Stats</h4>
              <ul className="list-none pl-0 mb-0 grid grid-cols-2 gap-4">
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-blue-700 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span><strong>30%</strong> cost reduction</span>
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-blue-700 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span><strong>87%</strong> increased accuracy</span>
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-blue-700 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span><strong>75%</strong> faster review</span>
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-blue-700 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span><strong>4</strong> month ROI</span>
                </li>
              </ul>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">The Challenge</h2>
            <p className="mb-4">
              Johnson & Partners specializes in complex commercial litigation and regularly handles cases involving massive document collections. Prior to implementing AI, the firm faced several challenges:
            </p>
            
            <ul className="list-disc pl-6 mb-8 space-y-2">
              <li><strong>Escalating Review Costs:</strong> Document review typically consumed 70% of discovery budgets, with costs regularly exceeding client expectations.</li>
              <li><strong>Inconsistent Quality:</strong> Human reviewer fatigue led to inconsistent tagging and missed key documents, especially in lengthy reviews.</li>
              <li><strong>Tight Deadlines:</strong> Court-imposed discovery timelines were becoming increasingly difficult to meet as data volumes grew.</li>
              <li><strong>Client Pressure:</strong> Corporate clients were demanding more predictable billing and lower costs for document review.</li>
            </ul>
            
            <p className="mb-8">
              The breaking point came during a particularly large antitrust case involving over 3 million documents. The review team of 15 contract attorneys and 4 associates was projected to take six months and cost over $1.2 million to complete the first-level review.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">The Solution</h2>
            
            <p className="mb-4">
              After evaluating several options, Johnson & Partners implemented a multi-faceted AI document review solution:
            </p>
            
            <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-3">1. Predictive Coding with Continuous Active Learning</h3>
            <p className="mb-6">
              The firm deployed an AI system that could learn from attorney coding decisions in real-time. Unlike older predictive coding approaches that required extensive "training" before becoming effective, this system began providing value immediately and continuously improved throughout the review.
            </p>
            
            <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-3">2. Concept Clustering and Email Threading</h3>
            <p className="mb-6">
              Advanced analytics organized documents by conceptual similarity rather than just keywords, allowing attorneys to review related documents together, regardless of terminology variations. Email threading automatically grouped conversations, eliminating redundant review of the same content.
            </p>
            
            <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-3">3. Customized AI Models for Specific Case Types</h3>
            <p className="mb-6">
              Rather than using a one-size-fits-all approach, the firm developed specialized AI models for different practice areas (antitrust, employment, intellectual property). These models were pre-trained to recognize industry-specific terminology and document types.
            </p>
            
            <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-3">4. Integrated Quality Control Workflow</h3>
            <p className="mb-8">
              The system automatically routed a percentage of documents for second-level review based on factors like borderline relevance scores, presence of potentially privileged content, or deviation from expected patterns. This targeted approach to quality control focused human expertise where it was most needed.
            </p>

            <div className="bg-gray-100 p-6 rounded-lg border border-gray-200 my-10">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Implementation Timeline</h3>
              <ol className="list-decimal pl-6 mb-0 space-y-2">
                <li><strong>Month 1:</strong> System selection, infrastructure setup, and initial training</li>
                <li><strong>Month 2:</strong> Pilot project on a smaller case (200K documents)</li>
                <li><strong>Month 3:</strong> Performance analysis, workflow refinement, and development of custom models</li>
                <li><strong>Month 4:</strong> Full implementation across all new matters and development of client-specific models</li>
                <li><strong>Months 5-6:</strong> Integration with existing document management and billing systems</li>
              </ol>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">Overcoming Resistance</h2>
            <p className="mb-4">
              The implementation wasn't without challenges. The firm encountered several forms of resistance:
            </p>
            
            <ul className="list-disc pl-6 mb-8 space-y-3">
              <li>
                <strong>Attorney Skepticism:</strong> 
                <p className="mt-1">Several senior partners were initially skeptical about AI reliability. The solution was to run a blind test comparing AI performance to the firm's top associates on a completed matter. When the AI outperformed the human reviewers in both accuracy and speed, skepticism quickly turned to enthusiasm.</p>
              </li>
              <li>
                <strong>Workflow Disruption:</strong> 
                <p className="mt-1">Attorneys were accustomed to linear review processes. The solution involved developing custom interfaces that mimicked familiar workflows while leveraging AI capabilities behind the scenes.</p>
              </li>
              <li>
                <strong>Billable Hour Concerns:</strong> 
                <p className="mt-1">Some partners worried about the impact on billable hours. The firm addressed this by developing alternative fee arrangements that were actually more profitable than the traditional model while reducing client costs.</p>
              </li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">Results: By the Numbers</h2>
            
            <div className="overflow-x-auto mb-8">
              <table className="min-w-full border border-gray-300">
                <thead>
                  <tr>
                    <th className="border border-gray-300 py-2 px-4 bg-gray-100 text-left">Metric</th>
                    <th className="border border-gray-300 py-2 px-4 bg-gray-100 text-left">Before AI</th>
                    <th className="border border-gray-300 py-2 px-4 bg-gray-100 text-left">After AI</th>
                    <th className="border border-gray-300 py-2 px-4 bg-gray-100 text-left">Improvement</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-gray-300 py-2 px-4 font-medium">Average review cost per GB</td>
                    <td className="border border-gray-300 py-2 px-4">$4,800</td>
                    <td className="border border-gray-300 py-2 px-4">$3,350</td>
                    <td className="border border-gray-300 py-2 px-4 text-green-700">30% reduction</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 py-2 px-4 font-medium">Documents reviewed per hour</td>
                    <td className="border border-gray-300 py-2 px-4">50</td>
                    <td className="border border-gray-300 py-2 px-4">200</td>
                    <td className="border border-gray-300 py-2 px-4 text-green-700">300% increase</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 py-2 px-4 font-medium">Relevant document identification</td>
                    <td className="border border-gray-300 py-2 px-4">68%</td>
                    <td className="border border-gray-300 py-2 px-4">92%</td>
                    <td className="border border-gray-300 py-2 px-4 text-green-700">35% improvement</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 py-2 px-4 font-medium">Client budget predictability</td>
                    <td className="border border-gray-300 py-2 px-4">±25%</td>
                    <td className="border border-gray-300 py-2 px-4">±7%</td>
                    <td className="border border-gray-300 py-2 px-4 text-green-700">72% improvement</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p className="mb-8">
              Beyond the measurable improvements, the firm found that the AI-assisted review process uncovered several key documents that would likely have been missed in a traditional linear review. In one case, the AI flagged a seemingly benign email that, when viewed in context with other communications, revealed an important timeline discrepancy that became central to the firm's argument.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">Client Reaction</h2>
            <p className="mb-6">
              Initial client reactions were mixed, with some expressing concern about the use of AI for sensitive matters. The firm addressed these concerns by:
            </p>
            
            <ul className="list-disc pl-6 mb-8 space-y-2">
              <li>Providing transparency into the AI decision-making process</li>
              <li>Developing detailed quality assurance reports</li>
              <li>Offering clients the option to compare AI-assisted review with traditional methods on a sample set</li>
              <li>Creating cost-saving guarantees for early adopters</li>
            </ul>
            
            <p className="mb-6">
              Within a year, client demand for AI-assisted review had grown to the point where the firm had to expand its technical capabilities. Several clients specifically cited the firm's advanced technology as a reason for selecting them over competitors.
            </p>
            
            <blockquote className="italic text-gray-700 border-l-4 border-gray-300 pl-4 py-2 my-8">
              "Johnson & Partners' AI document review has been transformative for us. We're getting better results, faster turnaround, and significant cost savings. What began as an experiment is now our standard approach for all major litigation." 
              <span className="block mt-2 not-italic font-medium">— General Counsel, Fortune 500 Manufacturing Company</span>
            </blockquote>

            <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">Lessons Learned</h2>
            <p className="mb-4">
              The firm identified several key lessons from their implementation:
            </p>
            
            <ol className="list-decimal pl-6 mb-8 space-y-3">
              <li>
                <strong>Start Small:</strong> 
                <p className="mt-1">Beginning with a pilot project allowed the firm to refine their approach before scaling up.</p>
              </li>
              <li>
                <strong>Focus on Attorney Experience:</strong> 
                <p className="mt-1">The most successful implementations centered on improving attorney experience, not just reducing costs.</p>
              </li>
              <li>
                <strong>Invest in Training:</strong> 
                <p className="mt-1">Continuous training was essential for keeping attorneys comfortable with the evolving technology.</p>
              </li>
              <li>
                <strong>Measure Everything:</strong> 
                <p className="mt-1">Detailed metrics on both cost and quality were crucial for demonstrating value and refining the process.</p>
              </li>
              <li>
                <strong>Client Education is Essential:</strong> 
                <p className="mt-1">Clients needed to understand both how the technology worked and how it benefited their specific matters.</p>
              </li>
            </ol>

            <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">Looking Forward</h2>
            <p className="mb-6">
              Building on their success, Johnson & Partners is now expanding their AI capabilities in several directions:
            </p>
            
            <ul className="list-disc pl-6 mb-8 space-y-2">
              <li>Creating client-specific AI models trained on each client's unique documents and terminology</li>
              <li>Developing automated early case assessment tools to provide strategic insights before full-scale review begins</li>
              <li>Implementing multilingual AI capabilities to handle international matters more efficiently</li>
              <li>Exploring AI-assisted deposition preparation by connecting review findings to witness statements</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">Conclusion</h2>
            <p className="mb-10">
              Johnson & Partners' experience demonstrates that AI document review technology isn't just about cost reduction—though the 30% savings was certainly significant. The greater value came from improved accuracy, faster turnaround times, more predictable budgets, and ultimately better case outcomes. By thoughtfully implementing AI with a focus on both attorney and client experience, the firm transformed what was once a cost center into a competitive advantage.
            </p>

            <div className="border-t border-gray-200 pt-10 mt-10">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">About the Author</h3>
              <div className="flex items-start">
                <div className="w-16 h-16 rounded-full bg-gray-400 mr-4 flex-shrink-0"></div>
                <div>
                  <p className="text-gray-900 font-medium mb-2">Daniel Wright</p>
                  <p className="text-gray-700 text-sm">
                    Daniel is the former Director of Litigation Technology at Johnson & Partners and now works as a legal technology consultant. He has helped over 30 law firms implement AI-powered document review systems and regularly speaks at industry conferences on legal innovation.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Related Articles */}
      <div className="w-full bg-gray-100 py-12">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">Related Articles</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl overflow-hidden shadow">
              <div className="p-6">
                <div className="text-xs text-blue-700 font-semibold uppercase tracking-wide mb-1">Featured</div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  How AI is Transforming Legal Research and Case Preparation
                </h3>
                <Link href="/blog/ai-transforming-legal-research">
                  <span className="text-blue-700 font-medium">Read More →</span>
                </Link>
              </div>
            </div>
            
            <div className="bg-white rounded-xl overflow-hidden shadow">
              <div className="p-6">
                <div className="text-xs text-blue-700 font-semibold uppercase tracking-wide mb-1">Legal Compliance</div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  GDPR Compliance for Law Firms: AI Solutions for Data Protection
                </h3>
                <Link href="/blog/gdpr-compliance-law-firms">
                  <span className="text-blue-700 font-medium">Read More →</span>
                </Link>
              </div>
            </div>
            
            <div className="bg-white rounded-xl overflow-hidden shadow">
              <div className="p-6">
                <div className="text-xs text-blue-700 font-semibold uppercase tracking-wide mb-1">Productivity</div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  5 Ways AI Can Reduce Billable Hours While Improving Client Outcomes
                </h3>
                <Link href="/blog/ai-reducing-billable-hours">
                  <span className="text-blue-700 font-medium">Read More →</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="w-full bg-blue-700 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold text-white mb-3">Ready to Transform Your Document Review Process?</h2>
          <p className="text-blue-100 mb-8 max-w-2xl mx-auto">
            Learn how Vakeel Assist can help your firm achieve similar results with our AI-powered document review platform.
          </p>
          <Button className="bg-white text-blue-700 hover:bg-blue-50 py-3 px-8 rounded-lg text-lg shadow-lg">
            Schedule a Demo
          </Button>
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