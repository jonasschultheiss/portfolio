import Link from '@components/links/link';
import { urlFor } from '@utils/sanity';
import Image from 'next/image';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import dark from 'react-syntax-highlighter/dist/cjs/styles/prism/atom-dark';

const ImageRenderer = ({ node }) => {
  return (
    <div className="flex flex-col w-full justify-center items-center my-4">
      <div className="bg-gray-200 shadow rounded w-full my-4">
        <div className="relative rounded mx-auto w-full">
          <Image
            src={urlFor(node.asset).quality(90).url()}
            alt={node.alt}
            layout="intrinsic"
            width="1280"
            height="720"
            className="rounded-t"
            objectFit="scale"
          />
        </div>
        <p className="text-sm text-gray-700 text-center p-1">Figure: {node.description}</p>
      </div>
    </div>
  );
};

const CodeRenderer = ({ node }) => {
  return (
    <div className="my-4 rounded shadow">
      <SyntaxHighlighter showLineNumbers wrapLines wrapLongLines language={node.language} style={dark}>
        {node.code}
      </SyntaxHighlighter>
    </div>
  );
};

const BlockRenderer = properties => {
  const { node, children } = properties;
  switch (node.style) {
    case 'normal':
      return <p className="text-gray-900 mb-2">{children}</p>;
    case 'h1':
      return <h1 className="font-bold text-2xl text-gray-900 mt-6 mb-2">{children}</h1>;
    case 'h2':
      return <h2 className="font-bold text-xl text-gray-900 mt-6 mb-2">{children}</h2>;
    case 'h3':
      return <h3 className="font-semibold text-xl text-gray-900  mt-4 mb-2">{children}</h3>;
    case 'h4':
      return <h4 className="font-semibold text-lg text-gray-900 mb-2 mt-4">{children}</h4>;
    case 'h5':
      return <h5 className="text-lg text-gray-900 mb-2 mt-2">{children}</h5>;
    case 'h6':
      return <h6 className="text-gray-700 mb-2 mt-2">{children}</h6>;
    case 'blockquote':
      return <blockquote className="text-gray-900 mb-2">{`"${children}"`}</blockquote>;
    default:
      return <p className="text-gray-900 mb-2">{children}</p>;
  }
};

const StrongRenderer = ({ children }) => {
  return <strong className="font-semibold">{children}</strong>;
};

const EmRenderer = ({ children }) => {
  return <em className="not-italic text-brand-600 font-medium">{children}</em>;
};

const LinkRenderer = ({ mark, children }) => {
  return (
    <div>
      <Link newTab={mark.blank} href={mark.href}>
        {children}
      </Link>
    </div>
  );
};

export default {
  types: {
    code: CodeRenderer,
    block: BlockRenderer,
    image: ImageRenderer
  },
  marks: { strong: StrongRenderer, em: EmRenderer, link: LinkRenderer }
};
