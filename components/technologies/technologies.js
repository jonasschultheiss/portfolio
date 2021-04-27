import Technology from '@components/technologies/technology';
import stagger from '@variants/stagger';
import { motion } from 'framer-motion';

export default function Technologies({ technologies }) {
  return (
    <div>
      {technologies ? (
        <div className="flex flex-col mb-4">
          <p className="font-semibold text-lg text-gray-900">Used technologies</p>
          <motion.div variants={stagger} className="flex flex-row justify-start flex-wrap">
            {technologies.map(technology => (
              <Technology key={technology._id} name={technology.name} href={technology.href} />
            ))}
          </motion.div>
        </div>
      ) : undefined}
    </div>
  );
}
