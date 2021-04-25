import Social from './social';

export default function Socials({ socials }) {
  return (
    <div className="flex flex-row items-center justify-center md:justify-start mt-2">
      {socials && socials.map(social => <Social social={social} key={social._id} />)}
    </div>
  );
}
