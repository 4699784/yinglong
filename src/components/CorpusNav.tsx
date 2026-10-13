import Link from "next/link";
import type { CorpusNode } from "@/lib/corpus";

function NavBranch({
  nodes,
  activeSlug,
  depth = 0,
}: {
  nodes: CorpusNode[];
  activeSlug: string[];
  depth?: number;
}) {
  return (
    <ul className={depth === 0 ? "space-y-4" : "mt-2 space-y-1 border-l border-mist/25 pl-3"}>
      {nodes.map((node) => {
        const isSection = Boolean(node.children?.length);
        const active =
          !isSection &&
          activeSlug.length === node.slug.length &&
          activeSlug.every((s, i) => s === node.slug[i]);

        if (isSection) {
          return (
            <li key={node.href}>
              <div className="font-display text-[0.7rem] tracking-[0.18em] text-jade/80">
                {node.title}
              </div>
              <NavBranch nodes={node.children!} activeSlug={activeSlug} depth={depth + 1} />
            </li>
          );
        }

        return (
          <li key={node.href}>
            <Link
              href={node.href}
              className={`block rounded-sm px-1 py-1 text-sm transition ${
                active
                  ? "bg-moss/80 text-foam"
                  : "text-ink/75 hover:bg-moss/40 hover:text-foam"
              }`}
            >
              {node.title}
            </Link>
          </li>
        );
      })}
    </ul>
  );
}

export function CorpusNav({
  tree,
  activeSlug,
}: {
  tree: CorpusNode[];
  activeSlug: string[];
}) {
  return (
    <nav aria-label="语料目录" className="text-[0.92rem] leading-relaxed">
      <NavBranch nodes={tree} activeSlug={activeSlug} />
    </nav>
  );
}
