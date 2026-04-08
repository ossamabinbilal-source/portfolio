import Link from "next/link";

export default function WebhookIntegration() {
  return (
    <main className="flex flex-col justify-center min-h-screen w-full max-w-sm mx-auto px-6 py-16 gap-8 font-mono">
      <div>
        <Link href="/talently" className="text-xs text-[#555] hover:text-[#aaa] transition-colors">
          ← back
        </Link>
      </div>

      <div className="flex flex-col gap-1">
        <h1 className="text-xl font-normal text-white">webhook integration system</h1>
        <p className="text-sm text-[#555]">talently.ai</p>
      </div>

      <div className="flex flex-col gap-6">
        <div className="flex flex-col gap-2">
          <p className="text-xs text-[#555] uppercase tracking-widest">the problem</p>
          <p className="text-sm text-[#aaa] leading-relaxed">
            Clients had no way to receive notifications when an interview completed — they had to poll or check the dashboard manually. There was no integration story for customers who wanted to plug Talently into their own systems.
          </p>
        </div>

        <div className="flex flex-col gap-2">
          <p className="text-xs text-[#555] uppercase tracking-widest">the work</p>
          <p className="text-sm text-[#aaa] leading-relaxed">
            Built the entire feature end-to-end from scratch. On the backend: a webhook endpoint with DTOs, Pydantic validation, signature verification, structured logging, and a weighted score included in the payload. On the frontend: a full integration config screen with tabs, an auto-validating form, and skeleton loaders.
          </p>
          <p className="text-sm text-[#aaa] leading-relaxed">
            Also built an inline &quot;Send Test Webhook&quot; panel that lets customers fire a test payload and see the result live — without leaving the page. A small detail that cuts down a lot of back-and-forth during integration.
          </p>
        </div>

        <div className="flex flex-col gap-2">
          <p className="text-xs text-[#555] uppercase tracking-widest">impact</p>
          <p className="text-sm text-[#aaa] leading-relaxed">
            Directly unblocked a new client onboarding — their main concern was not being able to attach Talently to their existing system. The webhook feature resolved that and converted them. Clients now have a reliable, self-serve way to connect Talently to their own workflows the moment an interview finishes.
          </p>
        </div>
      </div>
    </main>
  );
}
