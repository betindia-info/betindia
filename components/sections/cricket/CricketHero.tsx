import Link from "next/link";
import { Activity, ShieldCheck, Zap, BarChart3 } from "lucide-react";
import { CTA_LINKS } from "@/lib/cta-links";
import { cricketContent } from "@/data/cricket";


const MARKETS = [
  "Match Winner",
  "Top Batsman",
  "Top Bowler",
  "Over/Under",
  "Toss Winner",
  "Session Betting",
] as const;

export default function CricketHero({ content }: { content?: Partial<typeof cricketContent.hero> | null }) {
  const data = { ...cricketContent.hero, ...(content ?? {}) };

  return (
    <section className="relative overflow-hidden bg-[#050B18]">
      <div aria-hidden className="pointer-events-none absolute -left-40 -top-40 h-[520px] w-[520px] rounded-full bg-[#FF6B00]/12 blur-3xl" />
      <div aria-hidden className="pointer-events-none absolute -bottom-40 -right-20 h-[460px] w-[460px] rounded-full bg-[#138808]/10 blur-3xl" />

      <div className="relative z-10 mx-auto grid max-w-7xl grid-cols-1 items-center gap-10 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:gap-14 lg:px-8 lg:py-24">

        {/* LEFT */}
        <div className="order-2 flex flex-col items-center text-center lg:order-1 lg:items-start lg:text-left">

          <h1 className="mt-6 text-3xl font-extrabold leading-[1.06] tracking-tight text-white sm:text-4xl md:text-5xl lg:text-[clamp(2.5rem,5vw,4rem)]">
            {data.title}
          </h1>

          <p className="mt-5 max-w-md text-base leading-relaxed text-slate-300">
            {data.description}
          </p>

          <div className="mt-8 flex w-full flex-col gap-3 sm:w-auto sm:flex-row sm:items-center">
            <Link
              href={CTA_LINKS.signup}
              className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-[#FF6B00] px-7 py-4 text-base font-bold text-white shadow-lg shadow-[#FF6B00]/25 transition-all duration-300 hover:scale-[1.02] hover:bg-[#FF8A00] hover:shadow-[#FF6B00]/40 sm:w-auto"
            >
              Start Betting
              <span aria-hidden>&rarr;</span>
            </Link>
            <a
              href="#cricket-matches"
              className="inline-flex w-full items-center justify-center rounded-xl border border-white/10 bg-white/5 px-7 py-4 text-base font-bold text-white backdrop-blur-md transition-all duration-300 hover:scale-[1.02] hover:border-[#FF6B00] hover:bg-white/10 sm:w-auto"
            >
              View Matches
            </a>
          </div>

          
        </div>

        {/* RIGHT — Scorecard mockup */}
        <div className="order-1 lg:order-2">
          <div className="relative mx-auto max-w-sm lg:max-w-none">
            <div className="pointer-events-none absolute inset-0 rounded-3xl bg-[#FF6B00]/10 blur-3xl" />

            <div
              className="relative rounded-3xl p-px"
              style={{ background: "linear-gradient(135deg, #FF6B00 0%, #FF8A00 30%, #138808 70%, #FF6B00 100%)" }}
            >
              <div className="relative overflow-hidden rounded-[calc(1.5rem-1px)] bg-[#081425] p-6 sm:p-7">
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-white/[0.04] via-transparent to-transparent" />
                <div className="pointer-events-none absolute left-1/2 top-0 h-48 w-48 -translate-x-1/2 -translate-y-1/3 rounded-full bg-[#FF6B00]/12 blur-2xl" />

                {/* Header */}
                <div className="relative mb-5 flex items-center justify-between">
                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-slate-500">IPL 2025 · Match 28</p>
                    <p className="mt-0.5 text-[11px] font-bold text-slate-400">Wankhede Stadium, Mumbai</p>
                  </div>
                  <div className="flex items-center gap-1.5 rounded-full border border-[#FF6B00]/40 bg-[#FF6B00]/12 px-2.5 py-1">
                    <span className="relative flex h-1.5 w-1.5">
                      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#FF6B00] opacity-75" />
                      <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-[#FF6B00]" />
                    </span>
                    <span className="text-[9px] font-black uppercase tracking-wide text-[#FF6B00]">Live</span>
                  </div>
                </div>

                {/* Scoreboard */}
                <div className="relative mb-4 rounded-2xl border border-white/[0.07] bg-white/[0.03] p-4">
                  <div className="mb-3 flex items-center justify-between gap-3">
                    <div className="flex items-center gap-2.5">
                      <div className="grid h-9 w-9 place-items-center rounded-full border border-white/10 bg-white/5 text-lg">🏏</div>
                      <div>
                        <p className="text-xs font-bold text-white">Mumbai Indians</p>
                        <p className="text-[9px] text-slate-500">Batting</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-xl font-black text-white">187 / 3</p>
                      <p className="text-[9px] text-slate-500">18.4 overs</p>
                    </div>
                  </div>
                  <div className="flex items-center justify-between gap-3">
                    <div className="flex items-center gap-2.5">
                      <div className="grid h-9 w-9 place-items-center rounded-full border border-white/10 bg-white/5 text-lg">🦁</div>
                      <div>
                        <p className="text-xs font-bold text-white">CSK</p>
                        <p className="text-[9px] text-slate-500">Bowling</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-xl font-black text-slate-500">— / —</p>
                      <p className="text-[9px] text-slate-500">Need 188</p>
                    </div>
                  </div>
                </div>

                {/* Ball-by-ball */}
                <div className="relative mb-4 rounded-xl border border-white/[0.06] bg-white/[0.03] p-3">
                  <p className="mb-2 text-[9px] font-bold uppercase tracking-[0.14em] text-slate-500">Last 6 Balls</p>
                  <div className="flex items-center gap-1.5">
                    {["1", "4", "W", "0", "6", "2"].map((ball, i) => (
                      <div
                        key={i}
                        className={[
                          "flex h-7 w-7 items-center justify-center rounded-full text-[10px] font-black",
                          ball === "W" ? "bg-red-500/20 text-red-400 border border-red-500/30" :
                          ball === "6" ? "bg-[#138808]/20 text-[#138808] border border-[#138808]/30" :
                          ball === "4" ? "bg-[#FF6B00]/20 text-[#FF6B00] border border-[#FF6B00]/30" :
                          "bg-white/[0.06] text-slate-400 border border-white/10",
                        ].join(" ")}
                      >
                        {ball}
                      </div>
                    ))}
                    <div className="ml-1 flex h-7 w-7 items-center justify-center rounded-full border border-dashed border-white/20 text-[10px] text-slate-600">
                      ?
                    </div>
                  </div>
                </div>

                {/* Market odds */}
                <div className="relative mb-4 grid grid-cols-2 gap-2">
                  {[
                    { label: "MI Win",  odds: "1.72", hot: true  },
                    { label: "CSK Win", odds: "2.15", hot: false },
                  ].map(({ label, odds, hot }) => (
                    <button
                      key={label}
                      className={[
                        "flex flex-col items-center gap-0.5 rounded-xl border p-3 transition-all duration-200 hover:scale-[1.03]",
                        hot
                          ? "border-[#FF6B00]/40 bg-[#FF6B00]/10"
                          : "border-white/[0.08] bg-white/[0.04]",
                      ].join(" ")}
                    >
                      <span className="text-[9px] font-semibold text-slate-400">{label}</span>
                      <span className={`text-lg font-black ${hot ? "text-[#FF6B00]" : "text-white"}`}>{odds}</span>
                    </button>
                  ))}
                </div>

                {/* Market chips */}
                <div className="relative flex flex-wrap gap-1.5">
                  {MARKETS.map((m) => (
                    <span
                      key={m}
                      className="rounded-full border border-white/[0.08] bg-white/[0.04] px-2.5 py-1 text-[9px] font-semibold text-slate-400"
                    >
                      {m}
                    </span>
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
