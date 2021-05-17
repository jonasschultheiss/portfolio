export default function Link({ name, href, newTab }) {
  return (
    <a
      className="font-medium text-blue-700 hover:underline"
      href={href}
      target={newTab && '_blank'}
      rel={newTab && 'noopener noreferrer'}
    >
      {name}
    </a>
  );
}
