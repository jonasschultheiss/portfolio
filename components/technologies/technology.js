import fadeIn from '@variants/fadeIn';
import hover from '@variants/hover';
import tap from '@variants/tap';
import { motion } from 'framer-motion';

export default function Technology({ name, href }) {
  return (
    <motion.a
      initial="hidden"
      animate="visible"
      variants={fadeIn}
      href={href}
      target="_blank"
      rel="noreferrer"
      whileHover={hover}
      whileTap={tap}
      className="bg-gray-900 rounded py-1 px-2 mr-1 mt-1"
    >
      <p className="text-gray-100 font-semibold">{name}</p>
    </motion.a>
  );
}
