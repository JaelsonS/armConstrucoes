import type { LucideIcon } from 'lucide-react'
import {
  Building2,
  HardHat,
  Landmark,
  Layers,
  Paintbrush,
  Wrench,
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
    shortTitle: 'Construção Civil',
    description:
      'Execução de trabalhos de construção e desenvolvimento de projetos residenciais e não residenciais.',
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
      'Trabalhos de construção e intervenção em infraestruturas e projetos de natureza pública.',
    image: '/images/obras-publicas.jpg',
    quoteTipo: 'obras-publicas',
    icon: Landmark,
  },
  {
    id: 'capoto',
    number: '03',
    slug: 'capoto',
    title: 'Capoto e Isolamento Térmico',
    shortTitle: 'Capoto',
    description:
      'Aplicação de soluções de isolamento térmico exterior e revestimento de fachadas.',
    image: '/images/capoto.jpg',
    quoteTipo: 'capoto',
    icon: Layers,
  },
  {
    id: 'estruturas-metalicas',
    number: '04',
    slug: 'estruturas-metalicas',
    title: 'Estruturas Metálicas',
    shortTitle: 'Estruturas Metálicas',
    description:
      'Trabalhos relacionados com estruturas metálicas e soluções construtivas.',
    image: '/images/estruturas-metalicas.jpg',
    quoteTipo: 'estruturas-metalicas',
    icon: HardHat,
  },
  {
    id: 'remodelacoes',
    number: '05',
    slug: 'remodelacoes',
    title: 'Remodelações',
    shortTitle: 'Remodelações',
    description:
      'Renovação e transformação de espaços existentes, adaptadas às necessidades de cada projeto.',
    image: '/images/remodelacoes.jpg',
    quoteTipo: 'remodelacoes',
    icon: Paintbrush,
  },
  {
    id: 'manutencao-recuperacao',
    number: '06',
    slug: 'manutencao-recuperacao',
    title: 'Manutenção e Recuperação',
    shortTitle: 'Manutenção',
    description:
      'Intervenções de manutenção, recuperação e valorização de edifícios.',
    image: '/images/manutencao.jpg',
    quoteTipo: 'manutencao-recuperacao',
    icon: Wrench,
  },
]
