import PropTypes from 'prop-types';

import { RestCells } from 'components';
import { FullCard, MainCard, TextCard } from 'components/news';

const NewsList = ({
  back,
  front,
  items,
  main,
}) => {
  if ((!items || !items.length) && !main) {
    return null;
  }

  return (
    <>
      <div className="container">
        <div className="row align-items-start justify-content-between">
          {items.slice(0, front).map((item) => (
            <FullCard key={item.id} {...item} />
          ))}
          <RestCells size="3" className="col-4" />
        </div>
      </div>

      {main
        && (
        <div className="mt-10">
          <MainCard {...main} />
        </div>
        )}

      <div className="pt-12 pb-2">
        <div className="container">
          <div className="row align-items-start justify-content-between">

            {items.slice(front, front + back).map((item) => (
              <FullCard key={item.id} {...item} />
            ))}

            {items.slice(front + back).map((item) => (
              <TextCard key={item.id} {...item} />
            ))}

            <RestCells size="3" className="col-4" />

          </div>
        </div>
      </div>
    </>
  );
};

NewsList.propTypes = {
  back: PropTypes.number,
  front: PropTypes.number,
  items: PropTypes.array.isRequired,
  main: PropTypes.object,
};

NewsList.defaultProps = {
  back: 0,
  front: 0,
  main: null,
};

export default NewsList;
