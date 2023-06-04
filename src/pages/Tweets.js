import { useEffect, useState } from 'react';
import { getUsers } from '../services/user-service';
import UserList from '../components/UserList/UserList';
import LoadMoreButton from '../components/LoadMoreButton/LoadMoreButton';
import Loader from '../components/Loader/Loader';

const Tweets = () => {
  const [users, setUsers] = useState([]);
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  // const [totalUsers, setTotalUsers] = useState(0);
  const [page, setPage] = useState(1);
  const [showLoadMoreBtn, setShowLoadMoreBtn] = useState(false);
  const PAGE_SIZE = 3;

  useEffect(() => {
    async function getDataSource() {
      setIsLoading(true);
      try {
        const data = await getUsers(page, PAGE_SIZE);
        setUsers(prevState => [...prevState, ...data.users]);
        // setTotalUsers(data.total);
        setShowLoadMoreBtn(page < Math.ceil(data.total / PAGE_SIZE));
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    }
    getDataSource();
  }, [page]);

  const loadMore = () => {
    setPage(prevPage => prevPage + 1);
  };

  if (error) return <div>{error}</div>;

  return (
    <main>
      <section>
        <div>
          <UserList users={users} />
          {isLoading && <Loader />}
          {showLoadMoreBtn && <LoadMoreButton onClick={loadMore} />}
        </div>
      </section>
    </main>
  );
};

export default Tweets;