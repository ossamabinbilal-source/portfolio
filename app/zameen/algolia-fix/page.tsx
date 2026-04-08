import Link from "next/link";

export default function AlgoliaFix() {
  return (
    <main className="flex flex-col justify-center min-h-screen w-full max-w-sm mx-auto px-6 py-16 gap-8 font-mono">
      <div>
        <Link href="/zameen" className="text-xs text-[#555] hover:text-[#aaa] transition-colors">
          ← back
        </Link>
      </div>

      <div className="flex flex-col gap-1">
        <h1 className="text-xl font-normal text-white">the algolia fix</h1>
        <p className="text-sm text-[#555]">zameen.com</p>
      </div>

      <div className="flex flex-col gap-6">
        <div className="flex flex-col gap-2">
          <p className="text-xs text-[#555] uppercase tracking-widest">the problem</p>
          <p className="text-sm text-[#aaa] leading-relaxed">
            Searches with no active listings were silently falling back to thousands of inactive listings across 2–3 Algolia indexes — serving users stale, irrelevant results.
          </p>
        </div>

        <div className="flex flex-col gap-2">
          <p className="text-xs text-[#555] uppercase tracking-widest">the fix</p>
          <p className="text-sm text-[#aaa] leading-relaxed">
            Built a location tree traversal algorithm over a JSON location hierarchy. When no active listings exist for a search, it walks up the tree to find the nearest relevant properties matching the applied filters and listing removal order.
          </p>
        </div>

        <div className="flex flex-col gap-2">
          <p className="text-xs text-[#555] uppercase tracking-widest">impact</p>
          <p className="text-sm text-[#aaa] leading-relaxed">
            Eliminated thousands of dollars in recurring monthly Algolia costs and restored result quality for users hitting zero-listing searches.
          </p>
        </div>
      </div>
    </main>
  );
}
