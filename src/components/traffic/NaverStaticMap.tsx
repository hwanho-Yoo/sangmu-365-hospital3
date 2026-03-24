'use client'

import { useEffect, useState } from 'react'

const CLIENT_ID = 'x0lw7s4ltz'
const CLIENT_SECRET = 'gY7VKVFXCni55k0ihQkMeB3if2rPEvnQUsauUA8W'
const CENTER = '126.8514,35.1481'
const MARKER = 'type:d|size:mid|pos:126.8514 35.1481|color:red'

export default function NaverStaticMap() {
  const [src, setSrc] = useState<string | null>(null)

  useEffect(() => {
    const url = `https://naveropenapi.apigw.ntruss.com/map-static/v2/raster?w=1100&h=400&center=${CENTER}&level=16&markers=${encodeURIComponent(MARKER)}`

    fetch(url, {
      headers: {
        'X-NCP-APIGW-API-KEY-ID': CLIENT_ID,
        'X-NCP-APIGW-API-KEY': CLIENT_SECRET,
      },
    })
      .then((res) => res.blob())
      .then((blob) => setSrc(URL.createObjectURL(blob)))
      .catch(() => {})
  }, [])

  if (!src) {
    return (
      <div className="w-full h-[240px] md:h-[400px] bg-gray-100 rounded-xl flex items-center justify-center text-text-muted">
        지도를 불러오는 중...
      </div>
    )
  }

  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={src}
      alt="상무365한방병원 네이버 지도"
      className="w-full h-[240px] md:h-[400px] object-cover rounded-xl"
    />
  )
}
