import React, {
} from 'react';
import Layout from '@/components/chunks/Layout';
import { useTranslate } from '@/hooks/useTranslate';
import TextUnderlied from '@/components/chunks/TextUnderlied';
import SEO from '@/components/chunks/SEO';
import ContactCard from '@/components/chunks/ContactCard';
import Button from '@/components/UI/Button';
import Image from 'next/image';
import CardFAQ from '@/components/chunks/CardFAQ/CardFAQ';
import debugGif from '../../../public/gif/state.gif';
import styles from './BuyPage.module.scss';

const Contact: React.FC = () => {
  const { t } = useTranslate();

  return (
    <Layout>
      <SEO
        metaTitle={t('pageMetaInfo.buy.title')}
        metaDescription={t('pageMetaInfo.buy.description')}
      />
      <div className={`${styles.container}`}>
        <h1 className={styles.title}>
          {t('by.titleP1')}
          {' '}
          <TextUnderlied>{t('by.titleP2')}</TextUnderlied>
          <br />
          {t('by.titleP3')}
        </h1>
        <section className={styles.licenses}>
          <ContactCard
            title="Free"
            options={['Cloud']}
            styleClass={styles.trialCard}
            type="active"
            description="<strong>RPS:</strong> 5 <br /><strong>Storage:</strong> 15 Gb<br /><strong>Duration:</strong> unlimited"
            button={(
              <Button
                type="primary"
                styleClass={styles.licenseButton}
                link={process.env.NEXT_PUBLIC_CONTROL_LINK}
              >
                Free
              </Button>
            )}
          />
          <ContactCard
            title="Commercial License"
            options={['Cloud', 'In-House']}
            styleClass={styles.commercialCard}
            type="active"
            description="<strong>RPS:</strong> 2 to unlimited <br /> <strong>Storage:</strong> 15 GB to unlimited<br /> <strong>Price:</strong> starting at $40"
            button={(
              <Button
                type="primary"
                styleClass={styles.licenseButton}
                link={process.env.NEXT_PUBLIC_LICENSE_CONSTRUCTOR_LINK}
              >
                Buy
              </Button>
            )}
          />
        </section>
        <section className={styles.questionText}>
          <h2 className={styles.questionTitle}>
            {t('by.questitonTitle')}
          </h2>
          <h4 className={styles.description}>
            {t('by.questitonDescription')}
          </h4>
        </section>
        <section className={`${styles.questionDescription}`}>
          <CardFAQ
            media={(
              <Image
                src={debugGif.src}
                alt="gif debug"
                width={debugGif.width}
                height={debugGif.height}
                className={styles.video}
              />
            )}
            title={t('by.titleCardStateChanges')}
            description={t('by.descriptionMainCard')}
            styleClass={styles.mainCard}
          >
            <ul className={styles.descriptionList}>
              <li>
                <span className={styles.cardListTitle}>{t('by.descriptionMainCardListItem1Title')}</span>
                {t('by.descriptionMainCardListItem1')}
              </li>
              <li>
                <span className={styles.cardListTitle}>{t('by.descriptionMainCardListItem2Title')}</span>
                {t('by.descriptionMainCardListItem2')}
              </li>
              <li>
                <span className={styles.cardListTitle}>{t('by.descriptionMainCardListItem3Title')}</span>
                {t('by.descriptionMainCardListItem3')}
              </li>
            </ul>
          </CardFAQ>
          <div className={styles.cardList}>
            <CardFAQ title={t('by.titleCard1')} description={t('by.descriptionCard1')} styleClass={styles.card1} />
            <CardFAQ title={t('by.titleCard2')} description={t('by.descriptionCard2')} styleClass={styles.card2} />
            <CardFAQ title={t('by.titleCard3')} description={t('by.descriptionCard3')} styleClass={styles.card3} />
            <CardFAQ title={t('by.titleCard4')} description={t('by.descriptionCard4')} styleClass={styles.card4} />
          </div>
          <CardFAQ
            title={t('by.titleCard5')}
            styleClass={styles.card5}
          >
            <div>
              <div className={styles.descriptionSection}>
                <div className={styles.P1}>
                  <h5>{t('by.descriptionCard5P1')}</h5>
                  <ul className={`${styles.descriptionList} ${styles.descriptionListLicenses}`}>
                    <li>
                      {t('by.descriptionMainCardP1ListItem1')}
                    </li>
                    <li>
                      {t('by.descriptionMainCardP1ListItem2')}
                    </li>
                    <li>
                      {t('by.descriptionMainCardP1ListItem3')}
                    </li>
                  </ul>
                </div>
                <div className={styles.P2}>
                  <h5>{t('by.descriptionCard5P2')}</h5>
                  <ul className={`${styles.descriptionList} ${styles.descriptionListLicenses}`}>
                    <li>
                      {t('by.descriptionMainCardP2ListItem1')}
                    </li>
                    <li>
                      {t('by.descriptionMainCardP2ListItem2')}
                    </li>
                    <li>
                      {t('by.descriptionMainCardP2ListItem3')}
                    </li>
                  </ul>
                </div>
              </div>
              <div className={styles.P3}>
                <h5>{t('by.descriptionCard5P3')}</h5>
                <p>{t('by.descriptionMainCard5P3ListItem1')}</p>
              </div>
            </div>
          </CardFAQ>
          <div className={styles.cardList}>
            <CardFAQ title={t('by.titleCard6')} description={t('by.descriptionCard6')} styleClass={styles.card6} />
            <CardFAQ title={t('by.titleCard7')} description={t('by.descriptionCard7')} styleClass={styles.card7} />
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default Contact;
