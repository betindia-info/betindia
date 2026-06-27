import Link from "next/link";
import { Zap, Users, TrendingUp, Gift } from "lucide-react";
import { CTA_LINKS } from "@/lib/cta-links";

const HIGHLIGHTS = [
  { icon: Zap,         text: "Faster Withdrawals"    },
  { icon: Users,       text: "Personal Account Manager" },
  { icon: TrendingUp,  text: "Higher Betting Limits" },
  { icon: Gift,        text: "Exclusive Promotions"  },
] as const;

const DEFAULT_CONTENT = {
  eyebrow: "Exclusive VIP Program",
  title: "Unlock Elite Rewards & VIP Privileges",
  description: "Join the BetIndia VIP Program and enjoy premium benefits including faster withdrawals, personalized support, higher limits, and exclusive rewards."
};

export default function VIPHero({ content }: { content?: Partial<typeof DEFAULT_CONTENT> | null }) {
  const data = { ...DEFAULT_CONTENT, ...(content ?? {}) };

  return (
    <section className="relative overflow-hidden bg-[#050B18]">
      {/* Glows */}
      <div aria-hidden className="pointer-events-none absolute -left-32 -top-32 h-[460px] w-[460px] rounded-full bg-[#FF6B00]/14 blur-2xl" />
      <div aria-hidden className="pointer-events-none absolute -bottom-44 -right-20 h-[440px] w-[440px] rounded-full bg-[#138808]/10 blur-2xl" />

      <div className="relative z-10 mx-auto grid max-w-7xl grid-cols-1 items-center gap-10 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:gap-14 lg:px-8 lg:py-24">
        {/* LEFT — Content */}
        <div className="order-2 flex flex-col items-center text-center lg:order-1 lg:items-start lg:text-left">
          {/* Badge */}
          <span className="inline-flex items-center gap-2 rounded-full border border-[#FF6B00]/30 bg-[#FF6B00]/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-[#FF6B00]">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-[#FF6B00]" />
            {data.eyebrow}
          </span>

          <h1 className="mt-6 text-3xl font-extrabold leading-[1.06] tracking-tight text-white sm:text-4xl md:text-5xl lg:text-[clamp(2.5rem,5vw,4rem)]">
            {data.title.includes("VIP Privileges") ? (
              <>
                {data.title.split("VIP Privileges")[0]}
                <span className="bg-gradient-to-r from-[#FF6B00] via-[#FF8A00] to-[#FF6B00] bg-clip-text text-transparent">
                  VIP Privileges
                </span>
                {data.title.split("VIP Privileges")[1]}
              </>
            ) : (
              data.title
            )}
          </h1>

          <p className="mt-5 max-w-md text-base leading-relaxed text-slate-300">
            {data.description}
          </p>

          {/* CTAs */}
          <div className="mt-8 flex w-full flex-col gap-3 sm:w-auto sm:flex-row sm:items-center">
            <Link
              href={CTA_LINKS.signup}
              className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-[#FF6B00] px-7 py-4 text-base font-bold text-white shadow-lg shadow-[#FF6B00]/25 transition-all duration-300 hover:scale-[1.02] hover:bg-[#FF8A00] hover:shadow-[#FF6B00]/40 sm:w-auto"
            >
              Become VIP
              <span aria-hidden>&rarr;</span>
            </Link>
            <a
              href="#vip-benefits"
              className="inline-flex w-full items-center justify-center rounded-xl border border-white/10 bg-white/5 px-7 py-4 text-base font-bold text-white backdrop-blur-md transition-all duration-300 hover:scale-[1.02] hover:border-[#FF6B00] hover:bg-white/10 sm:w-auto"
            >
              View Benefits
            </a>
          </div>

          {/* Highlights */}
          <ul className="mt-9 grid w-full grid-cols-2 gap-3">
            {HIGHLIGHTS.map(({ icon: Icon, text }) => (
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

        {/* RIGHT — VIP Diamond Card Visual */}
        <div className="order-1 lg:order-2">
          <div className="relative mx-auto max-w-sm lg:max-w-none">
            {/* Glow halo */}
            <div className="pointer-events-none absolute inset-0 rounded-3xl bg-[#FF6B00]/12 blur-3xl" />

            {/* Outer gradient border frame */}
            <div
              className="relative rounded-3xl p-px"
              style={{ background: "linear-gradient(135deg, #FF6B00 0%, #FF8A00 30%, #138808 70%, #FF6B00 100%)" }}
            >
              <div className="relative overflow-hidden rounded-[calc(1.5rem-1px)] bg-[#081425] p-7 sm:p-8">
                {/* Shine overlay */}
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-white/[0.05] via-transparent to-transparent" />
                {/* Background radial glow */}
                <div className="pointer-events-none absolute left-1/2 top-0 h-48 w-48 -translate-x-1/2 -translate-y-1/3 rounded-full bg-[#FF6B00]/15 blur-2xl" />

                {/* Card header */}
                <div className="relative mb-8 flex items-start justify-between">
                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-500">BetIndia</p>
                    <p className="mt-1 text-[11px] font-bold uppercase tracking-[0.16em] text-slate-400">VIP Membership</p>
                  </div>
                  <div className="flex flex-col items-end gap-1">
                    <div className="flex gap-1">
                      <div className="h-7 w-7 rounded-full bg-[#FF6B00]/60" />
                      <div className="-ml-3 h-7 w-7 rounded-full bg-[#FF8A00]/80" />
                    </div>
                  </div>
                </div>

                {/* Tier badge */}
                <div className="relative mb-7">
                  <span
                    className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-black uppercase tracking-[0.16em]"
                    style={{
                      background: "linear-gradient(90deg, #FF6B00 0%, #FF8A00 50%, #FF6B00 100%)",
                      boxShadow: "0 4px 20px rgba(255,107,0,0.35)",
                    }}
                  >
                    ◆ Diamond Member
                  </span>
                  <p className="mt-3 text-2xl font-black tracking-[0.12em] text-white opacity-80">
                    **** **** 8821
                  </p>
                </div>

                {/* Benefits list */}
                <div className="relative grid grid-cols-2 gap-2.5">
                  {[
                    { label: "Withdrawal Speed", value: "Instant" },
                    { label: "Betting Limit",    value: "Unlimited" },
                    { label: "Cashback",         value: "Up to 15%" },
                    { label: "Manager",          value: "Dedicated" },
                  ].map(({ label, value }) => (
                    <div
                      key={label}
                      className="rounded-xl border border-white/[0.06] bg-white/[0.04] px-3 py-3"
                    >
                      <p className="text-[9px] font-semibold uppercase tracking-[0.12em] text-slate-500">{label}</p>
                      <p className="mt-0.5 text-sm font-black text-[#FF8A00]">{value}</p>
                    </div>
                  ))}
                </div>

                {/* Card footer */}
                <div className="relative mt-7 flex items-center justify-between border-t border-white/[0.06] pt-5">
                  <div>
                    <p className="text-[9px] font-semibold uppercase tracking-widest text-slate-600">Member Since</p>
                    <p className="mt-0.5 text-xs font-bold text-slate-400">2024</p>
                  </div>
                  <Link
                    href={CTA_LINKS.signup}
                    className="rounded-xl bg-[#FF6B00] px-5 py-2.5 text-xs font-black text-white shadow-lg shadow-[#FF6B00]/30 transition-all duration-200 hover:bg-[#FF8A00] hover:shadow-[#FF6B00]/50"
                  >
                    Join VIP →
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
