import Link from "next/link";

type FooterVariant = "default" | "with-features" | "home";

type FooterProps = {
  variant?: FooterVariant;
  showBottomUtilityLinks?: boolean;
};

function getQuickLinks(variant: FooterVariant) {
  switch (variant) {
    case "home":
      return [
        { href: "/supreme-court-cases", label: "Supreme Court" },
        { href: "/#pricing", label: "Pricing" },
        { href: "/#faq", label: "FAQ" },
      ] as const;
    case "with-features":
      return [
        { href: "/", label: "Home" },
        { href: "/#features", label: "Features" },
        { href: "/#pricing", label: "Pricing" },
        { href: "/#faq", label: "FAQ" },
      ] as const;
    case "default":
    default:
      return [
        { href: "/", label: "Home" },
        { href: "/#pricing", label: "Pricing" },
        { href: "/#faq", label: "FAQ" },
      ] as const;
  }
}

export default function Footer({
  variant = "default",
  showBottomUtilityLinks = false,
}: FooterProps) {
  const quickLinks = getQuickLinks(variant);

  return (
    <footer className="w-full bg-black text-white border-t border-neutral-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 py-12">
          <div className="lg:col-span-1">
            <h3 className="text-xl font-bold mb-4">Vakeel Assist</h3>
            <p className="text-neutral-400 text-sm leading-relaxed mb-4">
              Transforming legal practice through AI-powered document drafting,
              workflow automation, and case management.
            </p>
            <div className="flex space-x-4">
                {/* Social Media Icons */}
                <a
                  href="https://www.facebook.com/profile.php?id=61580010027679"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-neutral-400 hover:text-white transition-colors"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </a>
                <a
                  href="https://www.instagram.com/vakeelassist/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-neutral-400 hover:text-white transition-colors"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2Zm0 1.5A4.25 4.25 0 0 0 3.5 7.75v8.5A4.25 4.25 0 0 0 7.75 20.5h8.5a4.25 4.25 0 0 0 4.25-4.25v-8.5A4.25 4.25 0 0 0 16.25 3.5h-8.5ZM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10Zm0 1.5a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7Zm5.25-.88a1.13 1.13 0 1 1 0 2.26 1.13 1.13 0 0 1 0-2.26Z"/>
                  </svg>
                </a>
                <a
                  href="https://www.linkedin.com/company/vakeelassist/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-neutral-400 hover:text-white transition-colors"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </a>
              </div>
          </div>

          <div>
            <h4 className="text-base font-semibold mb-4 text-white">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              {quickLinks.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-neutral-400 hover:text-white transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-base font-semibold mb-4 text-white">Legal</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/privacy-policy"
                  className="text-neutral-400 hover:text-white transition-colors"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/terms-of-service"
                  className="text-neutral-400 hover:text-white transition-colors"
                >
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link
                  href="/cancellation-refunds"
                  className="text-neutral-400 hover:text-white transition-colors"
                >
                  Cancellation & Refunds
                </Link>
              </li>
              <li>
                <Link
                  href="/shipping-policy"
                  className="text-neutral-400 hover:text-white transition-colors"
                >
                  Shipping Policy
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-base font-semibold mb-4 text-white">Contact</h4>
            <div className="space-y-3 text-sm text-neutral-400">
              <div>
                <Link
                  href="/contact"
                  className="text-neutral-400 hover:text-white transition-colors font-medium"
                >
                  Contact Us
                </Link>
              </div>
              <div>
                <div className="font-medium text-white mb-1">Corporate Office</div>
                <div className="leading-relaxed">
                  The Circle, 3rd Floor,
                  <br />
                  Huda City Centre Metro Station,
                  <br />
                  Sector 29, Gurugram,
                  <br />
                  Haryana 122002
                </div>
              </div>
              <div>
                <a
                  href="mailto:contact@vakeelassist.com"
                  className="hover:text-white transition-colors"
                >
                  contact@vakeelassist.com
                </a>
              </div>
              <div>
                <a
                  href="tel:+919903758670"
                  className="hover:text-white transition-colors"
                >
                  +91 70442 51769
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-neutral-800 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-neutral-500 text-sm">© 2023 Vakeel Assist. All rights reserved.</p>
            {showBottomUtilityLinks ? (
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
            ) : null}
          </div>
        </div>
      </div>
    </footer>
  );
}

