import DefaultProps from '../types';

export function Italics({ children }: DefaultProps) {
  return (
    <div className="italic">
      {children}
    </div>
  );
}

export function Bold({ children }: DefaultProps) {
  return (
    <div className="font-bold">
      {children}
    </div>
  );
}
