"use client";

import { FadeIn } from "./About";

const REVIEWS = [
  {
    author: "아침이슬",
    location: "수영구 남천동",
    text: "칭국장이 구수하먼서 간이 따끗아요",
    emoji: "😊",
  },
  {
    author: "브륵실즈",
    location: "남구 용당동",
    text: "많은 모임을 한는 곳으로 음식도 푸짐하지만 청국장 맛도 넘 맛있어요 비싼 야채도 리필 되구요",
    emoji: "🥰",
  },
  {
    author: "정기룡",
    location: "남구 대연제4동",
    text: "집 근처에 이런 맛집이 있다니 행운이에요. 매일 가고 싶은 곳입니다.",
    emoji: "👍",
  },
];

export default function Reviews() {
  return (
    <section id="reviews" className="section-y section-padding bg-[#F5E6D3]/40">
      <div className="max-w-5xl mx-auto">
        {/* 헤더 */}
        <FadeIn className="text-center mb-14">
          <p className="text-[#C4692A] text-sm font-semibold tracking-widest uppercase mb-3">
            Reviews
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-[#2C2416] mb-5">
            손님들의 이야기
          </h2>
          <div className="w-12 h-1 rounded-full bg-gradient-to-r from-[#8B4513] to-[#E8956D] mx-auto mb-4" />
          <p className="text-[#4A3728]/60 text-sm">당근마켓 실제 이용 후기</p>
        </FadeIn>

        {/* 후기 카드 */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {REVIEWS.map((r, i) => (
            <FadeIn key={r.author} delay={0.1 * i}>
              <div className="glass-card rounded-2xl p-6 h-full flex flex-col hover:shadow-md transition-shadow duration-300">
                {/* 따옴표 */}
                <div className="text-4xl text-[#C4692A]/30 font-serif leading-none mb-3">
                  "
                </div>
                <p className="text-[#2C2416] text-base leading-relaxed flex-1 mb-5">
                  {r.text}
                </p>
                <div className="flex items-center gap-3 pt-4 border-t border-[#C4692A]/10">
                  <div className="w-9 h-9 rounded-full bg-gradient-to-br from-[#C4692A] to-[#E8956D] flex items-center justify-center text-lg">
                    {r.emoji}
                  </div>
                  <div>
                    <p className="font-semibold text-[#2C2416] text-sm">
                      {r.author}
                    </p>
                    <p className="text-[#4A3728]/50 text-xs">{r.location}</p>
                  </div>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>

        {/* 당근 링크 */}
        <FadeIn delay={0.3} className="mt-10 text-center">
          <a
            href="https://www.daangn.com/kr/local-profile/%EB%8F%99%EB%A7%89%EA%B3%A8%EC%B2%AD%EA%B5%AD%EC%9E%A5-v1bozsmuhnye/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-[#C4692A]/30 text-[#C4692A] text-sm font-medium hover:bg-[#C4692A] hover:text-white hover:border-[#C4692A] transition-all duration-300"
          >
            🥕 당근마켓에서 더 많은 후기 보기
          </a>
        </FadeIn>
      </div>
    </section>
  );
}
