import PropTypes from 'prop-types';

import {
  Article,
  dateFormat,
  Layout,
  NewsList,
  OpenGraph,
  SocialBar,
  TagCloud,
} from 'components';
import {
  Advert,
  AsideEpisode,
  AsidePerson,
  AsideProgram,
} from 'components/asides';
import {
  Breadcrumb,
  BreadcrumbArrow,
  BreadcrumbItem,
} from 'components/breadcrumbs';
import fetch from 'services/api';

const NewsView = ({ article, ad, last }) => (
  <Layout title={article.title}>
    <OpenGraph
      type="article"
      title={article.title}
      description={article.anons}
      image={article.cover}
    />
    <section className="bg-light">
      <div className="container pt-8 pb-12">
        <div className="row">
          <div className="col-2" />
          <div className="col-8">
            <Breadcrumb>
              <BreadcrumbItem title="Радио классической музыки «Орфей»" href="/" />
              <BreadcrumbArrow />
              <BreadcrumbItem
                title={article.type.title}
                href="/news/[type]"
                as={`/news/${article.type.alias}`}
              />
              <BreadcrumbArrow />
            </Breadcrumb>
          </div>
        </div>
        <div className="row align-items-start pt-3">
          <div className="col-1">
            <SocialBar title={article.title} />
          </div>
          <div className="col-1" />
          <div className="col-8">
            <h1 className="pb-3">{article.title}</h1>
            <p className="py-4">Дата публикации: {dateFormat(article.datetimePublish)}</p>
            <Article className="pb-4" rawState={article.body} />
            <TagCloud items={article.tags} />
          </div>
          <div className="col-1" />
          <aside className="col-3">
            {article.asidePerson && <AsidePerson {...article.asidePerson} />}
            {article.asideProgram && <AsideProgram {...article.asideProgram} />}
            {article.asideEpisode && <AsideEpisode {...article.asideEpisode} />}
            {ad && <Advert {...ad} />}
          </aside>
        </div>
      </div>
      <section className="bg-light pt-10 pb-12">
        <div className="container">
          <h2 className="pb-6">Последние события</h2>
          <NewsList items={last} front={3} />
        </div>
      </section>
    </section>
  </Layout>
);

NewsView.getInitialProps = async (context) => {
  const { id } = context.query; // @todo Добавить проверку alias
  return fetch(`/news/${id}`);
};

NewsView.propTypes = {
  ad: PropTypes.object.isRequired,
  article: PropTypes.shape({
    asideEpisode: PropTypes.object,
    asidePerson: PropTypes.object,
    asideProgram: PropTypes.object,
    body: PropTypes.object,
    datetimePublish: PropTypes.string,
    tags: PropTypes.array,
    title: PropTypes.string,
    type: PropTypes.shape({
      alias: PropTypes.string,
      title: PropTypes.string,
    }),
    anons: PropTypes.string,
    cover: PropTypes.object,
  }).isRequired,
  last: PropTypes.array.isRequired,
};

export default NewsView;
