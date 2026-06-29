import Link from "next/link";
import { Activity, Wallet, BarChart3, Zap } from "lucide-react";
import { CTA_LINKS } from "@/lib/cta-links";
import { liveContent } from "@/data/live";

const TRUST = [
  { icon: Activity, text: "Real-Time Odds" },
  { icon: Zap,      text: "Instant Cashout" },
  { icon: BarChart3, text: "Live Match Stats" },
  { icon: Wallet,   text: "Fast Settlements" },
] as const;

export default function LiveHero() {
  return (
    <section className="relative overflow-hidden bg-[#050B18]">
      {/* Glows */}
      <div aria-hidden className="pointer-events-none absolute -left-40 -top-40 h-[500px] w-[500px] rounded-full bg-[#FF6B00]/12 blur-3xl" />
      <div aria-hidden className="pointer-events-none absolute -bottom-40 -right-20 h-[460px] w-[460px] rounded-full bg-[#138808]/10 blur-3xl" />

      <div className="relative z-10 mx-auto grid max-w-7xl grid-cols-1 items-center gap-10 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:gap-14 lg:px-8 lg:py-24">
        {/* LEFT — Content */}
        <div className="order-2 flex flex-col items-center text-center lg:order-1 lg:items-start lg:text-left">
          {/* Badge */}

          <h1 className="mt-6 text-3xl font-extrabold leading-[1.06] tracking-tight text-white sm:text-4xl md:text-5xl lg:text-[clamp(2.5rem,5vw,4rem)]">
            {liveContent.hero.title}
          </h1>

          <p className="mt-5 max-w-lg text-base leading-relaxed text-slate-300">
            {liveContent.hero.description}
          </p>

          {/* CTAs */}
          <div className="mt-8 flex w-full flex-col gap-3 sm:w-auto sm:flex-row sm:items-center">
            <a
              href="#live-events"
              className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-[#FF6B00] px-7 py-4 text-base font-bold text-white shadow-lg shadow-[#FF6B00]/25 transition-all duration-300 hover:scale-[1.02] hover:bg-[#FF8A00] hover:shadow-[#FF6B00]/40 sm:w-auto"
            >
              {liveContent.hero.primaryCta}
              <span aria-hidden>&rarr;</span>
            </a>
            <Link
              href={CTA_LINKS.signup}
              className="inline-flex w-full items-center justify-center rounded-xl border border-white/10 bg-white/5 px-7 py-4 text-base font-bold text-white backdrop-blur-md transition-all duration-300 hover:scale-[1.02] hover:border-[#FF6B00] hover:bg-white/10 sm:w-auto"
            >
              {liveContent.hero.secondaryCta}
            </Link>
          </div>

          {/* Trust chips */}
          
        </div>

        {/* RIGHT — Live Match Dashboard Mockup */}
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
                  <div className="flex items-center gap-2">
                    <span className="relative flex h-2 w-2">
                      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#FF6B00] opacity-75" />
                      <span className="relative inline-flex h-2 w-2 rounded-full bg-[#FF6B00]" />
                    </span>
                    <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#FF6B00]">Live Now</span>
                  </div>
                  <span className="rounded-full border border-[#138808]/40 bg-[#138808]/15 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wide text-[#138808]">
                    In-Play
                  </span>
                </div>

                {/* Match */}
                <div className="relative mb-5 rounded-2xl border border-white/[0.07] bg-white/[0.03] p-4">
                  <p className="mb-3 text-[10px] font-semibold uppercase tracking-[0.14em] text-slate-500">
                    ICC Test Championship · 3rd Test · Day 2
                  </p>
                  <div className="flex items-center justify-between gap-3">
                    <div className="flex flex-col items-center gap-1">
                      <div className="grid h-11 w-11 place-items-center rounded-full border border-white/10 bg-white/5 text-xl">🇮🇳</div>
                      <span className="text-xs font-bold text-white">India</span>
                    </div>
                    <div className="flex flex-col items-center gap-1">
                      <div className="rounded-xl border border-white/[0.07] bg-white/[0.04] px-4 py-2 text-center">
                        <p className="text-lg font-black text-white">287 / 4</p>
                        <p className="text-[9px] font-semibold text-slate-500">72.3 overs</p>
                      </div>
                    </div>
                    <div className="flex flex-col items-center gap-1">
                      <div className="grid h-11 w-11 place-items-center rounded-full border border-white/10 bg-white/5 text-xl">🇦🇺</div>
                      <span className="text-xs font-bold text-white">Australia</span>
                    </div>
                  </div>
                </div>

                {/* Odds */}
                <div className="relative mb-4 grid grid-cols-2 gap-2.5">
                  {[
                    { label: "India Win",     odds: "1.85", hot: true  },
                    { label: "Australia Win", odds: "2.10", hot: false },
                  ].map(({ label, odds, hot }) => (
                    <button
                      key={label}
                      className={[
                        "group flex flex-col items-center justify-center gap-0.5 rounded-xl border p-3 transition-all duration-200 hover:scale-[1.03]",
                        hot
                          ? "border-[#FF6B00]/40 bg-[#FF6B00]/10 hover:bg-[#FF6B00]/18"
                          : "border-white/[0.08] bg-white/[0.04] hover:border-[#FF6B00]/30 hover:bg-white/[0.07]",
                      ].join(" ")}
                    >
                      <span className="text-[9px] font-semibold uppercase tracking-wide text-slate-400">{label}</span>
                      <span className={`text-lg font-black ${hot ? "text-[#FF6B00]" : "text-white"}`}>{odds}</span>
                    </button>
                  ))}
                </div>

                {/* Market movement */}
                <div className="relative rounded-xl border border-white/[0.06] bg-white/[0.03] p-3">
                  <p className="mb-2 text-[9px] font-bold uppercase tracking-[0.14em] text-slate-500">Market Movement</p>
                  <div className="flex items-end gap-1 h-8">
                    {[40, 55, 48, 62, 58, 70, 66, 78, 72, 85, 80, 92].map((h, i) => (
                      <div
                        key={i}
                        className="flex-1 rounded-sm transition-all duration-300"
                        style={{
                          height: `${h}%`,
                          background: i >= 9 ? "#FF6B00" : "rgba(255,107,0,0.25)",
                        }}
                      />
                    ))}
                  </div>
                </div>

                {/* Bet slip */}
                <div className="relative mt-4 flex items-center justify-between rounded-xl border border-[#138808]/30 bg-[#138808]/10 px-4 py-3">
                  <div>
                    <p className="text-[9px] font-semibold uppercase tracking-wide text-[#138808]">Bet Slip</p>
                    <p className="text-sm font-black text-white">India Win · ₹500</p>
                  </div>
                  <div className="text-right">
                    <p className="text-[9px] font-semibold text-slate-500">Potential Return</p>
                    <p className="text-sm font-black text-[#138808]">₹925.00</p>
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
