import { ReactNode } from 'react';
// import Highlight, { defaultProps } from 'prism-react-renderer';
import DefaultProps from '../types';

type CodeProps = {
  children: ReactNode,
  className: string | undefined
};

export function CodeBlock({ children }: DefaultProps) {
  return (
    <pre className="p-4 font-mono text-sm bg-gray-100 md:text-md lg:text-lg">
      {children}
    </pre>
  );
}

// TODO: Figure out how to highlight single backtick without affecting code blocks
export function Code({ children, className }: CodeProps) {
  // let language = '';
  // if (className) {
  //   language = className.replace('language-', '');
  // }
  return (
    <div className={`text-md bg-gray-100 ${className}` ?? ''}>
      {children}
    </div>
  );
}
