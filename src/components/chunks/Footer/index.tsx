import React from 'react';
import Button from '../../UI/Button';
import style from './Footer.module.scss';

function Footer() {
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
              <Button>Subscribe</Button>
            </section>
          </div>
        </div>
        <hr />
        <div className={style.footerContentBottom} />
      </div>
    </footer>
  );
}

export default Footer;
