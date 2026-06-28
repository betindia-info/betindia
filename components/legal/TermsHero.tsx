import { FileText, ShieldCheck, Gamepad2, UserCheck } from "lucide-react";

const HIGHLIGHTS = [
  { icon: FileText,   text: "Transparent Policies" },
  { icon: ShieldCheck, text: "Secure Platform"     },
  { icon: Gamepad2,   text: "Responsible Gaming"   },
  { icon: UserCheck,  text: "User Protection"       },
] as const;

const DEFAULT_CONTENT = {
  eyebrow: "Legal Information",
  title: "Terms & Conditions",
  description: "Please read these terms carefully before using BetIndia services. By accessing or using the platform, you agree to comply with the rules, policies, and conditions outlined below."
};

export default function TermsHero({ content }: { content?: Partial<typeof DEFAULT_CONTENT> | null }) {
  const data = { ...DEFAULT_CONTENT, ...(content ?? {}) };

  return (
    <section className="relative overflow-hidden bg-[#050B18] px-4 pb-14 pt-16 sm:px-6 md:pb-20 md:pt-20 lg:px-8">
      <div aria-hidden className="pointer-events-none absolute -left-40 -top-40 h-[500px] w-[500px] rounded-full bg-[#FF6B00]/8 blur-3xl" />
      <div aria-hidden className="pointer-events-none absolute -right-40 bottom-0 h-[400px] w-[400px] rounded-full bg-[#138808]/7 blur-3xl" />
      <div aria-hidden className="pointer-events-none absolute left-1/2 top-0 h-px w-3/4 -translate-x-1/2 bg-gradient-to-r from-transparent via-[#FF6B00]/20 to-transparent" />

      <div className="relative z-10 mx-auto max-w-4xl text-center">

        <h1 className="mt-6 text-3xl font-extrabold leading-tight tracking-tight text-white sm:text-4xl md:text-5xl">
            {data.eyebrow}
          </h1>

        <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-slate-400">
          {data.title}
        </p>

        <p className="mt-4 text-xs font-semibold text-slate-600">
          Last Updated: June 2026
        </p>

        <div className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-4">
          {HIGHLIGHTS.map(({ icon: Icon, text }) => (
            <div
              key={text}
              className="flex items-center gap-2.5 rounded-xl border border-white/[0.07] bg-white/[0.04] px-4 py-3 backdrop-blur-md"
            >
              <span className="grid h-7 w-7 shrink-0 place-items-center rounded-lg border border-[#FF6B00]/30 bg-[#FF6B00]/10 text-[#FF6B00]">
                <Icon size={13} strokeWidth={2} />
              </span>
              <span className="text-xs font-semibold text-slate-300">{text}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
