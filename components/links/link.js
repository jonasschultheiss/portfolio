export default function Link({ children, href, newTab }) {
  return (
    <a
      className="font-medium text-blue-700 hover:underline inline-block"
      href={href}
      target={newTab && '_blank'}
      rel={newTab && 'noopener noreferrer'}
    >
      {children}
    </a>
  );
}
