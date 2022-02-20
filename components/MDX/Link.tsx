type Props = {
  children: string,
  href: string,
  title: string | null
};

export default function Link({ children, href, title }: Props) {
  return (
    <a href={href} title={title ?? ''} className="font-normal text-blue-500 visited:text-violet-600">
      {children}
    </a>
  );
}
