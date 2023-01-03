import { getPostHeadsByCategory, initBlogPost } from '../../api/blog';
import { Category, PostHead } from '../../api/types';
import Navbar from '../../components/Navbar';
import PostPreviewContainer from '../../components/PostPreviewContainer';

// TODO: Add props to enrich Head for this page. Category and their descriptions.
type Props = {
  postHeads: PostHead[]
};

export default function CategoryPosts({ postHeads }: Props) {
  return (
    <div>
      <Navbar
        minimal={false}
        title="Categories | Swapnil Kumbhar"
        description="Categories of all posts."
      />
      <PostPreviewContainer postHeads={postHeads} />
    </div>
  );
}

type Context = {
  params: {
    cat: Category
  }
};

export async function getStaticProps(context: Context) {
  await initBlogPost();
  // Ugly hacks all the way
  const cat = context.params.cat.charAt(0).toUpperCase() + context.params.cat.slice(1);
  const postHeads = await getPostHeadsByCategory(cat as Category);

  return {
    props: { postHeads },
  };
}

export async function getStaticPaths() {
  // TODO: Find a better way to maintain this please.
  const categories = [
    'technology',
    'music',
    'opinion',
    'travel',
    'general',
  ];

  const paths = categories.map((c) => ({
    params: { cat: c },
  }));

  return {
    paths: [...paths],
    fallback: false,
  };
}
