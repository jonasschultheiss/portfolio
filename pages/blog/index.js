import Blog from '@components/blog';
import Footer from '@components/footer';
import Header from '@components/header';
import { getClient } from '@utils/sanity';
import Head from 'next/head';

export async function getStaticProps() {
  const settings = await getClient(true).fetch(`*[_type == "blog"]{title, subTitle}[0]`);
  const posts = await getClient(true).fetch(`*[_type == "blogPost"]|order(_createdAt){...}`);
  const header = await getClient(true).fetch(
    `*[_type == "header"]{title, subTitle,hero_image, "socials": socials[]->}`
  );

  return {
    props: {
      data: { ...settings, posts, header: header[0] }
    },
    revalidate: 50
  };
}

export default function Home({ data }) {
  const { title, subTitle, posts, header } = data;

  return (
    <div className="min-h-screen">
      <Head>
        <title>Jonas Schultheiss</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header title={header.title} subTitle={header.subTitle} image={header.hero_image} socials={header.socials} />

      <main>
        <Blog title={title} subTitle={subTitle} posts={posts} />
      </main>

      <Footer />
    </div>
  );
}
