import CDNImage from '@components/cdnImage';

export default function Social({ social }) {
  const { icon, href } = social;
  return (
    <a href={href} target="_blank" rel="noreferrer" className="mr-4 cursor-pointer">
      <CDNImage image={icon} width={24} height={24} className="fill-current text-fnatic" layout="intrinsic" />
    </a>
  );
}
