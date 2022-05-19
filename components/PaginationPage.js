import PropTypes from 'prop-types';
import Link from 'next/link';

const PaginationPage = ({ active, num, route }) => {
  if (active) {
    return (
      <div
        className="page-item active px-2"
        style={{

        }}
      >
        <b>{num}</b>
      </div>
    );
  }

  const url = {
    pathname: route.pathname,
    query: {
      ...route.query,
      page: num,
    },
  };
  return (
    <div className="page-item px-2">
      <Link href={url}>
        <a className="page-link">{num}</a>
      </Link>
    </div>
  );
};

PaginationPage.propTypes = {
  active: PropTypes.bool.isRequired,
  num: PropTypes.number.isRequired,
  route: PropTypes.shape({
    pathname: PropTypes.string,
    query: PropTypes.object,
  }).isRequired,
};

export default PaginationPage;
