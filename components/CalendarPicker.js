import { useCallback, useState } from 'react';
import PropTypes from 'prop-types';
import InlineSVG from 'svg-inline-react';
import moment from 'moment';
import { SingleDatePicker } from 'react-dates';
import 'react-dates/initialize';
import 'react-dates/lib/css/_datepicker.css';

import { onEnterOrSpacePress } from 'services/keyboard';

// react-dates locale
moment.locale('ru');

const CalendarPicker = ({
  className,
  select,
}) => {
  const [isPickerShown, setPickerShown] = useState(false);
  const togglePicker = useCallback(() => {
    setPickerShown((v) => !v);
  }, []);
  return (
    <a className={className}>
      <InlineSVG src={require('../static/svg/news.svg')} />
      <div
        className={`DatePicker-label${isPickerShown ? ' active' : ''}`}
        onClick={togglePicker}
        onKeyPress={onEnterOrSpacePress(togglePicker)}
        role="button"
        tabIndex="-1"
      >
        Календарь
        <SingleDatePicker
          hideKeyboardShortcutsPanel
          date={moment(select)}
          focused={isPickerShown}
          onFocusChange={() => {}}
          onDateChange={() => {
            // TODO: set proper handler
          }}
        />
      </div>
    </a>
  );
};

CalendarPicker.propTypes = {
  className: PropTypes.string,
  select: PropTypes.string.isRequired,
};

CalendarPicker.defaultProps = {
  className: null,
};

export default CalendarPicker;
