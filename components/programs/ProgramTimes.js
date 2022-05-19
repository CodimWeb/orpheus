import PropTypes from 'prop-types';

const dayNames = {
  mon: ['понедельникам', 'понедельников'],
  tue: ['вторникам', 'вторников'],
  wed: ['средам', 'сред'],
  thu: ['четвергам', 'четвергов'],
  fri: ['пятницам', 'пятниц'],
  sat: ['субботам', 'суббот'],
  sun: ['воскресениям', 'воскресений'],
};

const ProgramTimes = ({ className, times }) => (
  <ul className={className}>
    {times.map((t) => {
      const weekday = t.mon && t.tue && t.wed && t.thu && t.fri;
      const weekend = t.sat && t.sun;

      let daysLabel;
      if (weekday && weekend) {
        daysLabel = 'Ежедневно';
      } else if (weekday && !t.sat && !t.sun) {
        daysLabel = 'По будням';
      } else if (weekend && !t.mon && !t.tue && !t.wed && !t.thu && !t.fri) {
        daysLabel = 'По выходным';
      } else {
        const days = [];
        const noDays = [];

        Object.keys(dayNames).forEach((day) => {
          if (t[day]) {
            days.push(dayNames[day][0]);
          } else {
            noDays.push(dayNames[day][1]);
          }
        });

        switch (days.length) {
          case 6:
            daysLabel = `Ежедневно кроме ${noDays.pop()}`;
            break;
          case 5:
            daysLabel = `Ежедневно кроме ${noDays.pop()} и ${noDays.pop()}`;
            break;
          case 4:
          case 3:
          case 2:
            if (weekend) {
              daysLabel = `По ${
                days.filter((d) => d !== 'субботам' && d !== 'воскресениям').join(', ')
              } и выходным`;
            } else {
              daysLabel = days.pop();
              daysLabel = `По ${days.join(', ')} и ${daysLabel}`;
            }
            break;
          case 1:
            daysLabel = `По ${days.pop()}`;
            break;
          case 0:
            return null;
          default:
            return null;
        }
      }

      return <li key={t.id}>{daysLabel} в&nbsp;{t.time.substr(0, 5)}</li>;
    })}
  </ul>
);

ProgramTimes.propTypes = {
  className: PropTypes.string,
  times: PropTypes.array.isRequired,
};

ProgramTimes.defaultProps = {
  className: null,
};

export default ProgramTimes;
