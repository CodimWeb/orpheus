import PropTypes from 'prop-types';

import { Image } from 'components';
import { TeamLink } from 'components/links';

const TeamResult = ({
  alias,
  anons,
  role,
  title,
  cover,
}) => (
  <li className="media my-5">
    {alias ? (
      <TeamLink role={role.alias} alias={alias}>
        <a className="mr-3" style={{ width: 105 }}>
          <Image
            className="img-cover"
            width={105}
            height={75}
            title={title}
            {...cover}
          />
        </a>
      </TeamLink>
    ) : (
      <div className="mr-3" style={{ width: 105 }}>
        <Image
          className="img-cover"
          width={105}
          height={75}
          title={title}
          {...cover}
        />
      </div>
    )}
    <div className="media-body">
      {alias ? (
        <TeamLink role={role.alias} alias={alias}>
          <a className="h5">{title}</a>
        </TeamLink>
      ) : (
        <span className="h5">{title}</span>
      )}
      &nbsp;
      <em className="small text-muted">Сотрудник</em>
      {anons && <p className="my-1">{anons}</p> }
    </div>
  </li>
);

TeamResult.propTypes = {
  alias: PropTypes.string,
  anons: PropTypes.string,
  role: PropTypes.object.isRequired,
  title: PropTypes.string.isRequired,
  cover: PropTypes.object,
};

TeamResult.defaultProps = {
  alias: null,
  anons: null,
  cover: {},
};

export default TeamResult;
