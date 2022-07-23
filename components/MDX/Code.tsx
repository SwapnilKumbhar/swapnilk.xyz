import { ReactNode } from 'react';
// import Highlight, { defaultProps } from 'prism-react-renderer';
import DefaultProps from '../types';

type CodeProps = {
  children?: ReactNode,
  className?: string
};

// TODO: Figure out how to highlight single backtick without affecting code blocks
export function CodeBlock({ children, className }: CodeProps) {
  // let language = '';
  // if (className) {
  //   language = className.replace('language-', '');
  // }
  const codeClass = className ?? '';
  return (
    <pre className={`p-4 font-mono text-sm bg-gray-100 md:text-md lg:text-lg ${codeClass}`}>
      {children}
    </pre>
  );
}

export function Code({ children }: DefaultProps) {
  return (
    <span className="font-mono text-md">
      {children}
    </span>
  );
}

CodeBlock.defaultProps = {
  children: undefined,
  className: '',
};
