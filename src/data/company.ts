export const company = {
  name: 'BH — Construção Civil e Obras Públicas, Lda.',
  shortName: 'BH Construção',
  legalName: 'BH — CONSTRUÇÃO CIVIL E OBRAS PÚBLICAS, LDA',
  tagline: 'Construção Civil · Obras Públicas',
  description:
    'A BH — Construção Civil e Obras Públicas, Lda. desenvolve trabalhos no setor da construção, reabilitação e acabamentos, colocando o rigor técnico, a qualidade de execução e o compromisso com cada projeto no centro da sua atividade.',
  address: {
    line1: 'Parque Industrial Moinho do Calhau',
    line2: 'Armazém 2',
    postalCode: '3045-421',
    locality: 'Ribeira de Frades',
    city: 'Coimbra',
    country: 'Portugal',
  },
  phones: [
    { label: 'Rede fixa', display: '239 985 295', href: 'tel:+351239985295' },
    { label: 'Rede móvel', display: '910 098 531', href: 'tel:+351910098531' },
    { label: 'Rede móvel', display: '916 140 195', href: 'tel:+351916140195' },
  ],
  email: 'bhccop@sapo.pt',
  emailHref: 'mailto:bhccop@sapo.pt',
  livroReclamacoes: 'https://www.livroreclamacoes.pt/',
  mapsQuery:
    'Parque Industrial Moinho do Calhau Armazém 2, 3045-421 Ribeira de Frades, Coimbra',
  mapsDirectionsUrl:
    'https://www.google.com/maps/dir/?api=1&destination=Parque+Industrial+Moinho+do+Calhau+Armaz%C3%A9m+2,+3045-421+Ribeira+de+Frades,+Coimbra',
  osmEmbedUrl:
    'https://www.openstreetmap.org/export/embed.html?bbox=-8.512%2C40.185%2C-8.472%2C40.205&layer=mapnik&marker=40.195%2C-8.492',
  siteUrl: 'https://bh-construcoes.vercel.app',
} as const

export function getSiteUrl() {
  const fromEnv = import.meta.env.VITE_SITE_URL as string | undefined
  if (fromEnv && fromEnv.trim()) return fromEnv.replace(/\/$/, '')
  if (typeof window !== 'undefined' && window.location?.origin) {
    return window.location.origin
  }
  return company.siteUrl
}

export function fullAddress() {
  const { line1, line2, postalCode, locality, city, country } = company.address
  return `${line1}, ${line2}, ${postalCode} ${locality}, ${city}, ${country}`
}
