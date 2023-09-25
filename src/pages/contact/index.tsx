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
        <h1 className={`${styles.contactTitle}`}>{t('contact.contact')} <span className='underlining'>{t('contact.us')}</span> </h1>
        <section className={styles.contactUs}>
          <div className={styles.contactUsInfo}>
            <h2 className={styles.contactUsTitle}>{t('contact.contactUs__title')}</h2>
            <p className={styles.contactUsDescription}>{t('contact.contactUs__description')}</p>
          </div>
          <div className={styles.contactUsIframeContainer}>
            <iframe src={contactUs_CDU_Lik} className={styles.contactUsIframe} />
          </div>
        </section>
        <section className={styles.workshopSection}>
          <div className={styles.workshopImageSection}>
            <div className={styles.workshopImageContainer}>
              <Image alt='workshop' src={imageWorkshop} className={styles.workshopImage} />
              <div className={styles.workshopImageDescription}>The Curse of Frankenstein (1957) movie still</div>
            </div>
          </div>
          <div className={styles.workshopInfoContainer}>
            <h2 className={styles.workshopInfoTitle}>
              <p className='underlining'>
                {t('contact.workshop__title')}
              </p>
              <br />
              {t('contact.workshop__сase')}
            </h2>
            <div>
              <span className={styles.workshopInfoDetails}> {t('contact.workshop__participants')} </span>
              <span className={styles.workshopInfoDetails}>{t('contact.workshop__price')}</span>
            </div>
            <p className={styles.workshopInfoTrainingProgram}>{t('contact.workshop__training__program')}</p>
            <p className={styles.workshopInfoDescription}>{t('contact.workshop__description')}</p>
            <div className={styles.workshopInfoButtonContainer}>
              <Button
                styleClass={styles.workshopInfoButton}
                type='secondary'
                link='https://calendly.com/middleware/workshop'
              >Book workshop</Button>
            </div>
          </div>
        </section>
        <section className={styles.knowledgeCardContainer}>
          <ContactCard
            title="Certification"
            options={['Junior', 'Middle', 'Senior']}
            type='disabled'
            description='RPS: 2 to unlimited <br /> Storage: 15 GB to unlimited <br /> Starting at $40'
            button={
              <Button
                styleClass={styles.licenseButton}
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
                styleClass={styles.knowledgeCardButton}
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
                styleClass={styles.knowledgeCardButton}
              >Explore</Button>
            } />
        </section>
        <section className={styles.requestSection}>
          <div className={styles.requestContainer}>
            <div className={styles.requestText}>
              <h3 className={styles.requestTitle}>
                {t('contact.requestP1')}
                <span className={`underlining`}>
                  {t('contact.requestP2')}
                </span>
              </h3>
              <p className={styles.requestDescription}>
                {t('contact.request_descripton')}
              </p>
            </div>
            <div className={styles.requestEmailContainer}>
              <Input
                styleClass={styles.requestInput}
                placeholder="Your email address"
                type='email'
              />
              <div className={styles.requestButtonContainer}>
                <Button
                  styleClass={styles.requestButton}
                  link='/test'
                >Get Presentation
                </Button>
              </div>
            </div>
          </div>
        </section>

      </div>
    </Layout>
  );
};

export default Contact;
