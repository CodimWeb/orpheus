import PropTypes from 'prop-types';

import { Advert } from 'components/asides';
import { Breadcrumb, BreadcrumbItem, BreadcrumbArrow } from 'components/breadcrumbs';
import {
  Article,
  Image,
  Layout,
  OpenGraph,
  SocialBar,
} from 'components';
import { Countries, Occupations } from 'components/persons';
import fetch from 'services/api';
import Error from '../../_error';

const PersonView = ({ person, errorCode, ad }) => {
  if (errorCode) {
    return <Error code={errorCode} />;
  }

  return (
    <Layout title={person.title}>
      <OpenGraph
        type="article"
        title={person.title}
        description={person.announce}
        image={person.image}
      />
      <div className="bg-light container pt-8 pb-12">
        <div className="row">
          <div className="col-2" />
          <div className="col-8">
            <Breadcrumb>
              <BreadcrumbItem title="Радио классической музыки «Орфей»" href="/" />
              <BreadcrumbArrow />
              <BreadcrumbItem title="Энциклопедия персон" href="/persons" />
              <BreadcrumbArrow />
            </Breadcrumb>
          </div>
        </div>
        <div className="row align-items-start pt-4">
          <div className="col-1 bg-white">
            <SocialBar title={person.title} />
          </div>
          <div className="col-1" />
          <div className="col-12">
            <div className="row align-items-start pb-4">
              <div className="col-5">
                <header className="pb-5">
                  <h1>{person.title}</h1>
                  {person.originTitle && (
                    <h2 className="h1-subtitle text-muted">{person.originTitle}</h2>
                  )}
                </header>
                <div className="h3 mb-3">{person.lifeYears}</div>
                <div className="row align-items-start">
                  <div className="col-2">
                    <Occupations items={person.occupations} />
                  </div>
                  <div className="col-2">
                    <Countries items={person.countries} />
                  </div>
                </div>
              </div>
              <div className="col-2" />
              <div className="col-5">
                <Image
                  className="img-full-sized img-rounded"
                  title={person.title}
                  {...person.image}
                />
              </div>
            </div>
            <div className="row align-items-start pt-10">
              <div className="col-8">
                <Article rawState={person.biography} />
              </div>
              <div className="col-1" />
              <aside className="col-3">
                <Advert {...ad} />
              </aside>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

PersonView.getInitialProps = async (context) => {
  const id = parseInt(context.query.id, 10);
  if (!id || Number.isNaN(id) || id < 1) {
    return { errorCode: 404 };
  }
  return fetch(`/persons/${id}`)
    .catch((err) => {
      if (typeof err.status !== 'undefined') {
        return {
          errorCode: err.status,
        };
      }
      throw err;
    });
};

PersonView.propTypes = {
  ad: PropTypes.object.isRequired,
  errorCode: PropTypes.number,
  person: PropTypes.shape({
    biography: PropTypes.string,
    countries: PropTypes.array,
    image: PropTypes.object,
    lifeYears: PropTypes.string,
    occupations: PropTypes.array,
    originTitle: PropTypes.string,
    title: PropTypes.string,
    announce: PropTypes.string,
  }).isRequired,
};

PersonView.defaultProps = {
  errorCode: null,
};

export default PersonView;
