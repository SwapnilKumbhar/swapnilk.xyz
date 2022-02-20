import { PostHead } from '../blog/types';
import PostPreview from './PostPreview';

type Props = {
  postHeads: PostHead[]
};

export default function PostPreviewContainer({ postHeads }: Props) {
  const content = postHeads.length === 0
    ? (
      <div className="text-xl font-light text-center">
        No posts found. Sorry.
      </div>
    ) : postHeads.map((p) => (
      <div key={p.slug}>
        <PostPreview postHead={p} />
      </div>
    ));
  return (
    <div
      className="container px-64 pt-10 mx-auto"
    >
      {content}
    </div>
  );
}
