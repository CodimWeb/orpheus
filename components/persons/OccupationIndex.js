import PropTypes from 'prop-types';
import cs from 'classnames';

import { OccupationIndexItem } from 'components/persons';

const OccupationIndex = ({
  className,
  list,
  selected,
  urlGen,
}) => (
  <div className={cs('Nav', 'Nav-dark', className)}>
    {list.map((item) => (
      <OccupationIndexItem
        key={item.alias}
        item={item}
        selected={item.alias === selected}
        urlGen={urlGen}
      />
    ))}
  </div>
);

OccupationIndex.propTypes = {
  className: PropTypes.string,
  list: PropTypes.arrayOf(PropTypes.shape({
    alias: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
  })).isRequired,
  selected: PropTypes.string.isRequired,
  urlGen: PropTypes.func.isRequired,
};

OccupationIndex.defaultProps = {
  className: null,
};

export default OccupationIndex;
