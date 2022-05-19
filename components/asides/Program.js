import PropTypes from 'prop-types';

import { Image } from 'components';
import { ProgramTimes } from 'components/programs';
import { ProgramLink } from 'components/links';

const Program = ({
  alias,
  anons,
  cover,
  id,
  times,
  title,
}) => {
  if (!id) {
    return null;
  }

  return (
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
        {anons && <p>{anons}</p> }
        {times && (
          <div className="font-weight-bolder mt-2">
            <ProgramTimes times={times} />
          </div>
        )}
      </div>
    </article>
  );
};

Program.propTypes = {
  alias: PropTypes.string.isRequired,
  anons: PropTypes.string.isRequired,
  cover: PropTypes.object.isRequired,
  id: PropTypes.number.isRequired,
  times: PropTypes.array.isRequired,
  title: PropTypes.string.isRequired,
};

export default Program;
