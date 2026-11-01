import { Helmet } from 'react-helmet-async'
import { PageMeta } from '@/components/layout/PageMeta'
import { Hero } from '@/components/home/Hero'
import { AboutTeaser } from '@/components/home/AboutTeaser'
import { ServicesSection } from '@/components/home/ServicesSection'
import { PortfolioPreview } from '@/components/home/PortfolioPreview'
import { MethodSection } from '@/components/home/MethodSection'
import { Differentials } from '@/components/home/Differentials'
import { CtaSection } from '@/components/home/CtaSection'
import { company } from '@/data/company'

const schema = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: company.legalName,
  description: company.description,
  url: company.siteUrl,
  email: company.email,
  telephone: company.phones.map((p) => p.display),
  address: {
    '@type': 'PostalAddress',
    streetAddress: `${company.address.line1}, ${company.address.line2}`,
    addressLocality: company.address.locality,
    addressRegion: company.address.city,
    postalCode: company.address.postalCode,
    addressCountry: 'PT',
  },
  areaServed: 'Coimbra, Portugal',
  image: `${company.siteUrl}/images/bh-logo.png`,
}

export function Home() {
  return (
    <>
      <PageMeta
        home
        title="BH Construção · Construção Civil e Obras Públicas em Coimbra"
        description="BH — Construção Civil e Obras Públicas, Lda. em Coimbra. Construção, reabilitação e acabamentos com rigor técnico."
        path="/"
      />
      <Helmet>
        <script type="application/ld+json">{JSON.stringify(schema)}</script>
      </Helmet>
      <Hero />
      <AboutTeaser />
      <ServicesSection />
      <PortfolioPreview />
      <MethodSection />
      <Differentials />
      <CtaSection />
    </>
  )
}
