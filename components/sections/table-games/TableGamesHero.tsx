import Link from "next/link";
import { Crown, Layers, Zap, ShieldCheck } from "lucide-react";
import { CTA_LINKS } from "@/lib/cta-links";
import { tableGamesContent } from "@/data/tablegames";

const TRUST = [
  { icon: Crown, text: "Classic Casino Games" },
  { icon: Layers, text: "Live Dealer Tables" },
  { icon: Zap, text: "Fast Withdrawals" },
  { icon: ShieldCheck, text: "Secure Gaming" },
] as const;

const GAMES_PREVIEW = [
  { emoji: "🃏", name: "Blackjack",   badge: "Live",    accent: "#FF6B00" },
  { emoji: "🎡", name: "Roulette",    badge: "Live",    accent: "#138808" },
  { emoji: "🎴", name: "Baccarat",    badge: "VIP",     accent: "#FF6B00" },
  { emoji: "♠",  name: "Teen Patti",  badge: "Popular", accent: "#138808" },
  { emoji: "🎯", name: "Andar Bahar", badge: "Classic", accent: "#FF6B00" },
  { emoji: "🎲", name: "Hold'em",     badge: "Poker",   accent: "#138808" },
] as const;

const PLAYER_CARDS  = ["A♠", "K♥"] as const;
const DEALER_CARDS  = ["7♣", "?"]  as const;

