import BlogPostView from '@components/blog/blogPostView';
import Footer from '@components/footer';
import Header from '@components/header';
import { getClient } from '@utils/sanity';
import groq from 'groq';
import Head from 'next/head';

export default function BlogView(properties) {
  const { title, subTitle, hero_image, socials, post, logo } = properties;
  return (
    <div className="min-h-screen">
      <Head>
        <title>{post.title}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {title && <Header title={title} subTitle={subTitle} image={hero_image} socials={socials} logo={logo} />}
      <main className="bg-gray-100 ">{<BlogPostView post={post} />}</main>
      <Footer />
    </div>
  );
}

export async function getStaticProps({ params }) {
  const header = await getClient().fetch(
    `*[_type == "header"]{title, subTitle,hero_image, logo, "socials": socials[]->}[0]`
  );
  const post = await getClient().fetch(`*[_type == "blogPost" && slug.current == $slug][0]`, {
    slug: params.slug
  });

  return {
    props: {
      post,
      ...header
    }
  };
}

export async function getStaticPaths() {
  const paths = await getClient().fetch(groq`*[_type == "blogPost" && defined(slug.current)][].slug.current`);

  return {
    paths: paths.map(slug => ({ params: { slug } })),
    fallback: false
  };
}
