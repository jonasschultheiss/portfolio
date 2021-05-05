/* eslint-disable jsx-a11y/anchor-is-valid */
import LocalImage from '@components/localImage';
import NavItem from '@components/nav/navItem';
import Link from 'next/link';

export default function Nav() {
  return (
    <nav className="flex justify-between items-center mb-8">
      <div className="cursor-pointer">
        <Link href="/">
          <a href="/">
            <LocalImage src="/logo.png" alt="Logo" width={40} height={40} layout="intrinsic" />
          </a>
        </Link>
      </div>
      <ul className="flex justify-between space-x-2">
        <NavItem href="/" title="Home" />
        <NavItem href="/projects" title="Projects" />
        <NavItem href="/blog" title="Blog" />
      </ul>
    </nav>
  );
}
