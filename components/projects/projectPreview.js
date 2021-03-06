/* eslint-disable jsx-a11y/anchor-is-valid */

import CDNImage from '@components/cdnImage';
import fadeIn from '@variants/fadeIn';
import hover from '@variants/hover';
import tap from '@variants/tap';
import { motion } from 'framer-motion';
import Link from 'next/link';

export default function ProjectPreview({ image, title, subTitle, slug, projectStartDate }) {
  const date = new Date(projectStartDate);
  const postedAt = `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;

  return (
    <Link href={`/projects/${slug.current}`}>
      <motion.div
        initial="hidden"
        animate="visible"
        variants={fadeIn}
        whileHover={hover}
        whileTap={tap}
        className="flex flex-col md:max-w-md bg-gray-900 rounded cursor-pointer"
      >
        <div className="flex flex-col md:max-w-md bg-gray-900 rounded">
          <CDNImage image={image} width={600} height={250} className="rounded-t" layout="intrinsic" />
          <div className="flex justify-start p-2 pb-0">
            <p className="text-brand-500 font-medium">Project start: {postedAt}</p>
          </div>
          <div className="flex flex-col p-2">
            <p className="text-gray-100 font-bold text-xl">
              <em className="not-italic">{title}</em>
            </p>
            <p className="text-gray-300 font-semibold text-lg">
              <em className="not-italic">{subTitle}</em>
            </p>
          </div>
        </div>
      </motion.div>
    </Link>
  );
}
