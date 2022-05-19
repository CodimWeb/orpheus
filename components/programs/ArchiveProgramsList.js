import PropTypes from 'prop-types';
import { ProgramLink } from 'components/links';

import { Image, RestCells } from 'components';
import { ProgramTimes } from 'components/programs';

const ArchiveProgramsList = ({ items }) => (
  <div className="row align-items-start justify-content-between">
    {items.map((program) => (
      <div key={program.id} className="col-4">
        <div className="Card mb-9 Card--alignLeft">
          <div className="Card-img mb-3">
            <ProgramLink alias={program.alias}>
              <a>
                <Image
                  className="img-cover img-grayscale"
                  width={110}
                  height={110}
                  title={program.title}
                  {...program.cover}
                />
              </a>
            </ProgramLink>
          </div>
          <div className="Card-body">
            <h3 className="h3 pb-2">
              <ProgramLink alias={program.alias}>
                <a>{program.title}</a>
              </ProgramLink>
            </h3>
            <p>{program.anons}</p>
            <div className="small text-muted">
              <ProgramTimes times={program.times} />
            </div>
            {/*
              <div className="font-weight-bolder small pt-2">
                <span>Четверг, 15:00</span><br />
                <span>Воскресенье, 10:00</span>
              </div>
            */}
          </div>
        </div>
      </div>
    ))}
    <RestCells size="3" className="col-4" />
  </div>
);

ArchiveProgramsList.propTypes = {
  items: PropTypes.array.isRequired,
};

export default ArchiveProgramsList;
