'use client';

import React, { useState } from 'react';
import cn from 'classnames';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Button from '../../UI/Button';
import Logo from '../../../../public/logo.svg';
import Close from '../../../../public/icons/baseline-close.svg';
import Menu from '../../../../public/icons/baseline-menu.svg';

import style from './Header.module.scss';

function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const goToLogIn = () => {
    const link = `${
      process.env.NEXT_PUBLIC_LOGIN_LINK
    }/enter/login?redirect_uri=${encodeURIComponent(
      process.env.NEXT_PUBLIC_CONTROL_LINK || '',
    )}`;
    window.open(link, '_self');
  };

  const goToControl = () => {
    const link = process.env.NEXT_PUBLIC_CONTROL_LINK;
    window.open(link, '_self');
  };

  return (
    <>
      <header className={style.header}>
        <div className={style.headerContent}>
          <div className={style.logoWrapper}>
            <Link href="/">
              <Logo />
            </Link>
          </div>

          <div className={style.linkGroup}>
            <ul>
              <li
                className={cn({
                  [style.active]: pathname.startsWith('/contact'),
                })}
              >
                <Link href="/contact" passHref>
                  Contact
                </Link>
              </li>
              <li
                className={cn({
                  [style.active]: pathname.startsWith('/read'),
                })}
              >
                <Link href="/read" passHref>
                  Read
                </Link>
              </li>
              <li
                className={cn({
                  [style.active]: pathname.startsWith('/download'),
                })}
              >
                <Link href="/download" passHref>
                  Download
                </Link>
              </li>
              <li
                className={cn({
                  [style.active]: pathname.startsWith('/buy'),
                })}
              >
                <Link href="/buy" passHref>
                  Buy
                </Link>
              </li>
            </ul>
          </div>

          <div className={style.loginGroup}>
            <Button onClick={goToLogIn} type="outlined">
              Log in
            </Button>
            <Button onClick={goToControl}>Start Free</Button>
          </div>
        </div>
      </header>

      <header className={cn(style.header, style.mobileHeader)}>
        <div className={style.headerContent}>
          <div className={style.mobileActions}>
            <button type="button" onClick={() => setOpen(!open)}>
              {open ? <Close /> : <Menu />}
            </button>
          </div>
          <div className={style.logoWrapper}>
            <Link href="/">
              <Logo />
            </Link>
          </div>

          <div style={{ width: 2, height: 24 }} />
        </div>
        {open && (
          <div className={style.mobileMenu}>
            <div className={style.linkGroup}>
              <ul>
                <li
                  className={cn({
                    [style.active]: pathname.startsWith('/contact'),
                  })}
                >
                  <Link href="/contact" passHref>
                    Contact
                  </Link>
                </li>
                <li
                  className={cn({
                    [style.active]: pathname.startsWith('/read'),
                  })}
                >
                  <Link href="/read" passHref>
                    Read
                  </Link>
                </li>
                <li
                  className={cn({
                    [style.active]: pathname.startsWith('/download'),
                  })}
                >
                  <Link href="/download" passHref>
                    Download
                  </Link>
                </li>
                <li
                  className={cn({
                    [style.active]: pathname.startsWith('/buy'),
                  })}
                >
                  <Link href="/buy" passHref>
                    Buy
                  </Link>
                </li>
              </ul>
            </div>

            <div className={style.loginGroup}>
              <Button onClick={goToLogIn} type="outlined">
                Log in
              </Button>
              <Button onClick={goToControl}>Start Free</Button>
            </div>
          </div>
        )}
      </header>
    </>
  );
}

export default Header;
