import About from '@components/about';
import Footer from '@components/footer';
import Header from '@components/header';
import { getClient } from '@utils/sanity';
import Head from 'next/head';

export async function getStaticProps() {
  const header = await getClient(true).fetch(
    `*[_type == "header"]{title, subTitle,hero_image, "socials": socials[]->}`
  );

  const about = await getClient(true).fetch(`*[_type == "about"]{title, subTitle, "sections": sections[]->}`);

  return {
    props: {
      data: { ...header[0], about: about[0] }
    },
    revalidate: 50
  };
}

export default function Home({ data }) {
  return (
    <div className="min-h-screen">
      <Head>
        <title>Jonas Schultheiss</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header title={data.title} subTitle={data.subTitle} image={data.hero_image} socials={data.socials} />

      <main className="bg-gray-100 p-4 pt-6 md:p-12 md:pt-14">
        <About about={data.about} />
      </main>

      <Footer />
    </div>
  );
}
