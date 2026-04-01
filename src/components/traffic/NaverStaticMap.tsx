'use client'

import { useEffect, useRef, useState } from 'react'
import { MapPin } from 'lucide-react'

const CLIENT_ID = 'tgzfjvis3n'
const LAT = 35.1481
const LNG = 126.8514
const NAVER_MAP_URL = 'https://map.naver.com/p/search/%EC%83%81%EB%AC%B4365%ED%95%9C%EB%B0%A9%EB%B3%91%EC%9B%90/place/1090492719?placePath=/home?abtExp=NEW-PLACE-SEARCH:4&bk_query=%EC%83%81%EB%AC%B4365%ED%95%9C%EB%B0%A9%EB%B3%91%EC%9B%90&entry=pll&from=nx&fromNxList=true&fromPanelNum=2&timestamp=202604011253&locale=ko&svcName=map_pcv5&searchText=%EC%83%81%EB%AC%B4365%ED%95%9C%EB%B0%A9%EB%B3%91%EC%9B%90&searchType=place&c=15.00,0,0,0,dh'

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
        className="block w-full rounded-xl overflow-hidden border border-border-light hover:opacity-90 transition-opacity"
      >
        <img
          src="/images/map.png"
          alt="상무365한방병원 위치 - 광주 서구 상무중앙로 96"
          className="w-full h-auto"
        />
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