export default function TableGamesHero({ content }: { content?: Partial<typeof tableGamesContent.hero> | null }) {
  const data = { ...tableGamesContent.hero, ...(content ?? {}) };

  return (
    <section className="relative overflow-hidden bg-[#050B18]">
      <div aria-hidden className="pointer-events-none absolute -left-40 -top-40 h-[520px] w-[520px] rounded-full bg-[#FF6B00]/12 blur-3xl" />
      <div aria-hidden className="pointer-events-none absolute -bottom-40 -right-20 h-[460px] w-[460px] rounded-full bg-[#138808]/10 blur-3xl" />

      <div className="relative z-10 mx-auto grid max-w-7xl grid-cols-1 items-center gap-10 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:gap-14 lg:px-8 lg:py-24">

        {/* LEFT */}
        <div className="order-2 flex flex-col items-center text-center lg:order-1 lg:items-start lg:text-left">

          <h1 className="mt-6 text-3xl font-extrabold leading-[1.06] tracking-tight text-white sm:text-4xl md:text-5xl lg:text-[clamp(2.5rem,5vw,4rem)]">
            Premium{" "}
            <span className="bg-gradient-to-r from-[#FF6B00] via-[#FF8A00] to-[#FF6B00] bg-clip-text text-transparent">
              Table Games?
            </span>
          </h1>

          <p className="mt-5 max-w-md text-base leading-relaxed text-slate-300">
            {data.description}
          </p>

          <div className="mt-8 flex w-full flex-col gap-3 sm:w-auto sm:flex-row sm:items-center">
            <Link
              href={CTA_LINKS.signup}
              className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-[#FF6B00] px-7 py-4 text-base font-bold text-white shadow-lg shadow-[#FF6B00]/25 transition-all duration-300 hover:scale-[1.02] hover:bg-[#FF8A00] hover:shadow-[#FF6B00]/40 sm:w-auto"
            >
              {data.primaryCta ?? "Play Table Games"}
              <span aria-hidden>&rarr;</span>
            </Link>
            <Link
              href={CTA_LINKS.casino}
              className="inline-flex w-full items-center justify-center rounded-xl border border-white/10 bg-white/5 px-7 py-4 text-base font-bold text-white backdrop-blur-md transition-all duration-300 hover:scale-[1.02] hover:border-[#FF6B00] hover:bg-white/10 sm:w-auto"
            >
              {data.secondaryCta ?? "Explore Casino"}
            </Link>
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
          <p className="mt-4 text-[11px] font-medium text-slate-600">18+ Only • Play Responsibly</p>
        </div>

        {/* RIGHT — Blackjack table mockup */}
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
                    <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-slate-500">BetIndia · Live Blackjack</p>
                    <p className="mt-0.5 text-[11px] font-bold text-slate-400">VIP Table · HD Stream</p>
                  </div>
                  <span className="flex items-center gap-1.5 rounded-full border border-[#FF6B00]/40 bg-[#FF6B00]/12 px-3 py-1.5 text-[9px] font-black uppercase tracking-wide text-[#FF6B00]">
                    <span className="relative flex h-1.5 w-1.5">
                      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#FF6B00] opacity-75" />
                      <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-[#FF6B00]" />
                    </span>
                    Live
                  </span>
                </div>

                {/* Table felt */}
                <div
                  className="relative mb-4 overflow-hidden rounded-2xl border border-[#138808]/25"
                  style={{ background: "radial-gradient(ellipse at 50% 50%, #0d3320 0%, #071a12 100%)" }}
                >
                  {/* Felt texture ring */}
                  <div className="absolute inset-4 rounded-xl border border-[#138808]/15" />

                  <div className="relative p-5">
                    {/* Dealer row */}
                    <div className="mb-4">
                      <div className="mb-2 flex items-center justify-between">
                        <span className="text-[9px] font-bold uppercase tracking-widest text-[#138808]/70">Dealer</span>
                        <span className="text-[9px] text-slate-600">Priya</span>
                      </div>
                      <div className="flex items-center gap-2">
                        {DEALER_CARDS.map((card, i) => (
                          <div
                            key={i}
                            className={[
                              "grid h-12 w-9 place-items-center rounded-lg border text-sm font-black",
                              i === 1
                                ? "border-white/10 bg-[#0f2d1a] text-slate-600"
                                : "border-white/20 bg-white text-slate-900",
                            ].join(" ")}
                          >
                            {card}
                          </div>
                        ))}
                        <span className="ml-1 text-[10px] font-bold text-slate-500">· Score: ?</span>
                      </div>
                    </div>

                    {/* Divider */}
                    <div className="mb-4 h-px bg-gradient-to-r from-transparent via-[#138808]/25 to-transparent" />

                    {/* Player row */}
                    <div>
                      <div className="mb-2 flex items-center justify-between">
                        <span className="text-[9px] font-bold uppercase tracking-widest text-[#FF6B00]/70">You</span>
                        <span className="text-[10px] font-black text-[#FF6B00]">Blackjack! 🎉</span>
                      </div>
                      <div className="flex items-center gap-2">
                        {PLAYER_CARDS.map((card, i) => (
                          <div
                            key={i}
                            className="grid h-12 w-9 place-items-center rounded-lg border border-[#FF6B00]/30 bg-white text-sm font-black text-slate-900 shadow-[0_0_12px_rgba(255,107,0,0.3)]"
                            style={{ transform: i === 1 ? "rotate(4deg)" : "rotate(-2deg)" }}
                          >
                            {card}
                          </div>
                        ))}
                        <span className="ml-1 text-[10px] font-black text-[#FF6B00]">= 21</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Bet + payout */}
                <div className="relative mb-4 grid grid-cols-3 gap-2">
                  <div className="rounded-xl border border-white/[0.06] bg-white/[0.03] px-3 py-2.5 text-center">
                    <p className="text-[8px] font-semibold uppercase text-slate-600">Bet</p>
                    <p className="mt-0.5 text-sm font-black text-white">₹500</p>
                  </div>
                  <div className="rounded-xl border border-[#FF6B00]/25 bg-[#FF6B00]/8 px-3 py-2.5 text-center">
                    <p className="text-[8px] font-semibold uppercase text-[#FF6B00]/70">Payout</p>
                    <p className="mt-0.5 text-sm font-black text-[#FF6B00]">3:2</p>
                  </div>
                  <div className="rounded-xl border border-[#138808]/25 bg-[#138808]/8 px-3 py-2.5 text-center">
                    <p className="text-[8px] font-semibold uppercase text-[#138808]/70">Win</p>
                    <p className="mt-0.5 text-sm font-black text-[#138808]">₹750</p>
                  </div>
                </div>

                {/* Action buttons */}
                <div className="relative mb-4 grid grid-cols-3 gap-2">
                  {["Hit", "Stand", "Double"].map((action, i) => (
                    <button
                      key={action}
                      className={[
                        "rounded-xl border py-2 text-xs font-bold transition-all duration-200 hover:scale-[1.03]",
                        i === 1
                          ? "border-[#FF6B00]/40 bg-[#FF6B00]/12 text-[#FF6B00]"
                          : "border-white/[0.08] bg-white/[0.04] text-slate-400",
                      ].join(" ")}
                    >
                      {action}
                    </button>
                  ))}
                </div>

                {/* Games mini-grid */}
                <div className="relative grid grid-cols-3 gap-1.5">
                  {GAMES_PREVIEW.map(({ emoji, name, badge, accent }) => (
                    <div
                      key={name}
                      className="flex flex-col items-center gap-1 rounded-xl border border-white/[0.06] bg-white/[0.03] p-2 transition-all duration-200 hover:border-[#FF6B00]/25 hover:bg-white/[0.06]"
                    >
                      <span className="text-base">{emoji}</span>
                      <span className="text-[8px] font-bold text-white">{name}</span>
                      <span className="text-[7px] font-semibold" style={{ color: accent }}>{badge}</span>
                    </div>
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
