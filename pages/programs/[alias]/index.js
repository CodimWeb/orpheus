import PropTypes from 'prop-types';

import {
  // DateControl,
  EpisodesList,
  Layout,
  Pagination,
} from 'components';
import { Breadcrumb, BreadcrumbArrow, BreadcrumbItem } from 'components/breadcrumbs';
import fetch from 'services/api';
import { ProgramDetails } from 'components/programs';
import Error from '../../_error';

const ProgramsView = ({ program, episodes, errorCode }) => {
  if (errorCode) {
    return <Error code={errorCode} />;
  }
  // const searchEpisodeByDate = (/* dateIso */) => {};

  return (
    <Layout title={program.title}>
      <section>
        <div className="bg-white">
          <div className="container">
            <div className="pt-8">
              <Breadcrumb>
                <BreadcrumbItem title="Радио классической музыки «Орфей»" href="/" />
                <BreadcrumbArrow />
                {program.inArchive ? (
                  <BreadcrumbItem title="Программы в архиве" href="/programs#archive" />
                ) : (
                  <BreadcrumbItem title="Программы в эфире" href="/programs" />
                )}
                <BreadcrumbArrow />
              </Breadcrumb>
            </div>
            <ProgramDetails {...program} />

            {/* {episodes.pageCount > 0 ? (
              <DateControl
                startIso="2019-09-01"
                endIso="2019-09-20"
                allowNoSelect
                onSelectIso={searchEpisodeByDate}
              />
            ) : <div className="py-4" />}
            */}
            <div className="py-4" />
          </div>
        </div>
        {episodes.pageCount > 0 && (
          <section className="bg-light pt-10 pb-12">
            <div className="container">
              <EpisodesList items={episodes.items} />
              <Pagination
                page={episodes.page}
                count={episodes.pageCount}
                route={{ pathname: `/programs/${program.alias}`, query: { page: episodes.page } }}
              />
            </div>
          </section>
        )}
      </section>
    </Layout>
  );
};

ProgramsView.getInitialProps = async (context) => {
  const { alias, page = 1 } = context.query;
  if (!alias) {
    return { errorCode: 404 };
  }
  try {
    const data = await fetch(`/programs/${alias}?page=${page}`);
    return data;
  } catch (err) {
    if (typeof err.status !== 'undefined') {
      return {
        errorCode: err.status,
      };
    }
    throw err;
  }
};

ProgramsView.propTypes = {
  program: PropTypes.shape({
    alias: PropTypes.string,
    inArchive: PropTypes.bool,
    title: PropTypes.string,
  }).isRequired,
  episodes: PropTypes.shape({
    items: PropTypes.arrayOf(PropTypes.object.isRequired),
    page: PropTypes.number.isRequired,
    count: PropTypes.number.isRequired,
    pageCount: PropTypes.number.isRequired,
  }).isRequired,
  errorCode: PropTypes.number,
};

ProgramsView.defaultProps = {
  errorCode: null,
};

export default ProgramsView;
