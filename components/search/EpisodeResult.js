import PropTypes from 'prop-types';

import { dateFormat, Image, TagCloud } from 'components';
import { EpisodeLink } from 'components/links';

const EpisodeResult = ({
  alias,
  anons,
  broadcasts,
  cover,
  id,
  program,
  tags,
  title,
}) => (
  <li className="media my-5">
    <EpisodeLink
      alias={alias}
      broadcasts={broadcasts}
      id={id}
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
    </EpisodeLink>
    <div className="media-body">
      <EpisodeLink
        alias={alias}
        broadcasts={broadcasts}
        id={id}
      >
        <a className="h5">{title}</a>
      </EpisodeLink>
      &nbsp;
      <em className="small text-muted">Выпуск</em>
      {anons && <p className="my-1">{anons}</p> }
      <p className="my-1">{program.title}</p>
      <ul className="small text-muted mt-1">
        {broadcasts.map((date) => (
          <li key={date}>{dateFormat(date)}</li>
        ))}
      </ul>
      <TagCloud items={tags} />
    </div>
  </li>
);

EpisodeResult.propTypes = {
  alias: PropTypes.string.isRequired,
  anons: PropTypes.string,
  broadcasts: PropTypes.array,
  cover: PropTypes.object,
  id: PropTypes.number.isRequired,
  program: PropTypes.object.isRequired,
  tags: PropTypes.array,
  title: PropTypes.string.isRequired,
};

EpisodeResult.defaultProps = {
  cover: {},
  anons: null,
  tags: [],
  broadcasts: [],
};

export default EpisodeResult;
