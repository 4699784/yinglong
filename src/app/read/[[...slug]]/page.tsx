import Link from "next/link";
import { notFound } from "next/navigation";
import { SiteHeader } from "@/components/SiteHeader";
import { CorpusNav } from "@/components/CorpusNav";
import { MobileNav } from "@/components/MobileNav";
import {
  flattenNav,
  getCorpusTree,
  listAllSlugs,
  readDoc,
} from "@/lib/corpus";
import { markdownToHtml } from "@/lib/markdown";

type PageProps = {
  params: Promise<{ slug?: string[] }>;
};

export async function generateStaticParams() {
  return listAllSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  if (!slug?.length) {
    return { title: "语料目录 · 应龙" };
  }
  const doc = readDoc(slug);
  return {
    title: doc ? `${doc.title} · 应龙` : "应龙",
  };
}

export default async function ReadPage({ params }: PageProps) {
  const { slug } = await params;
  const tree = getCorpusTree();
  const flat = flattenNav(tree);

  if (!slug?.length) {
    return (
      <Shell tree={tree} activeSlug={[]}>
        <h1 className="font-display text-3xl tracking-[0.12em] text-foam">语料目录</h1>
        <p className="mt-3 max-w-2xl text-ink/75">
          左侧（或上方）选择篇章。建议从先秦语境进入，重点阅读《楚辞·山鬼》专卷。
        </p>
        <ol className="mt-8 space-y-2">
          {flat.map((item, i) => (
            <li key={item.href}>
              <Link href={item.href} className="text-jade hover:text-foam">
                {i + 1}. {item.slug.join(" / ")}
              </Link>
            </li>
          ))}
        </ol>
      </Shell>
    );
  }

  const decoded = slug.map((part) => {
    try {
      return decodeURIComponent(part);
    } catch {
      return part;
    }
  });

  const doc = readDoc(decoded);
  if (!doc) notFound();

  const html = await markdownToHtml(doc.content);
  const index = flat.findIndex(
    (n) =>
      n.slug.length === decoded.length && n.slug.every((s, i) => s === decoded[i]),
  );
  const prev = index > 0 ? flat[index - 1] : null;
  const next = index >= 0 && index < flat.length - 1 ? flat[index + 1] : null;

  return (
    <Shell tree={tree} activeSlug={decoded}>
      <article>
        <p className="mb-3 text-xs tracking-[0.2em] text-jade/70">{decoded.join(" · ")}</p>
        <div className="prose-corpus" dangerouslySetInnerHTML={{ __html: html }} />
      </article>
      <nav className="mt-14 flex flex-col gap-3 border-t border-mist/30 pt-6 sm:flex-row sm:justify-between">
        {prev ? (
          <Link href={prev.href} className="text-sm text-ink/70 transition hover:text-foam">
            ← {prev.title}
          </Link>
        ) : (
          <span />
        )}
        {next ? (
          <Link href={next.href} className="text-sm text-ink/70 transition hover:text-foam sm:text-right">
            {next.title} →
          </Link>
        ) : null}
      </nav>
    </Shell>
  );
}

function Shell({
  children,
  tree,
  activeSlug,
}: {
  children: React.ReactNode;
  tree: ReturnType<typeof getCorpusTree>;
  activeSlug: string[];
}) {
  return (
    <div className="atmosphere min-h-screen">
      <SiteHeader compact />
      <div className="mx-auto grid max-w-6xl gap-8 px-4 py-6 md:px-6 lg:grid-cols-[240px_minmax(0,1fr)] lg:gap-10 lg:py-8">
        <aside className="hidden max-h-[calc(100vh-6rem)] overflow-y-auto lg:sticky lg:top-6 lg:block">
          <p className="mb-4 font-display text-xs tracking-[0.24em] text-jade/60">目录</p>
          <CorpusNav tree={tree} activeSlug={activeSlug} />
        </aside>
        <div>
          <MobileNav tree={tree} activeSlug={activeSlug} />
          {children}
        </div>
      </div>
    </div>
  );
}
