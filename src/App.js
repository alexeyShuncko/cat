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
      status: 'default',
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
      status: 'selected',
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
      status: 'disabled',
    },
  ]);

  return (
    <div className={s.container}>
      <div className={s.title}>Ты сегодня покормил кота?</div>
      <div className={s.cardList}>
        {data.map((a, i) => (
          <div key={a.description}>
            <div
              onClick={() => {
                a.status = a.status === 'selected' ? 'default' : 'selected';
                setData([...data]);
              }}>
              <Card data={data[i]} />
            </div>
            {a.status === 'default' && (
              <div className={s.btn}>
                Чего сидишь? Порадуй котэ,{' '}
                <span
                  onClick={() => {
                    a.status = 'selected';
                    setData([...data]);
                  }}>
                  купи.
                </span>
              </div>
            )}
            {a.status === 'selected' && (
              <div className={s.btn}>{a.description}</div>
            )}
            {a.status === 'disabled' && (
              <div className={s.btn} style={{ color: '#FFFF66' }}>
                Печалька, {a.filling} закончился.
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
