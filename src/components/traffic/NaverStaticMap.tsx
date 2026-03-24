'use client'

import { useEffect, useRef } from 'react'

const CLIENT_ID = 'x0lw7s4ltz'
const LAT = 35.1481
const LNG = 126.8514

declare global {
  interface Window {
    naver: any
  }
}

export default function NaverStaticMap() {
  const mapRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const initMap = () => {
      if (!mapRef.current || !window.naver) return
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
    }

    if (window.naver?.maps) {
      initMap()
      return
    }

    const script = document.createElement('script')
    script.src = `https://oapi.map.naver.com/openapi/v3/maps.js?ncpClientId=${CLIENT_ID}`
    script.async = true
    script.onload = initMap
    document.head.appendChild(script)
  }, [])

  return (
    <div
      ref={mapRef}
      className="w-full h-[280px] md:h-[400px] rounded-xl"
    />
  )
}
