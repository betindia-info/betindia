import Link from "next/link";
import { Gift, RefreshCw, Crown, Users, Zap, ShieldCheck, Headphones } from "lucide-react";
import { CTA_LINKS } from "@/lib/cta-links";
import { promotionsContent } from "@/data/promotions";

const STATS = [
  { value: "10,000+", label: "Active Players",    accent: "#FF6B00" },
  { value: "₹ Fast",  label: "Withdrawals",       accent: "#138808" },
  { value: "24/7",    label: "Support",            accent: "#FF6B00" },
  { value: "Secure",  label: "Platform",           accent: "#138808" },
] as const;

const BONUS_PREVIEW = [
  { icon: Gift,      value: "₹25,000",    label: "Welcome Bonus",    accent: "#FF6B00" },
  { icon: RefreshCw, value: "Up to 10%",  label: "Weekly Cashback",  accent: "#138808" },
  { icon: Crown,     value: "Exclusive",  label: "VIP Rewards",      accent: "#FF6B00" },
  { icon: Users,     value: "Refer & Earn",label: "Referral Program",accent: "#138808" },
] as const;

export default function PromotionsHero({ content }: { content?: Partial<typeof promotionsContent.hero> | null }) {
  const data = { ...promotionsContent.hero, ...(content ?? {}) };

  return (
    <section className="relative overflow-hidden bg-[#050B18]">
      <div aria-hidden className="pointer-events-none absolute -left-32 -top-32 h-[440px] w-[440px] rounded-full bg-[#FF6B00]/14 blur-2xl" />
      <div aria-hidden className="pointer-events-none absolute -bottom-40 -right-20 h-[420px] w-[420px] rounded-full bg-[#138808]/12 blur-2xl" />

      <div className="relative z-10 mx-auto grid max-w-7xl grid-cols-1 items-center gap-10 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:gap-14 lg:px-8 lg:py-24">
        {/* LEFT — Content */}
        <div className="order-2 flex flex-col items-center text-center lg:order-1 lg:items-start lg:text-left">

          <h1 className="mt-6 text-3xl font-extrabold leading-[1.06] tracking-tight text-white sm:text-4xl md:text-5xl lg:text-[clamp(2.5rem,5vw,4rem)]">
            {data.title}
          </h1>

          <p className="mt-5 max-w-md text-base leading-relaxed text-slate-300">
            {data.description}
          </p>

          {/* CTAs */}
          <div className="mt-8 flex w-full flex-col gap-3 sm:w-auto sm:flex-row sm:items-center">
            <Link
              href={CTA_LINKS.signup}
              className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-[#FF6B00] px-7 py-4 text-base font-bold text-white shadow-lg shadow-[#FF6B00]/20 transition-all duration-300 hover:scale-[1.02] hover:bg-[#FF8A00] hover:shadow-[#FF6B00]/30 sm:w-auto"
            >
              Claim Bonus
              <span aria-hidden>&rarr;</span>
            </Link>
            <a
              href="#featured-promotions"
              className="inline-flex w-full items-center justify-center rounded-xl border border-white/10 bg-white/5 px-7 py-4 text-base font-bold text-white backdrop-blur-md transition-all duration-300 hover:scale-[1.02] hover:border-[#FF6B00] hover:bg-white/10 sm:w-auto"
            >
              Explore Promotions
            </a>
          </div>

          {/* Stats strip */}
         
        </div>

        {/* RIGHT — Bonus Preview Panel */}
        <div className="order-1 lg:order-2">
          <div className="relative mx-auto max-w-sm lg:max-w-none">
            <div className="pointer-events-none absolute inset-0 rounded-3xl bg-[#FF6B00]/8 blur-3xl" />
            <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur-xl sm:p-7">
              {/* Header */}
              <div className="mb-5 flex items-center justify-between">
                <p className="text-xs font-bold uppercase tracking-[0.16em] text-slate-400">Active Bonuses</p>
                <span className="rounded-full border border-[#FF6B00]/30 bg-[#FF6B00]/10 px-3 py-1 text-[10px] font-bold text-[#FF6B00]">
                  4 Available
                </span>
              </div>

              {/* Bonus cards 2×2 */}
              <div className="grid grid-cols-2 gap-3">
                {BONUS_PREVIEW.map(({ icon: Icon, value, label, accent }) => (
                  <div
                    key={label}
                    className="group relative overflow-hidden rounded-2xl border border-white/[0.07] bg-white/[0.04] p-4 transition-all duration-200 hover:border-white/20 hover:bg-white/[0.08]"
                  >
                    <div
                      className="pointer-events-none absolute inset-0 opacity-25"
                      style={{ background: `radial-gradient(ellipse at 50% 0%, ${accent}30 0%, transparent 70%)` }}
                    />
                    <div
                      className="mb-3 grid h-10 w-10 place-items-center rounded-xl border transition-transform duration-200 group-hover:scale-110"
                      style={{ background: `${accent}18`, borderColor: `${accent}30`, color: accent }}
                    >
                      <Icon size={18} strokeWidth={1.7} />
                    </div>
                    <p className="text-sm font-black leading-tight" style={{ color: accent }}>{value}</p>
                    <p className="mt-0.5 text-[11px] font-semibold text-slate-400">{label}</p>
                  </div>
                ))}
              </div>

              {/* Trust row */}
              <div className="mt-5 flex items-center justify-between border-t border-white/[0.06] pt-4">
                {[
                  { icon: Zap,         text: "Instant Credit" },
                  { icon: ShieldCheck, text: "Verified Safe"  },
                  { icon: Headphones,  text: "24/7 Support"   },
                ].map(({ icon: Icon, text }) => (
                  <div key={text} className="flex items-center gap-1.5 text-[11px] font-semibold text-slate-500">
                    <Icon size={11} className="text-[#138808]" strokeWidth={2} />
                    {text}
                  </div>
                ))}
              </div>

              {/* CTA */}
              <Link
                href={CTA_LINKS.signup}
                className="mt-4 flex w-full items-center justify-center gap-2 rounded-xl bg-[#FF6B00] py-3.5 text-sm font-bold text-white transition-all duration-200 hover:bg-[#FF8A00] hover:shadow-lg hover:shadow-[#FF6B00]/25"
              >
                Claim All Bonuses
                <span aria-hidden>&rarr;</span>
              </Link>

              <p className="mt-3 text-center text-[10px] text-slate-600">
                18+ only · Terms apply · Play responsibly
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
