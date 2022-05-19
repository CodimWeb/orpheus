import PropTypes from 'prop-types';

import { Episode, RestCells } from 'components';

const EpisodesList = ({ items }) => (
  <div className="row align-items-start justify-content-between">
    {items.map((item) => (
      <div key={item.id} className="col-4">
        <Episode {...item} />
      </div>
    ))}
    <RestCells size="3" className="col-4" />
  </div>
);

EpisodesList.propTypes = {
  items: PropTypes.array.isRequired,
};

export default EpisodesList;
