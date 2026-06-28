import Link from "next/link";
import { Layers, TrendingUp, Zap, Smartphone } from "lucide-react";
import { CTA_LINKS } from "@/lib/cta-links";
import { slotsContent } from "@/data/slots";

const TRUST = [
  { icon: Layers,     text: "500+ Slot Games"       },
  { icon: TrendingUp, text: "Progressive Jackpots"  },
  { icon: Zap,        text: "Instant Gameplay"      },
  { icon: Smartphone, text: "Mobile Optimized"      },
] as const;

const REELS = [
  ["🍒", "7️⃣", "💎", "🍋", "🔔"],
  ["💎", "🍒", "🔔", "7️⃣", "🍋"],
  ["7️⃣", "💎", "🍒", "🔔", "🍋"],
] as const;

const RECENT_WINS = [
  { player: "Raj***",  amount: "₹48,200",  game: "Mega Fortune" },
  { player: "Pri***",  amount: "₹12,500",  game: "Golden Spin"  },
  { player: "Ami***",  amount: "₹2,35,000", game: "Diamond Rush" },
] as const;

export default function SlotsHero({ content }: { content?: Partial<typeof slotsContent.hero> | null }) {
  const data = { ...slotsContent.hero, ...(content ?? {}) };

  return (
    <section className="relative overflow-hidden bg-[#050B18]">
      <div aria-hidden className="pointer-events-none absolute -left-40 -top-40 h-[520px] w-[520px] rounded-full bg-[#FF6B00]/12 blur-3xl" />
      <div aria-hidden className="pointer-events-none absolute -bottom-40 -right-20 h-[460px] w-[460px] rounded-full bg-[#138808]/10 blur-3xl" />

      <div className="relative z-10 mx-auto grid max-w-7xl grid-cols-1 items-center gap-10 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:gap-14 lg:px-8 lg:py-24">

        {/* LEFT */}
        <div className="order-2 flex flex-col items-center text-center lg:order-1 lg:items-start lg:text-left">

          <h1 className="mt-6 text-3xl font-extrabold leading-[1.06] tracking-tight text-white sm:text-4xl md:text-5xl lg:text-[clamp(2.5rem,5vw,4rem)]">
            Online Slot Games{" "}
            <span className="bg-gradient-to-r from-[#FF6B00] via-[#FF8A00] to-[#FF6B00] bg-clip-text text-transparent">
              India
            </span>
          </h1>

          <p className="mt-5 max-w-md text-base leading-relaxed text-slate-300 md:text-lg">
            {data.description}
          </p>


          <div className="mt-8 flex w-full flex-col gap-3 sm:w-auto sm:flex-row sm:items-center">
            <Link
              href={CTA_LINKS.signup}
              className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-[#FF6B00] px-7 py-4 text-base font-bold text-white shadow-lg shadow-[#FF6B00]/25 transition-all duration-300 hover:scale-[1.02] hover:bg-[#FF8A00] hover:shadow-[#FF6B00]/40 sm:w-auto"
            >
              {data.primaryCta ?? "Play Slots"}
              <span aria-hidden>&rarr;</span>
            </Link>
            <a
              href="#jackpot-slots"
              className="inline-flex w-full items-center justify-center rounded-xl border border-white/10 bg-white/5 px-7 py-4 text-base font-bold text-white backdrop-blur-md transition-all duration-300 hover:scale-[1.02] hover:border-[#FF6B00] hover:bg-white/10 sm:w-auto"
            >
              {data.secondaryCta ?? "Explore Jackpots"}
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

        {/* RIGHT — Slot machine mockup */}
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
                    <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-slate-500">BetIndia Slots</p>
                    <p className="mt-0.5 text-[11px] font-bold text-slate-400">Mega Fortune · Jackpot Edition</p>
                  </div>
                  <span className="rounded-full border border-[#FF6B00]/40 bg-[#FF6B00]/12 px-3 py-1 text-[9px] font-black uppercase tracking-wide text-[#FF6B00]">
                    500+ Games
                  </span>
                </div>

                {/* Slot reels */}
                <div className="relative mb-5 overflow-hidden rounded-2xl border border-[#FF6B00]/25 bg-[#050B18]">
                  {/* Top decorative strip */}
                  <div className="flex h-2 w-full">
                    {["#FF6B00", "#138808", "#FF6B00"].map((c, i) => (
                      <div key={i} className="flex-1" style={{ backgroundColor: c }} />
                    ))}
                  </div>

                  <div className="px-4 py-5">
                    {/* Win line indicator */}
                    <div className="relative flex items-center justify-center gap-3">
                      {REELS.map((reel, ri) => (
                        <div
                          key={ri}
                          className="flex flex-col items-center gap-1 rounded-xl border border-white/[0.07] bg-white/[0.04] px-3 py-2"
                        >
                          {reel.slice(0, 3).map((sym, si) => (
                            <div
                              key={si}
                              className={[
                                "flex h-10 w-10 items-center justify-center rounded-lg text-2xl",
                                si === 1 ? "border border-[#FF6B00]/40 bg-[#FF6B00]/10 shadow-[0_0_12px_rgba(255,107,0,0.3)]" : "opacity-50",
                              ].join(" ")}
                            >
                              {sym}
                            </div>
                          ))}
                        </div>
                      ))}
                    </div>

                    {/* Win line */}
                    <div className="relative mt-3 flex items-center justify-center">
                      <div className="h-px flex-1 bg-gradient-to-r from-transparent via-[#FF6B00]/60 to-transparent" />
                      <span className="mx-3 rounded-full border border-[#FF6B00]/40 bg-[#FF6B00]/15 px-3 py-1 text-[9px] font-black uppercase tracking-wide text-[#FF6B00]">
                        Win Line
                      </span>
                      <div className="h-px flex-1 bg-gradient-to-r from-transparent via-[#FF6B00]/60 to-transparent" />
                    </div>
                  </div>

                  <div className="flex h-2 w-full">
                    {["#138808", "#FF6B00", "#138808"].map((c, i) => (
                      <div key={i} className="flex-1" style={{ backgroundColor: c }} />
                    ))}
                  </div>
                </div>

                {/* Bet + balance row */}
                <div className="relative mb-4 grid grid-cols-2 gap-2.5">
                  <div className="rounded-xl border border-white/[0.06] bg-white/[0.03] px-3 py-3">
                    <p className="text-[9px] font-semibold uppercase tracking-wide text-slate-500">Current Bet</p>
                    <p className="mt-0.5 text-base font-black text-[#FF6B00]">₹50.00</p>
                  </div>
                  <div className="rounded-xl border border-white/[0.06] bg-white/[0.03] px-3 py-3">
                    <p className="text-[9px] font-semibold uppercase tracking-wide text-slate-500">Jackpot Pool</p>
                    <p className="mt-0.5 text-base font-black text-[#138808]">₹2.5 Cr+</p>
                  </div>
                </div>

                {/* Spin button */}
                <button className="relative mb-4 w-full overflow-hidden rounded-xl bg-gradient-to-r from-[#FF6B00] to-[#FF8A00] py-3.5 text-sm font-black uppercase tracking-[0.12em] text-white shadow-lg shadow-[#FF6B00]/30 transition-all duration-200 hover:shadow-[#FF6B00]/50">
                  <span className="relative z-10">🎰 SPIN</span>
                </button>

                {/* Recent wins */}
                <div className="relative rounded-xl border border-white/[0.06] bg-white/[0.03] p-3">
                  <p className="mb-2 text-[9px] font-bold uppercase tracking-[0.14em] text-slate-500">Recent Big Wins</p>
                  <div className="space-y-1.5">
                    {RECENT_WINS.map(({ player, amount, game }) => (
                      <div key={player} className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <span className="text-[9px] font-semibold text-slate-500">{player}</span>
                          <span className="text-[9px] text-slate-600">· {game}</span>
                        </div>
                        <span className="text-[10px] font-black text-[#138808]">{amount}</span>
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
