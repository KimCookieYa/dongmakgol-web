"use client";

import { FadeIn } from "./About";

export default function Location() {
  return (
    <section id="location" className="section-y section-padding bg-[#FFF8F0]">
      <div className="max-w-5xl mx-auto">
        {/* 헤더 */}
        <FadeIn className="text-center mb-14">
          <p className="text-[#C4692A] text-sm font-semibold tracking-widest uppercase mb-3">
            Location
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-[#2C2416] mb-5">
            오시는길
          </h2>
          <div className="w-12 h-1 rounded-full bg-gradient-to-r from-[#8B4513] to-[#E8956D] mx-auto" />
        </FadeIn>

        <div className="grid lg:grid-cols-2 gap-8 items-start">
          {/* 네이버맵 임베드 */}
          <FadeIn delay={0.1}>
            <div className="rounded-2xl overflow-hidden shadow-lg border border-[#C4692A]/15 aspect-[4/3]">
              <iframe
                src="https://m.place.naver.com/restaurant/1329593325/location"
                title="동막골청국장 네이버지도"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </FadeIn>

          {/* 주소 + 교통 정보 */}
          <FadeIn delay={0.15}>
            <div className="space-y-5">
              {/* 주소 */}
              <div className="glass-card rounded-2xl p-6">
                <div className="flex items-start gap-3 mb-4">
                  <span className="text-2xl">📍</span>
                  <div>
                    <h3 className="font-bold text-[#2C2416] mb-1">주소</h3>
                    <p className="text-[#4A3728] text-sm leading-relaxed">
                      부산광역시 남구 유엔평화로76번길 36 1층
                    </p>
                  </div>
                </div>
                <div className="flex gap-2 flex-wrap">
                  <a
                    href="https://place.map.kakao.com/117003136"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs px-3 py-1.5 rounded-full bg-[#FEE000] text-[#3B1E08] font-semibold hover:bg-[#FDD600] transition-colors"
                  >
                    🗺️ 카카오맵
                  </a>
                  <a
                    href="https://naver.me/Fcmc13lU"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs px-3 py-1.5 rounded-full bg-[#03C75A] text-white font-semibold hover:bg-[#02A84D] transition-colors"
                  >
                    🟢 네이버지도
                  </a>
                </div>
              </div>

              {/* 전화 */}
              <div className="glass-card rounded-2xl p-6">
                <div className="flex items-start gap-3">
                  <span className="text-2xl">📞</span>
                  <div>
                    <h3 className="font-bold text-[#2C2416] mb-1">전화</h3>
                    <a
                      href="tel:051-949-5949"
                      className="text-[#C4692A] font-bold text-lg hover:text-[#8B4513] transition-colors"
                    >
                      051-949-5949
                    </a>
                  </div>
                </div>
              </div>

              {/* 영업시간 요약 */}
              <div className="glass-card rounded-2xl p-6">
                <div className="flex items-start gap-3">
                  <span className="text-2xl">🕐</span>
                  <div>
                    <h3 className="font-bold text-[#2C2416] mb-2">영업시간</h3>
                    <div className="space-y-1 text-sm text-[#4A3728]">
                      <p>
                        <span className="font-medium">월–토</span> 11:00 – 21:00
                      </p>
                      <p className="text-[#4A3728]/60 text-xs">
                        (휴게 15:00 – 17:00)
                      </p>
                      <p>
                        <span className="font-medium text-red-500">일</span>{" "}
                        비정기 휴무
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
