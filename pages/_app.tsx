import '../styles/globals.css';
import type { AppProps } from 'next/app';
import Footer from '../components/Footer';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    // "The first thing I do in a website is make everything Flex"
    // - Sarthak Batra
    <div className="flex flex-col justify-between h-screen">
      <Component {...pageProps} />
      <Footer />
    </div>
  );
}

export default MyApp;
