import Image from 'next/image';

type Props = {
  src?: string,
  alt?: string
};

type MdxLoaderProps = {
  src: string
};

const MdxImgLoader = ({ src }: MdxLoaderProps) => `/blog/${src}`;

export default function Img({ src, alt }: Props) {
  // Height and Width is just aspect ratio, since Layout is "responsive"
  return (
    <Image
      loader={MdxImgLoader}
      src={src ?? ''}
      alt={alt}
      layout="responsive"
      width={16}
      height={12}
    />
  );
}

Img.defaultProps = {
  src: '',
  alt: '',
};
