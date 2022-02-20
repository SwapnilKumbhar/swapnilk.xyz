import Image from 'next/image';
import Link from 'next/link';

type Props = {
  image: string | undefined;
  title: string
  subtitle: string
  link: string
};

export default function ProjectPreview({
  image, title, subtitle, link,
}: Props) {
  return (
    <Link href={link}>
      <div className="container px-64 pt-10 mx-auto">
        <div
          className="flex flex-row border-b cursor-pointer h-36 hover:border-solid hover:border-gray-300"
        >
          <Image
            src={image ?? '/project-default.png'}
            width={160}
            height={120}
            className="order-1 basis-1/5 rounded-xl"
          />
          <div className="flex flex-col order-2 pl-10 basis-4/5">
            <h1 className="pt-4 text-3xl font-light">
              {title}
            </h1>
            <p className="pt-4 font-light grow-0">
              {subtitle}
            </p>
          </div>
        </div>
      </div>
    </Link>
  );
}
