import BlogPostPreview from '@components/blog/blogPostPreview';
import PageTitle from '@components/pageTitle';

export default function Blog({ title, subTitle, posts }) {
  return (
    <>
      <PageTitle title={title} subTitle={subTitle} />
      <div className="p-2 md:grid md:grid-cols-3 md:gap-4 md:space-y-0 space-y-4 md:place-items-center">
        {posts &&
          posts.map(post => (
            <BlogPostPreview
              key={post._id}
              image={post.image}
              title={post.title}
              subTitle={post.subTitle}
              slug={post.slug}
              createdAt={post._createdAt}
            />
          ))}
      </div>
    </>
  );
}
