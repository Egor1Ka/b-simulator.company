import style from './TextUnderlied.module.scss';

interface ReadProps {
  children: React.ReactNode;
}

const TextUnderlied: React.FC<ReadProps> = ({ children }) => (
  <span className={style.textUnderlied}>
    {children}
  </span>
);

export default TextUnderlied;
