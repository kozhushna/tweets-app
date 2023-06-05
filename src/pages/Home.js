import css from '../components/App/App.module.css';
import Hero from '../images/hero.jpg';
import homeCss from './Home.module.css';

const Home = () => {
  return (
    <main>
      <section className={homeCss.section}>
        <div className={css.container}>
          <h1 className={homeCss.title}>Welcome to Tweets</h1>
          <img src={Hero} alt="tweets" className={homeCss.image} />
        </div>
      </section>
    </main>
  );
};

export default Home;
