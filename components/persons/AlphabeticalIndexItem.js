import PropTypes from 'prop-types';

import cs from 'classnames';
import Link from 'next/link';

const AlphabeticalIndexItem = ({ letter, selected, urlGen }) => (
  <Link href={urlGen({ letter: selected ? null : letter })}>
    <a
      className={cs({
        'Nav-link': true,
        active: selected,
      })}
    >
      {letter}
    </a>
  </Link>
);

AlphabeticalIndexItem.propTypes = {
  letter: PropTypes.string.isRequired,
  selected: PropTypes.string.isRequired,
  urlGen: PropTypes.func.isRequired,
};

export default AlphabeticalIndexItem;
