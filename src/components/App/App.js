import { Route, Routes, Navigate } from 'react-router-dom';
import { lazy } from 'react';

const Home = lazy(() => import('../../pages/Home'));
const Tweets = lazy(() => import('../../pages/Tweets'));
const Header = lazy(() => import('../../components/Header/Header'));

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Header />}>
        <Route index element={<Home />} />
        <Route path="tweets" element={<Tweets />} />
      </Route>
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
};
