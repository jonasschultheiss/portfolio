/* eslint-disable jsx-a11y/anchor-is-valid */

import { urlFor } from '@utils/sanity';
import fadeIn from '@variants/fadeIn';
import hover from '@variants/hover';
import tap from '@variants/tap';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

export default function BlogPostPreview({ image, title, subTitle, slug, createdAt }) {
  const date = new Date(createdAt);
  const postedAt = `${date.getDate()}/${date.getMonth()}/${date.getFullYear()}`;

  return (
    <Link href={`/blog/${slug.current}`}>
      <motion.div
        initial="hidden"
        animate="visible"
        variants={fadeIn}
        whileHover={hover}
        whileTap={tap}
        className="flex flex-col md:max-w-md bg-gray-900 rounded cursor-pointer"
      >
        <Image
          src={urlFor(image).width(600).height(250).quality(90).url()}
          alt={image.alt}
          width="600"
          height="250"
          layout="intrinsic"
          className=" rounded-t-md"
        />
        <div className="flex justify-start p-2 pb-0">
          <p className="text-gray-100">Posted: {postedAt}</p>
        </div>
        <div className="flex flex-col p-2">
          <p className="text-gray-100 font-bold text-xl">
            <em className="not-italic">{title}</em>
          </p>
          <p className="text-gray-100 font-semibold text-lg">
            <em className="not-italic">{subTitle}</em>
          </p>
        </div>
      </motion.div>
    </Link>
  );
}
