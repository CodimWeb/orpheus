import PropTypes from 'prop-types';
import cs from 'classnames';

import { AlphabeticalIndexItem } from 'components/persons';

const AlphabeticalIndex = ({
  alphabet,
  className,
  selected,
  urlGen,
}) => (
  <div className={cs('Nav', 'Nav-dark', className)}>
    {alphabet.map((letter) => (
      <AlphabeticalIndexItem
        key={letter}
        letter={letter}
        selected={letter === selected}
        urlGen={urlGen}
      />
    ))}
  </div>
);

AlphabeticalIndex.propTypes = {
  alphabet: PropTypes.arrayOf(PropTypes.string).isRequired,
  className: PropTypes.string,
  selected: PropTypes.string.isRequired,
  urlGen: PropTypes.func.isRequired,
};

AlphabeticalIndex.defaultProps = {
  className: null,
};

export default AlphabeticalIndex;
