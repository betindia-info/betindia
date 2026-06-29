import Link from "next/link";
import { Zap, Users, TrendingUp, Gift } from "lucide-react";
import { CTA_LINKS } from "@/lib/cta-links";
import { vipBenefitsContent } from "@/data/VIPBenefits";



export default function VIPHero({
  content,
}: {
  content?: Partial<typeof vipBenefitsContent.hero> | null;
}) {
  const data = { ...vipBenefitsContent.hero, ...(content ?? {}) };
  const highlights = data.highlights?.length
    ? data.highlights
    : vipBenefitsContent.hero.highlights;

  return (
    <section className="relative overflow-hidden bg-[#050B18]">
      <div aria-hidden className="pointer-events-none absolute -left-32 -top-32 h-[460px] w-[460px] rounded-full bg-[#FF6B00]/14 blur-2xl" />
      <div aria-hidden className="pointer-events-none absolute -bottom-44 -right-20 h-[440px] w-[440px] rounded-full bg-[#138808]/10 blur-2xl" />

      <div className="relative z-10 mx-auto grid max-w-7xl grid-cols-1 items-center gap-10 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:gap-14 lg:px-8 lg:py-24">
        <div className="order-2 flex flex-col items-center text-center lg:order-1 lg:items-start lg:text-left">
          <h1 className="mt-6 text-3xl font-extrabold leading-[1.06] tracking-tight text-white sm:text-4xl md:text-5xl lg:text-[clamp(2rem,4.5vw,3.75rem)]">
            {data.title.includes("VIP Privileges") ? (
              <>
                Unlock Premium Rewards, Exclusive Benefits &{" "}
                <span className="bg-gradient-to-r from-[#FF6B00] via-[#FF8A00] to-[#138808] bg-clip-text text-transparent">
                  VIP Privileges
                </span>
              </>
            ) : (
              data.title
            )}
          </h1>

          <p className="mt-5 max-w-lg text-base leading-relaxed text-slate-300">{data.description}</p>

          <div className="mt-8 flex w-full flex-col gap-3 sm:w-auto sm:flex-row sm:items-center">
            <Link
              href={CTA_LINKS.signup}
              className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-[#FF6B00] px-7 py-4 text-base font-bold text-white shadow-lg shadow-[#FF6B00]/25 transition-all duration-300 hover:scale-[1.02] hover:bg-[#FF8A00] sm:w-auto"
            >
              {data.primaryCta}
              <span aria-hidden>&rarr;</span>
            </Link>
            <a
              href="#vip-benefits"
              className="inline-flex w-full items-center justify-center rounded-xl border border-white/10 bg-white/5 px-7 py-4 text-base font-bold text-white backdrop-blur-md transition-all duration-300 hover:scale-[1.02] hover:border-[#FF6B00] hover:bg-white/10 sm:w-auto"
            >
              {data.secondaryCta}
            </a>
          </div>

         
        </div>

        <div className="order-1 lg:order-2">
          <div className="relative mx-auto max-w-sm lg:max-w-none">
            <div className="pointer-events-none absolute inset-0 rounded-3xl bg-[#FF6B00]/12 blur-3xl" />
            <div
              className="relative rounded-3xl p-px"
              style={{ background: "linear-gradient(135deg, #FF6B00 0%, #FF8A00 30%, #138808 70%, #FF6B00 100%)" }}
            >
              <div className="relative overflow-hidden rounded-[calc(1.5rem-1px)] bg-[#081425] p-7 sm:p-8">
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-white/[0.05] via-transparent to-transparent" />
                <div className="pointer-events-none absolute left-1/2 top-0 h-48 w-48 -translate-x-1/2 -translate-y-1/3 rounded-full bg-[#FF6B00]/15 blur-2xl" />

                <div className="relative mb-8 flex items-start justify-between">
                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-500">BetIndia</p>
                    <p className="mt-1 text-[11px] font-bold uppercase tracking-[0.16em] text-slate-400">VIP Membership</p>
                  </div>
                </div>

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
                  <p className="mt-3 text-2xl font-black tracking-[0.12em] text-white opacity-80">**** **** 8821</p>
                </div>

                <div className="relative grid grid-cols-2 gap-2.5">
                  {[
                    { label: "Withdrawal Speed", value: "Instant" },
                    { label: "Betting Limit", value: "Unlimited" },
                    { label: "Cashback", value: "Up to 15%" },
                    { label: "Manager", value: "Dedicated" },
                  ].map(({ label, value }) => (
                    <div key={label} className="rounded-xl border border-white/[0.06] bg-white/[0.04] px-3 py-3">
                      <p className="text-[9px] font-semibold uppercase tracking-[0.12em] text-slate-500">{label}</p>
                      <p className="mt-0.5 text-sm font-black text-[#FF8A00]">{value}</p>
                    </div>
                  ))}
                </div>

                <div className="relative mt-7 flex items-center justify-between border-t border-white/[0.06] pt-5">
                  <div>
                    <p className="text-[9px] font-semibold uppercase tracking-widest text-slate-600">Member Since</p>
                    <p className="mt-0.5 text-xs font-bold text-slate-400">2024</p>
                  </div>
                  <Link
                    href={CTA_LINKS.signup}
                    className="rounded-xl bg-[#FF6B00] px-5 py-2.5 text-xs font-black text-white shadow-lg shadow-[#FF6B00]/30 transition-all duration-200 hover:bg-[#FF8A00]"
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
