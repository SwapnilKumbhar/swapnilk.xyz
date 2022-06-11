import { PostHead } from '../api/types';
import PostPreview from './PostPreview';
import styles from '../styles/common.module.css';
import { addClasses } from '../api/styles';

type Props = {
  postHeads: PostHead[]
};

export default function PostPreviewContainer({ postHeads }: Props) {
  const content = postHeads.length === 0
    ? (
      <div className="py-10 font-light text-center text-md lg:text-xl md:text-lg">
        No posts found. Sorry.
      </div>
    ) : postHeads.map((p) => (
      <div key={p.slug}>
        <PostPreview postHead={p} />
      </div>
    ));
  return (
    <div
      className={addClasses(styles.gcontainer, 'lg:pt-4', 'md:pt-2')}
    >
      {content}
    </div>
  );
}
