import Link from 'next/link';
import { useState, useEffect } from 'react';
import Head from 'next/head';
import styles from '../styles/Navbar.module.css';
import { getFortune } from '../api/fortunes';

type Props = {
  minimal: boolean,
  title: string | undefined
  description: string | undefined
};
export default function Navbar({ minimal, title, description }: Props) {
  const [fortune, setFortune] = useState('');

  useEffect(() => {
    setFortune(getFortune());
  }, [setFortune]);

  const heading = minimal
    ? (
      <Link href="/">
        <p className="pt-4 pb-4 text-gray-400 text-md hover:cursor-pointer">
          Swapnil Kumbhar
        </p>
      </Link>
    )
    : (
      <>
        <Link href="/">
          <h1 className="pt-10 font-light text-8xl hover:cursor-pointer">
            Swapnil Kumbhar
          </h1>
        </Link>
        <p className="pt-6 pb-4 text-gray-400">
          {fortune}
        </p>
      </>
    );

  const head = (
    <Head>
      <title>
        {title ?? 'Swapnil Kumbhar'}
      </title>
      <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
      <meta name="description" content={description ?? "Swapnil Kumbhar's blog."} />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
    </Head>
  );

  return (
    <div
      className="text-center"
    >
      {head}
      {heading}
      {/* The actual navbar */}
      <div className="text-center">
        <Link href="/posts">
          <button
            type="button"
            className={styles.button}
          >
            Posts
          </button>
        </Link>
        <Link href="/categories">
          <button
            type="button"
            className={styles.button}
          >
            Categories
          </button>

        </Link>
        <Link href="/projects">
          <button
            type="button"
            className={styles.button}
          >
            Projects
          </button>
        </Link>
        <Link href="/contact">
          <button
            type="button"
            className={styles.button}
          >
            Contact
          </button>
        </Link>
      </div>
    </div>
  );
}
