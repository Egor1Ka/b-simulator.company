import React, {
} from 'react';
import Layout from '@/components/chunks/Layout';
import styles from './ContactPage.module.scss'
import ContactCard from './ContactCard/index'
import Button from '@/components/UI/Button';
import { useTranslate } from '@/hooks/useTranslate';
import imageWorkshop from '../../../public/images/workshop.png'
import Image from 'next/image';
import Input from '@/components/UI/Input';

const Contact: React.FC = () => {
  const { t } = useTranslate();
  const contactUs_CDU_Lik = process.env.NEXT_PUBLIC_CONTAT_US_SDU_LINK_DEV;

  return (
    <Layout>
      <div className={`${styles.container} contact`}>
        <h1 className={`${styles.get__title}`}>{t('contact.contact')} <span className='underlining'>{t('contact.us')}</span> </h1>
        <section className={styles['contact-us']}>
          <div className={styles['contact-us__info']}>
            <h2 className={styles['contact-us__title']}>{t('contact.contact-us__title')}</h2>
            <p className={styles['contact-us__description']}>{t('contact.contact-us__description')}</p>
          </div>
          <div className={styles['contact-us__iframe__container']}>
            <iframe src={contactUs_CDU_Lik} className={styles['contact-us__iframe']} />
          </div>
        </section>
        <section className={styles.workshop__section}>
          <div className={styles.workshop__image__section}>
            <div className={styles.workshop__image__container}>
              <Image alt='workshop' src={imageWorkshop} className={styles.workshop__image} />
              <div className={styles.workshop__image__description}>The Curse of Frankenstein (1957) movie still</div>
            </div>
          </div>
          <div className={styles.workshop__info__container}>
            <h2 className={styles.workshop__info__title}>
              <p className='underlining'>
                {t('contact.workshop__title')}
              </p>
              <br />
              {t('contact.workshop__сase')}
            </h2>
            <div>
              <span className={styles.workshop__info__details}> {t('contact.workshop__participants')} </span>
              <span className={styles.workshop__info__details}>{t('contact.workshop__price')}</span>
            </div>
            <p className={styles.workshop__info__training__program}>{t('contact.workshop__training__program')}</p>
            <p className={styles.workshop__info__description}>{t('contact.workshop__description')}</p>
            <div styleClass={styles.workshop__info__button}>
              <Button
                type='secondary'
                link='https://calendly.com/middleware/workshop'
              >Book workshop</Button>
            </div>
          </div>
        </section>
        <section className={styles.knowledge__card__container}>
          <ContactCard
            title="Certification"
            options={['Junior', 'Middle', 'Senior']}
            type='disabled'
            description='RPS: 2 to unlimited <br /> Storage: 15 GB to unlimited <br /> Starting at $40'
            button={
              <Button
                styleClass={styles.license__button}
                disabled>Coming Soon
              </Button>
            } />
          <ContactCard
            title="Knowledge
            Sharing Night"
            type='active'
            description='Duration: 2 hours <br />Participants: at least 2'
            button={
              <Button
                type='secondary'
                styleClass={styles.knowledge__card__button}
                link='https://calendly.com/middleware/workshop'
              >Book</Button>
            } />
          <ContactCard
            title="Get your presentation "
            type='active'
            description='Learn more about Simulator.Company'
            button={
              <Button
                type='secondary'
                link='https://calendly.com/middleware/workshop'
                styleClass={styles.knowledge__card__button}
              >Explore</Button>
            } />
        </section>
        <section className={styles.request__section}>
          <div className={styles.request__scontainer}>
            <div className={styles.request__text}>
              <h3 className={styles.request__title}>
                {t('contact.request-p1')}
                <span className={`underlining`}>
                  {t('contact.request-p2')}
                </span>
              </h3>
              <p className={styles.request__description}>
                {t('contact.request_descripton')}
              </p>
            </div>
            <div className={styles.request__email_container}>
              <Input
                styleClass={styles.request__input}
                placeholder="Your email address"
                type='email'
              />
              <Button
                link='/test'
              >Get Presentation
              </Button>
            </div>
          </div>
        </section>

      </div>
    </Layout>
  );
};

export default Contact;
