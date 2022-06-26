import Link from 'next/link';
import { PostHead } from '../api/types';

type Props = {
  postHead: PostHead,
};

export default function PostPreview({
  postHead,
}: Props) {
  return (
    <Link href={`/posts/${postHead.slug}`}>
      <div>
        {/* Mobile View */}
        <div className="sm:hidden">
          <div
            className="border-b cursor-pointer \
        lg:px-12 md:px-8 \
        duration-200 ease-in-out transition \
        xl:h-48 lg:h-40 md:h-32 h-32 hover:border-solid hover:border-gray-300"
          >
            <h1 className="pt-4 pb-2 text-lg font-regular">
              {postHead.title}
            </h1>

            <p className="text-sm font-light xl:text-lg lg:text-md md:text-sm">
              {postHead.excerpt}
            </p>
            <p className="pt-4 pb-2 text-xs italic font-extralight lg:text-sm">
              {postHead.date}
              .
              {' '}
              {postHead.category}
              .
            </p>
          </div>
        </div>
        {/* Everything else */}
        <div className="hidden sm:block">
          <div className="border-b cursor-pointer \
            xl:h-44 \
            lg:h-40 \
            md:h-32 md:px-8 \
            sm:h-28 \
          "
          >
            <div className="flex items-end">
              <h1 className="font-light \
                xl:pt-8 xl:text-4xl \
                lg:pt-6 lg:text-3xl \
                md:pt-6 md:text-2xl md:basis-8-12 \
                sm:pt-4 sm:text-xl sm:basis-8-12 \
                "
              >
                {postHead.title}
              </h1>
              <p className="italic text-right grow font-extralight \
                xl:text-md \
                lg:text-sm \
                sm:text-xs \
              "
              >
                {postHead.date}
                {', '}
                {postHead.category}
                .
              </p>
            </div>

            <p className="font-light \
              xl:text-xl xl:pt-6 \
              lg:text-lg lg:pt-4 \
              md:text-md md:pt-2 \
              sm:text-sm sm:pt-2 \
              "
            >
              {postHead.excerpt}
            </p>
          </div>
        </div>
      </div>
    </Link>
  );
}
