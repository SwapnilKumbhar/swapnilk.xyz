import Link from 'next/link';
import { PostHead } from '../blog/types';

type Props = {
  postHead: PostHead
};

export default function PostPreview({
  postHead,
}: Props) {
  return (
    <Link href={`/posts/${postHead.slug}`}>
      <div
        className="px-12 border-b cursor-pointer duration-200 ease-in-out transition h-44 hover:border-solid hover:border-gray-300"
      >
        <div className="flex items-end">
          <h1 className="py-6 text-4xl font-light basis-9/12">
            {postHead.title}
          </h1>
          <span className="py-6 italic text-right font-extralight">
            {postHead.date}
            .
            {' '}
            {postHead.category}
            .
          </span>
        </div>

        <p className="pb-6 font-light">
          {postHead.excerpt}
        </p>
      </div>
    </Link>
  );
}
