import PropTypes from 'prop-types';

import { dateFormat, Image, TagCloud } from 'components';
import { NewsLink } from 'components/links';

// With the largest image
const MainCard = ({
  alias,
  anons,
  cover,
  datetimePublish,
  id,
  tags,
  title,
  type,
}) => (
  <div className="relative">
    <NewsLink
      alias={alias}
      id={id}
      type={type}
    >
      <a className="bg-imgBigLeft">
        <Image title={title} {...cover} />
      </a>
    </NewsLink>
    <div className="bg-light">
      <div className="container">
        <div className="row">
          <div className="col-10 d-none d-xl-flex" />
          <div className="col-6 d-none d-md-flex d-xl-none" />
          <div className="col-4 d-none d-sm-flex d-lg-none d-xl-none" />
          <div className="col-4 mb-12">
            <div className="mt-9 mb-12">
              <article className="Card Card--main mb-9">
                <div className="Card-body">
                  <small className="text-muted">{dateFormat(datetimePublish)}</small>
                  <h3 className="h2 py-3">
                    <NewsLink
                      alias={alias}
                      id={id}
                      type={type}
                    >
                      <a>{title}</a>
                    </NewsLink>
                  </h3>
                  <p>{anons}</p>
                  <div className="pt-5">
                    <TagCloud items={tags} />
                  </div>
                </div>
              </article>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

MainCard.propTypes = {
  alias: PropTypes.string.isRequired,
  anons: PropTypes.string.isRequired,
  cover: PropTypes.object.isRequired,
  datetimePublish: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  tags: PropTypes.array.isRequired,
  title: PropTypes.string.isRequired,
  type: PropTypes.object.isRequired,
};

export default MainCard;
