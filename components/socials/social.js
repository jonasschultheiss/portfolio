import { urlFor } from '@utils/sanity';
import Image from 'next/image';

export default function Social({ social }) {
  const { icon, href } = social;
  return (
    <a href={href} target="_blank" rel="noreferrer" className="mr-4">
      <Image
        src={urlFor(icon).width(24).height(24).url()}
        alt={icon.alt}
        width="24"
        height="24"
        layout="intrinsic"
        className="fill-current text-fnatic "
      />
    </a>
  );
}
