import Footer from '@components/footer';
import Header from '@components/header';
import Projects from '@components/projects';
import { getClient } from '@utils/sanity';
import Head from 'next/head';

export async function getStaticProps() {
  const settings = await getClient(true).fetch(`*[_type == "projects"]{title, subTitle}[0]`);
  const projects = await getClient(true).fetch(
    `*[_type == "project"]|order(projectStartDate){..., "deployedLinks": 
    deployedLinks[]->,"repositories": repositories[]->,"technologies": technologies[]->}`
  );
  const header = await getClient(true).fetch(
    `*[_type == "header"]{title, subTitle,hero_image, "socials": socials[]->}[0]`
  );

  return {
    props: {
      data: { projects, header, ...settings }
    },
    revalidate: 50
  };
}

export default function Home({ data }) {
  const { title, subTitle, projects, header } = data;

  return (
    <div className="min-h-screen">
      <Head>
        <title>Projects</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header title={header.title} subTitle={header.subTitle} image={header.hero_image} socials={header.socials} />
      <main className="bg-gray-100 p-4 pt-6 md:p-12 md:pt-14">
        <Projects title={title} subTitle={subTitle} projects={projects} />
      </main>
      <Footer />
    </div>
  );
}
