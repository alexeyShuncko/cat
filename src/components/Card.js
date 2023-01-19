import s from './Card.module.css';
import cat from '../images/Photo.png';
import { useState } from 'react';

const Card = ({ data }) => {
  const [edit, setEdit] = useState(true);

  if (data.status === 'default' && edit !== true) {
    setEdit(true);
  }

  const colorCheck = () => {
    if (data.status === 'default') {
      return '#1698D9';
    } else if (data.status === 'selected') {
      return '#E52E7A';
    } else if (data.status === 'disabled') {
      return '#B3B3B3';
    }
  };

  let color = colorCheck();

  const handleLeave = () => {
    if (data.status === 'selected') {
      setEdit(false);
    }
  };

  return (
    <div className={s.cardContainer}>
      <div
        className={s.card}
        style={{ borderColor: color }}
        onMouseLeave={handleLeave}>
        {edit ? (
          <div className={s.subTitle}>Сказачное заморское яство</div>
        ) : (
          <div className={s.subTitle} style={{ color: color }}>
            Котэ не одобряет?
          </div>
        )}

        <div className={s.title}>Нямушка</div>
        <div className={s.filling}>{data.filling}</div>
        <div className={s.count}>
          <div>{data.count.portion}</div>
          <div>{data.count.gift}</div>
          {data.count.other !== '' && <div>{data.count.other}</div>}
        </div>
        <img src={cat} alt="Cat" className={s.catImg} />
        <div className={s.circl} style={{ background: color }}>
          <span>{data.weight}</span>
          <span>кг</span>
        </div>
      </div>
      <span className={s.hiddenEl} style={{ borderColor: color }}></span>
      {data.status === 'disabled' && (
        <div className={s.shadowEl} onClick={(e) => e.stopPropagation()}></div>
      )}
    </div>
  );
};
export default Card;
