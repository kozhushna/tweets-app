import css from '../components/App/App.module.css';
const Home = () => {
  return (
    <main>
      <section>
        <div className={css.container}>
          <h1>Welcome to Tweets</h1>
          <h2>Tweets</h2>
        </div>
      </section>
    </main>
  );
};

export default Home;
