import PropTypes from 'prop-types';
import Collapsible from 'react-collapsible';

import {
  Playlist,
  TimeTableRow,
} from 'components';

const TimeTable = ({ blocks }) => (
  <>
    {blocks.map((b) => (
      <Collapsible
        key={b.startsAt}
        trigger={(
          <TimeTableRow time={`${b.startsAt} – ${b.endsAt}`} title={b.title}>
            {b.description}
          </TimeTableRow>
        )}
      >
        <Playlist items={b.items} />
      </Collapsible>
    ))}
  </>
);

TimeTable.propTypes = {
  blocks: PropTypes.array.isRequired,
};

export default TimeTable;
