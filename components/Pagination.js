import PropTypes from 'prop-types';

import { PaginationPage } from 'components';

const Pagination = ({ count, page, route }) => {
  const pages = [];

  if (count < 2) {
    return null;
  }

  for (let i = 1; i <= count; i += 1) {
    pages.push(<PaginationPage key={i} num={i} route={route} active={page === i} />);
  }

  return (
    <nav className="row align-items-center">
      <b className="pr-3 font-weight-normal">Страница</b>
      <div className="row">
        {pages}
      </div>
    </nav>
  );
};

Pagination.propTypes = {
  count: PropTypes.number.isRequired,
  page: PropTypes.number.isRequired,
  route: PropTypes.object.isRequired,
};

export default Pagination;
