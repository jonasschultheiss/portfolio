import { urlFor } from '@utils/sanity';
import Image from 'next/image';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import dark from 'react-syntax-highlighter/dist/cjs/styles/prism/atom-dark';

const ImageRenderer = properties => {
  const { node } = properties;
  return (
    <div className="flex flex-col w-full justify-center items-center">
      <div className="relative h-96 rounded mx-auto w-full">
        <Image
          src={urlFor(node.asset).quality(90).url()}
          alt={node.alt}
          layout="fill"
          className="rounded object-cover"
        />
      </div>
      <p className="text-sm text-gray-700 text-center">Figure: {node.description}</p>
    </div>
  );
};

const CodeRenderer = properties => {
  const { node } = properties;
  return (
    <div>
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
      return <blockquote className="text-gray-900 mb-2">{children}</blockquote>;
    default:
      return <p className="text-gray-900 mb-2">{children}</p>;
  }
};
const StrongRenderer = properties => {
  const { children } = properties;
  return <strong className="font-semibold">{children}</strong>;
};
const EmRenderer = properties => {
  const { children } = properties;
  return <em className="not-italic text-fnatic font-medium">{children}</em>;
};

export default {
  types: {
    code: CodeRenderer,
    block: BlockRenderer,
    image: ImageRenderer
  },
  marks: { strong: StrongRenderer, em: EmRenderer }
};
