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
    window.open('https://account.corezoid.com/enter/login', '_self');
  };

  const goToControl = () => {
    window.open('https://control.events', '_self');
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
              [style.active]: router.asPath === '/contact',
            })}
            >
              <Link href="/contact" passHref>Contact</Link>
            </li>
            <li className={cn({
              [style.active]: router.asPath === '/read',
            })}
            >
              <Link href="/read" passHref>Read</Link>
            </li>
            <li className={cn({
              [style.active]: router.asPath === '/download',
            })}
            >
              <Link href="/download" passHref>Download</Link>
            </li>
            <li className={cn({
              [style.active]: router.asPath === '/buy',
            })}
            >
              <Link href="/buy" passHref>Buy</Link>
            </li>
          </ul>
        </div>

        <div className={style.loginGroup}>
          <Button onClick={goToLogIn} type="outlined">Login</Button>
          <Button onClick={goToControl}>Create Actor</Button>
        </div>
      </div>
    </header>
  );
}

export default Header;
