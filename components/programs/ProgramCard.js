import PropTypes from 'prop-types';

import { Image } from 'components';
import { ProgramLink } from 'components/links';
import { ProgramTimes } from 'components/programs';

export const ProgramCard = ({
  alias,
  anons,
  cover,
  times,
  title,
}) => (
  <article className="Card mb-9">
    <div className="Card-img mb-3 is-square">
      <ProgramLink alias={alias}>
        <a>
          <Image
            className="img-cover"
            width={260}
            height={260}
            title={title}
            {...cover}
          />
        </a>
      </ProgramLink>
    </div>
    <div className="Card-body">
      <h3 className="h3 pt-1 pb-2">
        <ProgramLink alias={alias}>
          <a>{title}</a>
        </ProgramLink>
      </h3>
      <p>{anons}</p>
      <div className="font-weight-bolder mt-2">
        <ProgramTimes times={times} />
      </div>
    </div>
  </article>
);

ProgramCard.propTypes = {
  alias: PropTypes.string.isRequired,
  anons: PropTypes.string,
  cover: PropTypes.object,
  times: PropTypes.array.isRequired,
  title: PropTypes.string.isRequired,
};

ProgramCard.defaultProps = {
  anons: null,
  cover: null,
};

export default ProgramCard;
