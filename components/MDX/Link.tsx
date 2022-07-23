import { ReactNode } from 'react';

type Props = {
  children?: ReactNode,
  href?: string,
  title?: string
};

export default function Link({ children, href, title }: Props) {
  return (
    <a href={href} title={title ?? ''} className="font-normal text-blue-500 visited:text-violet-600">
      {children}
    </a>
  );
}

Link.defaultProps = {
  children: undefined,
  href: '',
  title: '',
};
