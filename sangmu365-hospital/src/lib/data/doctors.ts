import type { Doctor } from '../types'

export const doctors: Doctor[] = [
  {
    id: 'park-junkyu',
    name: '박준규',
    position: '대표원장',
    isRepresentative: true,
    specialty: ['교통사고 후유증', '근골격계 질환', '추나요법', '한방내과'],
    education: [
      '원광대학교 한의과대학 졸업',
      '원광대학교 한의학 석사',
    ],
    career: [
      '상무365한방병원 대표원장',
      '대한한방내과학회 정회원',
      '대한추나의학회 정회원',
      '대한약침학회 정회원',
      '교통사고 후유증 치료 전문',
    ],
  },
  {
    id: 'baek-sangcheol',
    name: '백상철',
    position: '원장',
    specialty: ['침구의학', '통증치료', '추나요법', '교통사고'],
    education: [
      '동신대학교 한의과대학 졸업',
    ],
    career: [
      '상무365한방병원 원장',
      '대한침구의학회 정회원',
      '대한추나의학회 정회원',
      '통증 질환 치료 전문',
    ],
  },
  {
    id: 'park-jungyeol',
    name: '박정열',
    position: '원장',
    specialty: ['한방재활의학', '도수치료', '체형교정', '스포츠손상'],
    education: [
      '동신대학교 한의과대학 졸업',
    ],
    career: [
      '상무365한방병원 원장',
      '대한한방재활의학회 정회원',
      '도수치료 전문',
      '체형교정 전문',
    ],
  },
  {
    id: 'kim-youngtae',
    name: '김영태',
    position: '원장',
    specialty: ['한방신경정신과', '교통사고 후유증', '불면·스트레스', '한방내과'],
    education: [
      '원광대학교 한의과대학 졸업',
    ],
    career: [
      '상무365한방병원 원장',
      '대한한방신경정신과학회 정회원',
      '교통사고 후유증 치료 전문',
      '불면·스트레스 치료 전문',
    ],
  },
  {
    id: 'jeong-hyunjin',
    name: '정현진',
    position: '원장',
    specialty: ['피부질환', '한방피부과', '아토피', '여드름'],
    education: [
      '동신대학교 한의과대학 졸업',
    ],
    career: [
      '상무365한방병원 원장',
      '대한한방피부과학회 정회원',
      '피부질환 치료 전문',
      '한방 미용 치료 전문',
    ],
  },
]
