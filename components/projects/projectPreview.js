/* eslint-disable jsx-a11y/anchor-is-valid */

import { urlFor } from '@utils/sanity';
import Image from 'next/image';
import Link from 'next/link';

export default function ProjectPreview({ image, title, subTitle, slug, projectStartDate }) {
  const date = new Date(projectStartDate);
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
        <p className="text-gray-100 font-bold text-xl">
          <em className="not-italic">{title}</em>
        </p>
        <p className="text-gray-100 font-semibold text-lg">
          <em className="not-italic">{subTitle}</em>
        </p>
      </div>
      <div className="flex justify-between p-2">
        <Link href={`/projects/${slug.current}`}>
          <a className="text-fnatic font-bold">Go to Post</a>
        </Link>
        <p className="text-gray-100">Posted: {postedAt}</p>
      </div>
    </div>
  );
}
