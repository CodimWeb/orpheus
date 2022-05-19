import PropTypes from 'prop-types';
import cs from 'classnames';

import { RestCells } from 'components';
import { PersonCard } from 'components/persons';

const PersonsList = ({ items, className }) => (
  <div className={cs('row', 'align-items-start', 'justify-content-between', className)}>
    {items && items.map(({
      announce,
      id,
      image,
      lifeYears,
      title,
    }) => (
      <div className="col-3" key={id}>
        <PersonCard
          announce={announce}
          id={id}
          image={image}
          lifeYears={lifeYears}
          title={title}
        />
      </div>
    ))}
    <RestCells />
  </div>
);

PersonsList.propTypes = {
  className: PropTypes.string,
  items: PropTypes.array.isRequired,
};

PersonsList.defaultProps = {
  className: null,
};

export default PersonsList;
