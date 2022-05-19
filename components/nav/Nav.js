import PropTypes from 'prop-types';
import cs from 'classnames';
import { withRouter } from 'next/router';

import {
  MainLogo,
  MenuItem,
  MenuItemBands,
  MenuLogoItem,
} from 'components/nav';
import { Player } from 'components/player';

const Nav = ({ router }) => (
  <>
    <div
      className={cs('Nav Nav--sticky bg-black py-3', {
        // 'is-transparent': router.pathname === '/',
      })}
      data-animate="nav"
    >
      <div className="container">
        <div className="row">
          <div className="col-1">
            <MainLogo />
          </div>
          <div className={cs('col-2 d-sm-flex align-items-center', {
            'd-none': router.pathname !== '/player',
          })}
          >
            <Player showVol />
          </div>
          <div className="col d-none d-xl-flex">
            <MenuItem router={router} title="Сетка вещания" href="/schedule" />
            <MenuItem router={router} title="Программы" href="/programs" />
            <MenuItem router={router} title="События" href="/news" />
            <MenuItem router={router} title="Спецпроекты" href="/special" />
            <MenuItem router={router} title="О нас" href="/about" />
            {/* <MenuItem router={router} title="Энциклопедия персон"
              href="/persons" icon="book" /> */}
            <MenuItemBands />
          </div>
          <div className="flex-fill" />
          <MenuItem className="Nav-searchToggle" router={router} href="/search" icon="search" />
          <MenuLogoItem router={router} icon="menu" />
        </div>
      </div>
    </div>
    <div className="Nav--sticky-spacer" />
  </>
);

Nav.propTypes = {
  router: PropTypes.shape({
    pathname: PropTypes.string,
  }).isRequired,
};

export default withRouter(Nav);
