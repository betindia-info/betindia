import { liveContent } from "@/data/live";

export default function LiveInPlayBetting() {
  const data = liveContent.inPlayBetting;

  return (
    <section className="relative overflow-hidden bg-[#050B18] px-4 py-16 sm:px-6 lg:px-8 border-t border-white/[0.04]">
      <div className="relative z-10 mx-auto max-w-5xl text-center">
        <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-slate-300 backdrop-blur-md">
          <span className="h-1.5 w-1.5 rounded-full bg-[#FF6B00]" />
          In-Play Action
        </span>

        <h2 className="mt-5 text-2xl font-extrabold tracking-tight text-white sm:text-3xl lg:text-4xl">
          Live Cricket Betting &{" "}
          <span className="bg-gradient-to-r from-[#FF6B00] to-[#138808] bg-clip-text text-transparent">
            In-Play Sports Betting
          </span>
        </h2>

        <div className="mx-auto mt-4 h-1 w-16 rounded-full bg-gradient-to-r from-[#FF6B00] to-[#138808]" />

        <p className="mx-auto mt-6 max-w-3xl text-sm leading-relaxed text-slate-400 whitespace-pre-line sm:text-base">
          {data.text}
        </p>
      </div>
    </section>
  );
}
