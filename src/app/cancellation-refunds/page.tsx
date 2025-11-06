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
                <li><strong>Phone:</strong> +91-XXXX-XXXXXX</li>
                <li><strong>Address:</strong> [Your Business Address]</li>
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
      <footer className="w-full py-8" style={{ backgroundColor: '#0f0e0d' }}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-neutral-400 text-sm">
            <p>&copy; {new Date().getFullYear()} VakeelAssist. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
