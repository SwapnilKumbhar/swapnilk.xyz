import DefaultProps from '../types';

export function Table({ children }: DefaultProps) {
  return (
    <table className="w-3/4 mx-auto table-fixed lg:my-4 md:my-2">
      {children}
    </table>
  );
}

export function THead({ children }: DefaultProps) {
  return (
    <thead className="border-b">
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
    <th className="py-2 pl-4 font-semibold text-left">
      {children}
    </th>
  );
}

export function Td({ children }: DefaultProps) {
  return (
    <td className="py-2 pl-4 font-light ">
      {children}
    </td>
  );
}
