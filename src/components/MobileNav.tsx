"use client";

import { useState } from "react";
import { CorpusNav } from "@/components/CorpusNav";
import type { CorpusNode } from "@/lib/corpus";

export function MobileNav({
  tree,
  activeSlug,
}: {
  tree: CorpusNode[];
  activeSlug: string[];
}) {
  const [open, setOpen] = useState(false);

  return (
    <div className="lg:hidden">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="mb-4 rounded-sm border border-mist/50 px-3 py-1.5 text-sm text-ink"
        aria-expanded={open}
      >
        {open ? "收起目录" : "打开目录"}
      </button>
      {open ? (
        <div className="mb-6 max-h-[50vh] overflow-y-auto rounded-sm border border-mist/30 bg-moss/40 p-4">
          <CorpusNav tree={tree} activeSlug={activeSlug} />
        </div>
      ) : null}
    </div>
  );
}
