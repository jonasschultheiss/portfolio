import About from '@components/about';
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
  console.log('🚀 ~ file: index.js ~ line 22 ~ Home ~ data', data);
  return (
    <div className="">
      <Head>
        <title>Jonas Schultheiss</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header title={data.title} subTitle={data.subTitle} image={data.hero_image} socials={data.socials} />

      <main>
        <About about={data.about} />
      </main>

      <footer className=""></footer>
    </div>
  );
}
