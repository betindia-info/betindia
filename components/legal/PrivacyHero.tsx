import { ShieldCheck, Lock, Eye, FileText } from "lucide-react";

const HIGHLIGHTS = [
  { icon: ShieldCheck, text: "Secure Platform" },
  { icon: Lock,        text: "Data Protection" },
  { icon: Eye,         text: "Privacy Focused" },
  { icon: FileText,    text: "Transparent"      },
] as const;

const DEFAULT_CONTENT = {
  eyebrow: "Legal Information",
  title: "Privacy Policy",
  description: "Your privacy is important to us. Learn how BetIndia collects, stores, uses, and protects your information while providing a secure gaming experience."
};

export default function PrivacyHero({ content }: { content?: Partial<typeof DEFAULT_CONTENT> | null }) {
  const data = { ...DEFAULT_CONTENT, ...(content ?? {}) };

  return (
    <section className="relative overflow-hidden bg-[#050B18] px-4 pb-14 pt-16 sm:px-6 md:pb-20 md:pt-20 lg:px-8">
      <div aria-hidden className="pointer-events-none absolute -left-40 -top-40 h-[500px] w-[500px] rounded-full bg-[#FF6B00]/8 blur-3xl" />
      <div aria-hidden className="pointer-events-none absolute -right-40 bottom-0 h-[400px] w-[400px] rounded-full bg-[#138808]/7 blur-3xl" />
      <div aria-hidden className="pointer-events-none absolute left-1/2 top-0 h-px w-3/4 -translate-x-1/2 bg-gradient-to-r from-transparent via-[#FF6B00]/20 to-transparent" />

      <div className="relative z-10 mx-auto max-w-4xl text-center">
        <span className="inline-flex items-center gap-2 rounded-full border border-[#FF6B00]/25 bg-[#FF6B00]/8 px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-[#FF6B00]">
          <FileText size={11} strokeWidth={2} />
          {data.eyebrow}
        </span>

        <h1 className="mt-6 text-3xl font-extrabold leading-tight tracking-tight text-white sm:text-4xl md:text-5xl">
          {data.title.includes("Policy") ? (
            <>
              {data.title.split("Policy")[0]}
              <span className="bg-gradient-to-r from-[#FF6B00] via-[#FF8A00] to-[#FF6B00] bg-clip-text text-transparent">
                Policy
              </span>
              {data.title.split("Policy")[1]}
            </>
          ) : (
            data.title
          )}
        </h1>

        <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-slate-400">
          {data.description}
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
