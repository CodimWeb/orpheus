import PropTypes from 'prop-types';
import Link from 'next/link';

const NewsLink = ({
  alias,
  children,
  id,
  type,
}) => (
  <Link
    href="/news/[type]/[id]/[alias]"
    as={`/news/${type.alias}/${id}/${alias}`}
  >
    {children}
  </Link>
);

NewsLink.propTypes = {
  alias: PropTypes.string.isRequired,
  children: PropTypes.node,
  id: PropTypes.number.isRequired,
  type: PropTypes.shape({
    alias: PropTypes.string,
  }).isRequired,
};

NewsLink.defaultProps = {
  children: null,
};

export default NewsLink;
