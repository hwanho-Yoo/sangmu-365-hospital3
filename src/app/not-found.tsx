import Link from 'next/link'
import { HOSPITAL } from '@/lib/constants'

export default function NotFound() {
  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center px-4 text-center">
      <h1 className="text-[64px] font-bold text-primary leading-none">404</h1>
      <p className="text-xl font-bold text-text-main mt-4">페이지를 찾을 수 없습니다</p>
      <p className="text-sm text-text-muted mt-2">요청하신 페이지가 존재하지 않거나 이동되었습니다.</p>
      <div className="flex items-center gap-3 mt-8">
        <Link
          href="/"
          className="inline-flex items-center px-6 py-3 bg-primary text-white rounded-lg font-semibold text-[15px] hover:bg-primary-hover transition-colors"
        >
          홈으로 돌아가기
        </Link>
        <a
          href={`tel:${HOSPITAL.phone.replace(/-/g, '')}`}
          className="inline-flex items-center px-6 py-3 border border-primary text-primary rounded-lg font-semibold text-[15px] hover:bg-primary-light transition-colors"
        >
          전화 문의하기
        </a>
      </div>
    </div>
  )
}
