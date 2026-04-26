import Link from "next/link";

interface Article {
  title: string;
  link: string;
  pubDate: string;
  thumbnail: string | null;
}

function parseArticles(xml: string): Article[] {
  const items = xml.match(/<item>([\s\S]*?)<\/item>/g) ?? [];

  return items.slice(0, 3).map((item) => {
    const cdata = (tag: string) =>
      new RegExp(`<${tag}[^>]*><!\\[CDATA\\[([\\s\\S]*?)\\]\\]><\\/${tag}>`).exec(item)?.[1] ?? "";
    const plain = (tag: string) =>
      new RegExp(`<${tag}[^>]*>([\\s\\S]*?)<\\/${tag}>`).exec(item)?.[1]?.trim() ?? "";

    const title = cdata("title") || plain("title");
    const link  = plain("link") || plain("guid");
    const pubDate = plain("pubDate");
    const content = cdata("content:encoded");
    const thumbnail = /<img[^>]+src="([^"]+)"/.exec(content)?.[1] ?? null;

    const date = pubDate
      ? new Date(pubDate).toLocaleDateString("en-GB", { day: "numeric", month: "short", year: "numeric" })
      : "";

    return { title, link, pubDate: date, thumbnail };
  });
}

async function getArticles(): Promise<Article[]> {
  try {
    const res = await fetch("https://medium.com/feed/@prajeet.thakur20", {
      next: { revalidate: 3600 },
      headers: { "User-Agent": "Mozilla/5.0 (compatible; portfolio-bot/1.0)" },
    });
    if (!res.ok) return [];
    const xml = await res.text();
    return parseArticles(xml);
  } catch {
    return [];
  }
}

export default async function Articles() {
  const articles = await getArticles();

  if (articles.length === 0) return null;

  return (
    <section className="max-w-5xl mx-auto px-10 pb-24">
      <div className="fade-up mb-12">
        <p className="text-xs font-medium uppercase tracking-widest text-ink/40 mb-2">
          Writing
        </p>
        <h2
          className="font-syne font-extrabold tracking-tighter leading-tight"
          style={{ fontSize: "clamp(2rem, 4vw, 3rem)" }}
        >
          From the blog
        </h2>
      </div>

      <div className="fade-up delay-1 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {articles.map((article) => (
          <Link
            key={article.link}
            href={article.link}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex flex-col rounded-2xl border-[1.5px] border-ink/10 bg-cream overflow-hidden hover:-translate-y-1 hover:border-ink/30 hover:shadow-lg transition-all duration-200"
          >
            {article.thumbnail && (
              <div className="w-full h-44 overflow-hidden bg-ink/5">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={article.thumbnail}
                  alt=""
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
            )}
            <div className="flex flex-col flex-1 p-5 gap-3">
              <p className="text-xs text-ink/40 font-medium">{article.pubDate}</p>
              <h3 className="font-syne font-bold text-sm leading-snug line-clamp-3">
                {article.title}
              </h3>
              <span className="mt-auto text-xs text-brand-orange font-medium group-hover:underline">
                Read on Medium →
              </span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
