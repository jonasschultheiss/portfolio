/* eslint-disable simple-import-sort/imports */
/* eslint-disable jsx-a11y/anchor-is-valid */
import LocalImage from './localImage';
import Nav from './nav';
import Socials from './socials';

export default function Header() {
  return (
    <header className="p-4 md:p-12 shadow">
      <Nav />
      <div className="flex flex-col md:flex-row justify-center items-center ">
        <LocalImage src="/me.jpg" alt="This is me" width={150} height={150} classes="rounded-full" layout="intrinsic" />
        <div className="flex flex-col mt-4 md:ml-8 md:mt-0 text-center md:text-left">
          <h1 className="text-fnatic font-extrabold text-3xl">Jonas Schultheiss</h1>
          <h2 className="text-gray-100 font-bold text-xl">Full stack developer from Switzerland</h2>
          <Socials />
        </div>
      </div>
    </header>
  );
}
