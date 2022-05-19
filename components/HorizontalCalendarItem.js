import PropTypes from 'prop-types';

import { dateFormat, dateFormatCollection } from 'components/dateFormat';
import { onEnterOrSpacePress } from 'services/keyboard';

const HorizontalCalendarItem = ({ active, date, onClick }) => (
  <div
    className={`HCalendar-item${active ? ' active' : ''}`}
    data-active={active}
    data-date={dateFormat(date, dateFormatCollection.iso)}
    onClick={onClick}
    role="button"
    tabIndex="-1"
    onKeyPress={onEnterOrSpacePress(onClick)}
  >
    <div className="HCalendar-date">{dateFormat(date, dateFormatCollection.short)}</div>
    <div className="HCalendar-weekday">{dateFormat(date, dateFormatCollection.weekday)}</div>
  </div>
);

HorizontalCalendarItem.propTypes = {
  active: PropTypes.bool.isRequired,
  date: PropTypes.instanceOf(Date).isRequired,
  onClick: PropTypes.func.isRequired,
};

export default HorizontalCalendarItem;
