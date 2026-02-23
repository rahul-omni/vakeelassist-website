"use client";

import Link from "next/link";

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation Spacer */}
      <div className="h-16"></div>

      {/* Hero Section */}
      <div className="w-full text-white py-16" style={{ backgroundColor: '#0f0e0d' }}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-6 text-white">
              Privacy Policy
            </h1>
            <p className="text-base md:text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Your privacy is important to us. This policy explains how we collect, use, and protect your information.
            </p>
          </div>
        </div>
      </div>

      {/* Privacy Policy Content */}
      <div className="w-full py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="prose prose-lg max-w-none">

            <div className="mb-8">
              <p className="text-gray-600 text-sm">Last updated: November 13, 2024</p>
            </div>

            <div className="space-y-8">

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Introduction</h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Welcome to Vakeel Assist (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;). We are committed to protecting your personal information and your right to privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our website and services.
                </p>
                <p className="text-gray-600 leading-relaxed mb-4">
                  By using Vakeel Assist, you agree to the collection and use of information in accordance with this policy. If you do not agree with our policies and practices, please do not use our services.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4 text-gray-900">2. Information We Collect</h2>

                <h3 className="text-xl font-semibold mb-3 text-gray-900">2.1 Personal Information</h3>
                <p className="text-gray-700 mb-4">
                  We collect personal information that you voluntarily provide to us when you:
                </p>
                <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-4">
                  <li>Register for an account</li>
                  <li>Subscribe to our services</li>
                  <li>Contact us for support</li>
                  <li>Participate in surveys or promotions</li>
                </ul>
                <p className="text-gray-700 mb-4">
                  This information may include:
                </p>
                <ul className="list-disc pl-6 text-gray-700 space-y-2">
                  <li>Name and contact information (email address, phone number)</li>
                  <li>Professional information (bar council registration, practice areas)</li>
                  <li>Payment and billing information</li>
                  <li>Case information and legal documents you upload</li>
                  <li>Communication preferences</li>
                </ul>

                <h3 className="text-xl font-semibold mb-3 mt-6 text-gray-900">2.2 Automatically Collected Information</h3>
                <p className="text-gray-700 mb-4">
                  When you access our services, we automatically collect certain information:
                </p>
                <ul className="list-disc pl-6 text-gray-700 space-y-2">
                  <li>Device information (IP address, browser type, operating system)</li>
                  <li>Usage data (pages visited, features used, time spent)</li>
                  <li>Location data (general geographic location)</li>
                  <li>Cookies and similar tracking technologies</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4 text-gray-900">3. How We Use Your Information</h2>
                <p className="text-gray-700 mb-4">
                  We use the information we collect for the following purposes:
                </p>
                <ul className="list-disc pl-6 text-gray-700 space-y-2">
                  <li><strong>Service Delivery:</strong> To provide, maintain, and improve our AI-powered legal services</li>
                  <li><strong>Account Management:</strong> To create and manage your account</li>
                  <li><strong>Communication:</strong> To send you updates, alerts, and support messages</li>
                  <li><strong>Personalization:</strong> To customize your experience and provide relevant content</li>
                  <li><strong>Analytics:</strong> To understand how our services are used and improve functionality</li>
                  <li><strong>Security:</strong> To detect and prevent fraud, abuse, and security incidents</li>
                  <li><strong>Legal Compliance:</strong> To comply with legal obligations and enforce our terms</li>
                  <li><strong>Marketing:</strong> To send promotional materials (with your consent)</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4 text-gray-900">4. AI and Machine Learning</h2>
                <p className="text-gray-700 mb-4">
                  VakeelAssist uses artificial intelligence and machine learning technologies to provide legal research, document analysis, and other services. Please note:
                </p>
                <ul className="list-disc pl-6 text-gray-700 space-y-2">
                  <li>We may use anonymized and aggregated data to train and improve our AI models</li>
                  <li>Your specific case information and documents are not used to train models without explicit consent</li>
                  <li>We implement strict data isolation to ensure confidentiality</li>
                  <li>AI-generated content should be reviewed by qualified legal professionals</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4 text-gray-900">5. Information Sharing and Disclosure</h2>
                <p className="text-gray-700 mb-4">
                  We do not sell your personal information. We may share your information in the following circumstances:
                </p>

                <h3 className="text-xl font-semibold mb-3 text-gray-900">5.1 Service Providers</h3>
                <p className="text-gray-700 mb-4">
                  We may share information with third-party service providers who perform services on our behalf, such as:
                </p>
                <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-4">
                  <li>Cloud hosting and storage providers</li>
                  <li>Payment processors</li>
                  <li>Analytics providers</li>
                  <li>Customer support tools</li>
                </ul>

                <h3 className="text-xl font-semibold mb-3 text-gray-900">5.2 Legal Requirements</h3>
                <p className="text-gray-700 mb-4">
                  We may disclose your information if required by law or in response to valid legal requests, such as:
                </p>
                <ul className="list-disc pl-6 text-gray-700 space-y-2">
                  <li>Court orders or subpoenas</li>
                  <li>Government or regulatory requests</li>
                  <li>To protect our rights and property</li>
                  <li>To prevent fraud or illegal activities</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4 text-gray-900">6. Data Security</h2>
                <p className="text-gray-700 mb-4">
                  We implement appropriate technical and organizational measures to protect your personal information:
                </p>
                <ul className="list-disc pl-6 text-gray-700 space-y-2">
                  <li>Encryption of data in transit and at rest</li>
                  <li>Regular security assessments and audits</li>
                  <li>Access controls and authentication measures</li>
                  <li>Secure data centers and infrastructure</li>
                  <li>Employee training on data protection</li>
                </ul>
                <p className="text-gray-700 mt-4">
                  However, no method of transmission over the internet is 100% secure. While we strive to protect your information, we cannot guarantee absolute security.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4 text-gray-900">7. Data Retention</h2>
                <p className="text-gray-700 mb-4">
                  We retain your personal information for as long as necessary to:
                </p>
                <ul className="list-disc pl-6 text-gray-700 space-y-2">
                  <li>Provide our services to you</li>
                  <li>Comply with legal obligations</li>
                  <li>Resolve disputes and enforce our agreements</li>
                </ul>
                <p className="text-gray-700 mt-4">
                  When you close your account, we will delete or anonymize your personal information within a reasonable timeframe, unless we are required to retain it for legal purposes.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4 text-gray-900">8. Your Privacy Rights</h2>
                <p className="text-gray-700 mb-4">
                  Depending on your location, you may have the following rights regarding your personal information:
                </p>
                <ul className="list-disc pl-6 text-gray-700 space-y-2">
                  <li><strong>Access:</strong> Request a copy of your personal information</li>
                  <li><strong>Correction:</strong> Update or correct inaccurate information</li>
                  <li><strong>Deletion:</strong> Request deletion of your personal information</li>
                  <li><strong>Portability:</strong> Request transfer of your data to another service</li>
                  <li><strong>Opt-out:</strong> Unsubscribe from marketing communications</li>
                  <li><strong>Restriction:</strong> Request limitation of processing</li>
                </ul>
                <p className="text-gray-700 mt-4">
                  To exercise these rights, please contact us at privacy@vakeelassist.com
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4 text-gray-900">9. Cookies and Tracking Technologies</h2>
                <p className="text-gray-700 mb-4">
                  We use cookies and similar tracking technologies to collect and track information about your use of our services. You can control cookies through your browser settings. Note that disabling cookies may affect functionality.
                </p>
                <p className="text-gray-700">
                  For more information, please see our Cookie Policy.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4 text-gray-900">10. Third-Party Links</h2>
                <p className="text-gray-700">
                  Our services may contain links to third-party websites or services. We are not responsible for the privacy practices of these third parties. We encourage you to review their privacy policies.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4 text-gray-900">11. Children&apos;s Privacy</h2>
                <p className="text-gray-700">
                  Our services are not intended for individuals under the age of 18. We do not knowingly collect personal information from children. If you believe we have collected information from a child, please contact us immediately.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4 text-gray-900">12. International Data Transfers</h2>
                <p className="text-gray-700">
                  Your information may be transferred to and processed in countries other than your country of residence. We ensure appropriate safeguards are in place to protect your information in accordance with this Privacy Policy.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4 text-gray-900">13. Changes to This Privacy Policy</h2>
                <p className="text-gray-700">
                  We may update this Privacy Policy from time to time. We will notify you of any material changes by posting the new policy on our website and updating the &quot;Last updated&quot; date. Your continued use of our services after changes constitutes acceptance of the updated policy.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4 text-gray-900">14. Contact Us</h2>
                <p className="text-gray-700 mb-4">
                  If you have questions or concerns about this Privacy Policy or our data practices, please contact us:
                </p>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <p className="text-gray-600 mb-2"><strong>Email:</strong> privacy@vakeelassist.com</p>
                  <p className="text-gray-600 mb-2"><strong>Support Email:</strong> contact@vakeelassist.com</p>
                  <p className="text-gray-600 mb-2"><strong>Phone:</strong> +91 70442 51769</p>
                  <p className="text-gray-600">
                    <strong>Address:</strong><br />
                    The Circle, 3rd Floor<br />
                    Huda City Centre Metro Station<br />
                    Sector 29, Gurugram<br />
                    Haryana 122002, India
                  </p>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">15. Compliance with Indian Laws</h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Vakeel Assist complies with applicable Indian data protection laws, including the Information Technology Act, 2000 and the Information Technology (Reasonable Security Practices and Procedures and Sensitive Personal Data or Information) Rules, 2011. We are committed to protecting your sensitive personal data in accordance with these regulations.
                </p>
              </section>
              <div className="mt-12">
                <Link
                  href="/"
                  className="inline-flex items-center px-6 py-3 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors"
                >
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                  </svg>
                  Back to Home
                </Link>
              </div>
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
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-base font-semibold mb-4 text-white">Quick Links</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="/" className="text-neutral-400 hover:text-white transition-colors">
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="/#pricing" className="text-neutral-400 hover:text-white transition-colors">
                    Pricing
                  </Link>
                </li>
                <li>
                  <Link href="/#faq" className="text-neutral-400 hover:text-white transition-colors">
                    FAQ
                  </Link>
                </li>
              </ul>
            </div>

            {/* Legal */}
            <div>
              <h4 className="text-base font-semibold mb-4 text-white">Legal</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="/privacy-policy" className="text-neutral-400 hover:text-white transition-colors">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link href="/terms-of-service" className="text-neutral-400 hover:text-white transition-colors">
                    Terms of Service
                  </Link>
                </li>
                <li>
                  <Link href="/cancellation-refunds" className="text-neutral-400 hover:text-white transition-colors">
                    Cancellation & Refunds
                  </Link>
                </li>
                <li>
                  <Link href="/shipping-policy" className="text-neutral-400 hover:text-white transition-colors">
                    Shipping Policy
                  </Link>
                </li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="text-base font-semibold mb-4 text-white">Contact</h4>
              <div className="space-y-3 text-sm text-neutral-400">
                <div>
                  <Link href="/contact" className="text-neutral-400 hover:text-white transition-colors font-medium">
                    Contact Us
                  </Link>
                </div>
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
                    +91 70442 51769
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
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
