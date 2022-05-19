import React from 'react';
import PropTypes from 'prop-types';
import { TagCloud } from 'components';

const SliderItem = ({
  anons,
  onMouseEnter,
  onMouseLeave,
  tags,
  title,
  url,
}) => (
  <div
    className="text-light"
    onMouseEnter={onMouseEnter}
    onMouseLeave={onMouseLeave}
  >
    <a
      href={url}
      target="_blank"
      className="h0"
      style={{ fontWeight: 500 }}
    >
      {title}
    </a>
    <div className="row">
      <div className="col-9">
        <div className="h4 mt-4 mb-6">
          <span className="text-sans-serif font-weight-light">{anons}</span>
        </div>
      </div>
    </div>
    <TagCloud items={tags} className="btn btn-black" />
  </div>
);

SliderItem.propTypes = {
  anons: PropTypes.string.isRequired,
  onMouseEnter: PropTypes.func.isRequired,
  onMouseLeave: PropTypes.func.isRequired,
  tags: PropTypes.array.isRequired,
  title: PropTypes.string.isRequired,
  url: PropTypes.string,
};

SliderItem.defaultProps = {
  url: null,
};

export default SliderItem;
