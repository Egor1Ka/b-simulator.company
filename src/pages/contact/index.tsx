import React, {
} from 'react';
import Layout from '@/components/chunks/Layout';
import Button from '@/components/UI/Button';
import { useTranslate } from '@/hooks/useTranslate';
import Image from 'next/image';
import Input from '@/components/UI/Input';
import TextUnderlied from '@/components/chunks/TextUnderlied';
import imageWorkshop from '../../../public/images/workshop.png';
import ContactCard from '../../components/chunks/ContactCard/index';
import styles from './ContactPage.module.scss';

const contactUsCDU = process.env.NEXT_PUBLIC_CONTAT_US_SDU_LINK;
const Contact: React.FC = () => {
  const { t } = useTranslate();

  return (
    <Layout>
      <div className={`${styles.container} contact`}>
        <h1 className={`${styles.contactTitle}`}>
          {t('contact.contact')}
          {' '}
          <TextUnderlied>{t('contact.us')}</TextUnderlied>
          {' '}
        </h1>
        <section className={styles.contactUs}>
          <div className={styles.contactUsInfo}>
            <h2 className={styles.contactUsTitle}>{t('contact.contactUs__title')}</h2>
            <p className={styles.contactUsDescription}>{t('contact.contactUs__description')}</p>
          </div>
          <div className={styles.contactUsIframeContainer}>
            <iframe
              title="Script"
              src={contactUsCDU}
              className={styles.contactUsIframe}
            />
          </div>
        </section>
        <section className={styles.workshopSection}>
          <div className={styles.workshopImageSection}>
            <div className={styles.workshopImageContainer}>
              <Image alt="workshop" src={imageWorkshop} className={styles.workshopImage} />
              <div className={styles.workshopImageDescription}>
                The Curse of Frankenstein (1957) movie still
              </div>
            </div>
          </div>
          <div className={styles.workshopInfoContainer}>
            <h2 className={styles.workshopInfoTitle}>
              <TextUnderlied>
                <p>
                  {t('contact.workshop__title')}
                </p>
              </TextUnderlied>
              <br />
              {t('contact.workshop__сase')}
            </h2>
            <div>
              <span className={styles.workshopInfoDetails}>
                {' '}
                {t('contact.workshop__participants')}
                {' '}
              </span>
              <span className={styles.workshopInfoDetails}>{t('contact.workshop__price')}</span>
            </div>
            <p className={styles.workshopInfoTrainingProgram}>{t('contact.workshop__training__program')}</p>
            <p className={styles.workshopInfoDescription}>{t('contact.workshop__description')}</p>
            <div className={styles.workshopInfoButtonContainer}>
              <Button
                styleClass={styles.workshopInfoButton}
                type="secondary"
                link={process.env.NEXT_PUBLIC_CALENDLY_WORKSHOP_LINK}
              >
                Book workshop
              </Button>
            </div>
          </div>
        </section>
        <section className={styles.knowledgeCardContainer}>
          <ContactCard
            title="Certification"
            options={['Junior', 'Middle', 'Senior']}
            type="disabled"
            description="Junior Test: 20 min <br /> Middle Test: 6 hours <br /> Senior Test: 12 hours"
            button={(
              <Button
                styleClass={styles.licenseButton}
                disabled
              >
                Coming Soon
              </Button>
            )}
          />
          <ContactCard
            title="Knowledge
            Sharing Night"
            type="active"
            description="Duration: 2 hours <br />Participants: at least 2"
            button={(
              <Button
                type="secondary"
                styleClass={styles.knowledgeCardButton}
                link={process.env.NEXT_PUBLIC_CALENDLY_SHARING_NIGH_LINK}
              >
                Book
              </Button>
            )}
          />
          <ContactCard
            title="Get your presentation "
            type="active"
            description="Learn more about Simulator.Company"
            button={(
              <Button
                type="secondary"
                link=""
                styleClass={styles.knowledgeCardButton}
              >
                Get Presentation
              </Button>
            )}
          />
        </section>
        <section className={styles.requestSection}>
          <div className={styles.requestContainer}>
            <div className={styles.requestText}>
              <h3 className={styles.requestTitle}>
                {t('contact.requestP1')}
                <TextUnderlied>
                  {t('contact.requestP2')}
                </TextUnderlied>
              </h3>
              <p className={styles.requestDescription}>
                {t('contact.request_descripton')}
              </p>
            </div>
            <div className={styles.requestEmailContainer}>
              <Input
                styleClass={styles.requestInput}
                placeholder="Your email address"
                type="email"
              />
              <div className={styles.requestButtonContainer}>
                <Button
                  styleClass={styles.requestButton}
                  link=""
                >
                  Request Demo
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
