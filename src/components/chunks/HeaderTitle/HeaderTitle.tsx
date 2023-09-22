import style from './HeaderTitle.module.scss';

interface ReadProps {
  children: React.ReactNode;
}

const HeaderTitle: React.FC<ReadProps> = ({ children }) => (
  <div className={style.headerContainer}>
    <h2>{children}</h2>
  </div>
);

export default HeaderTitle;
