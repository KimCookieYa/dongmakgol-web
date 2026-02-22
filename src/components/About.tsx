"use client";

import { useRef } from "react";
import { motion, useInView } from "motion/react";
import AboutImage from "@/image/about.jpeg";
import Image from "next/image";

const FEATURES = [
  { icon: "🍚", title: "셀프 반찬", desc: "깔끔하게 직접 담아드세요" },
  { icon: "🥘", title: "정식 메뉴", desc: "국 + 밥 + 반찬 한 상 가득" },
  { icon: "💰", title: "합리적 가격", desc: "9,000원부터 시작" },
  { icon: "❤️", title: "손맛 요리", desc: "매일 정성껏 준비합니다" },
];

function FadeIn({
  children,
  delay = 0,
  className = "",
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.65, delay, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export { FadeIn };

export default function About() {
  return (
    <section id="about" className="section-y section-padding bg-[#FFF8F0]">
      <div className="max-w-5xl mx-auto">
        {/* 헤더 */}
        <FadeIn className="text-center mb-14">
          <p className="text-[#C4692A] text-sm font-semibold tracking-widest uppercase mb-3">
            Our Story
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-[#2C2416] mb-5">
            동막골의 이야기
          </h2>
          <div className="w-12 h-1 rounded-full bg-gradient-to-r from-[#8B4513] to-[#E8956D] mx-auto" />
        </FadeIn>

        {/* 소개 글 */}
        <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-center mb-16">
          <FadeIn delay={0.1}>
            <div className="space-y-4 text-[#4A3728] leading-relaxed text-base md:text-lg">
              <p>
                <strong className="text-[#8B4513]">동막골청국장</strong>은 부산
                남구 대연동에서 매일 정성껏 밥상을 차리는 한식집입니다.
              </p>
              <p>
                구수하고 진한 청국장은 물론, 순두부·김치·된장찌개 정식과 인기
                많은 제육볶음·낙지볶음까지 다양한 메뉴를 맛보실 수 있습니다.
              </p>
              <p>
                반찬은 셀프식으로 운영되며, 신선하고 다양한 반찬을 원하는 만큼
                담아 드실 수 있습니다.
              </p>
            </div>
          </FadeIn>

          {/* 이미지 플레이스홀더 */}
          <FadeIn delay={0.2}>
            <div
              className="relative rounded-2xl overflow-hidden aspect-[4/3] shadow-xl"
              style={{
                background:
                  "linear-gradient(135deg, #8B4513, #C4692A, #E8956D)",
              }}
            >
              {/* 실제 가게 내부 / 음식 사진으로 교체하세요 */}
              <Image
                src={AboutImage}
                alt="About"
                fill
                className="object-cover"
              />
            </div>
          </FadeIn>
        </div>

        {/* 특징 카드 4개 */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {FEATURES.map((f, i) => (
            <FadeIn key={f.title} delay={0.1 * i}>
              <div className="glass-card rounded-2xl p-5 text-center hover:shadow-md transition-shadow duration-300">
                <div className="text-3xl mb-3">{f.icon}</div>
                <h3 className="font-bold text-[#2C2416] mb-1 text-sm">
                  {f.title}
                </h3>
                <p className="text-[#4A3728]/70 text-xs leading-relaxed">
                  {f.desc}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
