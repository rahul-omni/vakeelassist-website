"use client";

import Link from "next/link";
import Image from "next/image";

export default function CancellationRefunds() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed w-full z-50" style={{ backgroundColor: '#0f0e0d' }}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
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
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-8 text-gray-900">Cancellation and Refunds Policy</h1>

          <div className="prose prose-lg max-w-none">
            <p className="text-gray-600 mb-6">
              Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
            </p>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-gray-900">1. Subscription Cancellation</h2>
              <p className="text-gray-700 mb-4">
                You may cancel your VakeelAssist subscription at any time through your account settings or by contacting our support team at support@vakeelassist.com.
              </p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li>Cancellations take effect at the end of the current billing period</li>
                <li>You will continue to have access to all features until the end of your paid period</li>
                <li>No partial refunds are provided for unused time in the current billing cycle</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-gray-900">2. Free Trial Cancellation</h2>
              <p className="text-gray-700 mb-4">
                For Individual plan users on free trial:
              </p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li>You may cancel at any time during the trial period without being charged</li>
                <li>If you do not cancel before the trial ends, you will be automatically charged for the subscription</li>
                <li>To avoid charges, cancel at least 24 hours before the trial period ends</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-gray-900">3. Refund Policy</h2>
              <p className="text-gray-700 mb-4">
                We offer refunds under the following conditions:
              </p>

              <h3 className="text-xl font-semibold mb-3 text-gray-900">3.1 Full Refund</h3>
              <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-4">
                <li>Within 7 days of initial purchase if you are not satisfied with the service</li>
                <li>Technical issues on our end that prevent you from accessing the service</li>
                <li>Billing errors or duplicate charges</li>
              </ul>

              <h3 className="text-xl font-semibold mb-3 text-gray-900">3.2 No Refund</h3>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li>After 7 days of purchase</li>
                <li>For subscription renewals (except in case of billing errors)</li>
                <li>If your account has been terminated due to violation of our Terms of Service</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-gray-900">4. Annual Subscription Refunds</h2>
              <p className="text-gray-700 mb-4">
                For annual subscriptions:
              </p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li>Full refund available within 14 days of purchase</li>
                <li>After 14 days, no refunds will be provided</li>
                <li>You may cancel at any time, but access will continue until the end of the annual period</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-gray-900">5. How to Request a Refund</h2>
              <p className="text-gray-700 mb-4">
                To request a refund:
              </p>
              <ol className="list-decimal pl-6 text-gray-700 space-y-2">
                <li>Contact our support team at support@vakeelassist.com</li>
                <li>Include your account email and order details</li>
                <li>Provide a brief reason for the refund request</li>
                <li>Our team will review and respond within 3-5 business days</li>
              </ol>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-gray-900">6. Refund Processing Time</h2>
              <p className="text-gray-700 mb-4">
                Once approved:
              </p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li>Refunds are processed within 5-7 business days</li>
                <li>Refunds are issued to the original payment method</li>
                <li>Bank processing times may vary (typically 5-10 business days)</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-gray-900">7. Enterprise Plans</h2>
              <p className="text-gray-700 mb-4">
                Enterprise plan cancellations and refunds are subject to the terms outlined in your specific service agreement. Please contact your account manager for details.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-gray-900">8. Changes to This Policy</h2>
              <p className="text-gray-700 mb-4">
                We reserve the right to modify this Cancellation and Refunds Policy at any time. Changes will be effective immediately upon posting to our website. Your continued use of VakeelAssist after any changes constitutes acceptance of the new policy.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-gray-900">9. Contact Us</h2>
              <p className="text-gray-700 mb-4">
                If you have questions about our Cancellation and Refunds Policy, please contact us:
              </p>
              <ul className="list-none text-gray-700 space-y-2">
                <li><strong>Email:</strong> support@vakeelassist.com</li>
                <li><strong>Phone:</strong> +91-7044251769</li>
                <li><strong>Address:</strong> The Circle, 3rd Floor, Huda City Centre Metro Station, Sector 29, Gurugram, Haryana 122002</li>
              </ul>
            </section>
          </div>

          {/* Back to Home Button */}
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

      {/* Footer */}
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
                {/* <a href="#" className="text-neutral-400 hover:text-white transition-colors">
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
                </a> */}
              </div>
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
                  <Link href="/#features" className="text-neutral-400 hover:text-white transition-colors">
                    Features
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
