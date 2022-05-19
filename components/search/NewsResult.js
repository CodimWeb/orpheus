import PropTypes from 'prop-types';

import { dateFormat, Image, TagCloud } from 'components';
import { NewsLink } from 'components/links';

const NewsResult = ({
  alias,
  anons,
  cover,
  datetimePublish,
  id,
  tags,
  title,
  type,
}) => (
  <li className="media my-5">
    <NewsLink
      alias={alias}
      id={id}
      type={type}
    >
      <a className="mr-3" style={{ width: 105 }}>
        <Image
          className="img-cover"
          width={105}
          height={75}
          title={title}
          {...cover}
        />
      </a>
    </NewsLink>
    <div className="media-body">
      <NewsLink
        alias={alias}
        id={id}
        type={type}
      >
        <a className="h5">{title}</a>
      </NewsLink>
      &nbsp;
      <em className="small text-muted">Событие</em>
      {anons && <p className="my-1">{anons}</p> }
      {datetimePublish && <p className="small text-muted my-1">{dateFormat(datetimePublish)}</p> }
      <TagCloud items={tags} />
    </div>
  </li>
);

NewsResult.propTypes = {
  alias: PropTypes.string.isRequired,
  anons: PropTypes.string,
  cover: PropTypes.object,
  datetimePublish: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  tags: PropTypes.array,
  title: PropTypes.string.isRequired,
  type: PropTypes.object.isRequired,
};

NewsResult.defaultProps = {
  cover: {},
  tags: [],
  anons: null,
};

export default NewsResult;
