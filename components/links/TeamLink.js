import PropTypes from 'prop-types';
import Link from 'next/link';

const TeamLink = ({ role, alias, children }) => (
  <Link
    href="/about/team/[role]/[alias]"
    as={`/about/team/${role}/${alias}`}
  >
    {children}
  </Link>
);

TeamLink.propTypes = {
  role: PropTypes.string.isRequired,
  alias: PropTypes.string.isRequired,
  children: PropTypes.node,
};

TeamLink.defaultProps = {
  children: null,
};

export default TeamLink;
