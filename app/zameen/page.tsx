import Link from "next/link";

const stories = [
  {
    label: "the algolia fix",
    href: "/zameen/algolia-fix",
    description: "saved thousands in monthly costs",
  },
  {
    label: "elasticsearch to algolia",
    href: "/zameen/algolia-migration",
    description: "migrating remaining indexes to a unified search backend",
  },
];

export default function Zameen() {
  return (
    <main className="flex flex-col justify-center min-h-screen w-full max-w-sm mx-auto px-6 gap-8 font-mono">
      <div>
        <Link href="/" className="text-xs text-[#555] hover:text-[#aaa] transition-colors">
          ← back
        </Link>
      </div>

      <div className="flex flex-col gap-1">
        <div className="flex flex-wrap items-baseline gap-x-3 gap-y-0.5">
          <a href="https://www.zameen.com" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 text-xl font-normal text-white hover:text-[#aaa] transition-colors underline underline-offset-4 decoration-[#555]">
            zameen.com
            <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 3h6v6M10 14L21 3M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/></svg>
          </a>
          <p className="text-sm text-[#555]">lead engineer</p>
        </div>
        <p className="text-xs text-[#444] mt-1">Pakistan&apos;s largest real estate marketplace.</p>
      </div>

      <nav className="flex flex-col gap-4">
        {stories.map(({ label, href, description }) => (
          <Link
            key={label}
            href={href}
            className="flex flex-col gap-0.5 group"
          >
            <span className="text-base text-[#aaa] group-hover:text-white transition-colors">{label}</span>
            <span className="text-xs text-[#555]">{description}</span>
          </Link>
        ))}
      </nav>
    </main>
  );
}
