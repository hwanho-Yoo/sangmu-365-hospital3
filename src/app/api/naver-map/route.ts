import { NextResponse } from 'next/server'

const CLIENT_ID = process.env.NAVER_MAP_CLIENT_ID || 'x0lw7s4ltz'
const CLIENT_SECRET = process.env.NAVER_MAP_CLIENT_SECRET || 'gY7VKVFXCni55k0ihQkMeB3if2rPEvnQUsauUA8W'

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const w = searchParams.get('w') || '1100'
  const h = searchParams.get('h') || '400'
  const center = searchParams.get('center') || '126.8514,35.1481'
  const level = searchParams.get('level') || '16'
  const markers = searchParams.get('markers') || 'type:d|size:mid|pos:126.8514 35.1481|color:red'

  const apiUrl = `https://naveropenapi.apigw.ntruss.com/map-static/v2/raster?w=${w}&h=${h}&center=${center}&level=${level}&markers=${encodeURIComponent(markers)}`

  const res = await fetch(apiUrl, {
    headers: {
      'X-NCP-APIGW-API-KEY-ID': CLIENT_ID,
      'X-NCP-APIGW-API-KEY': CLIENT_SECRET,
    },
  })

  if (!res.ok) {
    return NextResponse.json({ error: 'Map API error' }, { status: res.status })
  }

  const buffer = await res.arrayBuffer()

  return new NextResponse(buffer, {
    headers: {
      'Content-Type': res.headers.get('Content-Type') || 'image/png',
      'Cache-Control': 'public, max-age=86400',
    },
  })
}
