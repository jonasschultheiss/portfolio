import LocalImage from '@components/localImage';

export default function Social({ href, src, alt }) {
  return (
    <a href={href} target="_blank" rel="noreferrer" className="mr-4 cursor-pointer">
      <LocalImage src={src} alt={alt} width={24} height={24} layout="intrinsic" />
    </a>
  );
}
