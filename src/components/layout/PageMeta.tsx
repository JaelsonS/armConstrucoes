import { Helmet } from 'react-helmet-async'
import { company, getSiteUrl } from '@/data/company'

type Props = {
  title: string
  description: string
  path?: string
  image?: string
  noIndex?: boolean
  home?: boolean
}

export function PageMeta({
  title,
  description,
  path = '/',
  image = '/og-cover.png',
  noIndex,
}: Props) {
  const site = getSiteUrl()
  const fullTitle = title.includes('BH')
    ? title
    : `${title} · ${company.shortName}`
  const url = `${site}${path.startsWith('/') ? path : `/${path}`}`
  const imageUrl = image.startsWith('http') ? image : `${site}${image}`

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />
      {noIndex ? (
        <meta name="robots" content="noindex,nofollow" />
      ) : (
        <meta name="robots" content="index, follow" />
      )}
      <meta property="og:type" content="website" />
      <meta property="og:locale" content="pt_PT" />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={imageUrl} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta
        property="og:image:alt"
        content="Logotipo BH — Construção Civil e Obras Públicas, Lda."
      />
      <meta property="og:site_name" content={company.shortName} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={imageUrl} />
    </Helmet>
  )
}
