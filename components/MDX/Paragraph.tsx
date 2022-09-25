import DefaultProps from '../types';

export default function P({ children }: DefaultProps) {
  return (
    <div className="pt-6 font-light lg:leading-relaxed text-md \
      lg:text-lg lg:pt-8 \
      md:pt-8"
    >
      {children}
    </div>
  );
}
