export interface Doctor {
  id: string
  name: string
  position: string
  isRepresentative?: boolean
  specialty: string[]
  education: string[]
  career: string[]
}

export interface Treatment {
  id: string
  name: string
  description: string
  category: 'korean' | 'western'
  link?: string
}

export interface Equipment {
  id: string
  name: string
  model: string
  manufacturer: string
  description: string
  features: string[]
}

export interface MenuItem {
  id: string
  label: string
  href: string
  iconName: string
}

export interface Review {
  id: string
  author: string
  treatment: string
  content: string
  date: string
  rating: number
}

export interface Notice {
  id: string
  title: string
  date: string
  category: string
}

export interface FAQ {
  id: string
  question: string
  answer: string
  category: string
}
