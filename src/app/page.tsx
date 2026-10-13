import Link from "next/link";
import { SiteHeader } from "@/components/SiteHeader";

export default function HomePage() {
  return (
    <div className="atmosphere mountain-veil relative min-h-screen overflow-hidden">
      <div
        aria-hidden
        className="animate-mist pointer-events-none absolute inset-x-0 top-0 h-[50vh] bg-[radial-gradient(ellipse_at_center,rgba(238,243,236,0.08),transparent_65%)]"
      />
      <SiteHeader />
      <main className="relative z-10 mx-auto flex min-h-[calc(100vh-5rem)] max-w-5xl flex-col justify-center px-6 pb-16 pt-6 md:px-10">
        <p className="animate-rise font-display text-5xl tracking-[0.2em] text-foam md:text-6xl lg:text-7xl">
          应龙
        </p>
        <h1 className="animate-rise-delay mt-5 max-w-xl text-lg leading-relaxed text-ink md:text-xl">
          山鬼与楚辞研究语料库
        </h1>
        <p className="animate-rise-delay mt-3 max-w-lg text-sm leading-7 text-ink/75 md:text-[0.95rem]">
          先秦、荆楚、屈原、《离骚》《九歌》均含背景、翻译、解析与鉴赏；《山鬼》专卷最深。
        </p>
        <div className="animate-rise-delay mt-8 flex flex-wrap gap-4">
          <Link
            href="/read/总览-细读地图"
            className="rounded-sm bg-jade/90 px-5 py-2.5 text-sm tracking-wide text-pine-ink transition hover:bg-foam"
          >
            打开细读地图
          </Link>
          <Link
            href="/read/楚辞/山鬼/00-细读指南"
            className="rounded-sm border border-mist/60 px-5 py-2.5 text-sm tracking-wide text-foam/90 transition hover:border-jade hover:text-foam"
          >
            先读《山鬼》
          </Link>
        </div>
        <ul className="animate-rise-delay mt-12 grid gap-3 text-sm text-ink/65 sm:grid-cols-3">
          <li className="border-t border-mist/30 pt-3">先秦 · 楚年表与史料</li>
          <li className="border-t border-mist/30 pt-3">荆楚 · 山川巫祭名物</li>
          <li className="border-t border-mist/30 pt-3">楚辞 · 九歌与山鬼专卷</li>
        </ul>
      </main>
    </div>
  );
}
