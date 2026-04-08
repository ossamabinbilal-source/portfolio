import Link from "next/link";

export default function AssemblyAIMigration() {
  return (
    <main className="flex flex-col justify-center min-h-screen w-full max-w-sm mx-auto px-6 py-16 gap-8 font-mono">
      <div>
        <Link href="/talently" className="text-xs text-[#555] hover:text-[#aaa] transition-colors">
          ← back
        </Link>
      </div>

      <div className="flex flex-col gap-1">
        <h1 className="text-xl font-normal text-white">the assemblyai migration</h1>
        <p className="text-sm text-[#555]">talently.ai</p>
      </div>

      <div className="flex flex-col gap-6">
        <div className="flex flex-col gap-2">
          <p className="text-xs text-[#555] uppercase tracking-widest">the problem</p>
          <p className="text-sm text-[#aaa] leading-relaxed">
            On March 4, 2026, AssemblyAI hard-shut down their v2 WebSocket endpoint — returning 410 Gone with no grace period. Every English voice interview on the platform broke instantly. No transcription, no interviews.
          </p>
        </div>

        <div className="flex flex-col gap-2">
          <p className="text-xs text-[#555] uppercase tracking-widest">the work</p>
          <p className="text-sm text-[#aaa] leading-relaxed">
            Turned around a full migration to AssemblyAI&apos;s Universal Streaming v3 in one day. The v3 protocol was a significant departure from v2 — binary frames instead of base64-encoded JSON, entirely new message types (Begin/Turn/Termination), and a different termination signal. Rewrote the WebSocket handler end-to-end to match.
          </p>
          <p className="text-sm text-[#aaa] leading-relaxed">
            Pause detection also had to be rebuilt from scratch. The v2 silence mechanism relied on consecutive empty partial transcripts — a pattern v3 simply doesn&apos;t produce. In v3, end_of_turn=True on a Turn message is the signal. Rewired the detection logic accordingly, gated on message type so Deepgram and other providers stayed unaffected.
          </p>
          <p className="text-sm text-[#aaa] leading-relaxed">
            Also fixed an infinite reconnect loop that had been silently swallowing errors on disconnect. Followed up with several more commits tuning turn detection, debouncing end_of_turn signals to prevent the bot from cutting users off, adjusting silence thresholds for non-native speakers, and enabling real-time partial transcript streaming to the frontend.
          </p>
        </div>

        <div className="flex flex-col gap-2">
          <p className="text-xs text-[#555] uppercase tracking-widest">impact</p>
          <p className="text-sm text-[#aaa] leading-relaxed">
            Voice interviews were fully restored within a day of the outage. This was a production incident — without the migration, the core product was broken for every English-language candidate on the platform.
          </p>
        </div>
      </div>
    </main>
  );
}
