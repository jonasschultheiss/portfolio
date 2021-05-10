import { urlFor } from '@utils/sanity';
import { motion } from 'framer-motion';
import Image from 'next/image';

export default function CDNImage({ className, image, width, height, layout }) {
  const url =
    width && height
      ? urlFor(image)
          .width(width * 2)
          .height(height * 2)
          .quality(90)
          .url()
      : urlFor(image).maxHeight().maxWidth().quality(90).url();

  return (
    <motion.div initial="hidden" animate="visible" variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}>
      <Image src={url} alt={image && image.alt} width={width} height={height} layout={layout} className={className} />
    </motion.div>
  );
}
