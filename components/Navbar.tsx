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
  const [mobileMenuHidden, setMobileMenuHidden] = useState(true);

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const toggleMobileMenu = () => {
    setMobileMenuHidden(!mobileMenuHidden);
  };

  const menuItemIcon = (
    <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1">
      <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
    </svg>
  );

  useEffect(() => {
    setFortune(getFortune());
  }, [setFortune]);

  const heading = minimal
    ? (
      <Link href="/">
        <p className="pt-4 pb-2 text-lg font-regular hover:cursor-pointer">
          Swapnil Kumbhar
        </p>
      </Link>
    )
    : (
      <>
        <Link href="/">
          <h1 className="font-light xl:pt-10 lg:pt-8 md:pt-6 xl:text-8xl lg:text-7xl md:text-6xl hover:cursor-pointer">
            Swapnil Kumbhar
          </h1>
        </Link>
        <p className="text-gray-400 xl:pb-4 md:pb-2 xl:pt-4 md:text-md sm:text-sm md:pt-4 xl:text-lg">
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
    <div>
      <div
        className="hidden text-center md:block"
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

      {/* Mobile Menu */}
      <div className="flex justify-end md:hidden">
        <div className="flex flex-col px-6 py-6 basis-4/5">
          <h1 className="font-normal">
            <Link href="/">
              Swapnil Kumbhar
            </Link>
          </h1>
          <h1 className="pt-1 text-xs font-light text-gray-500">
            {fortune}
          </h1>
        </div>
        <div className="flex justify-end p-6 text-right basis-1/5">
          {/* Hamburger from heroicons <3 */}
          <button type="button" onClick={toggleMobileMenu}>
            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
            </svg>
          </button>
        </div>

        {/* The actual mobile menu */}
      </div>

      {/* Border below the navbar */}
      <div className="container px-6 md:hidden">
        <hr />
      </div>
      <div className={mobileMenuHidden ? 'hidden' : 'md:hidden pb-4'}>
        <div className="px-6">
          <Link href="/posts">
            <div className="flex py-2 border-b">
              {menuItemIcon}
              <p className="pl-2 font-light text-md">
                Posts
              </p>
            </div>
          </Link>
        </div>

        <div className="px-6">
          <Link href="/categories">
            <div className="flex py-2 border-b">
              {menuItemIcon}
              <p className="pl-2 font-light text-md">
                Categories
              </p>
            </div>
          </Link>
        </div>

        <div className="px-6">
          <Link href="/projects">
            <div className="flex py-2 border-b">
              {menuItemIcon}
              <p className="pl-2 font-light text-md">
                Projects
              </p>
            </div>
          </Link>
        </div>

        <div className="px-6">
          <Link href="/contact">
            <div className="flex py-2 border-b">
              {menuItemIcon}
              <p className="pl-2 font-light text-md">
                Contact Me
              </p>
            </div>
          </Link>
        </div>

      </div>
    </div>
  );
}
