import { globalMeta } from '@/app/AppLayout';
import Head from 'next/head';

interface SeoProps {
  metaTitle?: string;
  metaDescription?: string;
  shareImage?: string;
  article?: boolean;
}

const defaultSeo = { ...globalMeta };

const SEO: React.FC<SeoProps> = ({
  metaTitle, metaDescription, shareImage, article,
}) => {
  const fullSeo = {
    ...defaultSeo,
    metaTitle: metaTitle || defaultSeo?.metaTitle,
    metaDescription: metaDescription || defaultSeo?.metaDescription,
    shareImage: shareImage || defaultSeo?.shareImage,
    article: article || defaultSeo?.article,
  };

  return (
    <Head>
      {fullSeo.metaTitle && (
        <>
          <title>{fullSeo.metaTitle}</title>
          <meta property="og:title" content={fullSeo.metaTitle} />
          <meta name="twitter:title" content={fullSeo.metaTitle} />
        </>
      )}
      {fullSeo.metaDescription && (
        <>
          <meta name="description" content={fullSeo.metaDescription} />
          <meta property="og:description" content={fullSeo.metaDescription} />
          <meta name="twitter:description" content={fullSeo.metaDescription} />
        </>
      )}
      {fullSeo.shareImage && (
        <>
          <meta property="og:image" content={fullSeo.shareImage} />
          <meta name="twitter:image" content={fullSeo.shareImage} />
          <meta name="image" content={fullSeo.shareImage} />
          <meta name="twitter:card" content="summary_large_image" />
        </>
      )}
      {fullSeo.article && <meta property="og:type" content="article" />}
      <meta name="viewport" content="width=device-width,initial-scale=1" />
    </Head>
  );
};

export default SEO;
