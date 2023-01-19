import { useState } from 'react';
import s from './App.module.css';
import Card from './components/Card';

function App() {
  const [data, setData] = useState([
    {
      filling: 'с фуа-гра',
      count: {
        portion: '10 порций',
        gift: 'мышь в подарок',
        other: '',
      },
      weight: '0,5',
      description: 'Печень утки разварная с артишоками.',
      status: false,
    },
    {
      filling: 'с рыбой',
      count: {
        portion: '40 порций',
        gift: '2 мыши в подарок',
        other: '',
      },
      weight: '2',
      description: 'Головы щучьи с чесноком да свежайшая сёмгушка.',
      status: false,
    },
    {
      filling: 'с курой',
      count: {
        portion: '100 порций',
        gift: '5 мышей в подарок',
        other: 'заказчик доволен',
      },
      weight: '5',
      description: 'Филе цыплят с трюфелями в бульоне.',
      status: false,
    },
  ]);

  console.log(data[0]);
  return (
    <div className={s.container}>
      <div className={s.title}>Ты сегодня покормил кота?</div>
      <div className={s.cardList}>
        {data.map((a, i) => (
          <div
            key={a.description}
            onClick={() => {
              a.status = !a.status;
              setData([...data]);
            }}>
            <Card data={data[i]} />
            {a.status === false ? (
              <div className={s.btn}>
                Чего сидишь? Порадуй котэ, <span>купи.</span>
              </div>
            ) : (
              <div className={s.btn}>{a.description}</div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
