'use client'

import { useEffect, useRef, useState } from 'react'
import { MapPin } from 'lucide-react'

const CLIENT_ID = 'tgzfjvis3n'
const LAT = 35.1481
const LNG = 126.8514
const NAVER_MAP_URL = `https://map.naver.com/p/entry/place/1234567890?c=${LNG},${LAT},17,0,0,0,dh`

declare global {
  interface Window {
    naver: any
  }
}

export default function NaverStaticMap() {
  const mapRef = useRef<HTMLDivElement>(null)
  const [failed, setFailed] = useState(false)

  useEffect(() => {
    let timeout: ReturnType<typeof setTimeout>

    const initMap = () => {
      if (!mapRef.current || !window.naver) {
        setFailed(true)
        return
      }
      try {
        const position = new window.naver.maps.LatLng(LAT, LNG)
        const map = new window.naver.maps.Map(mapRef.current, {
          center: position,
          zoom: 17,
          zoomControl: true,
          zoomControlOptions: {
            position: window.naver.maps.Position.TOP_RIGHT,
          },
        })
        new window.naver.maps.Marker({
          position,
          map,
          title: '상무365한방병원',
        })
      } catch {
        setFailed(true)
      }
    }

    if (window.naver?.maps) {
      initMap()
      return
    }

    const script = document.createElement('script')
    script.src = `https://oapi.map.naver.com/openapi/v3/maps.js?ncpClientId=${CLIENT_ID}`
    script.async = true
    script.onload = initMap
    script.onerror = () => setFailed(true)
    document.head.appendChild(script)

    // 5초 내 로드 안 되면 폴백
    timeout = setTimeout(() => {
      if (!window.naver?.maps) setFailed(true)
    }, 5000)

    return () => clearTimeout(timeout)
  }, [])

  if (failed) {
    return (
      <a
        href={NAVER_MAP_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="w-full h-[280px] md:h-[400px] rounded-xl bg-slate-100 border border-border-light flex flex-col items-center justify-center gap-3 hover:bg-slate-50 transition-colors"
      >
        <MapPin className="w-8 h-8 text-primary" />
        <span className="text-base font-bold text-text-main">네이버 지도에서 위치 확인하기</span>
        <span className="text-sm text-text-body">광주 서구 상무중앙로 96, H.K 복합빌딩 9~11층</span>
      </a>
    )
  }

  return (
    <div
      ref={mapRef}
      className="w-full h-[280px] md:h-[400px] rounded-xl"
    />
  )
}
