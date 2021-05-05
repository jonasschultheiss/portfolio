import Layout from '@components/layout';
import ProjectView from '@components/projects/projectView';
import { getClient } from '@utils/sanity';
import groq from 'groq';

export default function BlogView(properties) {
  const { title, subTitle, image } = properties.project;
  return (
    <Layout title={title} description={subTitle} image={image}>
      <ProjectView project={properties.project} />
    </Layout>
  );
}

export async function getStaticProps({ params }) {
  const project = await getClient().fetch(
    `*[_type == "project" && slug.current == $slug]{..., "deployedLinks": deployedLinks[]->,"repositories": 
    repositories[]->,"technologies": technologies[]->,"links": links[]->}[0]`,
    {
      slug: params.slug
    }
  );

  return {
    props: {
      project
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
