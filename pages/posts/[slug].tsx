import { MDXRemote, MDXRemoteSerializeResult } from 'next-mdx-remote';
import { serialize } from 'next-mdx-remote/serialize';
import Head from 'next/head';
import {
  initBlogPost, getAllSlugs, getPostBySlug,
} from '../../api/blog';
import { GrayMatterData } from '../../api/types';
import COMPONENTS from '../../components/MDX/Components';
import Navbar from '../../components/Navbar';
import styles from '../../styles/common.module.css';
import { addClasses } from '../../api/styles';

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
      <div className={addClasses(styles.gcontainer, 'lg:pt-4', 'md:pt-2')}>
        <div className="text-xl font-medium text-center xl:text-4xl lg:text-3xl md:text-2xl">
          {matter.title}
        </div>
        <div className="pt-6 pb-6 text-xs font-light text-center text-gray-500 border-b border-gray-300 lg:text-sm md:text-xs lg:pt-6 lg:pb-8 md:pb-6 md:pt-4">
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
