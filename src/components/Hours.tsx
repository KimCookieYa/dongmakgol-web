"use client";

import { useMemo } from "react";
import { FadeIn } from "./About";

const HOURS = [
  {
    day: "월",
    open: "11:00",
    close: "21:00",
    break: "15:00 - 17:00",
    closed: false,
  },
  {
    day: "화",
    open: "11:00",
    close: "21:00",
    break: "15:00 - 17:00",
    closed: false,
  },
  {
    day: "수",
    open: "11:00",
    close: "21:00",
    break: "15:00 - 17:00",
    closed: false,
  },
  {
    day: "목",
    open: "11:00",
    close: "21:00",
    break: "15:00 - 17:00",
    closed: false,
  },
  {
    day: "금",
    open: "11:00",
    close: "21:00",
    break: "15:00 - 17:00",
    closed: false,
  },
  {
    day: "토",
    open: "11:00",
    close: "21:00",
    break: "15:00 - 17:00",
    closed: false,
  },
  { day: "일", open: null, close: null, break: null, closed: true },
];

function useIsOpen() {
  return useMemo(() => {
    const now = new Date();
    const day = now.getDay(); // 0=일, 1=월 ...
    if (day === 0) return { open: false, reason: "오늘은 정기 휴무일입니다" };

    const h = now.getHours();
    const m = now.getMinutes();
    const total = h * 60 + m;

    const openTime = 11 * 60;
    const closeTime = 21 * 60;
    const breakStart = 15 * 60;
    const breakEnd = 17 * 60;

    if (total < openTime || total >= closeTime)
      return { open: false, reason: "현재 영업 시간이 아닙니다" };
    if (total >= breakStart && total < breakEnd)
      return { open: false, reason: "휴게 시간입니다 (15:00 - 17:00)" };

    return { open: true, reason: "현재 영업 중입니다" };
  }, []);
}

export default function Hours() {
  const { open, reason } = useIsOpen();
  const todayIdx = new Date().getDay(); // 0=일

  return (
    <section id="hours" className="section-y section-padding bg-[#FFF8F0]">
      <div className="max-w-3xl mx-auto">
        <FadeIn className="text-center mb-14">
          <p className="text-[#C4692A] text-sm font-semibold tracking-widest uppercase mb-3">
            Hours
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-[#2C2416] mb-5">
            영업시간
          </h2>
          <div className="w-12 h-1 rounded-full bg-gradient-to-r from-[#8B4513] to-[#E8956D] mx-auto" />
        </FadeIn>

        {/* 현재 상태 뱃지 */}
        <FadeIn delay={0.05} className="flex justify-center mb-8">
          <div
            className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold ${
              open
                ? "bg-green-100 text-green-700 border border-green-200"
                : "bg-red-50 text-red-600 border border-red-100"
            }`}
          >
            <span
              className={`w-2 h-2 rounded-full ${open ? "bg-green-500 animate-pulse" : "bg-red-400"}`}
            />
            {reason}
          </div>
        </FadeIn>

        {/* 시간표 */}
        <FadeIn delay={0.1}>
          <div className="rounded-2xl overflow-hidden border border-[#C4692A]/15 shadow-sm">
            {HOURS.map((row, i) => {
              // 0=일요일, 1=월 ... 변환
              const mappedDay = i === 6 ? 0 : i + 1;
              const isToday = todayIdx === mappedDay;
              return (
                <div
                  key={row.day}
                  className={`flex items-center justify-between px-6 py-4 border-b last:border-b-0 border-[#C4692A]/10 transition-colors ${
                    isToday
                      ? "bg-[#8B4513]/8"
                      : i % 2 === 0
                        ? "bg-white"
                        : "bg-[#FFF8F0]/60"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <span
                      className={`w-9 text-center text-sm font-bold ${
                        isToday
                          ? "text-[#8B4513]"
                          : row.closed
                            ? "text-red-400"
                            : "text-[#2C2416]"
                      }`}
                    >
                      {row.day}
                    </span>
                    {isToday && (
                      <span className="text-[10px] bg-[#8B4513] text-white px-2 py-0.5 rounded-full">
                        오늘
                      </span>
                    )}
                  </div>
                  {row.closed ? (
                    <span className="text-red-400 text-sm font-medium">
                      비정기 휴무
                    </span>
                  ) : (
                    <div className="text-right">
                      <p className="text-[#2C2416] text-sm font-semibold">
                        {row.open} – {row.close}
                      </p>
                      <p className="text-[#4A3728]/50 text-xs mt-0.5">
                        휴게 {row.break}
                      </p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </FadeIn>

        {/* 전화 */}
        <FadeIn delay={0.2} className="mt-8 text-center">
          <p className="text-[#4A3728]/60 text-sm mb-4">
            예약·문의는 전화로 연락주세요
          </p>
          <a
            href="tel:051-949-5949"
            className="inline-flex items-center gap-3 px-8 py-3.5 rounded-full bg-[#8B4513] text-white font-semibold hover:bg-[#C4692A] transition-colors duration-300 shadow-md hover:shadow-lg text-lg"
          >
            📞 051-949-5949
          </a>
        </FadeIn>
      </div>
    </section>
  );
}
