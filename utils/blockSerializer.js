import SyntaxHighlighter from 'react-syntax-highlighter';

const CodeRenderer = properties => {
  const { node } = properties;
  return (
    <div>
      <SyntaxHighlighter wrapLines wrapLongLines language={node.language}>
        {node.code}
      </SyntaxHighlighter>
    </div>
  );
};
const BlockRenderer = properties => {
  const { node, children } = properties;
  switch (node.style) {
    case 'normal':
      return <p className="text-gray-900">{children}</p>;
    case 'h1':
      return <h1 className="text-gray-900">{children}</h1>;
    case 'h2':
      return <h2 className="text-gray-900">{children}</h2>;
    case 'h3':
      return <h3 className="text-gray-900">{children}</h3>;
    case 'h4':
      return <h4 className="text-gray-900">{children}</h4>;
    case 'h5':
      return <h5 className="text-gray-900">{children}</h5>;
    case 'h6':
      return <h6 className="text-gray-900">{children}</h6>;
    case 'blockquote':
      return <blockquote className="text-gray-900">{children}</blockquote>;
    default:
      return <p className="text-gray-900">{children}</p>;
  }
};
const StrongRenderer = properties => {
  const { children } = properties;
  return <strong>{children}</strong>;
};
const EmRenderer = properties => {
  const { children } = properties;
  return <em>{children}</em>;
};

export default {
  types: {
    code: CodeRenderer,
    block: BlockRenderer
  },
  marks: { strong: StrongRenderer, em: EmRenderer }
};
