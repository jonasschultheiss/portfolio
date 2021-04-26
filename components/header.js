/* eslint-disable simple-import-sort/imports */
/* eslint-disable jsx-a11y/anchor-is-valid */
import { urlFor } from '@utils/sanity';
import Image from 'next/image';
import Link from 'next/link';
import CustomLink from './customLink';
import Socials from './socials';

export default function Header({ title, subTitle, image, socials }) {
  return (
    <header className="p-4 md:p-12">
      <nav className="flex justify-between items-center ">
        <div className="cursor-pointer">
          <Link href="/">
            <a>
              <Image src="/logo.png" alt="Logo" width="40" height="40" layout="intrinsic" />
            </a>
          </Link>
        </div>
        <ul className="flex justify-between space-x-2">
          <li>
            <CustomLink href="/" activeClassName="text-fnatic">
              <a className="text-gray-100 list-none font-bold text-lg">Home</a>
            </CustomLink>
          </li>
          <li>
            <CustomLink href="/projects" activeClassName="text-fnatic">
              <a className="text-gray-100 list-none font-bold text-lg">Projects</a>
            </CustomLink>
          </li>
          <li>
            <CustomLink href="/blog" activeClassName="text-fnatic">
              <a className="text-gray-100 list-none font-bold text-lg">Blog</a>
            </CustomLink>
          </li>
        </ul>
      </nav>
      <div className="flex flex-col md:flex-row justify-center items-center ">
        <Image
          src={urlFor(image).width(300).height(300).quality(90).url()}
          alt={image.alt}
          width="150"
          height="150"
          layout="intrinsic"
          className="rounded-full"
        />
        <div className="flex flex-col mt-4 md:ml-8 md:mt-0 text-center md:text-left">
          <h1 className="text-fnatic font-extrabold text-3xl">{title}</h1>
          <h2 className="text-gray-100 font-bold text-xl">{subTitle}</h2>
          <Socials socials={socials} />
        </div>
      </div>
    </header>
  );
}
