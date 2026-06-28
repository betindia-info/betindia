import Link from "next/link";
import { Activity, Zap, BarChart3, ShieldCheck } from "lucide-react";
import { CTA_LINKS } from "@/lib/cta-links";
import { volleyballContent } from "@/data/volleyball";

const ACCENT = "#6366f1";

const TRUST = [
  { icon: Activity, text: "Live Volleyball Odds" },
  { icon: Zap, text: "In-Play Betting" },
  { icon: BarChart3, text: "Set-by-Set Markets" },
  { icon: ShieldCheck, text: "Fast Withdrawals" },
] as const;

export default function VolleyballHero({
  content,
}: {
  content?: Partial<typeof volleyballContent.hero> | null;
}) {
  const data = { ...volleyballContent.hero, ...(content ?? {}) };

  return (
    <section className="relative overflow-hidden bg-[#050B18]">
      <div aria-hidden className="pointer-events-none absolute -left-40 -top-40 h-[520px] w-[520px] rounded-full bg-[#FF6B00]/10 blur-3xl" />
      <div aria-hidden className="pointer-events-none absolute -bottom-40 -right-20 h-[460px] w-[460px] rounded-full bg-[#6366f1]/10 blur-3xl" />

      <div className="relative z-10 mx-auto grid max-w-7xl grid-cols-1 items-center gap-10 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:gap-14 lg:px-8 lg:py-24">
        <div className="order-2 flex flex-col items-center text-center lg:order-1 lg:items-start lg:text-left">
          <h1 className="mt-6 text-3xl font-extrabold leading-[1.06] tracking-tight text-white sm:text-4xl md:text-5xl lg:text-[clamp(2.5rem,5vw,4rem)]">
            {data.title}
          </h1>

          <p className="mt-4 text-sm font-semibold leading-relaxed text-slate-400 sm:text-base">{data.tagline}</p>
          <p className="mt-4 max-w-md text-base leading-relaxed text-slate-300">{data.description}</p>

          <div className="mt-8 flex w-full flex-col gap-3 sm:w-auto sm:flex-row sm:items-center">
            <Link
              href={CTA_LINKS.signup}
              className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-[#FF6B00] px-7 py-4 text-base font-bold text-white shadow-lg shadow-[#FF6B00]/25 transition-all duration-300 hover:scale-[1.02] hover:bg-[#FF8A00] sm:w-auto"
            >
              {data.primaryCta}
              <span aria-hidden>&rarr;</span>
            </Link>
            <a
              href="#volleyball-matches"
              className="inline-flex w-full items-center justify-center rounded-xl border border-white/10 bg-white/5 px-7 py-4 text-base font-bold text-white backdrop-blur-md transition-all duration-300 hover:scale-[1.02] hover:border-[#FF6B00] hover:bg-white/10 sm:w-auto"
            >
              {data.secondaryCta}
            </a>
          </div>

          <ul className="mt-9 grid w-full grid-cols-2 gap-3">
            {TRUST.map(({ icon: Icon, text }) => (
              <li
                key={text}
                className="flex items-center gap-3 rounded-xl border border-white/[0.07] bg-white/[0.04] px-4 py-3 backdrop-blur-md"
              >
                <span className="grid h-8 w-8 shrink-0 place-items-center rounded-lg border border-[#FF6B00]/30 bg-[#FF6B00]/10 text-[#FF6B00]">
                  <Icon size={14} strokeWidth={2} />
                </span>
                <span className="text-xs font-semibold leading-snug text-slate-300">{text}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="order-1 lg:order-2">
          <div className="relative mx-auto max-w-sm lg:max-w-none">
            <div className="pointer-events-none absolute inset-0 rounded-3xl blur-3xl" style={{ background: `${ACCENT}1A` }} />
            <div
              className="relative rounded-3xl p-px"
              style={{ background: "linear-gradient(135deg, #FF6B00 0%, #6366f1 40%, #138808 80%, #FF6B00 100%)" }}
            >
              <div className="relative overflow-hidden rounded-[calc(1.5rem-1px)] bg-[#081425] p-6 sm:p-7">
                <div className="relative mb-5 flex items-center justify-between">
                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-slate-500">VNL · Final</p>
                    <p className="mt-0.5 text-[11px] font-bold text-slate-400">Set 4 · 22-20</p>
                  </div>
                  <div className="flex items-center gap-1.5 rounded-full border border-[#FF6B00]/40 bg-[#FF6B00]/12 px-2.5 py-1">
                    <span className="relative flex h-1.5 w-1.5">
                      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#FF6B00] opacity-75" />
                      <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-[#FF6B00]" />
                    </span>
                    <span className="text-[9px] font-black uppercase tracking-wide text-[#FF6B00]">Live</span>
                  </div>
                </div>

                <div className="relative mb-4 rounded-2xl border border-white/[0.07] bg-white/[0.03] p-4">
                  <div className="flex items-center justify-between gap-3">
                    <div className="flex flex-1 flex-col items-center gap-1">
                      <span className="text-2xl">🏐</span>
                      <p className="text-xs font-bold text-white">India</p>
                      <p className="text-lg font-black text-[#FF6B00]">2</p>
                    </div>
                    <div className="rounded-xl border border-white/[0.07] bg-white/[0.04] px-4 py-2 text-center">
                      <p className="text-sm font-black text-white">22 — 20</p>
                      <p className="text-[9px] text-slate-500">Current Set</p>
                    </div>
                    <div className="flex flex-1 flex-col items-center gap-1">
                      <span className="text-2xl">🏐</span>
                      <p className="text-xs font-bold text-white">Brazil</p>
                      <p className="text-lg font-black text-white">1</p>
                    </div>
                  </div>
                </div>

                <div className="relative mb-4 grid grid-cols-2 gap-2">
                  {[
                    { label: "India Win", odds: "1.95" },
                    { label: "Brazil Win", odds: "1.88" },
                  ].map(({ label, odds }) => (
                    <button
                      key={label}
                      className="flex flex-col items-center gap-0.5 rounded-xl border border-white/[0.08] bg-white/[0.04] p-3 transition-all hover:border-[#FF6B00]/40 hover:bg-[#FF6B00]/10"
                    >
                      <span className="text-[9px] font-semibold text-slate-400">{label}</span>
                      <span className="text-lg font-black text-white">{odds}</span>
                    </button>
                  ))}
                </div>

                <div className="relative rounded-xl border border-white/[0.06] bg-white/[0.03] p-3">
                  <p className="mb-2 text-[9px] font-bold uppercase tracking-[0.14em] text-slate-500">Live Events</p>
                  {["Ace — India", "Block — Brazil", "Set Point"].map((event) => (
                    <p key={event} className="text-[10px] text-slate-400">
                      • {event}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
