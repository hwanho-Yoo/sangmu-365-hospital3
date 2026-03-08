import type { Metadata } from 'next'
import '@/styles/globals.css'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import MobileBottomCTA from '@/components/layout/MobileBottomCTA'
import FloatingCTA from '@/components/layout/FloatingCTA'
import ScrollToTop from '@/components/ui/ScrollToTop'

export const metadata: Metadata = {
  title: '상무365한방병원 | 광주 교통사고·통증·추나 365일 진료',
  description:
    '광주 서구 상무지구 상무365한방병원. 교통사고 후유증, 추나요법, 도수치료, 체외충격파, 한방치료. 365일 진료, 야간 20시, 점심시간 없이 연속진료.',
  keywords: [
    '상무365한방병원',
    '광주한방병원',
    '교통사고한방병원',
    '추나요법',
    '도수치료',
    '체외충격파',
    '광주교통사고',
  ],
  openGraph: {
    title: '상무365한방병원 | 광주 교통사고·통증·추나 365일 진료',
    description:
      '광주 서구 상무지구. 교통사고 후유증, 추나요법, 도수치료, 체외충격파. 365일 진료.',
    type: 'website',
    locale: 'ko_KR',
  },
}

const hospitalJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Hospital',
  name: '상무365한방병원',
  alternateName: 'Sangmu 365 Korean Medicine Hospital',
  telephone: '062-385-9000',
  address: {
    '@type': 'PostalAddress',
    streetAddress: '치평동 1213-4, H.K 복합빌딩 9~11층',
    addressLocality: '광주광역시',
    addressRegion: '서구',
    addressCountry: 'KR',
  },
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '09:00',
      closes: '20:00',
    },
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Saturday', 'Sunday'],
      opens: '09:00',
      closes: '16:00',
    },
  ],
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
        <Header />
        <main>{children}</main>
        <Footer />
        <MobileBottomCTA />
        <FloatingCTA />
        <ScrollToTop />
      </body>
    </html>
  )
}
