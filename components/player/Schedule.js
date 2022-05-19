import PropTypes from 'prop-types';

import { dateFormat } from 'components';

const Schedule = ({ items }) => (
  <div className="LiveSchedule text-light pt-4">
    <div className="LiveSchedule-pointer" />
    <div className="LiveSchedule-row row align-items-start">
      {items.map((song) => (
        <div key={song.id} style={{ width: 300, paddingLeft: 10, paddingRight: 10 }}>
          <p>{dateFormat(song.time, 'HH:mm')}</p>
          <p>{song.author}</p>
          {song.details && song.details.map((text, i) => <p key={i} className="text-muted">{text}</p>)}
        </div>
      ))}
    </div>
  </div>
);

Schedule.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape({
    author: PropTypes.string,
    date: PropTypes.string,
    details: PropTypes.arrayOf(PropTypes.string).isRequired,
    id: PropTypes.number,
  })).isRequired,
};

export default Schedule;
