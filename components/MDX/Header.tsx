import DefaultProps from '../types';

function H1({ children }: DefaultProps) {
  return (
    <div
      className="pt-2 pb-1 text-3xl font-light border-b lg:text-4xl xl:pt-8 xl:mb-4 lg:pt-6 lg:mb-2 md:pt-4 md:pb-2 md:text-3xl"
    >
      { children }
    </div>
  );
}

function H2({ children }: DefaultProps) {
  return (
    <div
      className="pt-2 pb-1 text-2xl font-light border-b lg:pt-4 lg:pb-2 lg:mb-2 lg:text-3xl md:text-2xl md:pt-2 md:pb-1 md:mb-1"
    >
      { children }
    </div>
  );
}

function H3({ children }: DefaultProps) {
  return (
    <div className="text-xl font-light border-b lg:pt-4 lg:pb-2 lgLmb-2 lg:text-2xl md:text-xl md:pt-2 md:pb-1 md:mb-1">
      { children }
    </div>
  );
}

function H4({ children }: DefaultProps) {
  return (
    <div className="text-lg font-light border-b lg:pt-4 lg:pb-2 lg:mb-2 lg:text-lg md:text-md md:pt-2 md:pb-1 md:mb-1">
      { children }
    </div>
  );
}

function H5({ children }: DefaultProps) {
  return (
    <div className="font-normal text-md lg:py-4 md:py-2 lg:text-md md:text-sm">
      { children }
    </div>
  );
}

function H6({ children }: DefaultProps) {
  return (
    <div className="text-sm font-normal text-gray-600 lg:py-4 md:py-2 lg:text-sm md:text-xs">
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
