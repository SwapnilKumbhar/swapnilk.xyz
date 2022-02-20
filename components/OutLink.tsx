// Alternative to the Link that next.js provides.
// TODO: Maybe make this a generic "Link" for both internal and external linking
type Props = {
  link: string,
  data: string
};

export default function OutLink({ link, data }: Props) {
  return (
    <a
      href={link}
      className="font-normal text-blue-500 cursor-pointer visited:text-violet-600"
    >
      {data}
    </a>
  );
}
