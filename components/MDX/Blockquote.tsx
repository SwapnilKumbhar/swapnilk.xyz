import DefaultProps from '../types';

export default function BlockQuote({ children }: DefaultProps) {
  return (
    <div className="pl-4 border-l-4 bg-gray-50">
      {children}
    </div>
  );
}
