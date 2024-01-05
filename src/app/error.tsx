'use client';

interface Props {
  statusCode?: number
}

const Error = ({ statusCode }: Props) => (
  <p>
    {statusCode
      ? `An error ${statusCode} occurred on server`
      : 'An error occurred on client'}
  </p>
);

export default Error;
