import { Helmet } from "react-helmet-async";

function SEO({
  title,
  description,
  keywords,
  image = "/og-image.png",
  url = "https://cloudflow-crm.vercel.app",
}) {
  const fullTitle = `${title} | CloudFlow CRM`;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "CloudFlow CRM",
    applicationCategory: "BusinessApplication",
    operatingSystem: "Web",
    description,
    url,
    image,
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
    },
  };

  return (
    <Helmet>
      <title>{fullTitle}</title>

      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />

      <meta name="robots" content="index,follow" />

      <link rel="canonical" href={url} />

      {/* Open Graph */}

      <meta property="og:type" content="website" />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:url" content={url} />

      {/* Twitter */}

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      {/* JSON-LD */}

      <script type="application/ld+json">
        {JSON.stringify(jsonLd)}
      </script>
    </Helmet>
  );
}

export default SEO;