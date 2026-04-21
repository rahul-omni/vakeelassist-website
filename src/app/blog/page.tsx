import type { Metadata } from "next";
import Link from "next/link";
import Footer from "@/components/Footer";
import SiteHeader from "@/components/SiteHeader";

export const metadata: Metadata = {
  title: "Blog | Vakeel Assist",
  description:
    "Insights, guides, and updates from Vakeel Assist — built for India’s advocates.",
  alternates: { canonical: "/blog" },
  robots: { index: true, follow: true },
  openGraph: {
    title: "Blog | Vakeel Assist",
    description:
      "Insights, guides, and updates from Vakeel Assist — built for India’s advocates.",
    url: "/blog",
    type: "website",
  },
};

const posts = [
  {
    title: "Never Miss a Hearing: Get Real-Time Causelist Alerts on WhatsApp & Email",
    description:
      "Stop manually checking eCourts every morning. Get personalised causelist alerts on WhatsApp and Email — before court starts.",
    href: "/blog/never-miss-hearing-causelist-whatsapp-email-alerts",
    category: "Causelist Alerts",
    dateLabel: "Apr 20, 2026",
    readTime: "4 min read",
  },
] as const;

export default function BlogIndexPage() {
  return (
    <div className="min-h-screen bg-white">
      <SiteHeader />
      <div className="h-16" />

      {/* Hero */}
      <div className="w-full text-white py-16" style={{ backgroundColor: "#0f0e0d" }}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-6 text-white">
              Blog
            </h1>
            <p className="text-base md:text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Practical guides and updates for Indian legal professionals using Vakeel Assist.
            </p>
          </div>
        </div>
      </div>

      {/* List */}
      <div className="w-full py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post) => (
              <Link
                key={post.href}
                href={post.href}
                className="group bg-white rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow p-6 flex flex-col"
              >
                <div className="flex items-center gap-2 text-xs text-gray-500 mb-3">
                  <span className="inline-flex px-2 py-1 rounded-md bg-gray-100 text-gray-700 font-medium">
                    {post.category}
                  </span>
                  <span className="w-1 h-1 rounded-full bg-gray-300" />
                  <span>{post.dateLabel}</span>
                  <span className="w-1 h-1 rounded-full bg-gray-300" />
                  <span>{post.readTime}</span>
                </div>

                <h2 className="text-xl font-bold text-gray-900 group-hover:text-black transition-colors leading-snug">
                  {post.title}
                </h2>
                <p className="mt-3 text-gray-600 leading-relaxed">
                  {post.description}
                </p>

                <div className="mt-6 text-sm font-semibold text-black">
                  Read article →
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>

      <Footer variant="with-features" showBottomUtilityLinks />
    </div>
  );
}