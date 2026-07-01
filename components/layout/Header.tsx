"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { X } from "lucide-react";
import { CTA_LINKS } from "@/lib/cta-links";

const NAV_LINKS = [
  { label: "Sports",      href: "/sports" },
  { label: "Casino",      href: "/casino" },
  { label: "Promotions",  href: "/promotions" },
  { label: "VIP",         href: "/vip" },
] as const;

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  const isActive = (href: string) => pathname === href;

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#050B18]/95 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">

        {/* Logo */}
        <Link href="/" className="flex items-center" onClick={() => setMenuOpen(false)}>
          <Image
            src="/logo/betindialogo.png"
            alt="BetIndia"
            width={180}
            height={54}
            priority
            className="h-auto w-auto"
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-8 md:flex">
          {NAV_LINKS.map(({ label, href }) => (
            <Link
              key={href}
              href={href}
              className={[
                "relative text-sm font-semibold transition-colors duration-200",
                isActive(href)
                  ? "text-[#FF6B00]"
                  : "text-slate-300 hover:text-white",
              ].join(" ")}
            >
              {label}
              {/* Active underline */}
              <span
                className={[
                  "absolute -bottom-1 left-0 h-px w-full rounded-full bg-[#FF6B00] transition-opacity duration-200",
                  isActive(href) ? "opacity-100" : "opacity-0",
                ].join(" ")}
              />
            </Link>
          ))}
        </nav>

        {/* Desktop Auth Buttons */}
        <div className="hidden items-center gap-3 md:flex">
          <Link
            href="/login"
            className={[
              "rounded-lg border px-4 py-2 text-sm font-semibold transition-all duration-200",
              isActive("/login")
                ? "border-[#FF6B00] text-[#FF6B00]"
                : "border-white/20 text-white hover:border-[#FF6B00] hover:text-[#FF6B00]",
            ].join(" ")}
          >
            Login
          </Link>
          <Link
            href={CTA_LINKS.signup}
            className="rounded-lg bg-[#FF6B00] px-5 py-2 text-sm font-semibold text-white transition-all duration-200 hover:bg-[#FF8A00] hover:shadow-lg hover:shadow-[#FF6B00]/25"
          >
            Sign Up
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="grid h-11 w-11 place-items-center rounded-lg border border-white/10 text-white transition hover:border-white/30 md:hidden"
          onClick={() => setMenuOpen((v) => !v)}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
        >
          {menuOpen ? <X size={18} /> : <span className="text-lg leading-none">☰</span>}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="border-t border-white/10 bg-[#050B18] md:hidden">
          <div className="flex flex-col gap-1 px-4 py-4 sm:px-6">
            {NAV_LINKS.map(({ label, href }) => (
              <Link
                key={href}
                href={href}
                onClick={() => setMenuOpen(false)}
                className={[
                  "rounded-xl px-4 py-3 text-sm font-semibold transition-colors duration-200",
                  isActive(href)
                    ? "bg-[#FF6B00]/10 text-[#FF6B00]"
                    : "text-slate-300 hover:bg-white/5 hover:text-white",
                ].join(" ")}
              >
                {label}
              </Link>
            ))}

            <div className="mt-3 flex flex-col gap-2 border-t border-white/10 pt-3">
              <Link
                href="/login"
                onClick={() => setMenuOpen(false)}
                className={[
                  "rounded-lg border px-4 py-2.5 text-center text-sm font-semibold transition-all duration-200",
                  isActive("/login")
                    ? "border-[#FF6B00] text-[#FF6B00]"
                    : "border-white/20 text-white hover:border-[#FF6B00] hover:text-[#FF6B00]",
                ].join(" ")}
              >
                Login
              </Link>
              <Link
                href={CTA_LINKS.signup}
                onClick={() => setMenuOpen(false)}
                className="rounded-lg bg-[#FF6B00] px-4 py-2.5 text-center text-sm font-semibold text-white transition-all duration-200 hover:bg-[#FF8A00]"
              >
                Sign Up
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
