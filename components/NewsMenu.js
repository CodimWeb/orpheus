import PropTypes from 'prop-types';
import cs from 'classnames';
import Link from 'next/link';
import { useRouter } from 'next/router';

import { /* CalendarPicker, */ NewsItem } from 'components';

const AllNewsLabel = 'Все события';

const NewsMenu = ({ items }) => {
  const router = useRouter();
  const { type = null } = router.query;
  return (
    <div className="row row-reset-sm no-gutters align-items-center justify-content-between mb-9">
      <ul className="Nav Nav-dark Nav--sm-vertical" style={{ marginBottom: 0 }}>
        <li className={cs('Nav-link', 'h4', { active: !type })}>
          {!type ? AllNewsLabel : (
            <Link href="/news">
              <a>{AllNewsLabel}</a>
            </Link>
          )}
        </li>
        {items.map((item) => (
          <NewsItem
            key={item.id}
            active={item.alias === type}
            alias={item.alias}
            title={item.title}
          />
        ))}
      </ul>
      {/* <CalendarPicker className="Nav-link h4 d-flex" /> */}
    </div>
  );
};

NewsMenu.propTypes = {
  items: PropTypes.array.isRequired,
};

export default NewsMenu;
