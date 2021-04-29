import Blog from '@components/blog';
import Footer from '@components/footer';
import Header from '@components/header';
import { getClient } from '@utils/sanity';
import Head from 'next/head';

export async function getStaticProps() {
  const settings = await getClient().fetch(`*[_type == "blog"]{title, subTitle}[0]`);
  const posts = await getClient().fetch(`*[_type == "blogPost"]|order(_createdAt){...}`);
  const header = await getClient().fetch(
    `*[_type == "header"]{title, subTitle,hero_image, logo, "socials": socials[]->}[0]`
  );

  return {
    props: {
      data: { ...settings, posts, header: header }
    },
    revalidate: 50
  };
}

export default function Home({ data }) {
  const { title, subTitle, posts, header } = data;

  return (
    <div className="min-h-screen">
      <Head>
        <title>Blog</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header
        title={header.title}
        subTitle={header.subTitle}
        image={header.hero_image}
        socials={header.socials}
        logo={header.logo}
      />
      <main className="bg-gray-100 p-4 pt-6 md:p-12 md:pt-14">
        <Blog title={title} subTitle={subTitle} posts={posts} />
      </main>
      <Footer />
    </div>
  );
}
