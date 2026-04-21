type TocItem = { href: string; label: string };
type RelatedItem = { href: string; tag: string; title: string };

type BlogSidebarProps = {
  slug: string;
  toc: TocItem[];
  related: RelatedItem[];
  ctaHref: string;
};

export default function BlogSidebar({ slug, toc, related, ctaHref }: BlogSidebarProps) {
  return (
    <aside className="lg:sticky lg:top-6" aria-label="Article sidebar">
      <div className="space-y-8">
        <div className="border-b border-gray-200 pb-8">
          <div className="text-xs uppercase tracking-widest font-semibold text-gray-700 mb-4">In this article</div>
          <ol className="space-y-2 text-sm text-black">
            {toc.map((i) => (
              <li key={i.href}>
                <a href={i.href} className="hover:opacity-80 transition-opacity">
                  {i.label}
                </a>
              </li>
            ))}
          </ol>
        </div>

        <div className="border-b border-gray-200 pb-8">
          <div className="text-xs uppercase tracking-widest font-semibold text-gray-700 mb-4">Try it free</div>
          <div className="bg-gray-50 border border-gray-200 rounded-lg p-4 text-center">
            <p className="text-sm text-black leading-relaxed">
              Get your daily causelist on WhatsApp &amp; Email — set up in under 5 minutes.
            </p>
            <a
              href={ctaHref}
              rel="dofollow"
              className="mt-4 inline-flex w-full items-center justify-center rounded-lg bg-black px-4 py-2 text-xs font-semibold uppercase tracking-wider text-white hover:bg-gray-900 transition-colors"
            >
              Set up causelist alerts
            </a>
          </div>
        </div>

        {/* <div className="border-b border-gray-200 pb-8">
          <div className="text-xs uppercase tracking-widest font-semibold text-gray-700 mb-4">Share this article</div>
          <div className="grid grid-cols-3 gap-2 text-xs text-black">
            <a
              href={`https://wa.me/?text=${encodeURIComponent(
                `Never miss a hearing again — causelist alerts on WhatsApp & Email: https://vakeelassist.com${slug}`
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-center border border-gray-200 rounded-md px-2 py-2 hover:border-black transition-colors"
            >
              WhatsApp
            </a>
            <a
              href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(
                `https://vakeelassist.com${slug}`
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-center border border-gray-200 rounded-md px-2 py-2 hover:border-black transition-colors"
            >
              LinkedIn
            </a>
            <a
              href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(
                "Never miss a court hearing. Get causelist alerts on WhatsApp & Email — @VakeelAssist"
              )}&url=${encodeURIComponent(`https://vakeelassist.com${slug}`)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-center border border-gray-200 rounded-md px-2 py-2 hover:border-black transition-colors"
            >
              Twitter
            </a>
          </div>
        </div>

        <div>
          <div className="text-xs uppercase tracking-widest font-semibold text-gray-700 mb-4">Related reading</div>
          <div className="space-y-3 text-black">
            {related.map((r) => (
              <a key={r.href} href={r.href} className="block hover:opacity-80 transition-opacity">
                <div className="text-xs uppercase tracking-wider text-gray-600">{r.tag}</div>
                <div className="font-semibold text-sm leading-snug">{r.title}</div>
              </a>
            ))}
          </div>
        </div> */}
      </div>
    </aside>
  );
}

