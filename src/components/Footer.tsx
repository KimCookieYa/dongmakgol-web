export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#2C2416] text-white/80">
      <div className="max-w-5xl mx-auto section-padding py-12">
        {/* 상단 */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-10 pb-10 border-b border-white/10">
          {/* 가게 정보 */}
          <div>
            <h3 className="text-white font-bold text-lg mb-3">동막골청국장</h3>
            <p className="text-white/50 text-xs leading-relaxed">
              어머니의 손맛, 매일 따뜻한 한 끼
            </p>
          </div>

          {/* 연락처 */}
          <div>
            <h4 className="text-white/90 font-semibold text-sm mb-3">
              연락처 & 위치
            </h4>
            <ul className="space-y-2 text-sm text-white/60">
              <li>📍 부산 남구 유엔평화로76번길 36 1층</li>
              <li>
                📞{" "}
                <a
                  href="tel:051-949-5949"
                  className="hover:text-white transition-colors"
                >
                  051-949-5949
                </a>
              </li>
              <li>🕐 월–토 11:00–21:00 (일 휴무)</li>
            </ul>
          </div>

          {/* 외부 링크 */}
          <div>
            <h4 className="text-white/90 font-semibold text-sm mb-3">
              바로가기
            </h4>
            <div className="flex flex-col gap-2">
              <a
                href="https://place.map.kakao.com/117003136"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-white/60 hover:text-[#FEE000] transition-colors flex items-center gap-2"
              >
                🗺️ 카카오맵
              </a>
              <a
                href="https://naver.me/Fcmc13lU"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-white/60 hover:text-[#03C75A] transition-colors flex items-center gap-2"
              >
                🟢 네이버지도
              </a>
              <a
                href="https://www.daangn.com/kr/local-profile/%EB%8F%99%EB%A7%89%EA%B3%A8%EC%B2%AD%EA%B5%AD%EC%9E%A5-v1bozsmuhnye/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-white/60 hover:text-[#FF6F0F] transition-colors flex items-center gap-2"
              >
                🥕 당근마켓
              </a>
            </div>
          </div>
        </div>

        {/* 하단 */}
        <p className="text-center text-white/30 text-xs">
          © {currentYear} 동막골청국장. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
