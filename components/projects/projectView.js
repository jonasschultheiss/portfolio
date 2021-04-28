/* eslint-disable jsx-a11y/anchor-is-valid */
import CDNImage from '@components/cdnImage';
import Links from '@components/links';
import Technologies from '@components/technologies';
import ArrowLeftIcon from '@heroicons/react/solid/ArrowLeftIcon';
import SanityBlockContent from '@sanity/block-content-to-react';
import blockSerializer from '@utils/blockSerializer';
import fadeIn from '@variants/fadeIn';
import hover from '@variants/hover';
import tap from '@variants/tap';
import { motion } from 'framer-motion';
import Link from 'next/link';

export default function ProjectView({ project }) {
  const { title, subTitle, image, projectStartDate, body, deployedLinks, repositories, technologies, links } = project;

  const date = new Date(projectStartDate);
  const postedAt = `${date.getDate()}/${date.getMonth()}/${date.getFullYear()}`;

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={fadeIn}
      className="flex flex-col p-4 md:px-8 md:py-6 lg:px-16 lg:py-12 xl:px-32 xl:py-24"
    >
      <div className="flex justify-start">
        <Link href="/projects">
          <motion.a
            whileHover={hover}
            whileTap={tap}
            className="flex flex-row items-center justify-center mb-4 py-1 px-2 bg-gray-900 rounded cursor-pointer"
          >
            <ArrowLeftIcon className="w-6 h-6 text-gray-100" />
            <span className="font-semibold text-lg text-gray-100">All Projects</span>
          </motion.a>
        </Link>
      </div>
      <CDNImage image={image} width={1500} height={400} className="rounded" layout="intrinsic" />
      <div className="flex flex-col md:flex-row-reverse items-start justify-between mt-6 mb-4">
        <p className="font-semibold text-fnatic">Project start: {postedAt}</p>
        <div className="flex flex-col">
          <h1 className="font-bold text-3xl text-gray-900">{title}</h1>
          <h2 className="font-semibold text-xl text-gray-700">{subTitle}</h2>
        </div>
      </div>
      <Technologies technologies={technologies} />
      <Links title="Deployments" links={deployedLinks} />
      <Links title="Repositories" links={repositories} />
      <Links title="Other resources" links={links} />
      <SanityBlockContent blocks={body} serializers={blockSerializer} className="mt-6" />
    </motion.div>
  );
}
