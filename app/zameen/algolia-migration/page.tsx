import Link from "next/link";

export default function AlgoliaMigration() {
  return (
    <main className="flex flex-col justify-center min-h-screen w-full max-w-sm mx-auto px-6 py-16 gap-8 font-mono">
      <div>
        <Link href="/zameen" className="text-xs text-[#555] hover:text-[#aaa] transition-colors">
          ← back
        </Link>
      </div>

      <div className="flex flex-col gap-1">
        <h1 className="text-xl font-normal text-white">elasticsearch to algolia</h1>
        <p className="text-sm text-[#555]">zameen.com</p>
      </div>

      <div className="flex flex-col gap-6">
        <div className="flex flex-col gap-2">
          <p className="text-xs text-[#555] uppercase tracking-widest">the problem</p>
          <p className="text-sm text-[#aaa] leading-relaxed">
            Zameen&apos;s search infrastructure was in a split state — some indexes had already moved to Algolia, while others were still running on Elasticsearch. The inconsistency created maintenance overhead and left parts of the platform on a slower, more operationally complex search backend.
          </p>
        </div>

        <div className="flex flex-col gap-2">
          <p className="text-xs text-[#555] uppercase tracking-widest">the work</p>
          <p className="text-sm text-[#aaa] leading-relaxed">
            Worked on migrating the remaining Elasticsearch indexes to Algolia. This involved tuning relevance configuration — searchable attributes, ranking, and facets — to match existing ES behavior, rewriting queries in the codebase from ES syntax to Algolia&apos;s API, and setting up ongoing data sync to keep records in Algolia up to date.
          </p>
        </div>

        <div className="flex flex-col gap-2">
          <p className="text-xs text-[#555] uppercase tracking-widest">impact</p>
          <p className="text-sm text-[#aaa] leading-relaxed">
            Noticeably improved query response times and brought the platform onto a single, consistent search backend — simplifying the stack and improving the developer experience going forward.
          </p>
        </div>
      </div>
    </main>
  );
}
