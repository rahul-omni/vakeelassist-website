"use client";

import Link from "next/link";

export default function ShippingPolicy() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation Spacer */}
      <div className="h-16"></div>

      {/* Hero Section */}
      <div className="w-full text-white py-16" style={{ backgroundColor: '#0f0e0d' }}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-6 text-white">
              Shipping Policy
            </h1>
            <p className="text-base md:text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Information about our delivery and shipping policies for physical products and services.
            </p>
          </div>
        </div>
      </div>

      {/* Shipping Policy Content */}
      <div className="w-full py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            
            <div className="mb-8">
              <p className="text-gray-600 text-sm">Last updated: November 13, 2024</p>
            </div>

            <div className="space-y-8">
              
              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Overview</h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Vakeel Assist primarily provides digital software services and subscriptions. This shipping policy covers the delivery of any physical products, materials, or documentation that may be provided as part of our services.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Digital Service Delivery</h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Most of our services are delivered digitally and are available immediately upon subscription activation:
                </p>
                <ul className="list-disc pl-6 text-gray-600 space-y-2 mb-4">
                  <li>Account access is provided within 24 hours of payment confirmation</li>
                  <li>Login credentials are sent via email to your registered address</li>
                  <li>All software features are accessible through our web platform</li>
                  <li>No physical shipping is required for digital services</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Physical Products and Materials</h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  In certain circumstances, we may provide physical materials such as:
                </p>
                <ul className="list-disc pl-6 text-gray-600 space-y-2 mb-4">
                  <li>Welcome kits for enterprise customers</li>
                  <li>Training materials and documentation</li>
                  <li>Hardware tokens for enhanced security (if applicable)</li>
                  <li>Promotional materials or merchandise</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Shipping Coverage Areas</h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  We currently ship physical products to the following locations:
                </p>
                <div className="grid md:grid-cols-2 gap-6 mb-4">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Domestic Shipping (India)</h4>
                    <ul className="list-disc pl-6 text-gray-600 space-y-1">
                      <li>All major cities and metro areas</li>
                      <li>Tier 2 and Tier 3 cities</li>
                      <li>Pin codes served by our logistics partners</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">International Shipping</h4>
                    <ul className="list-disc pl-6 text-gray-600 space-y-1">
                      <li>Available for enterprise customers</li>
                      <li>Limited to specific regions</li>
                      <li>Subject to customs and import regulations</li>
                    </ul>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Shipping Timeframes</h2>
                <div className="overflow-x-auto mb-4">
                  <table className="min-w-full bg-white border border-gray-300">
                    <thead className="bg-gray-50">
                      <tr>
                        <th className="py-3 px-4 text-left font-semibold text-gray-900 border-b">Shipping Method</th>
                        <th className="py-3 px-4 text-left font-semibold text-gray-900 border-b">Delivery Time</th>
                        <th className="py-3 px-4 text-left font-semibold text-gray-900 border-b">Cost</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b">
                        <td className="py-3 px-4 text-gray-600">Standard Shipping</td>
                        <td className="py-3 px-4 text-gray-600">5-7 business days</td>
                        <td className="py-3 px-4 text-gray-600">Free for enterprise customers</td>
                      </tr>
                      <tr className="border-b">
                        <td className="py-3 px-4 text-gray-600">Express Shipping</td>
                        <td className="py-3 px-4 text-gray-600">2-3 business days</td>
                        <td className="py-3 px-4 text-gray-600">₹200 within metro cities</td>
                      </tr>
                      <tr className="border-b">
                        <td className="py-3 px-4 text-gray-600">Same Day Delivery</td>
                        <td className="py-3 px-4 text-gray-600">Within 24 hours</td>
                        <td className="py-3 px-4 text-gray-600">Available in Delhi NCR, Mumbai, Bangalore</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Shipping Charges</h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Shipping charges depend on the product type, weight, dimensions, and delivery location:
                </p>
                <ul className="list-disc pl-6 text-gray-600 space-y-2 mb-4">
                  <li>Free standard shipping for all enterprise accounts</li>
                  <li>Free shipping on orders above ₹2,000</li>
                  <li>Expedited shipping charges will be calculated at checkout</li>
                  <li>International shipping costs vary by destination and are calculated separately</li>
                  <li>All shipping charges are clearly displayed before order confirmation</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Order Processing</h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Our order processing workflow:
                </p>
                <div className="bg-gray-50 p-6 rounded-lg mb-4">
                  <ol className="list-decimal pl-6 text-gray-600 space-y-2">
                    <li>Order confirmation and payment verification</li>
                    <li>Inventory check and product preparation (1-2 business days)</li>
                    <li>Packaging and quality assurance</li>
                    <li>Handover to logistics partner</li>
                    <li>Tracking information sent via email/SMS</li>
                  </ol>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Tracking and Delivery</h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Once your order is shipped, you will receive:
                </p>
                <ul className="list-disc pl-6 text-gray-600 space-y-2 mb-4">
                  <li>Tracking number via email and SMS</li>
                  <li>Real-time delivery updates</li>
                  <li>Estimated delivery date</li>
                  <li>Delivery partner contact information</li>
                  <li>SMS notification before delivery attempt</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">9. Delivery Requirements</h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  To ensure successful delivery:
                </p>
                <ul className="list-disc pl-6 text-gray-600 space-y-2 mb-4">
                  <li>Provide complete and accurate shipping address</li>
                  <li>Include landmark information for easier location</li>
                  <li>Ensure someone is available to receive the package</li>
                  <li>Valid contact number for delivery coordination</li>
                  <li>Identification may be required for high-value items</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">10. Failed Delivery Attempts</h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  In case of failed delivery attempts:
                </p>
                <ul className="list-disc pl-6 text-gray-600 space-y-2 mb-4">
                  <li>We make up to 3 delivery attempts</li>
                  <li>Alternative delivery time can be scheduled</li>
                  <li>Package will be held at local facility for 7 days</li>
                  <li>After 7 days, package will be returned to our warehouse</li>
                  <li>Reshipment charges may apply for returned packages</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">11. Damaged or Lost Packages</h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  If your package arrives damaged or gets lost:
                </p>
                <ul className="list-disc pl-6 text-gray-600 space-y-2 mb-4">
                  <li>Report damaged packages within 48 hours of delivery</li>
                  <li>Provide photos of damaged packaging and contents</li>
                  <li>We will arrange replacement or full refund</li>
                  <li>Lost packages are fully covered by our logistics partners</li>
                  <li>Insurance claims are processed within 7-10 business days</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">12. Address Changes</h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Address modification policy:
                </p>
                <ul className="list-disc pl-6 text-gray-600 space-y-2 mb-4">
                  <li>Address changes possible within 24 hours of order placement</li>
                  <li>No address changes after package is shipped</li>
                  <li>Contact customer support immediately for urgent changes</li>
                  <li>Address validation is performed before shipping</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">13. International Shipping</h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  For international orders:
                </p>
                <ul className="list-disc pl-6 text-gray-600 space-y-2 mb-4">
                  <li>Additional customs and duty charges may apply</li>
                  <li>Delivery times may be extended due to customs processing</li>
                  <li>Customer responsible for import duties and taxes</li>
                  <li>Some products may be restricted in certain countries</li>
                  <li>Documentation requirements vary by destination</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">14. Contact Information</h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  For shipping-related queries, contact us:
                </p>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <p className="text-gray-600 mb-2"><strong>Shipping Support:</strong> shipping@vakeelassist.com</p>
                  <p className="text-gray-600 mb-2"><strong>Customer Care:</strong> +91 70442 51769</p>
                  <p className="text-gray-600 mb-2"><strong>WhatsApp:</strong> +91 70442 51769</p>
                  <p className="text-gray-600">
                    <strong>Office Hours:</strong> Monday - Saturday, 9:00 AM - 6:00 PM IST
                  </p>
                </div>
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