import Head from 'next/head';
import Image from 'next/image';
import Navbar from '../components/Navbar';
import OutLink from '../components/OutLink';
import home from '../public/home.jpg';
import styles from '../styles/common.module.css';
import { addClasses } from '../api/styles';

export default function Home() {
  const h1Classes = 'text-lg xl:text-3xl border-b-2 border-gray-200 lg:py-2 md:py-1 md:text-2xl';
  const pClasses = 'text-sm pt-4 lg:text-lg font-light md:text-md';
  return (
    <div>
      <Head>
        <title>Swapnil&apos;s Blog</title>
      </Head>
      <Navbar
        minimal={false}
        title="Swapnil Kumbhar"
        description="Swapnil Kumbhar&apos;s personal blog. I talk about technology, travel and life."
      />
      <div className="px-6 pb-4 mx-auto text-center md:pt-6 md:pb-4 lg:pt-8 2xs:pt-2 2xs:pb-2 2xs:px-6">
        <Image
          src={home}
          height={400}
          width={400}
          className="rounded-xl"
          alt="Hanalei Bay, Kauai."
        />
      </div>

      {/* TODO: Remove uses of `addClasses`. */}
      <div className={addClasses(styles.gcontainer, 'lg:pt-4', 'md:pt-2')}>
        <h1 className={h1Classes}>
          Who am I?
        </h1>
        <p className={pClasses}>
          Hi, I am Swapnil! I am a CS Grad student at Arizona State University
          and a Researcher at
          {' '}
          <OutLink link="https://sefcom.asu.edu" data="SEFCOM" />
          . I am interested in all things Security, Systems and anything
          low-level. Here I write about a variety of things, including technology, travel, life,
          music and whatever else life is about.
        </p>
        <p className={pClasses}>
          I love programming in C++, C, Rust, Golang, C#, x86 Assembly and Typescript! Hopefully,
          you&apos;ll see a bunch of my projects on this website and my
          {' '}
          <OutLink link="https://github.com/SwapnilKumbhar" data="Github" />
          .
        </p>
        <p className={pClasses}>
          Also, I love gaming, hiking, picking locks, playing the guitar, attaching GDB to random
          processes and figuring out painful ways to do the most simplest things (that&apos;s the
          new &apos;I use arch, btw&apos;).
        </p>
      </div>
    </div>
  );
}
