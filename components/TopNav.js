import React from 'react';
// import PropTypes from 'prop-types';
import Link from 'next/link';

import { Player } from 'components/player';

const TopNav = () => (
  <>
    <div className="Nav Nav--main py-3">
      <div className="container">
        <div className="row">
          <div className="col-2">
            <Link href="/">
              <a className="Nav-logo Nav-logo--big">
                <img src="/static/logo-min@3x.png" alt="Main logo" />
              </a>
            </Link>
          </div>
          <div className="col-1">
            <Link href="/schedule">
              <a className="Nav-link Nav-now">Сейчас <br />в&nbsp;эфире</a>
            </Link>
          </div>
          <div className="col-7">
            <Player showInfo className="Player-main" />
          </div>
          {/* <div className="col">
          <Link href="#">
            <a className="Nav-tracksBtn">
              <img src="/static/svg/list.svg" alt="Menu" />
            </a>
          </Link>
        </div> */}
          <div className="flex-fill" />
          <Link href="/search">
            <a className="Nav-link d-flex">
              <img src="/static/svg/search.svg" alt="Search" />
            </a>
          </Link>
        </div>
      </div>
    </div>

  </>
);

TopNav.propTypes = {
};

TopNav.defaultProps = {
};

export default TopNav;
