import PropTypes from 'prop-types';

import { Tag } from 'components';

const TagCloud = ({ items, className }) => {
  if (items) {
    return (
      <>
        {items.map((item) => (
          <Tag
            key={item.id}
            className={className}
            id={item.id}
            title={item.title}
          />
        ))}
      </>
    );
  }

  return null;
};

TagCloud.propTypes = {
  className: PropTypes.string,
  items: PropTypes.array.isRequired,
};

TagCloud.defaultProps = {
  className: null,
};

export default TagCloud;
