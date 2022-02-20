import { MDXRemote, MDXRemoteSerializeResult } from 'next-mdx-remote';
import { serialize } from 'next-mdx-remote/serialize';
import Head from 'next/head';
import {
  initBlogPost, getAllSlugs, getPostBySlug,
} from '../../api/blog';
import { GrayMatterData } from '../../api/types';
import COMPONENTS from '../../components/MDX/Components';
import Navbar from '../../components/Navbar';

type Props = {
  source: MDXRemoteSerializeResult,
  matter: GrayMatterData
};

export default function Page({ source, matter }: Props) {
  return (
    <div>
      <Head>
        <title>
          {matter.title}
          {'  '}
          |
          {'  '}
          {matter.author}
        </title>
      </Head>
      <Navbar
        minimal
        title={matter.title}
        description={matter.excerpt}
      />
      <div className="container px-64 py-12 mx-auto">
        <div className="text-4xl font-medium text-center">
          {matter.title}
        </div>
        <div className="pt-6 pb-12 text-sm font-light text-center text-gray-500 border-b border-gray-300">
          {matter.date}
          .
          {' '}
          {matter.category}
          .
        </div>
        <MDXRemote {...source} components={COMPONENTS} />
      </div>
    </div>
  );
}

export async function getStaticPaths() {
  await initBlogPost();
  const slugs = await getAllSlugs();
  if (!slugs) {
    // Unlikely
    return {
      paths: [],
      fallback: false,
    };
  }
  const paths = slugs.map((slug) => ({
    params: { slug },
  }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps(context: { params: { slug: string; }; }) {
  await initBlogPost();
  const { slug } = context.params;
  const content = await getPostBySlug(slug);

  if (!content) {
    // Unlikely
    return { props: {} };
  }

  const source = await serialize(content.content);

  return { props: { source, matter: content.data } };
}
