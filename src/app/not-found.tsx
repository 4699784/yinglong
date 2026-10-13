import Link from "next/link";
import { SiteHeader } from "@/components/SiteHeader";

export default function NotFound() {
  return (
    <div className="atmosphere min-h-screen">
      <SiteHeader compact />
      <main className="mx-auto max-w-lg px-6 py-24 text-center">
        <h1 className="font-display text-3xl tracking-[0.12em] text-foam">未找到篇章</h1>
        <p className="mt-3 text-ink/70">该路径不在语料库中。</p>
        <Link href="/read" className="mt-8 inline-block text-jade hover:text-foam">
          返回目录
        </Link>
      </main>
    </div>
  );
}
