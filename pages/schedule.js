import PropTypes from 'prop-types';
import Router from 'next/router';
import addDays from 'date-fns/addDays';
import isToday from 'date-fns/isToday';
import isTomorrow from 'date-fns/isTomorrow';
import isYesterday from 'date-fns/isYesterday';
import parseISO from 'date-fns/parseISO';

import { DateControl, Layout, TimeTable } from 'components';
import { dateFormat, dateFormatCollection } from 'components/dateFormat';
import fetch from 'services/api';

// import timetable from '../temp/ScheduleTempData';

// TODO: add inner timetable and make it collapsible

const formatHumanDate = (dateIso) => {
  const date = parseISO(dateIso);
  if (isYesterday(date)) return 'Вчера';
  if (isToday(date)) return 'Сегодня';
  if (isTomorrow(date)) return 'Завтра';
  return dateFormat(date, 'd MMMM');
};

const Schedule = ({
  blocks,
  dateIso,
  endIso,
  startIso,
}) => {
  const onSelectIso = (d) => Router.push(`/schedule?date=${d}`);
  return (
    <Layout>
      <div className="bg-white">
        <DateControl selectIso={dateIso} {...{ startIso, endIso, onSelectIso }} />
      </div>
      <div className="container py-8">
        <h1 className="Schedule-title h1-a mb-10">
          {formatHumanDate(dateIso)}<span className="d-none d-md-inline">, </span>
          <span className="Schedule-subTitle d-block d-md-inline">в эфире радио Орфей</span>
        </h1>
        <div className="TimeTable">
          <TimeTable blocks={blocks} />
        </div>
      </div>
    </Layout>
  );
};

Schedule.getInitialProps = async (context) => {
  const dateIso = context.query.date || dateFormat(new Date(), dateFormatCollection.iso);
  const blocks = await fetch(`/schedule/${dateIso}`);
  return {
    dateIso,
    startIso: '2019-09-27',
    endIso: dateFormat(addDays(new Date(), 6), dateFormatCollection.iso),
    blocks,
  };
};

Schedule.propTypes = {
  dateIso: PropTypes.string.isRequired,
  startIso: PropTypes.string.isRequired,
  endIso: PropTypes.string.isRequired,
  blocks: PropTypes.array.isRequired,
};

export default Schedule;
