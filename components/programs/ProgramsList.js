import PropTypes from 'prop-types';

import { RestCells } from 'components';
import { ProgramCard } from 'components/programs';

const ProgramsList = ({ items }) => (
  <div className="row align-items-start justify-content-between">
    {items.map((item) => (
      <div key={item.id} className="col-3">
        <ProgramCard key={item.id} {...item} />
      </div>
    ))}
    <RestCells />
  </div>
);

ProgramsList.propTypes = {
  items: PropTypes.array.isRequired,
};

export default ProgramsList;
