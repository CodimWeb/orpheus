import { useCallback, useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import {
  compileUrl,
  Layout,
  NewsList,
  NewsMenu,
  Pagination,
} from 'components';
import fetch from 'services/api';

const NewsIndex = ({
  initialData,
}) => {
  const [data, setData] = useState(initialData);
  const [infinite, setInfinite] = useState(false);
  const [allLoaded, setAllLoaded] = useState(false);
  const [loading, setLoading] = useState(false);
  const [, setError] = useState(null);

  useEffect(() => {
    setData(initialData);
    setInfinite(false);
    setAllLoaded(initialData.items.length < 15);
  }, [initialData]);

  const {
    items,
    main,
    newsTypes,
    page,
    pageCount,
  } = data;

  const loadMore = useCallback((e) => {
    e.preventDefault();
    if (loading) {
      return;
    }
    setLoading(true);
    setError(null);
    setInfinite(true);

    fetch(`/news?page=${page + 1}`)
      .then((d) => {
        setData((prev) => ({
          ...prev,
          ...d,
          items: [
            ...prev.items,
            ...d.items,
          ],
        }));
        setAllLoaded(d.items.length < 15);
      })
      .catch((err) => {
        setError(err.message);
      })
      .then(() => {
        setLoading(false);
      });
  }, [loading, page]);

  return (
    <Layout title="События">
      <section>
        <div className="container">
          <h1 className="py-8">Недавние события</h1>
          <NewsMenu items={newsTypes} />
        </div>
        <NewsList
          back={3}
          front={6}
          items={items}
          main={main}
        />
        <div className="container pb-12">
          <div className="row">
            {infinite || (
              <div className="col">
                <Pagination
                  page={page}
                  count={pageCount}
                  route={{ pathname: '/news', query: { page } }}
                />
              </div>
            )}
            <div className="flex-fill" />
            {initialData.page === 1 && !allLoaded && pageCount > 1 && (
              <div className="col">
                <a
                  href="/news?page=2"
                  onClick={loadMore}
                  className="h4 pull-right"
                  style={{ cursor: 'pointer' }}
                >
                  Загрузить
                </a>
              </div>
            )}
          </div>
        </div>
      </section>
    </Layout>
  );
};

NewsIndex.getInitialProps = async (context) => {
  const { type = null, page = 1 } = context.query;
  const initialData = await fetch(compileUrl('/news', { type, page }));
  return { initialData };
};

NewsIndex.propTypes = {
  initialData: PropTypes.shape({
    items: PropTypes.array,
    page: PropTypes.number,
  }).isRequired,
};

NewsIndex.defaultProps = {
};

export default NewsIndex;
