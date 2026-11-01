export type ProjectCategory =
  | 'Construcao'
  | 'Obras Publicas'
  | 'Reabilitacao'
  | 'Acabamentos'
  | 'Carpintaria'

export type Project = {
  id: string
  slug: string
  code: string
  title: string
  category: ProjectCategory
  filter: 'construcao' | 'obras-publicas' | 'reabilitacao' | 'acabamentos'
  location: string
  summary: string
  challenge: string
  solution: string
  result: string
  cover: string
  gallery: string[]
  demo: true
}

export const projectFilters = [
  { id: 'todos', label: 'Todos' },
  { id: 'construcao', label: 'Construção' },
  { id: 'obras-publicas', label: 'Obras Públicas' },
  { id: 'reabilitacao', label: 'Reabilitação' },
  { id: 'acabamentos', label: 'Acabamentos' },
] as const

export const projects: Project[] = [
  {
    id: 'bh-d01',
    slug: 'projeto-de-construcao',
    code: 'BH-D01',
    title: 'Projeto de Construção',
    category: 'Construcao',
    filter: 'construcao',
    location: 'Região de Coimbra',
    summary:
      'Conteúdo demonstrativo. Representa uma abordagem de construção civil com foco em rigor técnico e coordenação de especialidades.',
    challenge:
      'Organizar a execução com clareza de prioridades e acompanhamento contínuo do trabalho em obra.',
    solution:
      'Planeamento faseado, coordenação de equipas e controlo de qualidade em cada etapa.',
    result:
      'Demonstração de um processo estruturado, preparado para adaptação a projetos reais da BH.',
    cover: '/images/construcao.jpg',
    gallery: ['/images/construcao.jpg', '/images/hero-obra.jpg', '/images/equipa-obra.jpg'],
    demo: true,
  },
  {
    id: 'bh-d02',
    slug: 'intervencao-em-edificio',
    code: 'BH-D02',
    title: 'Intervenção em Edifício',
    category: 'Reabilitacao',
    filter: 'reabilitacao',
    location: 'Centro de Coimbra',
    summary:
      'Conteúdo demonstrativo. Exemplo de reabilitação com valorização do edificado existente.',
    challenge:
      'Intervir num espaço existente preservando a funcionalidade e melhorando o desempenho.',
    solution:
      'Diagnóstico cuidadoso, remoção seletiva e modernização de acabamentos e sistemas.',
    result:
      'Ilustração de uma intervenção equilibrada entre renovação e respeito pelo existente.',
    cover: '/images/reabilitacao.jpg',
    gallery: ['/images/reabilitacao.jpg', '/images/acabamentos.jpg', '/images/revestimentos.jpg'],
    demo: true,
  },
  {
    id: 'bh-d03',
    slug: 'obra-de-infraestrutura',
    code: 'BH-D03',
    title: 'Obra de Infraestrutura',
    category: 'Obras Publicas',
    filter: 'obras-publicas',
    location: 'Distrito de Coimbra',
    summary:
      'Conteúdo demonstrativo. Simula trabalhos destinados a infraestruturas e entidades públicas.',
    challenge:
      'Cumprir requisitos técnicos e de segurança com organização e comunicação clara.',
    solution:
      'Execução disciplinada, acompanhamento de fases e atenção aos prazos definidos.',
    result:
      'Demonstração da capacidade de organização para empreitadas de natureza pública.',
    cover: '/images/obras-publicas.jpg',
    gallery: ['/images/obras-publicas.jpg', '/images/hero-obra.jpg', '/images/construcao.jpg'],
    demo: true,
  },
  {
    id: 'bh-d04',
    slug: 'trabalhos-de-acabamento',
    code: 'BH-D04',
    title: 'Trabalhos de Acabamento',
    category: 'Acabamentos',
    filter: 'acabamentos',
    location: 'Coimbra',
    summary:
      'Conteúdo demonstrativo. Foco na qualidade de execução e no detalhe final da obra.',
    challenge:
      'Garantir uniformidade, alinhamentos e acabamento limpo em todas as superfícies.',
    solution:
      'Seleção cuidadosa de materiais e controlo rigoroso da aplicação em obra.',
    result:
      'Exemplo visual do nível de cuidado pretendido na fase de acabamentos.',
    cover: '/images/acabamentos.jpg',
    gallery: ['/images/acabamentos.jpg', '/images/revestimentos.jpg', '/images/carpintaria.jpg'],
    demo: true,
  },
  {
    id: 'bh-d05',
    slug: 'carpintaria-integrada',
    code: 'BH-D05',
    title: 'Carpintaria Integrada',
    category: 'Carpintaria',
    filter: 'acabamentos',
    location: 'Região Centro',
    summary:
      'Conteúdo demonstrativo. Trabalhos de carpintaria integrados em construção e reabilitação.',
    challenge:
      'Integrar elementos de madeira com o restante projeto de forma coerente e precisa.',
    solution:
      'Medição cuidada, fabrico/ajuste e instalação alinhada com o desenho geral.',
    result:
      'Demonstração da integração da carpintaria no conjunto da obra.',
    cover: '/images/carpintaria.jpg',
    gallery: ['/images/carpintaria.jpg', '/images/acabamentos.jpg', '/images/equipa-obra.jpg'],
    demo: true,
  },
  {
    id: 'bh-d06',
    slug: 'requalificacao-de-espaco',
    code: 'BH-D06',
    title: 'Requalificação de Espaço',
    category: 'Reabilitacao',
    filter: 'reabilitacao',
    location: 'Ribeira de Frades',
    summary:
      'Conteúdo demonstrativo. Modernização e valorização de um espaço existente.',
    challenge:
      'Adaptar o espaço a novas necessidades sem comprometer a funcionalidade.',
    solution:
      'Remodelação faseada com atenção a revestimentos, circulações e acabamentos.',
    result:
      'Ilustração de uma requalificação clara e orientada ao uso do espaço.',
    cover: '/images/revestimentos.jpg',
    gallery: ['/images/revestimentos.jpg', '/images/reabilitacao.jpg', '/images/acabamentos.jpg'],
    demo: true,
  },
  {
    id: 'bh-d07',
    slug: 'projeto-de-reabilitacao',
    code: 'BH-D07',
    title: 'Projeto de Reabilitação',
    category: 'Reabilitacao',
    filter: 'reabilitacao',
    location: 'Coimbra',
    summary:
      'Conteúdo demonstrativo. Abordagem de renovação com foco em execução e detalhe.',
    challenge:
      'Equilibrar intervenção estrutural e acabamentos finais num edifício existente.',
    solution:
      'Sequência de trabalhos bem definida e verificação contínua da qualidade.',
    result:
      'Demonstração do método BH aplicado a contextos de reabilitação.',
    cover: '/images/equipa-obra.jpg',
    gallery: ['/images/equipa-obra.jpg', '/images/reabilitacao.jpg', '/images/construcao.jpg'],
    demo: true,
  },
  {
    id: 'bh-d08',
    slug: 'aplicacao-de-revestimentos',
    code: 'BH-D08',
    title: 'Aplicação de Revestimentos',
    category: 'Acabamentos',
    filter: 'acabamentos',
    location: 'Distrito de Coimbra',
    summary:
      'Conteúdo demonstrativo. Execução de revestimentos com atenção ao alinhamento e acabamento.',
    challenge:
      'Assegurar planimetria, juntas e acabamento consistente em toda a superfície.',
    solution:
      'Preparação da base, escolha adequada de materiais e aplicação controlada.',
    result:
      'Exemplo do cuidado pretendido na especialidade de revestimentos.',
    cover: '/images/revestimentos.jpg',
    gallery: ['/images/revestimentos.jpg', '/images/acabamentos.jpg', '/images/carpintaria.jpg'],
    demo: true,
  },
]

export function getProjectBySlug(slug: string) {
  return projects.find((p) => p.slug === slug)
}

export function getRelatedProjects(slug: string, limit = 3) {
  const current = getProjectBySlug(slug)
  if (!current) return projects.slice(0, limit)
  return projects.filter((p) => p.slug !== slug && p.filter === current.filter).slice(0, limit)
    .concat(projects.filter((p) => p.slug !== slug && p.filter !== current.filter))
    .slice(0, limit)
}
