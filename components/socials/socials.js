import Social from '@components/socials/social';
import stagger from '@variants/stagger';
import { motion } from 'framer-motion';

export default function Socials({ socials }) {
  return (
    <div className="flex flex-row items-center justify-center md:justify-start mt-2">
      {socials && socials.map(social => <Social social={social} key={social._id} />)}
    </div>
  );
}
