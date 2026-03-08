import type { Treatment } from '../types'

export const treatments: Treatment[] = [
  {
    id: 'acupuncture',
    name: '침치료',
    description: '경혈을 자극하여 기혈 순환을 촉진하고 통증을 완화하는 전통 한방 치료법입니다.',
    category: 'korean',
  },
  {
    id: 'moxibustion',
    name: '뜸치료',
    description: '쑥을 태워 경혈에 온열 자극을 가해 혈액순환을 개선하고 면역력을 높입니다.',
    category: 'korean',
  },
  {
    id: 'cupping',
    name: '부항치료',
    description: '음압을 이용하여 어혈을 제거하고 근육의 긴장을 풀어주는 치료법입니다.',
    category: 'korean',
  },
  {
    id: 'herbal-medicine',
    name: '한약치료',
    description: '체질과 증상에 맞는 한약을 처방하여 근본적인 원인을 치료합니다.',
    category: 'korean',
  },
  {
    id: 'pharmacopuncture',
    name: '약침치료',
    description: '한약 추출물을 경혈에 주입하여 침과 한약의 효과를 동시에 얻는 치료법입니다.',
    category: 'korean',
  },
  {
    id: 'chuna',
    name: '추나요법',
    description: '한의사가 손이나 신체 일부를 이용하여 뼈와 근육을 교정하는 수기치료법입니다.',
    category: 'korean',
  },
  {
    id: 'herbal-patch',
    name: '첩약',
    description: '개인 체질에 맞게 조제한 한약을 일정 기간 복용하여 체질을 개선합니다.',
    category: 'korean',
  },
  {
    id: 'chiropractic',
    name: '도수치료',
    description: '전문 치료사가 손으로 직접 근골격계를 교정하고 통증을 치료합니다.',
    category: 'western',
  },
  {
    id: 'body-correction',
    name: '체형교정',
    description: '틀어진 체형을 바로잡아 통증의 근본 원인을 해결하고 재발을 방지합니다.',
    category: 'western',
  },
  {
    id: 'shockwave',
    name: '체외충격파',
    description: '충격파 에너지를 이용하여 만성 통증 부위의 조직 재생을 촉진합니다.',
    category: 'western',
  },
  {
    id: 'physiotherapy',
    name: '물리치료',
    description: '전기자극, 초음파 등 물리적 에너지를 이용하여 통증을 완화하고 기능을 회복합니다.',
    category: 'western',
  },
]
