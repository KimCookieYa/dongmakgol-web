"use client";

import Image from "next/image";
import HeroImage from "@/image/hero.jpeg";

export default function Hero() {
  return (
    <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden">
      {/* 배경 이미지 */}
      <Image
        src={HeroImage}
        alt="동막골청국장 배경"
        fill
        className="object-cover"
        priority
      />

      {/* 이미지 오버레이 (텍스트 가독성을 위해) */}
      <div className="absolute inset-0 z-0 bg-black/40" />

      {/* 콘텐츠 */}
      <div className="relative z-30 text-center px-6 max-w-3xl mx-auto flex flex-col items-center">
        {/* 배지 */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/30 bg-white/10 backdrop-blur-sm text-white/90 text-sm font-medium mb-6">
          <span className="w-1.5 h-1.5 rounded-full bg-[#FFDC96]" />
          부산 남구 대연동 맛집
        </div>

        {/* 가게명 */}
        <h1
          className="text-5xl md:text-7xl font-bold text-white mb-5 leading-tight tracking-tight"
          style={{ textShadow: "0 2px 20px rgba(0,0,0,0.5)" }}
        >
          동막골 청국장
        </h1>

        {/* 슬로건 */}
        <p className="text-xl md:text-2xl text-white/90 mb-3 font-light leading-relaxed">
          어머니의 손맛,
          <br className="md:hidden" /> 매일 따뜻한 한 끼
        </p>
        <p className="text-white/80 text-sm md:text-base mb-12">
          구수하고 진한 청국장이 일품인 집밥 한 상
        </p>

        {/* CTA 버튼 */}
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <a
            href="#menu"
            className="px-8 py-3.5 rounded-full bg-white text-[#8B4513] font-semibold text-base hover:bg-[#FFF8F0] transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            메뉴 보기
          </a>
          <a
            href="tel:051-949-5949"
            className="px-8 py-3.5 rounded-full bg-white/20 border border-white/40 text-white font-semibold text-base hover:bg-white/30 transition-all duration-300 backdrop-blur-sm"
          >
            📞 051-949-5949
          </a>
        </div>
      </div>

      {/* 하단 페이드 */}
      <div
        className="absolute bottom-0 left-0 right-0 h-32 z-20 pointer-events-none"
        style={{ background: "linear-gradient(to top, #FFF8F0, transparent)" }}
      />
    </section>
  );
}
