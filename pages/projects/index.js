import Layout from '@components/layout';
import Projects from '@components/projects';
import { getClient } from '@utils/sanity';

export async function getStaticProps() {
  const settings = await getClient().fetch(`*[_type == "projects"]{title, subTitle}[0]`);
  const projects = await getClient().fetch(
    `*[_type == "project"]|order(projectStartDate desc){..., "deployedLinks": 
    deployedLinks[]->,"repositories": repositories[]->,"technologies": technologies[]->}`
  );

  return {
    props: {
      data: { projects, ...settings }
    },
    revalidate: 50
  };
}

export default function Home({ data }) {
  const { title, subTitle, projects } = data;

  return (
    <Layout title={title} description={subTitle}>
      <Projects title={title} subTitle={subTitle} projects={projects} />
    </Layout>
  );
}
