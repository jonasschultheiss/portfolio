import About from '@components/about';
import CustomHead from '@components/customHead';
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
  const { about } = data;
  return (
    <>
      <CustomHead title="Jonas Schultheiss" description="Full stack developer from Switzerland" />
      <About about={about} />
    </>
  );
}
