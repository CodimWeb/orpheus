import PropTypes from 'prop-types';
import Link from 'next/link';

import { NewsList } from 'components/news';
import { SvgIcon } from 'components';

const News = ({ items, main }) => (
  <section className="pt-10" data-animate="mainEvents">
    <div className="bg-white" data-animate="eventsBg" />
    <div data-animate="eventsContent">
      <div className="container">
        <h2 className="h1 mb-10">Последние события</h2>
      </div>
      <NewsList
        items={items}
        main={main}
        front={3}
        simple={6}
      />
      <div className="container">
        <div className="row justify-content-end">
          <Link href="/news">
            <a className="AllEvents">
              <span>Все <br />события</span>
              <SvgIcon name="news" />
            </a>
          </Link>
        </div>
      </div>
    </div>
  </section>
);

News.propTypes = {
  items: PropTypes.array.isRequired,
  main: PropTypes.object,
};

News.defaultProps = {
  main: null,
};

export default News;
