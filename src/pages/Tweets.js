import { useEffect, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import { getUserById, getUsers, updateFollows } from '../services/user-service';
import UserList from '../components/UserList/UserList';
import LoadMoreButton from '../components/LoadMoreButton/LoadMoreButton';
import Loader from '../components/Loader/Loader';
import GoBackButton from '../components/GoBackButton/GoBackButton';

import css from '../components/App/App.module.css';
import tweetsCss from './Tweets.module.css';
import 'react-toastify/dist/ReactToastify.css';

const Tweets = () => {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [showLoadMoreBtn, setShowLoadMoreBtn] = useState(false);
  const PAGE_SIZE = 6;

  useEffect(() => {
    async function getDataSource() {
      setIsLoading(true);
      try {
        const data = await getUsers(page, PAGE_SIZE);
        setUsers(prevState => [...prevState, ...data.users]);
        setShowLoadMoreBtn(page < Math.ceil(data.total / PAGE_SIZE));
      } catch (error) {
        toast.error(error.massage);
      } finally {
        setIsLoading(false);
      }
    }
    getDataSource();
  }, [page]);

  const loadMore = () => {
    setPage(prevPage => prevPage + 1);
  };

  const updateFollowing = async (id, isFollowing) => {
    try {
      const user = await getUserById(id);
      const follows = isFollowing ? user.followers - 1 : user.followers + 1;
      const data = await updateFollows(id, follows);
      const newState = [...users];
      const index = newState.findIndex(user => user.id === id);
      newState[index] = data;
      setUsers(newState);
      return true;
    } catch (error) {
      toast.error(error.message);
    }
    return false;
  };

  return (
    <main>
      <section className={tweetsCss.section}>
        <div className={css.container}>
          <h2 className={tweetsCss.visuallyHidden}>Tweets</h2>
          <ToastContainer autoClose={2500} />
          <GoBackButton path={'/'}>Go back</GoBackButton>
          <UserList users={users} updateFollowing={updateFollowing} />
          {isLoading && <Loader />}
          {showLoadMoreBtn && <LoadMoreButton onClick={loadMore} />}
        </div>
      </section>
    </main>
  );
};

export default Tweets;
