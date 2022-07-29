import DefaultProps from '../types';

export function OrderedList({ children }: DefaultProps) {
  return (
    <ol className="text-lg font-light leading-relaxed list-decimal list-inside lg:px-4 lg:py-2 md:px-2 md:py-1">
      {children}
    </ol>
  );
}
export function UnorderedList({ children }: DefaultProps) {
  return (
    <ul className="text-lg lg:px-4 lg:py-2 md:px-2 md:py-1 font-light list-[square] list-inside">
      {children}
    </ul>
  );
}
