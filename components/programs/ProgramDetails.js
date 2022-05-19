import PropTypes from 'prop-types';

import { Article, Image, ProgramTimes } from 'components';
import { Hosts } from 'components/programs';

const ProgramDetails = ({
  description,
  hosts,
  image,
  times,
  title,
}) => (
  <div className="row pt-4">
    <div className="col-7">
      <h1 className="pb-7">{title}</h1>
      <Article className="pb-5" rawState={description} />
      <div className="row align-items-start">
        {/* @todo Вместо проверки времени на нули разобраться с появлением пустых записей */}
        {times && times.length > 0 && times[0].time !== '00:00:00' && (
        <div className="col-3">
          <h3 className="h4 font-weight-normal text-sans-serif text-muted mb-2">Выходит</h3>
          <ProgramTimes className="list-headers" times={times} />
        </div>
        )}
        {hosts && hosts.length > 0 && (
        <div className="col-4">
          <h3 className="h4 font-weight-normal text-sans-serif text-muted mb-2">
            {hosts.length === 1 ? 'Ведущий' : 'Ведущие'}
          </h3>
          <Hosts hosts={hosts} />
        </div>
        )}
      </div>
    </div>
    <div className="col-2" />
    <div className="col-5">
      {image && (
        <Image
          className="img-full-sized img-rounded"
          title={title}
          {...image}
        />
      )}
    </div>
  </div>
);

ProgramDetails.propTypes = {
  description: PropTypes.object.isRequired,
  hosts: PropTypes.array,
  image: PropTypes.object,
  times: PropTypes.arrayOf(PropTypes.shape({
    time: PropTypes.string,
  })),
  title: PropTypes.string.isRequired,
};

ProgramDetails.defaultProps = {
  hosts: null,
  image: null,
  times: null,
};

export default ProgramDetails;
