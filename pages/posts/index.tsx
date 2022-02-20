import React from 'react';
import Head from 'next/head';
import { getAllPostHeads, initBlogPost } from '../../api/blog';
import { PostHead } from '../../api/types';
import PostPreviewContainer from '../../components/PostPreviewContainer';
import Navbar from '../../components/Navbar';

type Props = {
  postHeads: PostHead[]
};

export default function Posts({ postHeads }: Props) {
  return (
    <div>
      <Head>
        <title>Posts | Swapnil Kumbhar</title>
      </Head>
      <Navbar
        minimal={false}
        title="Posts | Swapnil Kumbhar"
        description="All posts on the blog."
      />
      <PostPreviewContainer postHeads={postHeads} />
    </div>
  );
}

export async function getStaticProps() {
  await initBlogPost();
  const postHeads = await getAllPostHeads();
  return {
    props: { postHeads },
  };
}
