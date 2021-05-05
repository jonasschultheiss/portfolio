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
      <main className="bg-gray-100 p-4 pt-6 md:p-12 md:pt-14">
        <About about={data.about} />
      </main>
    </Layout>
  );
}
