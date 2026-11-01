import type { LucideIcon } from 'lucide-react'
import {
  Building2,
  Hammer,
  HardHat,
  Landmark,
  PaintRoller,
} from 'lucide-react'

export type Service = {
  id: string
  number: string
  slug: string
  title: string
  shortTitle: string
  description: string
  image: string
  quoteTipo: string
  icon: LucideIcon
}

export const services: Service[] = [
  {
    id: 'construcao-civil',
    number: '01',
    slug: 'construcao-civil',
    title: 'Construção Civil',
    shortTitle: 'Construção',
    description:
      'Construção, execução e desenvolvimento de trabalhos no setor da construção.',
    image: '/images/construcao.jpg',
    quoteTipo: 'construcao-civil',
    icon: Building2,
  },
  {
    id: 'obras-publicas',
    number: '02',
    slug: 'obras-publicas',
    title: 'Obras Públicas',
    shortTitle: 'Obras Públicas',
    description:
      'Execução de empreitadas e trabalhos destinados a infraestruturas e entidades públicas.',
    image: '/images/obras-publicas.jpg',
    quoteTipo: 'obras-publicas',
    icon: Landmark,
  },
  {
    id: 'reabilitacao',
    number: '03',
    slug: 'reabilitacao',
    title: 'Reabilitação e Remodelação',
    shortTitle: 'Reabilitação',
    description:
      'Renovação, modernização e valorização de edifícios e espaços existentes.',
    image: '/images/reabilitacao.jpg',
    quoteTipo: 'reabilitacao',
    icon: HardHat,
  },
  {
    id: 'carpintaria',
    number: '04',
    slug: 'carpintaria',
    title: 'Carpintaria',
    shortTitle: 'Carpintaria',
    description:
      'Trabalhos de carpintaria integrados em projetos de construção e reabilitação.',
    image: '/images/carpintaria.jpg',
    quoteTipo: 'carpintaria',
    icon: Hammer,
  },
  {
    id: 'revestimentos',
    number: '05',
    slug: 'revestimentos',
    title: 'Revestimentos e Acabamentos',
    shortTitle: 'Revestimentos',
    description:
      'Aplicação de revestimentos e execução de acabamentos com atenção ao detalhe.',
    image: '/images/revestimentos.jpg',
    quoteTipo: 'revestimentos',
    icon: PaintRoller,
  },
]
