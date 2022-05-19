import PropTypes from 'prop-types';

import { dateFormat, TagCloud } from 'components';
import { NewsLink } from 'components/links';

// Regular size and without image
const TextCard = ({
  alias,
  anons,
  datetimePublish,
  id,
  tags,
  title,
  type,
}) => (
  <div className="col-4">
    <article className="Card mb-9">
      <div className="Card-body">
        <small className="text-muted">{dateFormat(datetimePublish)}</small>
        <h3 className="h3 pt-1 pb-2">
          <NewsLink
            alias={alias}
            id={id}
            type={type}
          >
            <a>{title}</a>
          </NewsLink>
        </h3>
        <p>{anons}</p>
        <div className="pt-3">
          <TagCloud items={tags} />
        </div>
      </div>
    </article>
  </div>
);

TextCard.propTypes = {
  alias: PropTypes.string.isRequired,
  anons: PropTypes.string.isRequired,
  datetimePublish: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  tags: PropTypes.array.isRequired,
  title: PropTypes.string.isRequired,
  type: PropTypes.object.isRequired,
};

export default TextCard;
