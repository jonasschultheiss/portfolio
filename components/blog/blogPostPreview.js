/* eslint-disable jsx-a11y/anchor-is-valid */

import { urlFor } from '@utils/sanity';
import Image from 'next/image';
import Link from 'next/link';

export default function BlogPostPreview({ image, title, subTitle, slug, createdAt }) {
  const date = new Date(createdAt);
  const postedAt = `${date.getDate()}/${date.getMonth()}/${date.getFullYear()}`;

  return (
    <div className="flex flex-col md:max-w-md bg-gray-900 rounded-md">
      <Image
        src={urlFor(image).width(600).height(250).quality(90).url()}
        alt={image.alt}
        width="600"
        height="250"
        layout="intrinsic"
        className=" rounded-t-md"
      />
      <div className="flex flex-col p-2">
        <p className="text-gray-300 font-bold text-xl">
          <em>{title}</em>
        </p>
        <p className="text-gray-300 font-semibold text-lg">
          <em>{subTitle}</em>
        </p>
      </div>
      <div className="flex justify-between p-2">
        <Link href={`/blog/${slug.current}`}>
          <a className="text-fnatic font-bold">Go to Post</a>
        </Link>
        <p className="text-gray-300">Posted: {postedAt}</p>
      </div>
    </div>
  );
}
