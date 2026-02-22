"use client";

import { FadeIn } from "./About";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Menu1Image from "@/image/menu1.jpeg";
import Menu2Image from "@/image/menu2.jpeg";
import Menu3Image from "@/image/menu3.jpeg";
import Menu4Image from "@/image/menu4.jpeg";
import Menu5Image from "@/image/menu5.jpeg";
import Menu6Image from "@/image/menu6.jpeg";
import Image from "next/image";

const MENUS = [
  {
    name: "청국장 정식",
    price: "9,000원",
    desc: "구수하고 진한 맛이 일품! 동막골의 베스트 메뉴",
    emoji: "🫕",
    best: true,
    image: Menu1Image,
  },
  {
    name: "순두부찌개 정식",
    price: "9,000원",
    desc: "부드럽고 얼큰한 순두부, 밥 한 공기 뚝딱",
    emoji: "🍲",
    best: false,
    image: Menu2Image,
  },
  {
    name: "김치찌개 정식",
    price: "9,000원",
    desc: "직접 담은 김치로 끓인 칼칼한 김치찌개",
    emoji: "🥘",
    best: false,
    image: Menu3Image,
  },
  {
    name: "된장찌개 정식",
    price: "9,000원",
    desc: "구수한 된장과 채소가 어우러진 건강한 한 끼",
    emoji: "🫙",
    best: false,
    image: Menu4Image,
  },
  {
    name: "제육볶음 정식",
    price: "10,000원",
    desc: "2인 이상 주문 가능. 매콤달콤한 제육볶음",
    emoji: "🥩",
    best: false,
    note: "2인 이상",
    image: Menu5Image,
  },
  {
    name: "황태북어국",
    price: "10,000원",
    desc: "속 풀리는 시원한 황태 북어국",
    emoji: "🐟",
    best: false,
    image: Menu6Image,
  },
];

export default function Menu() {
  return (
    <section id="menu" className="section-y section-padding bg-[#F5E6D3]/40">
      <div className="max-w-5xl mx-auto">
        {/* 헤더 */}
        <FadeIn className="text-center mb-14">
          <p className="text-[#C4692A] text-sm font-semibold tracking-widest uppercase mb-3">
            Menu
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-[#2C2416] mb-5">
            오늘의 메뉴
          </h2>
          <div className="w-12 h-1 rounded-full bg-gradient-to-r from-[#8B4513] to-[#E8956D] mx-auto mb-4" />
          <p className="text-[#4A3728]/70 text-sm">
            모든 정식에는 따뜻한 밥과 셀프 반찬이 함께 나옵니다
          </p>
        </FadeIn>

        {/* 메뉴 그리드 */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {MENUS.map((menu, i) => (
            <FadeIn key={menu.name} delay={0.07 * i}>
              <Card className="group flex flex-col relative overflow-hidden border-[#C4692A]/15 bg-white hover:shadow-lg hover:border-[#C4692A]/40 transition-all duration-300 hover:-translate-y-1 h-full rounded-2xl">
                {/* 이미지 플레이스홀더 영역 */}
                <div className="relative w-full aspect-[4/3]">
                  <Image
                    src={menu.image}
                    fill
                    className="object-cover"
                    alt={`${menu.name} 이미지`}
                  />

                  {/* 베스트 뱃지 (이미지 위 좌측 상단) */}
                  {menu.best && (
                    <Badge className="absolute top-3 left-3 bg-[#8B4513] hover:bg-[#8B4513] text-white text-xs shadow-md">
                      ⭐ 베스트
                    </Badge>
                  )}
                  {/* 추가 안내 뱃지 (이미지 위 우측 상단) */}
                  {menu.note && (
                    <Badge
                      variant="outline"
                      className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm border-[#C4692A]/40 text-[#C4692A] text-xs shadow-sm"
                    >
                      {menu.note}
                    </Badge>
                  )}
                </div>

                <CardContent className="p-5 flex-1 flex flex-col">
                  {/* 이름 & 아이콘 */}
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-bold text-[#2C2416] text-lg leading-snug">
                      {menu.name}
                    </h3>
                  </div>

                  {/* 설명 */}
                  <p className="text-[#4A3728]/65 text-sm leading-relaxed mb-5 flex-1">
                    {menu.desc}
                  </p>

                  {/* 가격 */}
                  <div className="mt-auto pt-4 border-t border-[#C4692A]/10 flex items-end justify-between">
                    <span className="text-xl font-bold brand-gradient-text">
                      {menu.price}
                    </span>
                  </div>
                </CardContent>
              </Card>
            </FadeIn>
          ))}
        </div>

        {/* 안내 문구 */}
        <FadeIn delay={0.2} className="mt-10 text-center">
          <p className="text-[#4A3728]/60 text-sm">
            * 가격은 변동될 수 있습니다. 자세한 사항은{" "}
            <a
              href="tel:051-949-5949"
              className="text-[#C4692A] hover:underline font-medium"
            >
              전화
            </a>
            로 문의해 주세요.
          </p>
        </FadeIn>
      </div>
    </section>
  );
}
