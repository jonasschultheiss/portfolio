import Technology from './technology';

export default function Technologies({ technologies }) {
  return (
    <div>
      {technologies ? (
        <div className="flex flex-col mb-4">
          <p className="font-semibold text-lg text-gray-900">Used technologies</p>
          <div className="flex flex-row justify-start flex-wrap">
            {technologies.map(technology => (
              <Technology key={technology._id} name={technology.name} href={technology.href} />
            ))}
          </div>
        </div>
      ) : undefined}
    </div>
  );
}
