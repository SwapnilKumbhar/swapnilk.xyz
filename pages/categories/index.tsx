import Link from 'next/link';
import Navbar from '../../components/Navbar';

export default function Tags() {
  interface CategoryPreview {
    title: string,
    subtitle: string
    link: string
  }

  // TODO: There has to be a better way to maintain this.
  const previews: CategoryPreview[] = [
    {
      title: 'Technology',
      subtitle: 'Any topics with machines involved.',
      link: 'technology',
    },
    {
      title: 'Opinion',
      subtitle: 'My thoughts on various topics, which may not be taken as fact.',
      link: 'opinion',
    },
    {
      title: 'Music',
      subtitle: 'Between the clefs.',
      link: 'music',
    },
    {
      title: 'Travel',
      subtitle: 'Places I\'ve been.',
      link: 'travel',
    },
  ];

  const categoryPreviewTag = ({ title, subtitle, link }: CategoryPreview) => (
    <Link href={`/categories/${link}`}>
      <div className="pl-12 border-b cursor-pointer h-36 hover:border-solid hover:border-gray-300">
        <h1 className="pt-10 text-3xl font-light">
          {title}
          .
        </h1>
        <p className="pt-4 font-light">
          {subtitle}
        </p>
      </div>
    </Link>
  );

  const categoryPreview = previews.map((p) => categoryPreviewTag(p));

  return (
    <div>
      <Navbar
        minimal={false}
        title="Categories | Swapnil Kumbhar"
        description="All categories of posts."
      />
      <div className="container px-64 pt-10 mx-auto">
        {categoryPreview}
      </div>
    </div>
  );
}
