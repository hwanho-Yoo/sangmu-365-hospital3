import type { MenuItem } from '../types'

export const menuItems: MenuItem[] = [
  { id: 'traffic', label: '교통사고', href: '/traffic-accident', iconName: 'Car' },
  { id: 'treatment', label: '한방치료', href: '/treatment', iconName: 'Leaf' },
  { id: 'chiropractic', label: '도수·체형교정', href: '/chiropractic', iconName: 'StretchHorizontal' },
  { id: 'shockwave', label: '체외충격파', href: '/shockwave', iconName: 'Zap' },
  { id: 'skin', label: '피부진료', href: '/skin', iconName: 'Sparkles' },
  { id: 'hospitalization', label: '입원안내', href: '/hospitalization', iconName: 'BedDouble' },
  { id: 'doctors', label: '의료진', href: '/doctors', iconName: 'UserRound' },
  { id: 'equipment', label: '의료장비', href: '/equipment', iconName: 'Microscope' },
  { id: 'reservation', label: '진료예약', href: '/reservation', iconName: 'CalendarCheck' },
  { id: 'directions', label: '오시는길', href: '/directions', iconName: 'MapPin' },
]
