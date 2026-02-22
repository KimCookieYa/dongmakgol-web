import type { Metadata } from "next";
import "./globals.css";

const SITE_URL = "https://dongmakgol.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "동막골청국장 | 부산 대연동 청국장 맛집",
    template: "%s | 동막골청국장",
  },
  description:
    "부산 남구 대연동에 위치한 동막골청국장. 구수하고 진한 청국장 정식, 순두부·김치·된장찌개, 제육볶음 등 정성 가득한 집밥을 만나보세요. 9,000원부터 시작하는 합리적인 가격.",
  keywords: [
    "동막골청국장",
    "부산 청국장",
    "대연동 맛집",
    "남구 맛집",
    "부산 한식",
    "청국장 정식",
    "순두부찌개",
    "부산 백반",
    "대연동 백반",
    "부산 집밥",
  ],
  openGraph: {
    type: "website",
    locale: "ko_KR",
    url: SITE_URL,
    siteName: "동막골청국장",
    title: "동막골청국장 | 부산 대연동 청국장 맛집",
    description:
      "구수하고 진한 청국장이 일품인 부산 대연동 동막골청국장. 정성스러운 집밥 한 상 차려드립니다.",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "동막골청국장 대표 이미지",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "동막골청국장 | 부산 대연동 청국장 맛집",
    description: "구수하고 진한 청국장이 일품인 부산 대연동 동막골청국장.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  alternates: { canonical: SITE_URL },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Restaurant",
  name: "동막골청국장",
  description:
    "늘 맛있는 음식을 만드는 동막골청국장입니다. 청국장, 순두부, 김치, 된장찌개 뿐 아니라 인기 많은 제육볶음, 낙지볶음 등도 판매하고 있습니다. 반찬은 셀프식으로 운영되고 있습니다.",
  url: SITE_URL,
  telephone: "+82-51-949-5949",
  address: {
    "@type": "PostalAddress",
    streetAddress: "유엔평화로76번길 36 1층",
    addressLocality: "부산광역시 남구",
    addressRegion: "부산",
    addressCountry: "KR",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 35.1397,
    longitude: 129.0867,
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
      ],
      opens: "11:00",
      closes: "21:00",
    },
  ],
  servesCuisine: ["한식", "청국장", "백반"],
  priceRange: "₩",
  hasMap: "https://naver.me/Fcmc13lU",
  menu: SITE_URL + "#menu",
  sameAs: [
    "https://place.map.kakao.com/117003136",
    "https://www.daangn.com/kr/local-profile/%EB%8F%99%EB%A7%89%EA%B3%A8%EC%B2%AD%EA%B5%AD%EC%9E%A5-v1bozsmuhnye/",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
