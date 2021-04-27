import { urlFor } from '@utils/sanity';
import fadeIn from '@variants/fadeIn';
import { motion } from 'framer-motion';
import Image from 'next/image';

export default function Social({ social }) {
  const { icon, href } = social;
  return (
    <motion.a
      initial="hidden"
      animate="visible"
      variants={fadeIn}
      href={href}
      target="_blank"
      rel="noreferrer"
      className="mr-4 cursor-pointer"
    >
      <Image
        src={urlFor(icon).width(24).height(24).url()}
        alt={icon.alt}
        width="24"
        height="24"
        layout="intrinsic"
        className="fill-current text-fnatic "
      />
    </motion.a>
  );
}
