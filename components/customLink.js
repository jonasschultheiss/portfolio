import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { Children } from 'react';

export default function CustomLink({ children, activeClassName, ...properties }) {
  const { asPath } = useRouter();
  const child = Children.only(children);
  const childClassName = child.props.className || '';

  const className =
    asPath === properties.href || asPath === properties.as
      ? `${childClassName} ${activeClassName}`.trim()
      : childClassName;

  console.log(asPath === properties.href || asPath === properties.as);

  return (
    <Link {...properties}>
      {React.cloneElement(child, {
        className: className || undefined
      })}
    </Link>
  );
}
