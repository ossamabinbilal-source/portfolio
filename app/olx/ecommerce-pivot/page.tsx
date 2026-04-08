import Link from "next/link";

export default function EcommercePivot() {
  return (
    <main className="flex flex-col justify-center min-h-screen w-full max-w-sm mx-auto px-6 py-16 gap-8 font-mono">
      <div>
        <Link href="/olx" className="text-xs text-[#555] hover:text-[#aaa] transition-colors">
          ← back
        </Link>
      </div>

      <div className="flex flex-col gap-1">
        <h1 className="text-xl font-normal text-white">the ecommerce pivot</h1>
        <p className="text-sm text-[#555]">olx.com.pk</p>
      </div>

      <div className="flex flex-col gap-6">
        <div className="flex flex-col gap-2">
          <p className="text-xs text-[#555] uppercase tracking-widest">the problem</p>
          <p className="text-sm text-[#aaa] leading-relaxed">
            OLX Pakistan operated purely as a peer-to-peer marketplace — no way to onboard verified vendors or support structured ecommerce at scale.
          </p>
        </div>

        <div className="flex flex-col gap-2">
          <p className="text-xs text-[#555] uppercase tracking-widest">the work</p>
          <p className="text-sm text-[#aaa] leading-relaxed">
            Contributed to building a new ecommerce layer that allowed the OLX team to onboard their own vendors directly onto the platform, enabling a structured selling experience alongside the existing classifieds model.
          </p>
        </div>

        <div className="flex flex-col gap-2">
          <p className="text-xs text-[#555] uppercase tracking-widest">impact</p>
          <p className="text-sm text-[#aaa] leading-relaxed">
            Expanded OLX Pakistan&apos;s business model beyond peer-to-peer, opening a new revenue channel and laying the foundation for a hybrid marketplace.
          </p>
        </div>
      </div>
    </main>
  );
}
