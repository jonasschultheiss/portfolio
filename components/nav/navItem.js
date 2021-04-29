import CustomLink from '@components/customLink';

export default function NavItem({ href, title }) {
  return (
    <li>
      <CustomLink href={href} activeClassName="text-fnatic">
        <a href={href} className="text-gray-100 list-none font-bold text-lg">
          {title}
        </a>
      </CustomLink>
    </li>
  );
}
