import PropTypes from 'prop-types';
import Link from 'next/link';

const Tag = ({ id, title, className }) => (
  <Link href={`/search?tag=${id}`}>
    <a className={className || 'btn btn-sm btn-outline-primary'}>{title}</a>
  </Link>
);

Tag.propTypes = {
  className: PropTypes.string,
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
};

Tag.defaultProps = {
  className: null,
};

export default Tag;
