/* eslint-disable jsx-a11y/anchor-is-valid */
import ArrowLeftIcon from '@heroicons/react/solid/ArrowLeftIcon';
import SanityBlockContent from '@sanity/block-content-to-react';
import blockSerializer from '@utils/blockSerializer';
import { urlFor } from '@utils/sanity';
import Image from 'next/image';
import Link from 'next/link';

export default function BlogPostView({ post }) {
  const { title, subTitle, image, _createdAt, body } = post;

  const date = new Date(_createdAt).toUTCString();
  const postedAt = date.slice(0, date.lastIndexOf(':'));

  return (
    <div className="flex flex-col p-4 md:px-8 md:py-6 lg:px-16 lg:py-12 xl:px-32 xl:py-24">
      <div className="flex justify-start">
        <Link href="/blog">
          <a className="flex flex-row items-center justify-center mb-4 py-1 px-2 bg-gray-900 rounded-sm">
            <ArrowLeftIcon className="w-6 h-6 text-gray-300" />
            <span className="font-semibold text-lg text-gray-300">All Posts</span>
          </a>
        </Link>
      </div>

      <Image
        src={urlFor(image).width(1500).height(400).quality(90).url()}
        alt={image.alt}
        width="1500"
        height="400"
        layout="intrinsic"
        className="rounded-md "
      />
      <div className="flex flex-col md:flex-row-reverse items-start justify-between mt-6 mb-4">
        <p className="font-semibold text-fnatic">{postedAt}</p>
        <div className="flex flex-col">
          <h1 className="font-bold text-3xl text-gray-900">{title}</h1>
          <h2 className="font-semibold text-xl text-gray-700">{subTitle}</h2>
        </div>
      </div>
      <SanityBlockContent blocks={body} serializers={blockSerializer} />
    </div>
  );
}
