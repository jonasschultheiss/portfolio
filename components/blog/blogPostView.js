/* eslint-disable jsx-a11y/anchor-is-valid */
import CDNImage from '@components/cdnImage';
import ArrowLeftIcon from '@heroicons/react/solid/ArrowLeftIcon';
import SanityBlockContent from '@sanity/block-content-to-react';
import blockSerializer from '@utils/blockSerializer';
import fadeIn from '@variants/fadeIn';
import hover from '@variants/hover';
import tap from '@variants/tap';
import { motion } from 'framer-motion';
import Link from 'next/link';

export default function BlogPostView({ post }) {
  const { title, subTitle, image, _createdAt, body } = post;

  const date = new Date(_createdAt).toUTCString();
  const postedAt = date.slice(0, date.lastIndexOf(':'));

  return (
    <motion.div initial="hidden" animate="visible" variants={fadeIn} className="flex flex-col md:max-w-7xl mx-auto">
      <div className="flex justify-start">
        <Link href="/blog">
          <motion.a
            whileHover={hover}
            whileTap={tap}
            className="flex flex-row items-center justify-center mb-4 py-1 px-2 bg-gray-900 rounded-sm cursor-pointer"
          >
            <ArrowLeftIcon className="w-6 h-6 text-gray-100" />
            <span className="font-semibold text-lg text-gray-100">All Posts</span>
          </motion.a>
        </Link>
      </div>
      <div className="w-full relative h-96">
        <CDNImage image={image} className="rounded object-cover" layout="fill" />
      </div>
      <div className="flex flex-col md:flex-row-reverse items-start justify-between mt-6 mb-4">
        <p className="font-semibold text-fnatic">{postedAt}</p>
        <div className="flex flex-col">
          <h1 className="font-bold text-3xl text-gray-900">{title}</h1>
          <h2 className="font-semibold text-xl text-gray-700">{subTitle}</h2>
        </div>
      </div>
      <SanityBlockContent blocks={body} serializers={blockSerializer} />
    </motion.div>
  );
}
