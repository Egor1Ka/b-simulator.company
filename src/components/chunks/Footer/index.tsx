import React, { useState } from 'react';
import Image from 'next/image';
import Button from '../../UI/Button';
import Input from '../../UI/Input';
import awsPartnerImg from '../../../../public/aws-partner.png';
import corezoidLogoImg from '../../../../public/corezoid-logo.png';
import style from './Footer.module.scss';

function Footer() {
  const [email, setEmail] = useState('');
  const handleChangeEmail = (value: string) => {
    setEmail(value);
  };
  return (
    <footer className={style.footer}>
      <div className={style.footerContent}>
        <div className={style.footerContentTop}>
          <div className={style.groupA}>
            <section>
              <h5>Resources</h5>
              <ul>
                <li>Documentation</li>
                <li>API</li>
                <li>Scripts</li>
              </ul>
            </section>
            <section>
              <h5>Company</h5>
              <ul>
                <li>About</li>
                <li>Read</li>
                <li>Terms of Service</li>
                <li>Contact us</li>
              </ul>
            </section>
          </div>
          <div className={style.groupB}>
            <section>
              <h5>Subscribe to our newsletter</h5>
              <p>The latest Corezoid news, articles, and resources, sent straight to your inbox.</p>
              <div className={style.emailGroup}>
                <Input
                  value={email}
                  onChange={handleChangeEmail}
                  placeholder="Your email address"
                />
                <Button>Subscribe</Button>
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
              />
            </section>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
