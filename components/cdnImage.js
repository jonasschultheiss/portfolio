import { urlFor } from '@utils/sanity';
import Image from 'next/image';

export default function CDNImage(properties) {
  const { image, width, height } = properties;
  return (
    <Image
      src={urlFor(image)
        .width(width * 2)
        .height(height * 2)
        .quality(90)
        .url()}
      alt={image.alt}
      width={width}
      height={height}
      {...properties}
    />
  );
}
