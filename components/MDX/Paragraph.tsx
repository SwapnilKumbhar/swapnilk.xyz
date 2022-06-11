import DefaultProps from '../types';

export default function P({ children }: DefaultProps) {
  return (
    <div className="py-2 text-sm font-light leading-relaxed text-justify md:py-2 lg:text-lg md:text-md">
      {children}
    </div>
  );
}
