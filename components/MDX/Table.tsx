import DefaultProps from '../types';

export function Table({ children }: DefaultProps) {
  return (
    <table className="w-full mt-10 mb-6 table-fixed \
    lg:mt-12 lg:mb-10\
    md:mt-10 md:mb-8"
    >
      {children}
    </table>
  );
}

export function THead({ children }: DefaultProps) {
  return (
    <thead className="border-b border-gray-200">
      {children}
    </thead>
  );
}

export function TBody({ children }: DefaultProps) {
  return (
    <tbody>
      {children}
    </tbody>
  );
}

export function Tr({ children }: DefaultProps) {
  return (
    <tr>
      {children}
    </tr>
  );
}

export function Th({ children }: DefaultProps) {
  return (
    <th className="py-2 pl-2 font-semibold text-left">
      {children}
    </th>
  );
}

export function Td({ children }: DefaultProps) {
  return (
    <td className="py-2 pl-2 font-light break-words border-b border-gray-200">
      {children}
    </td>
  );
}
