import PropTypes from 'prop-types';

import { dateFormat } from 'components';

const Track = ({ author, details, time }) => (
  <>
    <hr className="d-block d-md-none pb-5" />
    <div className="row align-items-start mb-7">
      <div className="col-2">
        <div className="Schedule-time Schedule-time--inPlaylist h4 font-weight-bold text-sans-serif pt-0">
          {time && dateFormat(time, 'p')}
        </div>
      </div>
      <div className="col-6">
        <p className="font-weight-bolder pt-1">
          {author}
        </p>
        {details && details.map((row, i) => (
          <p key={i} className="mt-1">{row}</p>
        ))}
      </div>
    </div>
  </>
);

Track.propTypes = {
  author: PropTypes.string,
  details: PropTypes.arrayOf(PropTypes.string),
  time: PropTypes.string,
};

Track.defaultProps = {
  author: null,
  details: null,
  time: null,
};

export default Track;
