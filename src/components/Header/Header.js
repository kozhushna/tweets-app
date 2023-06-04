import { NavLink, Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import Logo from '../../images/logo.png';
import css from '../App/App.module.css';
import headerCss from './Header.module.css';

const Header = () => {
  return (
    <>
      <header>
        <div className={css.container}>
          <div className={headerCss.menuHolder}>
            <img
              src={Logo}
              alt="tweets"
              className={headerCss.logo}
              width="40px"
            />
            <nav>
              <ul className={headerCss.navList}>
                <li>
                  <NavLink to="/">Home</NavLink>
                </li>
                <li>
                  <NavLink to="/tweets">Tweets</NavLink>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>
      <Suspense>
        <Outlet />
      </Suspense>
    </>
  );
};

export default Header;
