import Link from "next/link";
import { CheckCircle2, MessageCircle, Phone, Mail, Users, Clock } from "lucide-react";
import { CTA_LINKS } from "@/lib/cta-links";

const FEATURES = [
  "Personalised Support",
  "Exclusive VIP Offers",
  "Faster Assistance",
  "VIP Guidance",
] as const;

const CHANNELS = [
  { icon: MessageCircle, label: "Live Chat",  sub: "Avg. reply < 2 min",  accent: "#FF6B00" },
  { icon: Phone,         label: "Phone",      sub: "Direct VIP line",     accent: "#138808" },
  { icon: Mail,          label: "Email",      sub: "Priority inbox",      accent: "#FF6B00" },
] as const;

export default function VIPManager() {
  return (
    <section className="relative overflow-hidden bg-[#050B18] px-4 py-16 sm:px-6 md:py-24 lg:px-8">
      <div aria-hidden className="pointer-events-none absolute right-0 top-1/2 h-[400px] w-[400px] translate-x-1/2 -translate-y-1/2 rounded-full bg-[#FF6B00]/8 blur-2xl" />
      <div aria-hidden className="pointer-events-none absolute left-0 top-1/2 h-[320px] w-[320px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#138808]/6 blur-2xl" />

      <div className="relative z-10 mx-auto max-w-7xl">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* LEFT — Visual Panel */}
          <div className="relative mx-auto w-full max-w-sm lg:max-w-none">
            <div className="pointer-events-none absolute inset-0 rounded-3xl bg-[#FF6B00]/8 blur-3xl" />

            <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur-xl sm:p-8">
              {/* Top edge glow */}
              <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#FF6B00]/50 to-transparent" />

              {/* Manager profile */}
              <div className="mb-6 flex items-center gap-4">
                {/* Avatar */}
                <div className="relative shrink-0">
                  <div className="grid h-16 w-16 place-items-center overflow-hidden rounded-2xl border border-[#FF6B00]/30 bg-gradient-to-br from-[#FF6B00]/20 to-[#138808]/10">
                    <Users size={28} className="text-[#FF6B00]" strokeWidth={1.5} />
                  </div>
                  {/* Online dot */}
                  <span className="absolute -bottom-0.5 -right-0.5 h-4 w-4 rounded-full border-2 border-[#050B18] bg-[#138808]" />
                </div>
                <div>
                  <p className="text-base font-black text-white">Your VIP Manager</p>
                  <p className="text-xs font-semibold text-[#138808]">● Available Now</p>
                  <p className="mt-0.5 text-[11px] text-slate-500">Dedicated to your account</p>
                </div>
              </div>

              {/* Response time */}
              <div className="mb-5 flex items-center gap-3 rounded-xl border border-[#138808]/20 bg-[#138808]/8 px-4 py-3">
                <Clock size={16} className="shrink-0 text-[#138808]" strokeWidth={2} />
                <div>
                  <p className="text-xs font-bold text-white">Average Response Time</p>
                  <p className="text-[11px] text-slate-400">Under 5 minutes · 24/7 availability</p>
                </div>
              </div>

              {/* Contact channels */}
              <p className="mb-3 text-[10px] font-bold uppercase tracking-[0.14em] text-slate-500">Contact Options</p>
              <div className="mb-5 space-y-2">
                {CHANNELS.map(({ icon: Icon, label, sub, accent }) => (
                  <div
                    key={label}
                    className="group flex items-center justify-between rounded-xl border border-white/[0.06] bg-white/[0.04] px-4 py-3 transition-all duration-200 hover:border-white/15 hover:bg-white/[0.07]"
                  >
                    <div className="flex items-center gap-3">
                      <div
                        className="grid h-8 w-8 place-items-center rounded-lg border"
                        style={{ background: `${accent}15`, borderColor: `${accent}30`, color: accent }}
                      >
                        <Icon size={14} strokeWidth={2} />
                      </div>
                      <div>
                        <p className="text-sm font-bold text-white">{label}</p>
                        <p className="text-[10px] text-slate-500">{sub}</p>
                      </div>
                    </div>
                    <span className="text-[11px] font-bold" style={{ color: accent }}>Connect →</span>
                  </div>
                ))}
              </div>

              {/* CTA */}
              <Link
                href={CTA_LINKS.signup}
                className="flex w-full items-center justify-center gap-2 rounded-xl bg-[#FF6B00] py-3.5 text-sm font-bold text-white transition-all duration-200 hover:bg-[#FF8A00] hover:shadow-lg hover:shadow-[#FF6B00]/25"
              >
                Get My VIP Manager
                <span aria-hidden>&rarr;</span>
              </Link>
            </div>
          </div>

          {/* RIGHT — Content */}
          <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
            <span className="inline-flex items-center gap-2 rounded-full border border-[#FF6B00]/25 bg-[#FF6B00]/8 px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-[#FF6B00]">
              <Users size={11} strokeWidth={2} />
              Dedicated Service
            </span>

            <h2 className="mt-5 text-2xl font-extrabold leading-tight tracking-tight text-white md:text-3xl lg:text-4xl">
              Your Personal{" "}
              <span className="bg-gradient-to-r from-[#FF6B00] via-[#FF8A00] to-[#FF6B00] bg-clip-text text-transparent">
                VIP Manager
              </span>
            </h2>

            <p className="mt-4 max-w-md text-sm leading-relaxed text-slate-400 md:text-base">
              Enjoy a personalised experience with direct access to a dedicated VIP manager who assists with account support, rewards, promotions, and exclusive opportunities — available 24/7.
            </p>

            <ul className="mt-7 space-y-3.5">
              {FEATURES.map((f) => (
                <li key={f} className="flex items-center gap-3 text-sm font-semibold text-slate-300">
                  <CheckCircle2 size={17} className="shrink-0 text-[#FF6B00]" strokeWidth={2} />
                  {f}
                </li>
              ))}
            </ul>

            <Link
              href={CTA_LINKS.signup}
              className="mt-8 inline-flex items-center gap-2 rounded-xl bg-[#FF6B00] px-7 py-4 text-base font-bold text-white shadow-lg shadow-[#FF6B00]/20 transition-all duration-300 hover:scale-[1.02] hover:bg-[#FF8A00] hover:shadow-[#FF6B00]/35"
            >
              Become VIP
              <span aria-hidden>&rarr;</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
