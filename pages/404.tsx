import ErrorPage from '../components/Error';

export default function Custom404() {
  return <ErrorPage errorMsg="We couldn't find that page." errorCode={404} />;
}
