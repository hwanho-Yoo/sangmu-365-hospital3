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
      <div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4">
          {usps.map((usp) => (
            <div
              key={usp.label}
              className="flex items-center justify-center gap-2.5 py-4 md:py-5"
            >
              <usp.icon className="w-5 h-5 text-white/80" strokeWidth={1.8} />
              <span className="text-white text-sm font-semibold">{usp.label}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
