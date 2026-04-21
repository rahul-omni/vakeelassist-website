import Link from "next/link";
import Image from "next/image";

type NavItem = { href: string; label: string };

type BlogMastheadProps = {
  brandHref?: string;
  brandLabel?: string;
  navItems?: NavItem[];
};

export default function BlogMasthead({
  brandHref = "https://vakeelassist.com",
  brandLabel = "Vakeel Assist",
  navItems = [
    { href: "https://vakeelassist.com/features", label: "Features" },
    { href: "https://vakeelassist.com/#pricing", label: "Pricing" },
    { href: "https://vakeelassist.com/blog", label: "Blog" },
  ],
}: BlogMastheadProps) {
  return (
    <header className="w-full bg-black text-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between py-4">
        <div className="flex-shrink-0 flex items-center">
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
          <nav className="hidden md:block" aria-label="Primary">
            <ul className="flex items-center gap-6 text-xs uppercase tracking-wider text-neutral-300">
              {navItems.map((item) => (
                <li key={item.href}>
                  <a href={item.href} className="hover:text-white transition-colors">
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}

