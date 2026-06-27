import Link from "next/link";
import { Activity, Zap, BarChart3, ShieldCheck } from "lucide-react";
import { CTA_LINKS } from "@/lib/cta-links";
import { footballContent } from "@/data/football";

const TRUST = [
  { icon: Activity,    text: "Live Football Odds"    },
  { icon: Zap,         text: "In-Play Betting"       },
  { icon: BarChart3,   text: "Real-Time Match Stats" },
  { icon: ShieldCheck, text: "Fast Withdrawals"      },
] as const;

export default function FootballHero({ content }: { content?: Partial<typeof footballContent.hero> | null }) {
  const data = { ...footballContent.hero, ...(content ?? {}) };

  return (
    <section className="relative overflow-hidden bg-[#050B18]">
      <div aria-hidden className="pointer-events-none absolute -left-40 -top-40 h-[520px] w-[520px] rounded-full bg-[#138808]/12 blur-3xl" />
      <div aria-hidden className="pointer-events-none absolute -bottom-40 -right-20 h-[460px] w-[460px] rounded-full bg-[#FF6B00]/10 blur-3xl" />

      <div className="relative z-10 mx-auto grid max-w-7xl grid-cols-1 items-center gap-10 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:gap-14 lg:px-8 lg:py-24">

        {/* LEFT */}
        <div className="order-2 flex flex-col items-center text-center lg:order-1 lg:items-start lg:text-left">
          <span className="inline-flex items-center gap-2 rounded-full border border-[#138808]/30 bg-[#138808]/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-[#138808]">
            <span className="relative flex h-1.5 w-1.5 shrink-0">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#138808] opacity-75" />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-[#138808]" />
            </span>
            {data.eyebrow}
          </span>

          <h1 className="mt-6 text-3xl font-extrabold leading-[1.06] tracking-tight text-white sm:text-4xl md:text-5xl lg:text-[clamp(2.5rem,5vw,4rem)]">
            {data.title.includes("Biggest Football") ? (
              <>
                {data.title.split("Biggest Football")[0]}
                <span className="bg-gradient-to-r from-[#138808] via-[#22c55e] to-[#138808] bg-clip-text text-transparent">
                  Biggest Football
                </span>
                {data.title.split("Biggest Football")[1]}
              </>
            ) : (
              data.title
            )}
          </h1>

          <p className="mt-5 max-w-md text-base leading-relaxed text-slate-300">
            {data.description}
          </p>

          <div className="mt-8 flex w-full flex-col gap-3 sm:w-auto sm:flex-row sm:items-center">
            <a
              href="#football-leagues"
              className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-[#138808] px-7 py-4 text-base font-bold text-white shadow-lg shadow-[#138808]/25 transition-all duration-300 hover:scale-[1.02] hover:bg-[#16a30a] hover:shadow-[#138808]/40 sm:w-auto"
            >
              Explore Matches
              <span aria-hidden>&rarr;</span>
            </a>
            <Link
              href={CTA_LINKS.signup}
              className="inline-flex w-full items-center justify-center rounded-xl border border-white/10 bg-white/5 px-7 py-4 text-base font-bold text-white backdrop-blur-md transition-all duration-300 hover:scale-[1.02] hover:border-[#138808] hover:bg-white/10 sm:w-auto"
            >
              Start Betting
            </Link>
          </div>

          <ul className="mt-9 grid w-full grid-cols-2 gap-3">
            {TRUST.map(({ icon: Icon, text }) => (
              <li
                key={text}
                className="flex items-center gap-3 rounded-xl border border-white/[0.07] bg-white/[0.04] px-4 py-3 backdrop-blur-md"
              >
                <span className="grid h-8 w-8 shrink-0 place-items-center rounded-lg border border-[#138808]/30 bg-[#138808]/10 text-[#138808]">
                  <Icon size={14} strokeWidth={2} />
                </span>
                <span className="text-xs font-semibold leading-snug text-slate-300">{text}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* RIGHT — Live Match Dashboard */}
        <div className="order-1 lg:order-2">
          <div className="relative mx-auto max-w-sm lg:max-w-none">
            <div className="pointer-events-none absolute inset-0 rounded-3xl bg-[#138808]/10 blur-3xl" />

            <div
              className="relative rounded-3xl p-px"
              style={{ background: "linear-gradient(135deg, #138808 0%, #22c55e 30%, #FF6B00 70%, #138808 100%)" }}
            >
              <div className="relative overflow-hidden rounded-[calc(1.5rem-1px)] bg-[#081425] p-6 sm:p-7">
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-white/[0.04] via-transparent to-transparent" />
                <div className="pointer-events-none absolute left-1/2 top-0 h-48 w-48 -translate-x-1/2 -translate-y-1/3 rounded-full bg-[#138808]/12 blur-2xl" />

                {/* Header */}
                <div className="relative mb-5 flex items-center justify-between">
                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-slate-500">Premier League · GW 28</p>
                    <p className="mt-0.5 text-[11px] font-bold text-slate-400">Etihad Stadium · 63&apos;</p>
                  </div>
                  <div className="flex items-center gap-1.5 rounded-full border border-[#138808]/40 bg-[#138808]/12 px-2.5 py-1">
                    <span className="relative flex h-1.5 w-1.5">
                      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#138808] opacity-75" />
                      <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-[#138808]" />
                    </span>
                    <span className="text-[9px] font-black uppercase tracking-wide text-[#138808]">Live</span>
                  </div>
                </div>

                {/* Scoreboard */}
                <div className="relative mb-4 rounded-2xl border border-white/[0.07] bg-white/[0.03] p-4">
                  <div className="flex items-center justify-between gap-2">
                    <div className="flex flex-1 flex-col items-center gap-1.5">
                      <div className="grid h-11 w-11 place-items-center rounded-full border border-white/10 bg-white/5 text-2xl">🔵</div>
                      <p className="text-xs font-bold text-white">Man City</p>
                      <p className="text-[9px] text-slate-500">Home</p>
                    </div>
                    <div className="flex flex-col items-center">
                      <div className="rounded-xl border border-white/[0.07] bg-white/[0.04] px-5 py-2 text-center">
                        <p className="text-2xl font-black text-white">2 — 1</p>
                        <p className="mt-0.5 text-[9px] font-semibold text-slate-500">63&apos;</p>
                      </div>
                    </div>
                    <div className="flex flex-1 flex-col items-center gap-1.5">
                      <div className="grid h-11 w-11 place-items-center rounded-full border border-white/10 bg-white/5 text-2xl">🔴</div>
                      <p className="text-xs font-bold text-white">Arsenal</p>
                      <p className="text-[9px] text-slate-500">Away</p>
                    </div>
                  </div>
                </div>

                {/* Match stats */}
                <div className="relative mb-4 rounded-xl border border-white/[0.06] bg-white/[0.03] p-3">
                  <p className="mb-2.5 text-[9px] font-bold uppercase tracking-[0.14em] text-slate-500">Match Stats</p>
                  {[
                    { label: "Possession", home: 58, away: 42 },
                    { label: "Shots",      home: 65, away: 35 },
                    { label: "Corners",    home: 70, away: 30 },
                  ].map(({ label, home, away }) => (
                    <div key={label} className="mb-2 last:mb-0">
                      <div className="mb-1 flex justify-between text-[9px] text-slate-500">
                        <span className="font-semibold text-[#138808]">{home}%</span>
                        <span>{label}</span>
                        <span className="font-semibold text-slate-400">{away}%</span>
                      </div>
                      <div className="flex h-1 overflow-hidden rounded-full bg-white/[0.06]">
                        <div className="rounded-full bg-[#138808]" style={{ width: `${home}%` }} />
                      </div>
                    </div>
                  ))}
                </div>

                {/* Odds */}
                <div className="relative mb-4 grid grid-cols-3 gap-2">
                  {[
                    { label: "1",  desc: "Man City", odds: "1.85", green: true  },
                    { label: "X",  desc: "Draw",     odds: "3.40", green: false },
                    { label: "2",  desc: "Arsenal",  odds: "4.10", green: false },
                  ].map(({ label, desc, odds, green }) => (
                    <button
                      key={label}
                      className={[
                        "flex flex-col items-center gap-0.5 rounded-xl border p-2.5 transition-all duration-200 hover:scale-[1.03]",
                        green
                          ? "border-[#138808]/40 bg-[#138808]/10"
                          : "border-white/[0.08] bg-white/[0.04] hover:border-[#138808]/30 hover:bg-[#138808]/8",
                      ].join(" ")}
                    >
                      <span className="text-[8px] font-bold text-slate-500">{label}</span>
                      <span className={`text-sm font-black ${green ? "text-[#138808]" : "text-white"}`}>{odds}</span>
                      <span className="max-w-full truncate text-[8px] text-slate-500">{desc}</span>
                    </button>
                  ))}
                </div>

                {/* Recent events ticker */}
                <div className="relative rounded-xl border border-white/[0.06] bg-white/[0.03] p-3">
                  <p className="mb-2 text-[9px] font-bold uppercase tracking-[0.14em] text-slate-500">Recent Events</p>
                  <div className="space-y-1.5">
                    {[
                      { min: "63'", event: "🟡 Yellow Card — Xhaka (Arsenal)" },
                      { min: "51'", event: "⚽ Goal — Haaland (Man City)" },
                      { min: "38'", event: "⚽ Goal — Saka (Arsenal)" },
                      { min: "12'", event: "⚽ Goal — De Bruyne (Man City)" },
                    ].map(({ min, event }) => (
                      <div key={min} className="flex items-center gap-2">
                        <span className="w-6 shrink-0 text-[8px] font-bold text-[#138808]">{min}</span>
                        <span className="text-[9px] text-slate-400">{event}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
