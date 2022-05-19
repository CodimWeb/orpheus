import { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import addDays from 'date-fns/addDays';
import cs from 'classnames';
import InlineSVG from 'svg-inline-react';
import parseISO from 'date-fns/parseISO';

import { HorizontalCalendarItem } from 'components';
import { dateFormat, dateFormatCollection } from 'components/dateFormat';
import { onEnterOrSpacePress } from 'services/keyboard';

const HorizontalCalendar = ({
  className,
  endIso,
  onSelectIso,
  selectIso,
  startIso,
}) => {
  const startDate = parseISO(startIso);
  const endDate = parseISO(endIso);

  const tapeRef = useRef(null);
  const [sliderOffsetLeft, setSliderOffsetLeft] = useState(null);

  const [selectedDateIso, selectDateIso] = useState(selectIso);
  const [leftBorder, setLeftBorder] = useState(true);
  const [rightBorder, setRightBorder] = useState(false);

  useEffect(() => {
    if (tapeRef.current) {
      const selected = tapeRef.current.querySelector('[data-active="true"]');
      if (selected) {
        tapeRef.current.scrollLeft = selected.offsetLeft;
        setSliderOffsetLeft(selected.getBoundingClientRect().x
          - tapeRef.current.getBoundingClientRect().x);
      } else {
        setSliderOffsetLeft(null);
      }
    }
  }, [tapeRef]);

  useEffect(() => {
    setLeftBorder(selectedDateIso === startIso);
    setRightBorder(selectedDateIso === endIso);
  }, [endIso, selectedDateIso, startIso]);

  const goTo = (dateIso) => {
    if (!tapeRef) return;

    const node = tapeRef.current.querySelector(`[data-date="${dateIso}"]`);
    if (node) {
      selectDateIso(dateIso);
      tapeRef.current.scrollLeft = node.offsetLeft;
      setSliderOffsetLeft(node.getBoundingClientRect().x
        - tapeRef.current.getBoundingClientRect().x);
    } else {
      setSliderOffsetLeft(null);
    }

    onSelectIso(dateIso);
  };

  const goNext = (direction) => {
    const nextDate = addDays(parseISO(selectedDateIso), direction);
    const nextIso = dateFormat(nextDate, dateFormatCollection.iso);
    goTo(nextIso);
  };

  const rangeDays = [];
  let date = addDays(startDate, 0);
  while (date <= endDate) {
    const dateIso = dateFormat(date, dateFormatCollection.iso);
    rangeDays.push(
      <HorizontalCalendarItem
        key={dateIso}
        active={dateIso === selectIso}
        date={date}
        onClick={() => goTo(dateIso)}
      />,
    );
    date = addDays(date, 1);
  }

  return (
    <div className={cs('HCalendar', { leftBorder, rightBorder }, className)}>
      <div className="HCalendar-tape" ref={tapeRef}>
        {rangeDays}
      </div>

      {setSliderOffsetLeft !== null && (
        <div
          className="HCalendar-slider bg-gray-dark"
          style={{ left: `${sliderOffsetLeft}px` }}
        />
      )}

      {leftBorder || (
      <div
        className="HCalendar-controlLeft"
        onClick={() => goNext(-1)}
        onKeyPress={onEnterOrSpacePress(() => goNext(-1))}
        role="button"
        tabIndex="-1"
      >
        <InlineSVG src={require('../static/svg/arrow-left.svg')} />
      </div>
      )}

      {rightBorder || (
        <div
          className="HCalendar-controlRight"
          onClick={() => goNext(+1)}
          onKeyPress={onEnterOrSpacePress(() => goNext(+1))}
          role="button"
          tabIndex="-1"
        >
          <InlineSVG src={require('../static/svg/arrow-right.svg')} />
        </div>
      )}
    </div>
  );
};

HorizontalCalendar.propTypes = {
  className: PropTypes.string,
  endIso: PropTypes.string.isRequired,
  onSelectIso: PropTypes.func.isRequired,
  selectIso: PropTypes.string,
  startIso: PropTypes.string.isRequired,
};

HorizontalCalendar.defaultProps = {
  className: 'pt-7 pb-6',
  selectIso: null,
};

export default HorizontalCalendar;
