"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";

const NAV_LINKS = [
  { label: "소개", href: "#about" },
  { label: "메뉴", href: "#menu" },
  { label: "영업시간", href: "#hours" },
  { label: "오시는길", href: "#location" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-[#FFF8F0]/95 backdrop-blur-md shadow-sm border-b border-[#C4692A]/10"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-5 md:px-8 h-16 flex items-center justify-between">
        {/* 로고 */}
        <motion.a
          href="#"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className={`font-bold text-lg tracking-tight transition-colors duration-300 ${
            scrolled ? "text-[#8B4513]" : "text-white"
          }`}
        >
          동막골청국장
        </motion.a>

        {/* 데스크탑 네비게이션 */}
        <nav className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link, i) => (
            <motion.a
              key={link.href}
              href={link.href}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.1 * i }}
              className={`text-sm font-medium hover:text-[#C4692A] transition-colors duration-200 relative group ${
                scrolled ? "text-[#2C2416]/80" : "text-white/90"
              }`}
            >
              {link.label}
              <span className="absolute -bottom-0.5 left-0 w-0 h-0.5 bg-[#C4692A] transition-all duration-300 group-hover:w-full" />
            </motion.a>
          ))}
          <motion.a
            href="tel:051-949-5949"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.5 }}
            className="text-sm font-semibold px-4 py-2 rounded-full bg-[#8B4513] text-white hover:bg-[#C4692A] transition-colors duration-200"
          >
            전화 예약
          </motion.a>
        </nav>

        {/* 모바일 햄버거 */}
        <button
          type="button"
          className={`md:hidden flex flex-col gap-1.5 p-2 rounded-lg transition-colors ${
            scrolled ? "text-[#8B4513]" : "text-white"
          }`}
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-label="메뉴 열기"
        >
          <span
            className={`block w-5 h-0.5 bg-current transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-2" : ""}`}
          />
          <span
            className={`block w-5 h-0.5 bg-current transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`}
          />
          <span
            className={`block w-5 h-0.5 bg-current transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`}
          />
        </button>
      </div>

      {/* 모바일 드로어 */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-[#FFF8F0]/98 backdrop-blur-md border-t border-[#C4692A]/10 overflow-hidden"
          >
            <div className="px-5 py-4 flex flex-col gap-4">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="text-[#2C2416] font-medium py-1 hover:text-[#C4692A] transition-colors"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="tel:051-949-5949"
                className="mt-1 text-center font-semibold px-4 py-2.5 rounded-full bg-[#8B4513] text-white hover:bg-[#C4692A] transition-colors"
              >
                전화 예약 — 051-949-5949
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
