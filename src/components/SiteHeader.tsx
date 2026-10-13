import Link from "next/link";

export function SiteHeader({ compact = false }: { compact?: boolean }) {
  return (
    <header
      className={`relative z-20 flex items-center justify-between gap-4 ${
        compact ? "border-b border-mist/20 px-4 py-3 md:px-6" : "px-6 py-5 md:px-10"
      }`}
    >
      <Link href="/" className="group flex items-baseline gap-3">
        <span className="font-display text-2xl tracking-[0.12em] text-foam md:text-3xl">
          应龙
        </span>
        <span className="hidden text-xs tracking-[0.28em] text-jade/70 sm:inline">
          YINGLONG
        </span>
      </Link>
      <nav className="flex items-center gap-5 text-sm text-ink/70">
        <Link href="/read/楚辞/山鬼/全文与解题" className="transition hover:text-foam">
          山鬼
        </Link>
        <Link href="/read/楚辞/概述" className="transition hover:text-foam">
          楚辞
        </Link>
        <Link
          href="/read/先秦/概述"
          className="rounded-sm border border-jade/40 px-3 py-1.5 text-jade transition hover:border-jade hover:bg-moss/50 hover:text-foam"
        >
          进入语料
        </Link>
      </nav>
    </header>
  );
}
