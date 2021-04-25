import { urlFor } from '@utils/sanity';
import Image from 'next/image';
import Socials from './socials';

export default function Header({ title, subTitle, image, socials }) {
  return (
    <header className="flex flex-col md:flex-row justify-center items-center bg-gray-900 p-4 md:p-12">
      <Image
        src={urlFor(image).width(300).height(300).quality(90).url()}
        alt={image.alt}
        width="150"
        height="150"
        layout="intrinsic"
        className="rounded-full border border-fnatic"
      />
      <div className="flex flex-col mt-4 md:ml-8 md:mt-0 text-center md:text-left">
        <h1 className="text-fnatic font-extrabold text-3xl">{title}</h1>
        <h2 className="text-gray-300 font-bold text-xl">{subTitle}</h2>
        <Socials socials={socials} />
      </div>
    </header>
  );
}
