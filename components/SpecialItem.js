import PropTypes from 'prop-types';

import { Image } from 'components';

const SpecialItem = ({
  anons,
  cover,
  link,
  title,
}) => (
  <article className="col-6 mt-6 mb-10">
    {cover && (
      <Image
        className="img-cover mb-5"
        title={title}
        {...cover}
      />
    )}
    <h2 className="mb-5">{title}</h2>
    <p className="pb-4">{anons}</p>
    <p><a href={link}>{link}</a></p>
  </article>
);

SpecialItem.propTypes = {
  anons: PropTypes.string.isRequired,
  cover: PropTypes.object,
  link: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

SpecialItem.defaultProps = {
  cover: null,
};

export default SpecialItem;
