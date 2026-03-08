import { Clock, Moon, Users, Coffee } from 'lucide-react'

const usps = [
  { icon: Clock, label: '365일 진료' },
  { icon: Moon, label: '야간진료 20시' },
  { icon: Users, label: '전문의 5인 협진' },
  { icon: Coffee, label: '점심시간 없음' },
]

export default function USPBar() {
  return (
    <div className="bg-primary">
      <div className="mx-auto max-w-[1080px] px-4 md:px-6">
        <div className="flex flex-wrap justify-center md:justify-between">
          {usps.map((usp, i) => (
            <div
              key={usp.label}
              className="flex items-center justify-center gap-3 py-5 md:py-6 w-1/2 md:w-auto md:flex-1"
            >
              {i > 0 && (
                <div className="hidden md:block absolute left-0 top-1/2 -translate-y-1/2 w-px h-5 bg-white/15" />
              )}
              <usp.icon className="w-6 h-6 text-white/80" strokeWidth={1.8} />
              <span className="text-white text-base font-bold">{usp.label}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
