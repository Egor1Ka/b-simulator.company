import React, { useState, useEffect } from 'react';
import Layout from '@/components/chunks/Layout';
import Button from '@/components/UI/Button';
import Image from 'next/image';
import TextUnderlied from '@/components/chunks/TextUnderlied';
import emailSubscribeRequest from '@/API/emailSubscribeRequest';
import isEmailValid from '@/helpers/regularExpressions/isEmailValid';
import SuccessNotification from '@/components/UI/SuccessNotification';
import { useTranslate } from '@/hooks/useTranslate';
import Input from '@/components/UI/Input';
import classNames from 'classnames';
import SEO from '@/components/chunks/SEO';
import ContactCard from '../../components/chunks/ContactCard/index';
import imageWorkshop from '../../../public/images/workshop.png';
import SertificateIcon from '../../../public/icons/sertificateIcon.svg';
import BookIcon from '../../../public/icons/book.svg';
import DemoIcon from '../../../public/icons/demo.svg';
import PresentationIcon from '../../../public/icons/presentation.svg';
import styles from './ContactPage.module.scss';

const contactUsCDU = process.env.NEXT_PUBLIC_CONTAT_US_SDU_LINK;

const Contact: React.FC = () => {
  const { t } = useTranslate();
  const [emailDemo, setEmailDemo] = useState('');
  const [emaiDemolError, setEmailDemoError] = useState<null | string>(null);
  const [hasEnteredInvalidEmaiDemolOnce, setDemoOnce] = useState(true);

  const [emailPresentation, setEmailPresentation] = useState('');
  const [emailErrorPresentation, setEmailErrorPresentation] = useState<null | string>(null);
  const [hasEnteredInvalidPresentationlOnce, setPresentationlOnce] = useState(true);

  const [successMessage, setSuccessMessage] = useState(false);
  const [iframeLoaded, setIframeLoaded] = useState(false);

  const handleChangeEmailPresentation = (value: string) => {
    if (value.length === 0) {
      setEmailErrorPresentation(null);
    } else if (!hasEnteredInvalidPresentationlOnce && !isEmailValid(emailPresentation)) {
      setEmailErrorPresentation('Invalid email address');
    } else {
      setEmailErrorPresentation(null);
    }
    setEmailPresentation(value);
  };

  const handleSendEmailClickPresentation = async () => {
    if (!emailPresentation) {
      setEmailErrorPresentation('Email is required');
    } else if (!isEmailValid(emailPresentation)) {
      setEmailErrorPresentation('Invalid email address');
      setPresentationlOnce(false);
    } else if (!emailErrorPresentation) {
      try {
        await emailSubscribeRequest(emailPresentation, 'GET_Presentation');
        setEmailPresentation('');
        setSuccessMessage(true);
        setPresentationlOnce(true);
      } catch (error) {
        setEmailErrorPresentation('server error');
      }
    }
  };

  const handleChangeEmailDemo = (value: string) => {
    if (value.length === 0) {
      setEmailDemoError(null);
    } else if (!hasEnteredInvalidEmaiDemolOnce && !isEmailValid(emailDemo)) {
      setEmailDemoError('Invalid email address');
    } else {
      setEmailDemoError(null);
    }
    setEmailDemo(value);
  };

  const handleSendEmailClickDemo = async () => {
    if (!emailDemo) {
      setEmailDemoError('Email is required');
    } else if (!isEmailValid(emailDemo)) {
      setEmailDemoError('Invalid email address');
      setDemoOnce(false);
    } else if (!emaiDemolError) {
      try {
        await emailSubscribeRequest(emailDemo, 'GET_Demo');
        setEmailDemo('');
        setSuccessMessage(true);
        setDemoOnce(true);
      } catch (error) {
        setEmailDemoError('server error');
      }
    }
  };

  const handleIframeLoad = () => {
    setTimeout(() => setIframeLoaded(true), 500);
  };

  useEffect(() => {
    const timeout = setTimeout(() => setSuccessMessage(false), 3000);
    return () => clearTimeout(timeout);
  }, [successMessage]);

  const containerClasses = classNames({
    [styles.contactUsIframeContainer]: true,
    [styles.loaded]: iframeLoaded,
  });

  return (
    <Layout>
      <SEO
        metaTitle={t('pageMetaInfo.contact.title')}
        metaDescription={t('pageMetaInfo.contact.description')}
        metaKeywords={t('pageMetaInfo.contact.keywords')}
      />
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
          <div className={containerClasses}>
            <iframe
              onLoad={handleIframeLoad}
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
                link={
                  process.env.NEXT_PUBLIC_CALENDLY_WORKSHOP_LINK
                }
              >
                Book workshop
              </Button>
            </div>
          </div>
        </section>
        <section className={styles.knowledgeCardContainer}>
          <ContactCard
            icon={<SertificateIcon />}
            title="Certification"
            options={['Junior', 'Middle', 'Senior']}
            type="disabled"
            description="Junior Test: 20 min <br /> Middle Test: 6 hours <br /> Senior Test: 12 hours"
            button={(
              <Button
                styleClass={styles.knowledgeCardButton}
                disabled
              >
                Coming Soon
              </Button>
            )}
          />
          <ContactCard
            icon={<BookIcon />}
            title="Knowledge
            Sharing Night"
            type="active"
            styleClass={styles.card2}
            description="Duration: 2 hours <br />Participants: at least 2"
            button={(
              <Button
                type="secondary"
                styleClass={styles.knowledgeCardButton}
                link={process.env.NEXT_PUBLIC_CALENDLY_SHARING_NIGH_LINK}
              >
                Book Night
              </Button>
            )}
          />
          <ContactCard
            icon={<PresentationIcon />}
            styleClass={styles.card3}
            title="Get your presentation "
            type="active"
            description="Learn more about Simulator.Company"
            input={(
              <Input
                placeholder="Your email"
                type="email"
                value={emailPresentation}
                onChange={handleChangeEmailPresentation}
                error={emailErrorPresentation}
              />
            )}
            button={(
              <Button
                type="secondary"
                link=""
                styleClass={styles.knowledgeCardButton}
                onClick={handleSendEmailClickPresentation}
              >
                Get Presentation
              </Button>
            )}
          />
          <ContactCard
            icon={<DemoIcon />}
            styleClass={styles.card4}
            title="Request a Demo"
            type="active"
            description="See our product in action. Discover how our solution can transform your business"
            input={(
              <Input
                placeholder="Your email "
                type="email"
                value={emailDemo}
                onChange={handleChangeEmailDemo}
                error={emaiDemolError}
              />
            )}
            button={(
              <Button
                type="secondary"
                link=""
                styleClass={styles.knowledgeCardButton}
                onClick={handleSendEmailClickDemo}
              >
                Get Presentation
              </Button>
            )}
          />
        </section>
        {successMessage && <SuccessNotification message="sucess" />}
      </div>
    </Layout>
  );
};

export default Contact;
