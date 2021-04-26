import BlogPostPreview from './blogPostPreview';

export default function Blog({ title, subTitle, posts }) {
  return (
    <div className="md:m-12 m-4 mt-6">
      <h3 className="text-2xl font-bold text-center text-gray-900">{title}</h3>
      <h4 className="text-xl text-center text-gray-700 mb-4 md:mb-10">{subTitle}</h4>
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
    </div>
  );
}
