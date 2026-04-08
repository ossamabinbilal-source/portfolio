"use client";

import Link from "next/link";
import { useState } from "react";

type PrimaryLink = {
  label: string;
  sub?: string;
  href: string;
  external: boolean;
};

const primaryLinks: PrimaryLink[] = [
  { label: "talently.ai", href: "/talently", external: false },
  { label: "olx.com.pk", href: "/olx", external: false },
  { label: "zameen.com", href: "/zameen", external: false },
  { label: "yap corner", sub: "(blogs nobody asked for)", href: "/blog", external: false },
];

const socialLinks = [
  {
    label: "github",
    href: "https://github.com/Ossama1903",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/>
      </svg>
    ),
  },
  {
    label: "linkedin",
    href: "https://www.linkedin.com/in/ossama19/",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
      </svg>
    ),
  },
  {
    label: "email",
    href: "mailto:sheikhusamabilal@gmail.com",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
      </svg>
    ),
  },
];

export default function Home() {
  const [copied, setCopied] = useState(false);

  function copyEmail() {
    navigator.clipboard.writeText("sheikhusamabilal@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }

  return (
    <main className="flex flex-col items-start justify-center min-h-screen w-full max-w-sm mx-auto px-6 gap-8 font-mono">
      <div>
        <h1 className="text-xl font-normal text-white">ossama <span className="text-xs text-[#444]">(he/him/please hire me)</span></h1>
        <p className="text-base text-[#555]">builds things with ai</p>
      </div>

      <nav className="flex flex-col gap-4">
        {primaryLinks.map(({ label, sub, href, external }) => {
          const content = (
            <>
              {label}
              {sub && <span className="text-xs text-[#444] ml-1.5">{sub}</span>}
            </>
          );
          return external ? (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-base text-[#aaa] hover:text-white transition-colors"
            >
              {content}
            </a>
          ) : (
            <Link
              key={label}
              href={href}
              className="text-base text-[#aaa] hover:text-white transition-colors"
            >
              {content}
            </Link>
          );
        })}
      </nav>

      <nav className="flex flex-row items-center gap-4">
        {socialLinks.map(({ label, href, icon }) =>
          label === "email" ? (
            <button
              key={label}
              onClick={copyEmail}
              aria-label={copied ? "copied!" : "copy email"}
              className="relative text-[#555] hover:text-[#ededed] transition-colors cursor-pointer"
            >
              {icon}
              {copied && (
                <span className="absolute -top-6 left-1/2 -translate-x-1/2 text-xs text-[#aaa] whitespace-nowrap">
                  copied!
                </span>
              )}
            </button>
          ) : (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="text-[#555] hover:text-[#ededed] transition-colors"
            >
              {icon}
            </a>
          )
        )}
      </nav>
    </main>
  );
}
