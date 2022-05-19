import PropTypes from 'prop-types';
import Link from 'next/link';

const BreadcrumbItem = ({ as, href, title }) => (
  <Link href={href} as={as}>
    <a className="Nav-link h4">{title}</a>
  </Link>
);

BreadcrumbItem.propTypes = {
  as: PropTypes.string,
  href: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

BreadcrumbItem.defaultProps = {
  as: null,
};

export default BreadcrumbItem;
