import Blog from '@components/blog';
import Layout from '@components/layout';
import { getClient } from '@utils/sanity';

export async function getStaticProps() {
  const settings = await getClient().fetch(`*[_type == "blog"]{title, subTitle}[0]`);
  const posts = await getClient().fetch(`*[_type == "blogPost"]|order(_createdAt){...}`);

  return {
    props: {
      data: { ...settings, posts }
    },
    revalidate: 50
  };
}

export default function Home({ data }) {
  const { title, subTitle, posts } = data;

  return (
    <Layout title={title} description={subTitle}>
      <Blog title={title} subTitle={subTitle} posts={posts} />
    </Layout>
  );
}
