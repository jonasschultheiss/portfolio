import About from '@components/about';
import Layout from '@components/layout';
import { getClient } from '@utils/sanity';

export async function getStaticProps() {
  const about = await getClient().fetch(`*[_type == "about"]{title, subTitle, "sections": sections[]->}`);

  return {
    props: {
      data: { about: about[0] }
    },
    revalidate: 50
  };
}

export default function Home({ data }) {
  const { title, subTitle } = data.about;
  return (
    <Layout title={title} description={subTitle}>
      <About about={data.about} />
    </Layout>
  );
}
