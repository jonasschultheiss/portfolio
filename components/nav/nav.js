/* eslint-disable jsx-a11y/anchor-is-valid */
import CDNImage from '@components/cdnImage';
import NavItem from '@components/nav/navItem';
import Link from 'next/link';

export default function Nav({ logo }) {
  return (
    <nav className="flex justify-between items-center mb-8">
      <div className="cursor-pointer">
        <Link href="/">
          <a href="/">
            <CDNImage image={logo} width={40} height={40} layout="intrinsic" />
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
