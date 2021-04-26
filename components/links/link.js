export default function Link({ name, href }) {
  return (
    <p className="font-semibold">
      {`${name}: `}
      <a className="font-normal text-blue-600" href={href} target="_blank" rel="noreferrer">
        {href}
      </a>
    </p>
  );
}
