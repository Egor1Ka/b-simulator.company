import Link from 'next/link';

import style from './404.module.scss';

const NotFound: React.FC = () => (
  <div className={style.mainContainer}>
    <div className={style.textCenter}>
      <h1>404</h1>
      <h3>PAGE NOT FOUND</h3>
      <Link href="/" passHref>
        <button type="button" name="button">Back To Home</button>
      </Link>
    </div>
  </div>
);

export default NotFound;
