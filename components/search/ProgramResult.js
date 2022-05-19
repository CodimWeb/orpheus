import PropTypes from 'prop-types';

import { Image } from 'components';
import { ProgramLink } from 'components/links';
import { ProgramTimes } from 'components/programs';

const ProgramResult = ({
  alias,
  anons,
  cover,
  times,
  title,
}) => (
  <li className="media my-5">
    <ProgramLink alias={alias}>
      <a className="mr-3" style={{ width: 105 }}>
        <Image
          className="img-cover"
          width={105}
          height={75}
          title={title}
          {...cover}
        />
      </a>
    </ProgramLink>
    <div className="media-body">
      <ProgramLink alias={alias}>
        <a className="h5">{title}</a>
      </ProgramLink>
      &nbsp;
      <em className="small text-muted">Программа</em>
      {anons && <p className="my-1">{anons}</p> }
      <ProgramTimes times={times} className="small text-muted mt-1" />
    </div>
  </li>
);

ProgramResult.propTypes = {
  alias: PropTypes.string.isRequired,
  anons: PropTypes.string.isRequired,
  cover: PropTypes.object,
  times: PropTypes.array.isRequired,
  title: PropTypes.string.isRequired,
};

ProgramResult.defaultProps = {
  cover: {},
};

export default ProgramResult;
