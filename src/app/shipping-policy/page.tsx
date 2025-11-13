"use client";

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
                  <p className="text-gray-600 mb-2"><strong>Customer Care:</strong> +91 99037 58670</p>
                  <p className="text-gray-600 mb-2"><strong>WhatsApp:</strong> +91 99037 58670</p>
                  <p className="text-gray-600">
                    <strong>Office Hours:</strong> Monday - Saturday, 9:00 AM - 6:00 PM IST
                  </p>
                </div>
              </section>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
}