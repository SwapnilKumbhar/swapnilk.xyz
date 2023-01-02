import Link from 'next/link';
import Navbar from '../../components/Navbar';
import styles from '../../styles/common.module.css';
import { addClasses } from '../../api/styles';

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
      title: 'General',
      subtitle: 'Things I cannot put a label on.',
      link: 'general',
    },
    /*
    // Commented out so that I can add them in when I have content there.
    {
      title: 'Opinion',
      subtitle: 'My thoughts on various topics. Not facts.',
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
    */
  ];

  const categoryPreviewTag = ({ title, subtitle, link }: CategoryPreview) => (
    <Link href={`/categories/${link}`}>
      <div className="border-b cursor-pointer hover:border-solid hover:border-gray-300 \
        lg:pl-12 lg:h-36 \
        md:pl-8 md:h-28 \
        sm:pl-4 sm:h-24 \
        "
      >
        <h1 className="pt-2 font-regular text-lg \
          xl:pt-6 \
          lg:text-3xl lg:pt-6 \
          md:text-2xl md:pt-4 \
          sm:text-xl sm:pt-4 sm:font-light \
          "
        >
          {title}
        </h1>
        <p className="pt-2 pb-6 text-xs font-light \
          xl:text-lg xl:pt-4 \
          lg:text-lg lg:pt-4 lg:pb-4 \
          md:text-md md:pt-2 md:pb-2 \
          sm:text-md sm:pt-2 \
          "
        >
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
      <div className={addClasses(styles.gcontainer, 'lg:pt-4', 'md:pt-2')}>
        {categoryPreview}
      </div>
    </div>
  );
}
