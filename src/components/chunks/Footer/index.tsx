'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import isEmailValid from '@/helpers/regularExpressions/isEmailValid';
import emailSubscribeRequest from '@/API/emailSubscribeRequest';
import Arrow from '../../../../public/icons/arrow-right.svg';
import Button from '../../UI/Button';
import Input from '../../UI/Input';
import SuccessNotifyModal from '../SuccessNotifyModal';
import awsPartnerImg from '../../../../public/aws-partner.png';
import corezoidLogoImg from '../../../../public/corezoid-logo.png';
import style from './Footer.module.scss';

function Footer(): React.JSX.Element {
  const [email, setEmail] = useState('');
  const [emailError, setemailError] = useState<null | string>(null);
  const [hasEnteredInvalidEmailOnce, setHasEnteredInvalidEmailOnce] = useState(true);

  const [isModalOpenGetNews, setIsModalOpenGetNews] = useState(false);
  const getNewsModalHandler = () => setIsModalOpenGetNews((prev) => !prev);
  const termsLink = `${process.env.COREZOID_SITE}/terms-and-conditions`;

  const handleChangeEmail = (value: string) => {
    if (value.length === 0) {
      setemailError(null);
    } else if (!hasEnteredInvalidEmailOnce && !isEmailValid(value)) {
      setemailError('Invalid email address');
    } else {
      setemailError(null);
    }
    setEmail(value);
  };

  const handleSendEmailClick = async () => {
    if (!email) {
      setemailError('Email is required');
    } else if (!isEmailValid(email)) {
      setemailError('Invalid email address');
      setHasEnteredInvalidEmailOnce(false);
    } else if (!emailError || isEmailValid(email)) {
      try {
        await emailSubscribeRequest(email, 'GET_News');
        setEmail('');
        setHasEnteredInvalidEmailOnce(true);
        setIsModalOpenGetNews(true);
      } catch (error) {
        setemailError('Sorry try again later');
      }
    }
  };

  return (
    <footer className={style.footer}>
      <SuccessNotifyModal
        visible={isModalOpenGetNews}
        onClose={getNewsModalHandler}
        title="Thank you for reaching out to us!"
        description=" Your submission has been received and we&apos;ll reply as soon as possible."
      />
      <div className={style.footerContent}>
        <div className={style.footerContentTop}>
          <div className={style.groupA}>
            <section>
              <h5>Resources</h5>
              <ul>
                <li><a href="https://doc.corezoid.com/" target="_blank" rel="noopener noreferrer">Documentation</a></li>
                <li><a href="https://control.events/api.html" target="_blank" rel="noopener noreferrer">API</a></li>
                <li><a href="https://control.events/script.html" target="_blank" rel="noopener noreferrer">Scripts</a></li>
              </ul>
            </section>
            <section>
              <h5>Company</h5>
              <ul>
                <li><Link href="/download" passHref>Download</Link></li>
                <li><Link href="/read" passHref>Read</Link></li>
                <li><a href={termsLink} target="_blank" rel="noopener noreferrer">Terms</a></li>
                <li>
                  <Link href="/contact" passHref>
                    <span className={style.coloredLink}>
                      <span>Contact Us</span>
                      <Arrow />
                    </span>
                  </Link>
                </li>
              </ul>
            </section>
          </div>
          <div className={style.groupB}>
            <section>
              <h5>Subscribe to our newsletter</h5>
              <p>
                The latest Simulator.Company news, articles,
                and resources sent straight to your email.
              </p>
              <div className={style.emailGroup}>
                <Input
                  error={emailError}
                  type="email"
                  value={email}
                  onChange={handleChangeEmail}
                  placeholder="Email"
                />
                <Button onClick={handleSendEmailClick}>Subscribe</Button>
              </div>
            </section>
          </div>
        </div>
        <hr />
        <div className={style.footerContentBottom}>
          <div className={style.groupC}>
            <section style={{ display: 'flex', alignItems: 'center' }}>
              <Image
                src={corezoidLogoImg}
                alt="logo"
                height={48}
              />
            </section>
            <section>
              2023 © Corezoid Inc., 541 Jefferson Avenue, Suite 100,
              {' '}
              <br />
              Redwood City, CA 94063. All rights reserved.
              {' '}
              <br />
              Patent protected. Powered by Erlang.
            </section>
          </div>
          <div className={style.groupD}>
            <section style={{ display: 'flex', alignItems: 'center' }}>
              <Image
                src={awsPartnerImg}
                alt="aws partner"
                height={60}
                style={{
                  width: 'auto',
                  height: 60,
                }}
              />
            </section>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
