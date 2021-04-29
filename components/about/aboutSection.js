import CDNImage from '@components/cdnImage';
import SanityBlockContent from '@sanity/block-content-to-react';
import blockSerializer from '@utils/blockSerializer';
import fadeIn from '@variants/fadeIn';
import { motion } from 'framer-motion';

export default function AboutSection({ image, body, imageRight }) {
  let classes = 'flex justify-evenly items-center mt-6 space-x-2';
  classes += imageRight ? ' flex-col xl:flex-row-reverse' : ' flex-col xl:flex-row ';
  return (
    <motion.div initial="hidden" animate="visible" variants={fadeIn} className={classes}>
      <CDNImage image={image} width={600} height={400} className="rounded" layout="intrinsic" />
      <div className="md:max-w-3xl mt-4 xl:my-0 mb-4 xl:text-left text-left md:text-center">
        <SanityBlockContent blocks={body} serializers={blockSerializer} />
      </div>
    </motion.div>
  );
}
