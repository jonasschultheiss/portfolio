import fadeIn from '@variants/fadeIn';
import { motion } from 'framer-motion';

export default function PageTitle({ title, subTitle }) {
  return (
    <motion.div initial="hidden" animate="visible" variants={fadeIn}>
      <h3 className="text-2xl font-bold text-center text-gray-900">{title}</h3>
      <h4 className="text-xl text-center text-gray-700 mb-4 md:mb-10">{subTitle}</h4>
    </motion.div>
  );
}
