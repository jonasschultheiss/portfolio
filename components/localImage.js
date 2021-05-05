import { motion } from 'framer-motion';
import Image from 'next/image';

export default function LocalImage({ src, alt, width, height, layout, classes }) {
  return (
    <motion.div initial="hidden" animate="visible" variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}>
      <Image src={src} alt={alt} width={width} height={height} className={classes} layout={layout} />
    </motion.div>
  );
}
