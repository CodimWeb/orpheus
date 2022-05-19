import PropTypes from 'prop-types';
import Link from 'next/link';

const PersonLink = ({ id, children }) => (
  <Link
    href="/persons/id/[id]"
    as={`/persons/id/${id}`}
  >
    {children}
  </Link>
);

PersonLink.propTypes = {
  children: PropTypes.node,
  id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
};

PersonLink.defaultProps = {
  children: null,
};

export default PersonLink;
