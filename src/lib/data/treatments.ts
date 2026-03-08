import type { Treatment } from '../types'

export const treatments: Treatment[] = [
  {
    id: 'acupuncture',
    name: '침치료',
    description: '경혈을 자극하여 기혈 순환을 촉진하고 통증을 완화하는 전통 한방 치료법입니다. 근골격계 통증, 두통, 소화장애 등 다양한 증상에 효과적이며, 부작용이 거의 없어 안전합니다.',
    category: 'korean',
  },
  {
    id: 'moxibustion',
    name: '뜸치료',
    description: '쑥을 태워 경혈에 온열 자극을 가해 혈액순환을 개선하고 면역력을 높입니다. 냉증, 소화불량, 만성 피로 등 체질이 허약한 환자에게 특히 효과적입니다.',
    category: 'korean',
  },
  {
    id: 'cupping',
    name: '부항치료',
    description: '컵 안의 음압을 이용하여 어혈을 제거하고 근육의 긴장을 풀어주는 치료법입니다. 어깨 결림, 근육통, 피로 회복에 도움이 됩니다.',
    category: 'korean',
  },
  {
    id: 'herbal-medicine',
    name: '한약치료',
    description: '환자의 체질과 증상을 종합 분석하여 맞춤 한약을 처방합니다. 통증의 근본 원인인 기혈 부족, 어혈, 담음 등을 개선하여 재발을 방지합니다.',
    category: 'korean',
  },
  {
    id: 'pharmacopuncture',
    name: '약침치료',
    description: '한약 추출물을 정제하여 경혈에 직접 주입하는 치료법으로, 침과 한약의 효과를 동시에 얻습니다. 디스크, 관절염, 인대 손상 등에 빠른 효과를 보입니다.',
    category: 'korean',
  },
  {
    id: 'ultrasound-pharmacopuncture',
    name: '초음파유도하약침',
    description: '초음파 영상으로 체내 구조를 실시간 확인하면서 정확한 부위에 약침을 주입합니다. 기존 약침 대비 정확도와 안전성이 크게 향상된 치료법입니다.',
    category: 'korean',
    link: '/ultrasound-acupuncture',
  },
  {
    id: 'chuna',
    name: '추나요법',
    description: '한의사가 손이나 신체 일부를 이용하여 뼈, 근육, 관절을 교정하는 수기치료법입니다. 척추 틀어짐, 골반 불균형, 교통사고 후유증 치료에 핵심적인 역할을 합니다.',
    category: 'korean',
  },
  {
    id: 'herbal-patch',
    name: '첩약',
    description: '개인 체질과 증상에 맞게 조제한 한약을 일정 기간 복용하여 체질을 근본적으로 개선합니다. 만성 질환, 교통사고 후유증 회복에 효과적입니다.',
    category: 'korean',
  },
  {
    id: 'chiropractic',
    name: '도수치료',
    description: '전문 치료사가 손으로 직접 근골격계를 교정하고 긴장된 근육을 이완시킵니다. 약물이나 수술 없이 통증의 원인을 해결하며, 척추·관절 질환에 효과적입니다.',
    category: 'western',
  },
  {
    id: 'body-correction',
    name: '체형교정',
    description: '정밀 검사를 통해 체형 불균형을 진단하고, 추나요법과 도수치료를 병행하여 바른 체형으로 교정합니다. 만성 통증의 근본 원인을 해결하고 재발을 방지합니다.',
    category: 'western',
  },
  {
    id: 'shockwave',
    name: '체외충격파',
    description: '고에너지 충격파를 통증 부위에 전달하여 손상된 조직의 재생을 촉진하고 혈류를 개선합니다. 오십견, 테니스엘보, 족저근막염 등 만성 통증에 효과적입니다.',
    category: 'western',
  },
  {
    id: 'physiotherapy',
    name: '물리치료',
    description: '전기자극, 온열치료, 견인치료, 초음파치료 등 물리적 에너지를 이용하여 통증을 완화하고 기능을 회복합니다. 다른 치료와 병행 시 시너지 효과가 큽니다.',
    category: 'western',
  },
]
