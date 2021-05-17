import BlogPostView from '@components/blog/blogPostView';
import CustomHead from '@components/customHead';
import { getClient } from '@utils/sanity';
import groq from 'groq';

export default function BlogView(properties) {
  const { title, subTitle, image } = properties.post;
  return (
    <>
      <CustomHead title={title} description={subTitle} image={image} />
      <BlogPostView post={properties.post} />
    </>
  );
}

export async function getStaticProps({ params }) {
  const post = await getClient().fetch(`*[_type == "blogPost" && slug.current == $slug][0]`, {
    slug: params.slug
  });

  return {
    props: {
      post
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
