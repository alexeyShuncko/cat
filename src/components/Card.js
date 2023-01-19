import s from './Card.module.css';
import cat from '../images/Photo.png';

const Card = ({ data }) => {
  let color = data.status === false ? '#1698D9' : '#D91667';

  return (
    <div className={s.cardContainer}>
      <div className={s.card} style={{ borderColor: color }}>
        <div className={s.subTitle}>Сказачное заморское яство</div>
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
    </div>
  );
};
export default Card;
