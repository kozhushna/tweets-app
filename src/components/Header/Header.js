import { NavLink, Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import css from '../App/App.module.css';
import headerCss from './Header.module.css';

const Header = () => {
  return (
    <>
      <header>
        <div className={css.container}>
          <nav className={headerCss.header}>
            <ul className={headerCss.navList}>
              <li className={headerCss.navLink}>
                <NavLink to="/">Home</NavLink>
              </li>
              <li className={headerCss.navLink}>
                <NavLink to="/tweets">Tweets</NavLink>
              </li>
            </ul>
          </nav>
        </div>
      </header>
      <Suspense>
        <Outlet />
      </Suspense>
    </>
  );
};

export default Header;
