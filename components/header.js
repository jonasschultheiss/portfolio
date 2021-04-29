/* eslint-disable simple-import-sort/imports */
/* eslint-disable jsx-a11y/anchor-is-valid */
import CDNImage from './cdnImage';
import Nav from './nav';
import Socials from './socials';

export default function Header({ title, subTitle, image, socials, logo }) {
  return (
    <header className="p-4 md:p-12 shadow">
      <Nav logo={logo} />
      <div className="flex flex-col md:flex-row justify-center items-center ">
        <CDNImage image={image} width={150} height={150} className="rounded-full" layout="intrinsic" />
        <div className="flex flex-col mt-4 md:ml-8 md:mt-0 text-center md:text-left">
          <h1 className="text-fnatic font-extrabold text-3xl">{title}</h1>
          <h2 className="text-gray-100 font-bold text-xl">{subTitle}</h2>
          <Socials socials={socials} />
        </div>
      </div>
    </header>
  );
}
