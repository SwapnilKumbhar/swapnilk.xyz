import DefaultProps from '../types';

export default function P({ children }: DefaultProps) {
  return (
    <div className="py-2 font-light leading-relaxed text-justify text-md md:py-2 lg:text-lg">
      {children}
    </div>
  );
}
