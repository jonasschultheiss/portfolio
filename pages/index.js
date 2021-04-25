import Header from '@components/header';
import { getClient } from '@utils/sanity';
import Head from 'next/head';

export async function getStaticProps() {
  console.log('ggggg', await getClient(true).fetch(`*[]`));
  const siteSettings = await getClient(true).fetch(
    `*[_type == "header"]{title, subTitle,hero_image, "socials": socials[]->}`
  );
  console.log('🚀 ~ file: index.js ~ line 8 ~ getStaticProps ~ data', siteSettings);

  return {
    props: {
      data: { ...siteSettings[0] }
    },
    revalidate: 50
  };
}

export default function Home({ data }) {
  console.log('🚀 ~ file: index.js ~ line 19 ~ Home ~ data', data);
  return (
    <div className="">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header title={data.title} subTitle={data.subTitle} image={data.hero_image} socials={data.socials} />

      <main className="">
        <p className=" font-extrabold">hello world</p>
      </main>

      <footer className=""></footer>
    </div>
  );
}
