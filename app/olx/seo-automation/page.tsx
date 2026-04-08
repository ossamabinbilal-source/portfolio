import Link from "next/link";

export default function SEOAutomation() {
  return (
    <main className="flex flex-col justify-center min-h-screen w-full max-w-sm mx-auto px-6 py-16 gap-8 font-mono">
      <div>
        <Link href="/olx" className="text-xs text-[#555] hover:text-[#aaa] transition-colors">
          ← back
        </Link>
      </div>

      <div className="flex flex-col gap-1">
        <h1 className="text-xl font-normal text-white">automating seo at scale</h1>
        <p className="text-sm text-[#555]">olx.com.pk</p>
      </div>

      <div className="flex flex-col gap-6">
        <div className="flex flex-col gap-2">
          <p className="text-xs text-[#555] uppercase tracking-widest">the problem</p>
          <p className="text-sm text-[#aaa] leading-relaxed">
            OLX Pakistan&apos;s product pages were ranking poorly against competitors like Daraz, PakWheels, and PriceOye. The SEO team was manually writing meta tags, titles, and descriptions — a process that worked in the early days but couldn&apos;t keep up as the platform grew to thousands of listings.
          </p>
        </div>

        <div className="flex flex-col gap-2">
          <p className="text-xs text-[#555] uppercase tracking-widest">the work</p>
          <p className="text-sm text-[#aaa] leading-relaxed">
            Contributed to solution design and led the implementation of an AI-driven SEO automation pipeline. We tackled it category by category — starting with high-traffic categories like mobiles. Product listing data was pulled from the database and fed into an LLM to automatically generate meta tags, titles, descriptions, and structured data. Canonical tags were handled separately — since they're set at a template level rather than per-listing, they didn't fit the AI generation pipeline and were managed as a manual technical SEO fix. A small team handled oversight rather than manual authoring.
          </p>
        </div>

        <div className="flex flex-col gap-2">
          <p className="text-xs text-[#555] uppercase tracking-widest">impact</p>
          <p className="text-sm text-[#aaa] leading-relaxed">
            Within 10 weeks of rollout, organic traffic increased by 7% during peak periods and 4% off-peak. Average session duration also improved, indicating better content relevance. Freed the SEO team from manual authoring across thousands of pages.
          </p>
        </div>
      </div>
    </main>
  );
}
