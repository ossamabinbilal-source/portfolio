import Link from "next/link";

const primaryLinks = [
  { label: "talently.ai", href: "https://talently.ai", external: true },
  { label: "olx.com.pk", href: "https://www.olx.com.pk", external: true },
  { label: "zameen.com", href: "https://www.zameen.com", external: true },
  { label: "github", href: "https://github.com/Ossama1903", external: true },
  { label: "linkedin", href: "https://www.linkedin.com/in/ossama19/", external: true },
  { label: "blog", href: "/blog", external: false },
];

const socialLinks = [
  { label: "gh", href: "https://github.com/Ossama1903", external: true },
  { label: "li", href: "https://www.linkedin.com/in/ossama19/", external: true },
  { label: "email", href: "mailto:sheikhusamabilal@gmail.com", external: true },
];

export default function Home() {
  return (
    <main className="flex flex-col items-start justify-center min-h-screen max-w-xs mx-auto px-6 gap-8 font-mono">
      <div>
        <h1 className="text-xl font-normal text-[#ccc]">ossama</h1>
        <p className="text-base text-[#555]">builds things with ai</p>
      </div>

      <nav className="flex flex-col gap-4">
        {primaryLinks.map(({ label, href, external }) =>
          external ? (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-base text-[#aaa] hover:text-white transition-colors"
            >
              {label}
            </a>
          ) : (
            <Link
              key={label}
              href={href}
              className="text-base text-[#aaa] hover:text-white transition-colors"
            >
              {label}
            </Link>
          )
        )}
      </nav>

      <nav className="flex flex-row gap-4">
        {socialLinks.map(({ label, href }) => (
          <a
            key={label}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="text-base text-[#555] hover:text-[#ededed] transition-colors"
          >
            {label}
          </a>
        ))}
      </nav>
    </main>
  );
}
