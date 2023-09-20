import React, {
} from 'react';
import Image from 'next/image';
import Button from '@/components/UI/Button';
import { useTranslate } from '@/hooks/useTranslate';
import twinImg from '../../public/twin.png';
import mainImg from '../../public/main.png';
import Layout from '../components/chunks/Layout';

import styles from './index.module.scss';

const Main: React.FC = () => {
  const { t } = useTranslate();
  return (
    <Layout>
      <main className={styles.main}>
        <div className={styles.headerContent}>
          <div className={styles.mainGroup}>
            <h5>The Real-Time Business Platform</h5>
            <h1>
              <span>Create a </span>
              <span className={styles.imgWrapper}>
                <Image
                  src={twinImg}
                  alt="twin"
                  height={48}
                  width={48}
                />
              </span>
              <span>
                {' '}
                Digital Twin
                {' '}
                <br />
                {' '}
                or your Company
              </span>
            </h1>
            <p>
              Describe and model everything as actors, connect in graphs,
              and continuously computed upon.
            </p>
            <div className={styles.buttonGroup}>
              <Button style={{ width: 160 }} type="secondary">Watch video</Button>
              <Button style={{ width: 160 }} type="primary">Start free</Button>
            </div>
          </div>
          <div className={styles.imageGroup}>
            <Image
              src={mainImg}
              alt="main"
            />
          </div>
        </div>
      </main>
    </Layout>
  );
};

export default Main;
