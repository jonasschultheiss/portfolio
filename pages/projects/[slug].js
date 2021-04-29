import Footer from '@components/footer';
import Header from '@components/header';
import ProjectView from '@components/projects/projectView';
import { getClient } from '@utils/sanity';
import groq from 'groq';
import Head from 'next/head';

export default function BlogView(properties) {
  const { title, subTitle, hero_image, socials, project, logo } = properties;
  return (
    <div className="min-h-screen">
      <Head>
        <title>{project.title}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {title && <Header title={title} subTitle={subTitle} image={hero_image} socials={socials} logo={logo} />}
      <main className="bg-gray-100 ">
        <ProjectView project={project} />
      </main>
      <Footer />
    </div>
  );
}

export async function getStaticProps({ params }) {
  const header = await getClient().fetch(
    `*[_type == "header"]{title, subTitle,hero_image,logo, "socials": socials[]->}[0]`
  );
  const project = await getClient().fetch(
    `*[_type == "project" && slug.current == $slug]{..., "deployedLinks": deployedLinks[]->,"repositories": 
    repositories[]->,"technologies": technologies[]->,"links": links[]->}[0]`,
    {
      slug: params.slug
    }
  );

  return {
    props: {
      project,
      ...header
    }
  };
}

export async function getStaticPaths() {
  const paths = await getClient().fetch(groq`*[_type == "project" && defined(slug.current)][].slug.current`);

  return {
    paths: paths.map(slug => ({ params: { slug } })),
    fallback: false
  };
}
