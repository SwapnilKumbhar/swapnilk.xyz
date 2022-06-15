import styles from '../styles/common.module.css';

export default function Footer() {
  return (
    <footer className={styles.gcontainer}>
      <div className="bottom-0 w-full pt-12 pb-6 text-xs font-thin text-center md:pt-12 md:pb-6 lg:pt-16 lg:pb-8">
        This website was built using
        {' '}
        <a href="https://nextjs.org">Nextjs</a>
        ,
        {' '}
        <a href="https://tailwindcss.com">TailwindCSS</a>
        {' '}
        and
        {' '}
        <a href="https://typescriptlang.org">Typescript</a>
        .
      </div>
    </footer>
  );
}
