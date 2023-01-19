import s from './App.module.css';
import Card from './components/Card';

function App() {
  return (
    <div className={s.container}>
      <div className={s.title}>Ты сегодня покормил кота?</div>
      <div className={s.cardList}>
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
}

export default App;
