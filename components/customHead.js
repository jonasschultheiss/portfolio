import { urlFor } from '@utils/sanity';
import Head from 'next/head';
import { useRouter } from 'next/router';

export default function CustomHead({
  title = 'Jonas Schultheiss',
  description = 'Full stack developer from Switzerland',
  image = 'image-e1d5193c38d26f1b3863df2170bced21bebc265a-1149x2048-jpg'
}) {
  const imageUrl = urlFor(image).width(750).height(750).quality(90).url();
  const router = useRouter();

  return (
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <meta content="IE=edge" httpEquiv="X-UA-Compatible" />
      <meta name="robots" content="follow, index" />
      <link href="/favicon.ico" rel="shortcut icon" />
      <meta content={description} name="description" />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="Jonas Schultheiss" />
      <meta property="og:description" content={description} />
      <meta property="og:title" content={title} />
      <meta property="og:image" content={imageUrl} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@vercel" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={imageUrl} />
      <meta property="og:url" content={`jonasschultheiss.dev${router.asPath}`} />
    </Head>
  );
}
