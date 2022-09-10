import DefaultProps from '../types';

export default function P({ children }: DefaultProps) {
  return (
    <div className="pt-4 font-light lg:leading-relaxed text-md \
      lg:text-lg lg:pt-4 \
      md:pt-2"
    >
      {children}
    </div>
  );
}
