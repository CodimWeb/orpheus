import PropTypes from 'prop-types';
import Link from 'next/link';

const EpisodeLink = ({
  alias,
  broadcasts,
  children,
  id,
}) => {
  const date = broadcasts.slice(0, 1);
  const episode = alias ? `${id}-${alias}` : id;
  return (
    <Link
      href="/programs/[alias]/[date]/[episode]"
      as={`/programs/${alias}/${date}/${episode}`}
    >{children}
    </Link>
  );
};

EpisodeLink.propTypes = {
  alias: PropTypes.string.isRequired,
  broadcasts: PropTypes.arrayOf(PropTypes.string).isRequired,
  children: PropTypes.node,
  id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
};

EpisodeLink.defaultProps = {
  children: null,
};

export default EpisodeLink;
