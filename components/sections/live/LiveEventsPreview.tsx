"use client";

import { useCallback, useEffect, useState } from "react";
import Link from "next/link";
import { RefreshCw, WifiOff, Wifi } from "lucide-react";
import {
  fetchCurrentMatches,
  formatMatchType,
  isLiveMatch,
  type Match,
} from "@/lib/cricapi";
import { CTA_LINKS } from "@/lib/cta-links";
import { liveContent } from "@/data/live";

const REFRESH_MS = 60_000;
const MAX_CARDS = 3;

function SkeletonCard() {
  return (
    <div className="animate-pulse rounded-2xl border border-white/[0.08] bg-white/[0.03] p-5">
      <div className="mb-4 flex items-center justify-between">
        <div className="h-4 w-16 rounded bg-white/10" />
        <div className="h-5 w-12 rounded-full bg-white/10" />
      </div>
      <div className="mb-1 h-4 w-40 rounded bg-white/10" />
      <div className="mb-4 h-3 w-28 rounded bg-white/10" />
      <div className="mb-4 h-9 w-full rounded-xl bg-white/10" />
      <div className="grid grid-cols-2 gap-2">
        <div className="h-12 rounded-xl bg-white/10" />
        <div className="h-12 rounded-xl bg-white/10" />
      </div>
      <div className="mt-3 h-3 w-24 mx-auto rounded bg-white/10" />
    </div>
  );
}

