import type { Equipment } from '../types'

export const equipmentList: Equipment[] = [
  {
    id: 'sd1',
    name: '체외충격파 치료기',
    model: 'SD-1',
    manufacturer: 'Storz Medical',
    description: '스위스 Storz Medical社의 프리미엄 체외충격파 장비로, 만성 근골격계 통증 치료에 탁월한 효과를 제공합니다.',
    features: [
      '집중형(Focused) 충격파',
      '정밀한 에너지 조절',
      '만성 통증 치료 특화',
      '유럽 CE 인증',
    ],
  },
  {
    id: 'mp100',
    name: '방사형 체외충격파',
    model: 'MP-100',
    manufacturer: 'Storz Medical',
    description: '광범위한 부위에 효과적인 방사형 충격파 치료기로, 근막 이완 및 통증 완화에 효과적입니다.',
    features: [
      '방사형(Radial) 충격파',
      '넓은 치료 범위',
      '근막 이완 효과',
      '빠른 치료 시간',
    ],
  },
  {
    id: 'v7',
    name: '초음파 진단기',
    model: 'V7',
    manufacturer: 'Samsung Medison',
    description: '삼성메디슨의 고해상도 초음파 장비로, 근골격계 정밀 진단이 가능합니다.',
    features: [
      '고해상도 영상',
      '근골격계 전용 프로브',
      '실시간 영상 진단',
      '비침습적 검사',
    ],
  },
  {
    id: 'xray',
    name: '디지털 X-ray',
    model: 'BL-50',
    manufacturer: 'DK+',
    description: '디지털 X-ray 시스템으로 빠르고 정확한 영상 진단을 제공합니다.',
    features: [
      '디지털 고화질 영상',
      '저선량 촬영',
      '빠른 촬영 및 판독',
      '척추·관절 정밀 진단',
    ],
  },
]
