'use client';

import Button from '@/components/UI/Button';

const HomeButtons = () => {
  const goToLogIn = () => {
    const link = `${
      process.env.NEXT_PUBLIC_LOGIN_LINK
    }/enter/login?redirect_uri=${encodeURIComponent(process.env.NEXT_PUBLIC_CONTROL_LINK || '')}`;
    window.open(link, '_self');
  };

  const goToVideo = () => {
    const link = 'https://www.youtube.com/watch?v=hyjXqow0ltk';
    window.open(link, '_self');
  };

  return (
    <>
      <Button style={{ width: 160 }} type="primary" onClick={goToLogIn}>
        Start free
      </Button>
    </>
  );
};

export default HomeButtons;