function EventCard({ match }: { match: Match }) {
  const live = isLiveMatch(match);
  const team1 = match.teams[0] ?? "TBD";
  const team2 = match.teams[1] ?? "TBD";

  const scoreMap: Record<string, { r: number; w: number; o: number }> = {};
  match.score?.forEach((s) => {
    const key = s.inning.toLowerCase().includes(team1.toLowerCase()) ? team1 : team2;
    scoreMap[key] = { r: s.r, w: s.w, o: s.o };
  });

  const scoreStr =
    scoreMap[team1]
      ? `${scoreMap[team1].r}/${scoreMap[team1].w} (${scoreMap[team1].o})`
      : "—";

  const sportEmoji =
    match.matchType === "t20" || match.matchType === "odi" || match.matchType === "test" || match.matchType === "t20i"
      ? "🏏"
      : "🏆";

  return (
    <div className="group relative overflow-hidden rounded-2xl border border-white/[0.08] bg-white/[0.03] p-5 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-[#FF6B00]/30 hover:bg-white/[0.06] hover:shadow-2xl hover:shadow-[#FF6B00]/8">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#FF6B00]/40 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

      {/* Sport + Live badge */}
      <div className="mb-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="text-base">{sportEmoji}</span>
          <span className="text-[10px] font-semibold uppercase tracking-wide text-slate-500">
            {formatMatchType(match.matchType)}
          </span>
        </div>
        {live ? (
          <div className="flex items-center gap-1.5 rounded-full border border-[#FF6B00]/40 bg-[#FF6B00]/12 px-2.5 py-1">
            <span className="relative flex h-1.5 w-1.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#FF6B00] opacity-75" />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-[#FF6B00]" />
            </span>
            <span className="text-[9px] font-black uppercase tracking-[0.14em] text-[#FF6B00]">Live</span>
          </div>
        ) : (
          <span className="rounded-full border border-[#138808]/30 bg-[#138808]/10 px-2.5 py-1 text-[9px] font-bold text-[#138808]">
            Upcoming
          </span>
        )}
      </div>

      {/* Match name */}
      <h3 className="mb-1 line-clamp-1 text-sm font-bold text-white">{match.name}</h3>
      <p className="mb-4 line-clamp-1 text-[10px] text-slate-500">{match.status}</p>

      {/* Score */}
      <div className="mb-4 flex items-center justify-between rounded-xl border border-white/[0.06] bg-white/[0.03] px-3 py-2.5">
        <div className="min-w-0">
          <p className="truncate text-xs font-bold text-white">{team1}</p>
          <p className="text-[10px] text-slate-400">{scoreStr}</p>
        </div>
        <span className="mx-2 text-[10px] font-black text-slate-600">vs</span>
        <div className="min-w-0 text-right">
          <p className="truncate text-xs font-bold text-white">{team2}</p>
        </div>
      </div>

      {/* Pseudo odds chips */}
      <div className="grid grid-cols-2 gap-2">
        {[team1, team2].map((team) => (
          <button
            key={team}
            className="flex flex-col items-center gap-0.5 rounded-xl border border-white/[0.08] bg-white/[0.04] py-2.5 transition-all duration-200 hover:border-[#FF6B00]/40 hover:bg-[#FF6B00]/10 hover:scale-[1.03]"
          >
            <span className="max-w-full truncate px-1 text-[8px] font-semibold text-slate-500">
              {team}
            </span>
            <span className="text-sm font-black text-white">Bet →</span>
          </button>
        ))}
      </div>

      <p className="mt-3 text-center text-[10px] font-semibold text-slate-600">
        Multiple markets available
      </p>
    </div>
  );
}

export default function LiveEventsPreview() {
  const [matches, setMatches] = useState<Match[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [refreshing, setRefreshing] = useState(false);
  const [lastUpdated, setLastUpdated] = useState<Date | null>(null);

  const load = useCallback(async (isManual = false) => {
    if (isManual) setRefreshing(true);
    try {
      const data = await fetchCurrentMatches();
      const live = data.filter(isLiveMatch);
      setMatches((live.length > 0 ? live : data).slice(0, MAX_CARDS));
      setError(null);
      setLastUpdated(new Date());
    } catch {
      setError("Unable to load live matches.");
    } finally {
      setLoading(false);
      setRefreshing(false);
    }
  }, []);

  useEffect(() => {
    load();
    const id = setInterval(() => load(), REFRESH_MS);
    return () => clearInterval(id);
  }, [load]);

  return (
    <section id="live-events" className="relative overflow-hidden bg-[#050B18] px-4 py-16 sm:px-6 md:py-20 lg:px-8">
      <div aria-hidden className="pointer-events-none absolute left-1/2 top-0 h-px w-3/4 -translate-x-1/2 bg-gradient-to-r from-transparent via-[#FF6B00]/20 to-transparent" />

      <div className="relative z-10 mx-auto max-w-7xl">
        {/* Header */}
        <div className="mb-8">
          <span className="inline-flex items-center gap-2 rounded-full border border-[#FF6B00]/25 bg-[#FF6B00]/8 px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-[#FF6B00]">
            <span className="relative flex h-1.5 w-1.5 shrink-0">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#FF6B00] opacity-75" />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-[#FF6B00]" />
            </span>
            Live Right Now
          </span>
          <h2 className="mt-4 text-2xl font-extrabold tracking-tight text-white md:text-3xl">
            Featured{" "}
            <span className="bg-gradient-to-r from-[#FF6B00] via-[#FF8A00] to-[#FF6B00] bg-clip-text text-transparent">
              Live Events
            </span>
          </h2>
          <p className="mt-4 max-w-3xl text-sm leading-relaxed text-slate-400 sm:text-base">
            {liveContent.featuredEvents.intro}
          </p>
          <p className="mt-3 max-w-3xl text-sm leading-relaxed text-slate-400 sm:text-base">
            {liveContent.featuredEvents.followText}
          </p>
        </div>

        <div className="mb-10 flex flex-col items-start justify-end gap-4 sm:flex-row sm:items-center">
          <div className="flex items-center gap-3 sm:ml-auto">
            {lastUpdated && !loading && (
              <span className="text-[11px] text-slate-600">
                Updated {lastUpdated.toLocaleTimeString("en-IN", { hour: "2-digit", minute: "2-digit" })}
              </span>
            )}
            <button
              onClick={() => load(true)}
              disabled={refreshing || loading}
              className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-xs font-semibold text-slate-300 backdrop-blur-md transition-all duration-200 hover:border-[#FF6B00]/40 hover:text-[#FF6B00] disabled:opacity-50"
            >
              <RefreshCw size={12} className={refreshing ? "animate-spin" : ""} strokeWidth={2} />
              Refresh
            </button>
            <Link
              href={CTA_LINKS.sports}
              className="text-sm font-semibold text-[#FF6B00] transition-colors hover:text-[#FF8A00]"
            >
              View All →
            </Link>
          </div>
        </div>

        {/* Loading */}
        {loading && (
          <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
            {Array.from({ length: MAX_CARDS }).map((_, i) => (
              <SkeletonCard key={i} />
            ))}
          </div>
        )}

        {/* Error */}
        {!loading && error && (
          <div className="flex flex-col items-center justify-center gap-4 rounded-2xl border border-white/10 bg-white/[0.03] py-16 text-center">
            <span className="grid h-12 w-12 place-items-center rounded-xl border border-[#FF6B00]/30 bg-[#FF6B00]/10 text-[#FF6B00]">
              <WifiOff size={20} strokeWidth={1.7} />
            </span>
            <p className="text-sm font-medium text-slate-400">{error}</p>
            <button
              onClick={() => load(true)}
              className="rounded-xl border border-[#FF6B00]/30 bg-[#FF6B00]/10 px-5 py-2 text-xs font-bold text-[#FF6B00] transition-all hover:bg-[#FF6B00] hover:text-white"
            >
              Try Again
            </button>
          </div>
        )}

        {/* Empty */}
        {!loading && !error && matches.length === 0 && (
          <div className="flex flex-col items-center justify-center gap-4 rounded-2xl border border-white/10 bg-white/[0.03] py-16 text-center">
            <span className="grid h-12 w-12 place-items-center rounded-xl border border-[#138808]/30 bg-[#138808]/10 text-[#138808]">
              <Wifi size={20} strokeWidth={1.7} />
            </span>
            <p className="text-sm font-medium text-slate-400">No live matches available.</p>
          </div>
        )}

        {/* Data */}
        {!loading && !error && matches.length > 0 && (
          <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
            {matches.map((match) => (
              <EventCard key={match.id} match={match} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
