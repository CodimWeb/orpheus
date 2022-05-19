import PropTypes from 'prop-types';

import { NewsLink } from 'components/links';
import { Image, dateFormat, TagCloud } from 'components';

// Regular size and with image
const FullCard = ({
  alias,
  anons,
  cover,
  datetimePublish,
  id,
  tags,
  title,
  type,
}) => (
  <div className="col-4">
    <article className="Card mb-9">
      <div className="Card-img mb-3">
        <NewsLink
          alias={alias}
          id={id}
          type={type}
        >
          <a>
            <Image
              className="img-cover"
              width={350}
              height={250}
              title={title}
              {...cover}
            />
          </a>
        </NewsLink>
      </div>
      <div className="Card-body">
        <div className="small text-muted">
          {dateFormat(datetimePublish)}
        </div>
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

FullCard.propTypes = {
  alias: PropTypes.string.isRequired,
  anons: PropTypes.string.isRequired,
  cover: PropTypes.object,
  datetimePublish: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  tags: PropTypes.array.isRequired,
  title: PropTypes.string.isRequired,
  type: PropTypes.object.isRequired,
};

FullCard.defaultProps = {
  cover: null,
};

export default FullCard;
