type TocItem = { href: string; label: string };

type BlogSidebarProps = {
  toc: TocItem[];
  ctaHref: string;
};

export default function BlogSidebar({ toc, ctaHref }: BlogSidebarProps) {
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

      </div>
    </aside>
  );
}

