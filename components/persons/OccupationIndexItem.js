import PropTypes from 'prop-types';

import cs from 'classnames';
import Link from 'next/link';

const OccupationIndexItem = ({
  alias,
  selected,
  title,
  urlGen,
}) => (
  <Link href={urlGen({ occupation: selected ? null : alias })}>
    <a
      className={cs({
        'Nav-link': true,
        active: selected,
      })}
    >
      {title}
    </a>
  </Link>
);

OccupationIndexItem.propTypes = {
  alias: PropTypes.string.isRequired,
  selected: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  urlGen: PropTypes.func.isRequired,
};

export default OccupationIndexItem;
