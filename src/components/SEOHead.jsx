import React from 'react';
import { Helmet } from 'react-helmet-async';

const BASE_URL = 'https://padmapriyahospital.com';

/**
 * Reusable SEO Head component providing dynamic per-page metadata,
 * canonical links, OpenGraph, Twitter cards, and optional JSON-LD structured data.
 */
export default function SEOHead({
  title,
  description,
  canonicalPath = '',
  ogImage = '/images/brand/official_hospital_logo.png',
  ogType = 'website',
  schemaJson = null
}) {
  const fullTitle = title.includes('Padmapriya') 
    ? title 
    : `${title} | Sri Padmapriya Hospital, Adyar, Chennai`;

  const canonicalUrl = `${BASE_URL}${canonicalPath.startsWith('/') ? canonicalPath : `/${canonicalPath}`}`;
  const fullOgImage = ogImage.startsWith('http') ? ogImage : `${BASE_URL}${ogImage}`;

  return (
    <Helmet>
      {/* Title & Description */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonicalUrl} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={ogType} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:image" content={fullOgImage} />
      <meta property="og:site_name" content="Sri Padmapriya Hospital" />
      <meta property="og:locale" content="en_IN" />

      {/* Twitter Cards */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={fullOgImage} />

      {/* Optional Page-Specific Structured Data */}
      {schemaJson && (
        <script type="application/ld+json">
          {JSON.stringify(schemaJson)}
        </script>
      )}
    </Helmet>
  );
}

