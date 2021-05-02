export default function Link({ name, href }) {
  return (
    <p className="font-medium text-gray-700">
      {`${name}: `}
      <a className="font-normal text-blue-600" href={href} target="_blank" rel="noreferrer">
        {href}
      </a>
    </p>
  );
}
