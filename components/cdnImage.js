import { urlFor } from '@utils/sanity';
import { motion } from 'framer-motion';
import Image from 'next/image';

export default function CDNImage({ className, image, width, height, layout }) {
  return (
    <motion.div initial="hidden" animate="visible" variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}>
      <Image
        src={urlFor(image)
          .width(width * 2)
          .height(height * 2)
          .quality(90)
          .url()}
        alt={image && image.alt}
        width={width}
        height={height}
        className={(className += ' shadow')}
        layout={layout}
      />
    </motion.div>
  );
}
