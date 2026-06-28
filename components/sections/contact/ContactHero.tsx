import { CheckCircle2 } from "lucide-react";
import { contactUsContent } from "@/data/ContactUs";

const TRUST_POINTS = [
  "Fast Support",
  "Secure Assistance",
  "24/7 Platform Access",
  "Player-Focused Service",
] as const;

export default function ContactHero({
  content,
}: {
  content?: Partial<typeof contactUsContent.hero> | null;
}) {
  const data = { ...contactUsContent.hero, ...(content ?? {}) };

  return (
    <section className="relative overflow-hidden bg-[#050B18] px-4 py-20 sm:px-6 lg:px-8">
      <div aria-hidden className="pointer-events-none absolute -left-32 -top-32 h-[500px] w-[500px] rounded-full bg-[#FF6B00]/12 blur-3xl" />
      <div aria-hidden className="pointer-events-none absolute -bottom-32 -right-32 h-[500px] w-[500px] rounded-full bg-[#138808]/10 blur-3xl" />

      <div className="relative z-10 mx-auto max-w-7xl">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
          <div className="flex flex-col items-center text-center lg:items-start lg:text-left">

            <h1 className="mt-6 text-3xl font-extrabold leading-[1.05] tracking-tight text-white sm:text-4xl md:text-5xl">
            {data.eyebrow}
          </h1>

          <p className="mt-5 max-w-md text-base leading-relaxed text-slate-300 md:text-lg">
              Contact BetIndia{" "}
              <span className="bg-gradient-to-r from-[#FF6B00] to-[#138808] bg-clip-text text-transparent">
                Customer Support
              </span>
            </p>


            <ul className="mt-8 space-y-3">
              {TRUST_POINTS.map((point) => (
                <li key={point} className="flex items-center gap-3">
                  <CheckCircle2 size={18} strokeWidth={2} className="shrink-0 text-[#138808]" />
                  <span className="text-sm font-semibold text-slate-200">{point}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex items-center justify-center">
            <div className="relative w-full max-w-md">
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-[#FF6B00]/20 via-transparent to-[#138808]/15 blur-xl" />
              <div
                className="relative overflow-hidden rounded-3xl p-px"
                style={{ background: "linear-gradient(135deg, rgba(255,107,0,0.4) 0%, rgba(255,255,255,0.06) 50%, rgba(19,136,8,0.25) 100%)" }}
              >
                <div className="relative overflow-hidden rounded-[calc(1.5rem-1px)] bg-[#081425]/95 p-8 backdrop-blur-xl">
                  <div className="relative space-y-5">
                    <div className="flex items-center gap-3">
                      <div className="grid h-11 w-11 place-items-center rounded-xl border border-[#FF6B00]/30 bg-[#FF6B00]/12">
                        <span className="text-lg">💬</span>
                      </div>
                      <div>
                        <p className="text-sm font-bold text-white">BetIndia Support</p>
                        <span className="inline-flex items-center gap-1.5 text-xs text-[#138808]">
                          <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-[#138808]" />
                          Online Now · 24/7
                        </span>
                      </div>
                    </div>

                    <div className="space-y-3">
                      <div className="flex justify-end">
                        <div className="max-w-[75%] rounded-2xl rounded-tr-sm bg-[#FF6B00]/20 px-4 py-2.5">
                          <p className="text-xs text-slate-200">Hi, I need help with my withdrawal.</p>
                        </div>
                      </div>
                      <div className="flex justify-start">
                        <div className="max-w-[75%] rounded-2xl rounded-tl-sm border border-white/8 bg-white/[0.06] px-4 py-2.5">
                          <p className="text-xs text-slate-300">Of course! I can help you with that right away.</p>
                        </div>
                      </div>
                      <div className="flex justify-start">
                        <div className="max-w-[75%] rounded-2xl rounded-tl-sm border border-[#138808]/25 bg-[#138808]/10 px-4 py-2.5">
                          <p className="text-xs text-[#4ade80]">✓ Found your account. Processing your request now!</p>
                        </div>
                      </div>
                    </div>

                    <div className="grid grid-cols-3 gap-2 border-t border-white/8 pt-4">
                      {[
                        { val: "< 2m", label: "Avg Reply" },
                        { val: "24/7", label: "Available" },
                        { val: "99%", label: "Satisfaction" },
                      ].map(({ val, label }) => (
                        <div key={label} className="text-center">
                          <p className="text-sm font-black text-[#FF6B00]">{val}</p>
                          <p className="text-[10px] text-slate-500">{label}</p>
                        </div>
                      ))}
                    </div>
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
