export type ProjectCategory =
  | 'Construção'
  | 'Obras Públicas'
  | 'Capoto'
  | 'Estruturas Metálicas'
  | 'Remodelações'

export type Project = {
  id: string
  slug: string
  code: string
  title: string
  category: ProjectCategory
  filter:
    | 'construcao'
    | 'obras-publicas'
    | 'capoto'
    | 'estruturas-metalicas'
    | 'remodelacoes'
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
  { id: 'capoto', label: 'Capoto' },
  { id: 'estruturas-metalicas', label: 'Estruturas Metálicas' },
  { id: 'remodelacoes', label: 'Remodelações' },
] as const

export const projects: Project[] = [
  {
    id: 'arm-d01',
    slug: 'moradia-contemporanea',
    code: 'ARM-D01',
    title: 'Moradia contemporânea',
    category: 'Construção',
    filter: 'construcao',
    location: 'Região de Coimbra',
    summary:
      'Conteúdo demonstrativo. Representa uma abordagem de construção civil com foco em rigor técnico e coordenação de especialidades.',
    challenge:
      'Organizar a execução com clareza de prioridades e acompanhamento contínuo do trabalho em obra.',
    solution:
      'Planeamento faseado, coordenação de equipas e controlo de qualidade em cada etapa.',
    result:
      'Demonstração de um processo estruturado, preparado para adaptação a projetos reais da ARM.',
    cover: '/images/construcao.jpg',
    gallery: [
      '/images/construcao.jpg',
      '/images/hero-obra.jpg',
      '/images/equipa-obra.jpg',
    ],
    demo: true,
  },
  {
    id: 'arm-d02',
    slug: 'pavilhao-estrutura-metalica',
    code: 'ARM-D02',
    title: 'Pavilhão em estrutura metálica',
    category: 'Estruturas Metálicas',
    filter: 'estruturas-metalicas',
    location: 'Distrito de Coimbra',
    summary:
      'Conteúdo demonstrativo. Exemplo de estrutura metálica para pavilhão com montagem acompanhada em obra.',
    challenge:
      'Garantir precisão dimensional, estabilidade e prazo de montagem em contexto de obra.',
    solution:
      'Preparação cuidada dos elementos, sequência de montagem e verificação contínua em obra.',
    result:
      'Ilustração da capacidade da ARM em soluções metálicas complementares à construção civil.',
    cover: '/images/estruturas-metalicas.jpg',
    gallery: [
      '/images/estruturas-metalicas.jpg',
      '/images/hero-obra.jpg',
      '/images/obras-publicas.jpg',
    ],
    demo: true,
  },
  {
    id: 'arm-d03',
    slug: 'reabilitacao-fachada-capoto',
    code: 'ARM-D03',
    title: 'Reabilitação de fachada com capoto',
    category: 'Capoto',
    filter: 'capoto',
    location: 'Coimbra',
    summary:
      'Conteúdo demonstrativo. Aplicação de isolamento térmico exterior com renovação estética da fachada.',
    challenge:
      'Melhorar o desempenho térmico sem reduzir área interior útil.',
    solution:
      'Sistema de capoto em camadas contínuas, com atenção a pontes térmicas e acabamento final.',
    result:
      'Demonstração dos benefícios de conforto, proteção e valorização do edifício.',
    cover: '/images/capoto.jpg',
    gallery: [
      '/images/capoto.jpg',
      '/images/construcao.jpg',
      '/images/manutencao.jpg',
    ],
    demo: true,
  },
  {
    id: 'arm-d04',
    slug: 'requalificacao-espaco-publico',
    code: 'ARM-D04',
    title: 'Requalificação de espaço público',
    category: 'Obras Públicas',
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
    gallery: [
      '/images/obras-publicas.jpg',
      '/images/hero-obra.jpg',
      '/images/equipa-obra.jpg',
    ],
    demo: true,
  },
  {
    id: 'arm-d05',
    slug: 'remodelacao-interior',
    code: 'ARM-D05',
    title: 'Remodelação de interior',
    category: 'Remodelações',
    filter: 'remodelacoes',
    location: 'Coimbra e arredores',
    summary:
      'Conteúdo demonstrativo. Renovação e transformação de um espaço existente.',
    challenge:
      'Adaptar o espaço a novas necessidades sem comprometer a funcionalidade.',
    solution:
      'Remodelação faseada com atenção a circulações, acabamentos e detalhe de execução.',
    result:
      'Ilustração de uma remodelação clara e orientada ao uso do espaço.',
    cover: '/images/remodelacoes.jpg',
    gallery: [
      '/images/remodelacoes.jpg',
      '/images/manutencao.jpg',
      '/images/construcao.jpg',
    ],
    demo: true,
  },
  {
    id: 'arm-d06',
    slug: 'manutencao-edificio',
    code: 'ARM-D06',
    title: 'Manutenção e recuperação de edifício',
    category: 'Remodelações',
    filter: 'remodelacoes',
    location: 'Botão, Coimbra',
    summary:
      'Conteúdo demonstrativo. Intervenção de manutenção e valorização de edificado existente.',
    challenge:
      'Corrigir patologias e recuperar elementos sem interromper o uso do espaço.',
    solution:
      'Diagnóstico, priorização de trabalhos e execução controlada das intervenções.',
    result:
      'Exemplo do cuidado pretendido em manutenção e recuperação.',
    cover: '/images/manutencao.jpg',
    gallery: [
      '/images/manutencao.jpg',
      '/images/capoto.jpg',
      '/images/remodelacoes.jpg',
    ],
    demo: true,
  },
  {
    id: 'arm-d07',
    slug: 'cobertura-estrutura-apoio',
    code: 'ARM-D07',
    title: 'Cobertura e estrutura de apoio',
    category: 'Estruturas Metálicas',
    filter: 'estruturas-metalicas',
    location: 'Região Centro',
    summary:
      'Conteúdo demonstrativo. Estrutura metálica de apoio e cobertura com montagem em obra.',
    challenge:
      'Integrar a estrutura metálica com o restante projeto construtivo.',
    solution:
      'Coordenação técnica, montagem acompanhada e verificação de ligações.',
    result:
      'Demonstração de precisão e robustez em soluções metálicas.',
    cover: '/images/estruturas-metalicas.jpg',
    gallery: [
      '/images/estruturas-metalicas.jpg',
      '/images/obras-publicas.jpg',
      '/images/hero-obra.jpg',
    ],
    demo: true,
  },
  {
    id: 'arm-d08',
    slug: 'isolamento-termico-moradia',
    code: 'ARM-D08',
    title: 'Isolamento térmico de moradia',
    category: 'Capoto',
    filter: 'capoto',
    location: 'Coimbra',
    summary:
      'Conteúdo demonstrativo. Sistema de isolamento térmico exterior aplicado a moradia.',
    challenge:
      'Assegurar continuidade do isolamento e qualidade do acabamento final.',
    solution:
      'Aplicação camada a camada com controlo de alinhamentos e remates.',
    result:
      'Exemplo visual do nível de cuidado pretendido em capoto.',
    cover: '/images/capoto.jpg',
    gallery: [
      '/images/capoto.jpg',
      '/images/construcao.jpg',
      '/images/manutencao.jpg',
    ],
    demo: true,
  },
]

export function getProjectBySlug(slug: string) {
  return projects.find((p) => p.slug === slug)
}

export function getRelatedProjects(slug: string, limit = 3) {
  const current = getProjectBySlug(slug)
  if (!current) return projects.slice(0, limit)
  return projects
    .filter((p) => p.slug !== slug && p.filter === current.filter)
    .slice(0, limit)
    .concat(
      projects.filter((p) => p.slug !== slug && p.filter !== current.filter),
    )
    .slice(0, limit)
}
