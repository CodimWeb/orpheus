import PropTypes from 'prop-types';

// import CalendarPicker from './CalendarPicker';
import HorizontalCalendar from './HorizontalCalendar';

const DateControl = ({
  endIso,
  onSelectIso,
  selectIso,
  startIso,
}) => (
  <div className="container">
    <div className="row">
      <div className="col-11">
        <HorizontalCalendar
          endIso={endIso}
          onSelectIso={onSelectIso}
          selectIso={selectIso}
          startIso={startIso}
        />
      </div>
      <div className="flex-fill" />
      <div className="col">
        <div className="Nav d-flex align-items-center">
          {/* <CalendarPicker
            className="Nav-link h3 d-flex"
            endIso={endIso}
            onSelectIso={onSelectIso}
            selectIso={selectIso}
            startIso={startIso}
          /> */}
        </div>
      </div>
    </div>
  </div>
);

DateControl.propTypes = {
  endIso: PropTypes.string.isRequired,
  onSelectIso: PropTypes.func.isRequired,
  selectIso: PropTypes.string,
  startIso: PropTypes.string.isRequired,
};

DateControl.defaultProps = {
  selectIso: null,
};

export default DateControl;
