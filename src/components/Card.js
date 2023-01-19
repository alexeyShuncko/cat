import s from './Card.module.css';
import cat from '../images/Photo.png';

const Card = () => {
  return (
    <div className={s.cardContainer}>
      <div className={s.card}>
        <div className={s.subTitle}>Сказачное заморское яство</div>
        <div className={s.title}>Нямушка</div>
        <div className={s.filling}>с фуа-гра</div>
        <div className={s.count}>
          <div>10 порций</div>
          <div>мышь в подарок</div>
        </div>
        <img src={cat} alt="Cat" className={s.catImg} />
        <div className={s.circl}>
          <span>0,5</span>
          <span>кг</span>
        </div>
      </div>
      <div className={s.btn}>
        Чего сидишь? Порадуй котэ, <span>купи.</span>
      </div>
      <span className={s.hiddenEl}></span>
    </div>
  );
};
export default Card;
