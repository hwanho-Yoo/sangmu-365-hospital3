import type { Metadata } from 'next'
import '@/styles/globals.css'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import MobileBottomCTA from '@/components/layout/MobileBottomCTA'
import FloatingCTA from '@/components/layout/FloatingCTA'
import ScrollToTop from '@/components/ui/ScrollToTop'

export const metadata: Metadata = {
  title: '상무365한방병원 | 365일 한방·양방 협진',
  description:
    '광주 서구 상무지구 한방병원. 교통사고 후유증, 한방치료, 도수치료, 체외충격파. 365일 진료, 야간진료. 전문의 5인 협진. 062-385-9000',
  keywords: [
    '상무한방병원',
    '광주한방병원',
    '교통사고한방병원',
    '365일진료',
    '상무365한방병원',
    '추나요법',
    '도수치료',
    '체외충격파',
    '광주교통사고',
  ],
  openGraph: {
    title: '상무365한방병원 | 365일 한방·양방 협진',
    description:
      '광주 서구 상무지구. 교통사고 후유증, 추나요법, 도수치료, 체외충격파. 365일 진료, 야간 20시. 전문의 5인 협진.',
    type: 'website',
    locale: 'ko_KR',
  },
}

const hospitalJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Hospital',
  name: '상무365한방병원',
  alternateName: 'Sangmu 365 Korean Medicine Hospital',
  url: 'https://sangmu365.co.kr',
  telephone: '062-385-9000',
  address: {
    '@type': 'PostalAddress',
    streetAddress: '치평동 1213-4, H.K 복합빌딩 9~11층',
    addressLocality: '광주광역시',
    addressRegion: '서구',
    addressCountry: 'KR',
  },
  openingHours: ['Mo-Fr 09:00-20:00', 'Sa-Su 09:00-16:00'],
  medicalSpecialty: 'Korean Medicine',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ko">
      <head>
        <link
          rel="stylesheet"
          as="style"
          crossOrigin="anonymous"
          href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/static/pretendard.min.css"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(hospitalJsonLd) }}
        />
      </head>
      <body className="antialiased">
        <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:bg-white focus:px-4 focus:py-2 focus:rounded-lg focus:shadow-lg focus:text-primary focus:font-semibold">
          본문으로 건너뛰기
        </a>
        <Header />
        <main id="main-content">{children}</main>
        <Footer />
        <MobileBottomCTA />
        <FloatingCTA />
        <ScrollToTop />
      </body>
    </html>
  )
}
