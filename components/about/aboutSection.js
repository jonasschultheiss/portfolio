import SanityBlockContent from '@sanity/block-content-to-react';
import blockSerializer from '@utils/blockSerializer';
import { urlFor } from '@utils/sanity';
import Image from 'next/image';

export default function AboutSection({ image, body, imageRight }) {
  let classes = 'flex  justify-evenly items-center mt-6';
  classes += imageRight ? ' flex-col md:flex-row-reverse' : ' flex-col md:flex-row';

  return (
    <div className={classes}>
      <Image
        src={urlFor(image).width(600).height(400).quality(90).url()}
        alt={image.alt}
        width="600"
        height="400"
        layout="intrinsic"
        className="rounded-md"
      />
      <SanityBlockContent blocks={body} serializers={blockSerializer} className=" md:max-w-3xl md:ml-8 mt-4" />
    </div>
  );
}
