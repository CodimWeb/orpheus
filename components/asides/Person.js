import PropTypes from 'prop-types';

import { Image } from 'components';
import { PersonLink } from 'components/links';

const Person = ({
  announce,
  id,
  image,
  lifeYears,
  title,
}) => {
  if (!id) {
    return null;
  }

  return (
    <article className="Card mb-9">
      <div className="Card-img mb-3 is-square">
        <PersonLink id={id}>
          <a>
            <Image
              className="img-cover"
              width={260}
              height={260}
              title={title}
              {...image}
            />
          </a>
        </PersonLink>
      </div>
      <div className="Card-body">
        <h3 className="h3 pt-1 pb-2">
          <PersonLink id={id}>
            <a>{title}</a>
          </PersonLink>
        </h3>
        <small className="h4 my-1 text-muted">{lifeYears}</small>
        <p className="my-1">{announce}</p>
      </div>
    </article>
  );
};

Person.propTypes = {
  announce: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  image: PropTypes.object.isRequired,
  lifeYears: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default Person;
