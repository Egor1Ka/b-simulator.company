import React from 'react';
import { useRouter } from 'next/router';
import cn from 'classnames';
import Link from 'next/link';
import Button from '../../UI/Button';
import style from './Header.module.scss';
import Logo from '../../../../public/logo.svg';

function Header() {
  const router = useRouter();

  const goToLogIn = () => {
    const link = `${process.env.NEXT_PUBLIC_LOGIN_LINK}/enter/login?redirect_uri=${encodeURIComponent(process.env.NEXT_PUBLIC_CONTROL_LINK || '')}`;
    window.open(link, '_self');
  };

  const goToControl = () => {
    const link = process.env.NEXT_PUBLIC_CONTROL_LINK;
    window.open(link, '_self');
  };

  return (
    <header className={style.header}>
      <div className={style.headerContent}>
        <div className={style.logoWrapper}>
          <Link href="/">
            <Logo />
          </Link>
        </div>

        <div className={style.linkGroup}>
          <ul>
            <li className={cn({
              [style.active]: router.asPath.startsWith('/contact'),
            })}
            >
              <Link href="/contact" passHref>Contact</Link>
            </li>
            <li className={cn({
              [style.active]: router.asPath.startsWith('/read'),
            })}
            >
              <Link href="/read" passHref>Read</Link>
            </li>
            <li className={cn({
              [style.active]: router.asPath.startsWith('/download'),
            })}
            >
              <Link href="/download" passHref>Download</Link>
            </li>
            <li className={cn({
              [style.active]: router.asPath.startsWith('/buy'),
            })}
            >
              <Link href="/buy" passHref>Buy</Link>
            </li>
          </ul>
        </div>

        <div className={style.loginGroup}>
          <Button onClick={goToLogIn} type="outlined">Log in</Button>
          <Button onClick={goToControl}>Start Free</Button>
        </div>
      </div>
    </header>
  );
}

export default Header;
