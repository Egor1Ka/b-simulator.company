import React, { ReactNode } from 'react';
import style from './CardFAQ.module.scss';

interface ContactCarddProps {
  title: string,
  description: string,
  media?: ReactNode,
  styleClass: string;
}
const CardFAQ: React.FC<ContactCarddProps> = ({
  title,
  description,
  media,
  styleClass,
}) => (
  <div className={`${style.card} ${styleClass}`}>
    {media && <div className={style.media}>{media}</div>}
    <div className={style.textContainer}>
      <h1 className={style.title}>{title}</h1>
      <p className={style.description}>{description}</p>
    </div>
  </div>
);

export default CardFAQ;
