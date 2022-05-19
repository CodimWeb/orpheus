import PropTypes from 'prop-types';
import Link from 'next/link';

const ProgramLink = ({ alias, children }) => (
  <Link
    href="/programs/[alias]"
    as={`/programs/${alias}`}
  >
    {children}
  </Link>
);

ProgramLink.propTypes = {
  alias: PropTypes.string.isRequired,
  children: PropTypes.node,
};

ProgramLink.defaultProps = {
  children: null,
};

export default ProgramLink;
