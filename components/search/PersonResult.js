import PropTypes from 'prop-types';

import { Image } from 'components';
import { PersonLink } from 'components/links';

const PersonResult = ({
  announce,
  image,
  id,
  lifeYears,
  title,
}) => (
  <li className="media my-5">
    <PersonLink id={id}>
      <a className="mr-3" style={{ width: 105 }}>
        <Image
          className="img-cover"
          width={105}
          height={75}
          title={title}
          {...image}
        />
      </a>
    </PersonLink>
    <div className="media-body">
      <PersonLink id={id}>
        <a className="h5">{title}</a>
      </PersonLink>
      &nbsp;
      <em className="small text-muted">Персона</em>
      {announce && <p className="my-1">{announce}</p> }
      {lifeYears && <p className="small text-muted mt-1">{lifeYears}</p> }
    </div>
  </li>
);

PersonResult.propTypes = {
  announce: PropTypes.string.isRequired,
  image: PropTypes.object,
  id: PropTypes.number.isRequired,
  lifeYears: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

PersonResult.defaultProps = {
  image: {},
};

export default PersonResult;
