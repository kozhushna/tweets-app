import { NavLink, Outlet } from 'react-router-dom';
import { Suspense } from 'react';

const Header = () => {
  return (
    <>
      <header>
        <div>
          <nav>
            <ul>
              <li>
                <NavLink to="/">Home</NavLink>
              </li>
              <li>
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
