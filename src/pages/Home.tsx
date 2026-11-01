import { Helmet } from 'react-helmet-async'
import { PageMeta } from '@/components/layout/PageMeta'
import { Hero } from '@/components/home/Hero'
import { AboutTeaser } from '@/components/home/AboutTeaser'
import { ServicesSection } from '@/components/home/ServicesSection'
import { PortfolioPreview } from '@/components/home/PortfolioPreview'
import { CapotoSection } from '@/components/home/CapotoSection'
import { MetalStructuresSection } from '@/components/home/MetalStructuresSection'
import { MethodSection } from '@/components/home/MethodSection'
import { Differentials } from '@/components/home/Differentials'
import { CtaSection } from '@/components/home/CtaSection'
import { company, getSiteUrl } from '@/data/company'

const schema = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: company.legalName,
  description: company.description,
  url: getSiteUrl(),
  telephone: company.phones.map((p) => p.display),
  email: company.email,
  address: {
    '@type': 'PostalAddress',
    streetAddress: company.address.line1,
    addressLocality: company.address.locality,
    addressRegion: company.address.city,
    postalCode: company.address.postalCode,
    addressCountry: 'PT',
  },
  areaServed: company.areaServed,
  image: `${getSiteUrl()}/images/arm-logo.png`,
}

export function Home() {
  return (
    <>
      <PageMeta
        home
        title="ARM Construções — Construção civil e obras públicas em Coimbra"
        description="ARM — Construções, Unipessoal Lda. em Coimbra e arredores. Construção civil, obras públicas, capoto, estruturas metálicas e remodelações."
        path="/"
      />
      <Helmet>
        <script type="application/ld+json">{JSON.stringify(schema)}</script>
      </Helmet>
      <Hero />
      <AboutTeaser />
      <ServicesSection />
      <PortfolioPreview />
      <CapotoSection />
      <MetalStructuresSection />
      <MethodSection />
      <Differentials />
      <CtaSection />
    </>
  )
}
