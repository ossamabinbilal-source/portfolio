import Link from "next/link";

const posts = [
  {
    label: "what is a neural network?",
    href: "/blog/what-is-a-neural-network",
    description: "the thing everyone says they understand but nobody really explains",
    date: "nov 2022",
  },
];

export default function Blog() {
  return (
    <main className="flex flex-col justify-center min-h-screen w-full max-w-sm mx-auto px-6 gap-8 font-mono">
      <div>
        <Link href="/" className="text-xs text-[#555] hover:text-[#aaa] transition-colors">
          ← back
        </Link>
      </div>

      <div className="flex flex-col gap-1">
        <h1 className="text-xl font-normal text-white">yap corner</h1>
        <p className="text-xs text-[#444] mt-1">blogs nobody asked for.</p>
      </div>

      <nav className="flex flex-col gap-6">
        {posts.map(({ label, href, description, date }) => (
          <Link key={label} href={href} className="flex flex-col gap-1 group">
  <span className="text-base text-[#aaa] group-hover:text-white transition-colors">
              {label}
            </span>
            <span className="text-xs text-[#555]">{description}</span>
            <span className="text-xs text-[#333] mt-0.5">{date}</span>
          </Link>
        ))}
      </nav>
    </main>
  );
}
