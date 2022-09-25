import DefaultProps from '../types';

export function OrderedList({ children }: DefaultProps) {
  return (
    <ol className="mt-6 mb-2 font-light leading-relaxed list-decimal list-inside text-md \
    lg:text-lg lg:px-4 lg:pt-4 \
    md:px-2 md:py-1"
    >
      {children}
    </ol>
  );
}
export function UnorderedList({ children }: DefaultProps) {
  return (
    <ul className="pt-6 text-md lg:text-lg lg:px-4 lg:py-2 md:px-2 md:py-1 font-light list-[square] list-inside">
      {children}
    </ul>
  );
}
