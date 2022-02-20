import DefaultProps from '../types';

export function OrderedList({ children }: DefaultProps) {
  return (
    <ol className="px-4 py-2 font-light list-decimal list-inside">
      {children}
    </ol>
  );
}
export function UnorderedList({ children }: DefaultProps) {
  return (
    <ul className="px-4 py-2 font-light list-[square] list-inside">
      {children}
    </ul>
  );
}
