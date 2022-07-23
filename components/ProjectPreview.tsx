import Image from 'next/image';
import Link from 'next/link';
import styles from '../styles/common.module.css';

type Props = {
  image: string | undefined;
  title: string
  subtitle: string
  link: string
  last: boolean
};

export default function ProjectPreview({
  image, title, subtitle, link, last,
}: Props) {
  // Default to an SVG if there is no preview
  const previewImage = image ? <Image className="order-1 basis-1/5" width={160} height={160} src={image} /> : (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="order-1 w-8 h-8 my-auto basis-1/5 \
        xl:w-16 xl:h-16
      "
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={0.5}
        d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
        shapeRendering="geometricPrecision"
      />
    </svg>
  );

  const baseDivClassList = [
    'flex flex-row cursor-pointer hover:border-solid hover:border-gray-300',
    'xl:h-48',
    'lg:h-40',
    'md:h-32',
  ];

  if (!last) baseDivClassList.push('border-b');

  const baseDivClasses = baseDivClassList.join(' ');

  return (
    <Link href={link}>
      <div className={styles.gcontainer}>
        <div
          className={baseDivClasses}
        >
          {previewImage}
          <div className="flex flex-col order-2 border-l basis-4/5 \
            xl:pl-6 \
            lg:pl-6 \
            md:pl-4 \
            "
          >
            <h1 className="text-lg font-regular pl-4 pt-2 \
            xl:pt-8 xl:text-4xl \
            lg:pt-4 lg:text-3xl \
            md:pt-2 md:text-2xl \
            sm:font-light \
            "
            >
              {title}
            </h1>
            <p className="pl-4 pt-2 pb-6 font-light text-sm grow-0 \
              xl:pt-4 \
              lg:pt-4 lg:text-lg \
              md:pt-2 md:text-md \
              "
            >
              {subtitle}
            </p>
          </div>
        </div>
      </div>
    </Link>
  );
}
