import { Zap, Users, TrendingUp, Gift, Headphones, Crown, type LucideIcon } from "lucide-react";

type Benefit = {
  icon: LucideIcon;
  title: string;
  description: string;
  accent: "#FF6B00" | "#138808";
};

const BENEFITS: Benefit[] = [
  {
    icon: Zap,
    title: "Faster Withdrawals",
    description: "Priority withdrawal processing for a smoother, faster experience. VIP members never wait in line.",
    accent: "#FF6B00",
  },
  {
    icon: Users,
    title: "Personal Manager",
    description: "Get dedicated assistance from your own VIP account manager available whenever you need support.",
    accent: "#138808",
  },
  {
    icon: TrendingUp,
    title: "Higher Limits",
    description: "Access significantly increased betting, deposit, and withdrawal limits designed for serious players.",
    accent: "#FF6B00",
  },
  {
    icon: Gift,
    title: "Exclusive Promotions",
    description: "Receive personalized bonuses, enhanced cashback, and VIP-only offers unavailable to regular members.",
    accent: "#138808",
  },
  {
    icon: Headphones,
    title: "Priority Support",
    description: "Skip the queue with fast-track customer support access via a dedicated VIP hotline and live chat.",
    accent: "#FF6B00",
  },
  {
    icon: Crown,
    title: "Special Rewards",
    description: "Unlock exclusive gifts, event invitations, loyalty rewards, and tailored seasonal promotions.",
    accent: "#138808",
  },
];

export default function VIPBenefits() {
  return (
    <section id="vip-benefits" className="relative overflow-hidden bg-[#050B18] px-4 py-16 sm:px-6 md:py-24 lg:px-8">
      <div aria-hidden className="pointer-events-none absolute left-0 top-1/2 h-[360px] w-[360px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#FF6B00]/6 blur-2xl" />
      <div aria-hidden className="pointer-events-none absolute right-0 top-1/2 h-[360px] w-[360px] translate-x-1/2 -translate-y-1/2 rounded-full bg-[#138808]/6 blur-2xl" />

      <div className="relative z-10 mx-auto max-w-7xl">
        {/* Header */}
        <div className="mb-12 text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-[#FF6B00]/25 bg-[#FF6B00]/8 px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-[#FF6B00]">
            <Crown size={11} strokeWidth={2} />
            Exclusive Privileges
          </span>
          <h2 className="mt-5 text-2xl font-extrabold leading-tight tracking-tight text-white md:text-3xl lg:text-4xl">
            VIP{" "}
            <span className="bg-gradient-to-r from-[#FF6B00] via-[#FF8A00] to-[#FF6B00] bg-clip-text text-transparent">
              Benefits
            </span>
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-slate-400 md:text-base">
            Enjoy premium advantages designed exclusively for our most valued players.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {BENEFITS.map(({ icon: Icon, title, description, accent }) => {
            const isOrange = accent === "#FF6B00";
            return (
              <div
                key={title}
                className={[
                  "group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur-xl",
                  "transition-all duration-300 hover:-translate-y-1.5 hover:bg-white/[0.07]",
                  isOrange
                    ? "hover:border-[#FF6B00]/45 hover:shadow-2xl hover:shadow-[#FF6B00]/10"
                    : "hover:border-[#138808]/45 hover:shadow-2xl hover:shadow-[#138808]/10",
                ].join(" ")}
              >
                {/* Top edge glow */}
                <div
                  className="pointer-events-none absolute inset-x-0 top-0 h-px opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                  style={{ background: `linear-gradient(90deg, transparent, ${accent}, transparent)` }}
                />
                {/* Corner glow */}
                <div
                  className="pointer-events-none absolute -right-6 -top-6 h-24 w-24 rounded-full opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100"
                  style={{ backgroundColor: `${accent}20` }}
                />

                {/* Icon */}
                <div
                  className="mb-5 grid h-13 w-13 place-items-center rounded-2xl border transition-all duration-300 group-hover:scale-110 group-hover:rotate-3"
                  style={{
                    width: "3.25rem",
                    height: "3.25rem",
                    background: `${accent}18`,
                    borderColor: `${accent}35`,
                    color: accent,
                    boxShadow: `0 4px 20px ${accent}18`,
                  }}
                >
                  <Icon size={22} strokeWidth={1.7} />
                </div>

                <h3 className="mb-2 text-base font-bold text-white">{title}</h3>
                <p className="text-sm leading-relaxed text-slate-400">{description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
