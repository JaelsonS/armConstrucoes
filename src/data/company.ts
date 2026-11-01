export const company = {
  name: 'ARM — Construções, Unipessoal Lda.',
  shortName: 'ARM Construções',
  legalName: 'ARM Construções Unipessoal, Lda.',
  tagline: 'Construção Civil · Obras Públicas',
  headline: 'Construímos estruturas. Criamos futuro.',
  aboutTitle: 'Construção que transforma espaços.',
  description:
    'Na ARM Construções, transformamos ideias em realidade com qualidade, compromisso e confiança.',
  descriptionExtra:
    'A empresa atua no setor da construção civil e obras públicas, desenvolvendo trabalhos de construção, remodelação e intervenção em edifícios para clientes particulares, empresariais e institucionais.',
  slogan: 'Qualquer coisa, é só chamar!',
  ctaLine: 'Estamos prontos para construir o seu projeto.',
  areaServed: 'Coimbra e arredores',
  address: {
    line1: 'Rua Frei Francisco Macedo, 102',
    line2: '',
    postalCode: '3020-521',
    locality: 'Botão',
    city: 'Coimbra',
    country: 'Portugal',
  },
  phones: [
    { label: 'Telemóvel / WhatsApp', display: '915 492 691', href: 'tel:+351915492691' },
  ],
  email: 'arm.unipessoal@hotmail.com',
  emailHref: 'mailto:arm.unipessoal@hotmail.com',
  livroReclamacoes: 'https://www.livroreclamacoes.pt/',
  mapsQuery: 'Rua Frei Francisco Macedo 102, 3020-521 Botão, Coimbra',
  mapsDirectionsUrl:
    'https://www.google.com/maps/dir/?api=1&destination=Rua+Frei+Francisco+Macedo+102,+3020-521+Bot%C3%A3o,+Coimbra',
  osmEmbedUrl:
    'https://www.openstreetmap.org/export/embed.html?bbox=-8.430%2C40.265%2C-8.390%2C40.285&layer=mapnik&marker=40.275%2C-8.410',
  /** Atualizar após deploy na Vercel */
  siteUrl: 'https://arm-construcoes.vercel.app',
  social: {
    facebookLabel: 'Arm Construção',
    facebookUrl: 'https://www.facebook.com/profile.php?id=61576955753747',
    /** URL Instagram por confirmar */
    instagramLabel: 'Arm Construção',
    instagramUrl: '',
  },
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
  const street = [line1, line2].filter(Boolean).join(', ')
  return `${street}, ${postalCode} ${locality}, ${city}, ${country}`
}
