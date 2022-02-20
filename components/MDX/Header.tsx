import DefaultProps from '../types';

function H1({ children }: DefaultProps) {
  return (
    <div className="pt-8 pb-4 mb-4 text-4xl font-light border-b">
      { children }
    </div>
  );
}

function H2({ children }: DefaultProps) {
  return (
    <div className="pt-4 pb-2 mb-2 text-3xl font-light border-b">
      { children }
    </div>
  );
}

function H3({ children }: DefaultProps) {
  return (
    <div className="pt-4 pb-2 mb-2 text-2xl font-light border-b">
      { children }
    </div>
  );
}

function H4({ children }: DefaultProps) {
  return (
    <div className="pt-4 pb-2 mb-2 text-lg font-light border-b">
      { children }
    </div>
  );
}

function H5({ children }: DefaultProps) {
  return (
    <div className="py-4 font-normal text-md">
      { children }
    </div>
  );
}

function H6({ children }: DefaultProps) {
  return (
    <div className="py-4 text-sm font-normal text-gray-600">
      { children }
    </div>
  );
}

export {
  H1,
  H2,
  H3,
  H4,
  H5,
  H6,
};
