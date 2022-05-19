import PropTypes from 'prop-types';
import InlineSVG from 'svg-inline-react';

const TimeTableRow = ({ time, title, children }) => (
  <>
    <div>
      <div className="relative row align-items-start py-7">
        <div className="Schedule-arrow d-block d-lg-none">
          <InlineSVG src={require('../../static/svg/arrow-left.svg')} />
        </div>
        <div className="col-2">
          <div className="Schedule-time h4 font-weight-bold text-sans-serif" style={{ marginTop: 3 }}>
            {time}
          </div>
        </div>
        <div className="col-6">
          <h2 className="h3-a">
            {title}
          </h2>
          <p className="mt-1">
            {children}
          </p>
        </div>
        <div className="flex-1" />
        <div className="d-none d-lg-block">
          <div className="h4 pt-1 col-2 text-align-right Collapsible-showOnHover">Развернуть</div>
          <div className="h4 pt-1 col-2 text-align-right Collapsible-showOnExpand">Свернуть</div>
        </div>
      </div>
    </div>
  </>
);

TimeTableRow.propTypes = {
  time: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  children: PropTypes.node,
};

TimeTableRow.defaultProps = {
  children: null,
};

export default TimeTableRow;
