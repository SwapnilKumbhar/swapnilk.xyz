import DefaultProps from '../types';

export default function BlockQuote({ children }: DefaultProps) {
  return (
    <div className="pb-4 pl-4 mt-10 mb-4 border-l-4 bg-gray-50">
      {children}
    </div>
  );
}
