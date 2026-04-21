type BlogHeroProps = {
  categoryTag: string;
  titleTop: string;
  titleEmphasis: string;
  deck: string;
  author: string;
  dateLabel: string;
  readTimeLabel: string;
};

export default function BlogHero({
  categoryTag,
  titleTop,
  titleEmphasis,
  deck,
  author,
  dateLabel,
  readTimeLabel,
}: BlogHeroProps) {
  return (
    <section className="w-full text-white py-16" style={{ backgroundColor: "#0f0e0d" }}>
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 md:my-16">

        <span className="inline-flex text-xs uppercase tracking-widest text-white border border-white/30 px-3 py-1 rounded-sm mb-5">
          {categoryTag}
        </span>

        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight text-white">
          {titleTop}
          <br />
          <em className="not-italic text-white">{titleEmphasis}</em>
        </h1>

        <p className="mt-6 text-base sm:text-lg text-gray-300 leading-relaxed italic border-l-4 border-white/40 pl-4">
          {deck}
        </p>

        <div className="mt-8 flex flex-wrap items-center gap-4 text-xs uppercase tracking-wider text-gray-400">
          <span>{author}</span>
          <span className="w-1 h-1 rounded-full bg-gray-600" />
          <span>{dateLabel}</span>
          <span className="w-1 h-1 rounded-full bg-gray-600" />
          <span>{readTimeLabel}</span>
        </div>
      </div>
    </section>
  );
}

