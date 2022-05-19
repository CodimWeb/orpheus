import PropTypes from 'prop-types';

import { dateFormat, Image, TagCloud } from 'components';
import { EpisodeLink } from 'components/links';

const Episode = ({
  alias,
  anons,
  broadcasts,
  cover,
  id,
  tags,
  title,
}) => (
  <article className="Card mb-9">
    <div className="Card-img mb-3">
      <EpisodeLink
        alias={alias}
        broadcasts={broadcasts}
        id={id}
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
      </EpisodeLink>
    </div>
    <div className="small text-muted py-2">
      {broadcasts.map((date) => <div key={date}>{dateFormat(date)}</div>)}
    </div>
    <h3 className="h3 pt-1 pb-2">
      <EpisodeLink
        alias={alias}
        broadcasts={broadcasts}
        id={id}
      >
        <a>{title}</a>
      </EpisodeLink>
    </h3>
    <p>{anons}</p>
    <TagCloud items={tags} />
  </article>
);

Episode.propTypes = {
  alias: PropTypes.string.isRequired,
  anons: PropTypes.string.isRequired,
  broadcasts: PropTypes.arrayOf(PropTypes.string).isRequired,
  cover: PropTypes.object.isRequired,
  id: PropTypes.number.isRequired,
  tags: PropTypes.array.isRequired,
  title: PropTypes.string.isRequired,
};

export default Episode;
