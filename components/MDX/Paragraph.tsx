import DefaultProps from '../types';

export default function P({ children }: DefaultProps) {
  return (
    <div className="py-2 text-lg font-light leading-relaxed md:py-2">
      {children}
    </div>
  );
}
