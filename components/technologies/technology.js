export default function Technology({ name, href }) {
  return (
    <a href={href} target="_blank" rel="noreferrer" className="bg-gray-900 rounded py-1 px-2 mr-1 mt-1">
      <p className="text-gray-100 font-semibold">{name}</p>
    </a>
  );
}
