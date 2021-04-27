import SanityBlockContent from '@sanity/block-content-to-react';
import blockSerializer from '@utils/blockSerializer';
import { urlFor } from '@utils/sanity';
import fadeIn from '@variants/fadeIn';
import { motion } from 'framer-motion';
import Image from 'next/image';

export default function AboutSection({ image, body, imageRight }) {
  let classes = 'flex justify-evenly items-center mt-6';
  classes += imageRight ? ' flex-col xl:flex-row-reverse' : ' flex-col xl:flex-row';
  return (
    <motion.div initial="hidden" animate="visible" variants={fadeIn} className={classes}>
      <Image
        src={urlFor(image).width(600).height(400).quality(90).url()}
        alt={image.alt}
        width="600"
        height="400"
        layout="intrinsic"
        className="rounded"
      />
      <div className=" md:max-w-3xl mt-4 md:ml-4 xl:mb-0 mb-4 xl:text-left text-left md:text-center">
        <SanityBlockContent blocks={body} serializers={blockSerializer} />
      </div>
    </motion.div>
  );
}
