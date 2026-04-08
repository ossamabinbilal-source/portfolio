import Link from "next/link";

export default function UIRevamp() {
  return (
    <main className="flex flex-col justify-center min-h-screen w-full max-w-sm mx-auto px-6 py-16 gap-8 font-mono">
      <div>
        <Link href="/olx" className="text-xs text-[#555] hover:text-[#aaa] transition-colors">
          ← back
        </Link>
      </div>

      <div className="flex flex-col gap-1">
        <h1 className="text-xl font-normal text-white">the ui revamp</h1>
        <p className="text-sm text-[#555]">olx.com.pk</p>
      </div>

      <div className="flex flex-col gap-6">
        <div className="flex flex-col gap-2">
          <p className="text-xs text-[#555] uppercase tracking-widest">the problem</p>
          <p className="text-sm text-[#aaa] leading-relaxed">
            OLX Pakistan&apos;s UI had grown stale — the visual experience wasn&apos;t keeping up with the scale of the platform or the expectations of its users.
          </p>
        </div>

        <div className="flex flex-col gap-2">
          <p className="text-xs text-[#555] uppercase tracking-widest">the work</p>
          <p className="text-sm text-[#aaa] leading-relaxed">
            Served as one of the lead developers on a full-site visual redesign. The platform runs on a custom-built React solution — not a standard CRA or Next.js setup — with its own compiler pipeline. Worked across the entire site to deliver a cohesive new look and feel while keeping the underlying architecture intact.
          </p>
        </div>

        <div className="flex flex-col gap-2">
          <p className="text-xs text-[#555] uppercase tracking-widest">impact</p>
          <p className="text-sm text-[#aaa] leading-relaxed">
            Session duration measurably improved post-launch. The revamp also left the codebase in a cleaner state, noticeably speeding up dev iteration on subsequent work.
          </p>
        </div>
      </div>
    </main>
  );
}
