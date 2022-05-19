import PropTypes from 'prop-types';

import { Image } from 'components';
import { TeamLink } from 'components/links';

const Employee = ({
  alias,
  anons,
  cover,
  role,
  title,
}) => (
  <article className="Card mb-9">
    <div className="Card-img mb-3 is-square">
      {alias ? (
        <TeamLink role={role} alias={alias}>
          <a>
            <Image
              className="img-cover"
              height={260}
              width={260}
              title={title}
              {...cover}
            />
          </a>
        </TeamLink>
      ) : (
        <Image
          className="img-cover"
          height={260}
          width={260}
          title={title}
          {...cover}
        />
      )}
    </div>
    <div className="Card-body">
      <h3 className="h3 pt-1 pb-2">
        {alias ? (
          <TeamLink role={role} alias={alias}>
            <a>{title}</a>
          </TeamLink>
        ) : title}
      </h3>
      <p>{anons}</p>
    </div>
  </article>
);

Employee.propTypes = {
  alias: PropTypes.string,
  anons: PropTypes.string,
  cover: PropTypes.object,
  role: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

Employee.defaultProps = {
  alias: null,
  anons: null,
  cover: null,
};

export default Employee;
