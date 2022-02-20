type ErrorProps = {
  errorCode: number,
  errorMsg: string
};

export default function ErrorPage({ errorCode, errorMsg }: ErrorProps) {
  return (
    <div className="p-48">
      <p className="pb-4 font-mono text-5xl">
        Error:
        {' '}
        {errorCode}
      </p>
      <p className="text-xl font-light">
        Message:
        {' '}
        {errorMsg}
      </p>
    </div>
  );
}
