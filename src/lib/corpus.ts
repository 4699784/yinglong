import fs from "fs";
import path from "path";

const DOCS_ROOT = path.join(process.cwd(), "docs");

export type CorpusNode = {
  title: string;
  slug: string[];
  href: string;
  children?: CorpusNode[];
};

function titleFromFilename(name: string): string {
  return name.replace(/\.md$/i, "").replace(/^\d+-/, "");
}

function walkDir(dir: string, slugPrefix: string[] = []): CorpusNode[] {
  if (!fs.existsSync(/*turbopackIgnore: true*/ dir)) return [];
  const entries = fs.readdirSync(/*turbopackIgnore: true*/ dir, { withFileTypes: true });
  const dirs = entries
    .filter((e) => e.isDirectory())
    .sort((a, b) => a.name.localeCompare(b.name, "zh"));
  const files = entries
    .filter((e) => e.isFile() && e.name.endsWith(".md"))
    .sort((a, b) => a.name.localeCompare(b.name, "zh"));

  const nodes: CorpusNode[] = [];

  for (const d of dirs) {
    const childSlug = [...slugPrefix, d.name];
    const children = walkDir(path.join(/*turbopackIgnore: true*/ dir, d.name), childSlug);
    nodes.push({
      title: d.name,
      slug: childSlug,
      href: `/read/${childSlug.join("/")}`,
      children,
    });
  }

  for (const f of files) {
    const base = f.name.replace(/\.md$/i, "");
    const slug = [...slugPrefix, base];
    nodes.push({
      title: titleFromFilename(f.name),
      slug,
      href: `/read/${slug.join("/")}`,
    });
  }

  return nodes;
}

export function getCorpusTree(): CorpusNode[] {
  return walkDir(DOCS_ROOT);
}

function decodeSlug(slug: string[]): string[] {
  return slug.map((part) => {
    try {
      return decodeURIComponent(part);
    } catch {
      return part;
    }
  });
}

export function resolveDocPath(slug: string[]): string | null {
  if (!slug.length) return null;
  const parts = decodeSlug(slug);
  const candidate = path.join(/*turbopackIgnore: true*/ DOCS_ROOT, ...parts) + ".md";
  const normalized = path.normalize(candidate);
  if (!normalized.startsWith(DOCS_ROOT)) return null;
  if (
    fs.existsSync(/*turbopackIgnore: true*/ normalized) &&
    fs.statSync(/*turbopackIgnore: true*/ normalized).isFile()
  ) {
    return normalized;
  }
  return null;
}

export function readDoc(slug: string[]): { title: string; content: string } | null {
  const filePath = resolveDocPath(slug);
  if (!filePath) return null;
  const content = fs.readFileSync(/*turbopackIgnore: true*/ filePath, "utf8");
  const title = titleFromFilename(path.basename(filePath));
  return { title, content };
}

export function listAllSlugs(): string[][] {
  const slugs: string[][] = [];
  function walk(nodes: CorpusNode[]) {
    for (const n of nodes) {
      if (!n.children) slugs.push(n.slug);
      else walk(n.children);
    }
  }
  walk(getCorpusTree());
  return slugs;
}

export function flattenNav(nodes: CorpusNode[]): CorpusNode[] {
  const out: CorpusNode[] = [];
  for (const n of nodes) {
    if (n.children?.length) out.push(...flattenNav(n.children));
    else out.push(n);
  }
  return out;
}
