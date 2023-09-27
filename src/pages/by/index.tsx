import React, {
} from 'react';
import Layout from '@/components/chunks/Layout';
import { useTranslate } from '@/hooks/useTranslate';
import TextUnderlied from '@/components/chunks/TextUnderlied';
import ContactCard from '@/components/chunks/ContactCard';
import Button from '@/components/UI/Button';
import CardFAQ from '@/components/chunks/CardFAQ/CardFAQ';
import debug from '../../../public/videos/Debug.mp4'
import styles from './ByPage.module.scss';

const Contact: React.FC = () => {
  const { t } = useTranslate();
  const video = (
    <video
      src={debug}
      autoPlay
      muted
      loop
      className={styles.video}
      controls={false}
      style={{ width: '100%', height: '100%' }} />
  );

  return (
    <Layout>
      <div className={`${styles.container}`}>
        <h1 className={styles.title}>
          {t('by.titleP1')}
          <TextUnderlied>{t('by.titleP2')}</TextUnderlied>
          <br />
          {t('by.titleP3')}
        </h1>
        <section className={styles.licenses}>
          <ContactCard
            title="Trial Licence"
            options={['Cloud', 'In-House']}
            type="active"
            description="RPS: 2 <br />Storage:15 Gb at <br />Duration: 30 days"
            button={(
              <Button
                type="secondary"
                link={process.env.NEXT_PUBLIC_CONTROL_LINK}
                styleClass={styles.licensesButton}
              >
                Free
              </Button>
            )}
          />
          <ContactCard
            title="Commercial Licence"
            options={['Cloud', 'In-House']}
            type="disabled"
            description="RPS: 2 to unlimited <br /> Storage: 15 GB to unlimited<br /> Starting at $40"
            button={(
              <Button
                styleClass={styles.licenseButton}
                disabled
              >
                Coming Soon
              </Button>
            )}
          />
        </section>
        <section className={styles.questionText}>
          <h2 className={styles.questionTitle}>
            {t('by.questitonTitle')}
          </h2>

          <h4 className={styles.questionDescription}>
            {t('by.questitonDescription')}
          </h4>
        </section>
        <section className={styles.questionDescription}>
          <CardFAQ
            media={(
              video
            )}
            title={t('by.titleCard1')}
            description={t('by.descriptionCard1')}
            styleClass={styles.mainCard}
          />
          <div className={styles.cardList}>
            <CardFAQ title={t('by.titleCard1')} description={t('by.descriptionCard1')} styleClass={styles.card1} />
            <CardFAQ title={t('by.titleCard2')} description={t('by.descriptionCard2')} styleClass={styles.card2} />
            <CardFAQ title={t('by.titleCard3')} description={t('by.descriptionCard3')} styleClass={styles.card3} />
            <CardFAQ title={t('by.titleCard4')} description={t('by.descriptionCard4')} styleClass={styles.card4} />
            <CardFAQ title={t('by.titleCard5')} description={t('by.descriptionCard5')} styleClass={styles.card5} />
            <CardFAQ title={t('by.titleCard6')} description={t('by.descriptionCard6')} styleClass={styles.card6} />
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default Contact;
