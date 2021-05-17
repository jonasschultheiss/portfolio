import Link from './link';

export default function Links({ links, title }) {
  return (
    <div>
      {links && links.length > 0 ? (
        <div className="flex flex-col mt-2">
          <p className="font-semibold text-lg text-gray-900">{title}</p>
          <div className="flex flex-col justify-start">
            {links.map(link => (
              <Link key={link._id} href={link.href} newTab>
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      ) : undefined}
    </div>
  );
}
