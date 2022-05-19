import { useState, useEffect } from 'react';
import pluralize from 'pluralize-ru';
import PropTypes from 'prop-types';
import Link from 'next/link';

import {
  compileUrl,
  Layout,
  Pagination,
} from 'components';
import {
  EpisodeResult,
  NewsResult,
  PersonResult,
  ProgramResult,
  TeamResult,
} from 'components/search';
import fetch from 'services/api';

const Search = ({
  term: initTerm,
  tag,
  results,
  total,
  page,
  pageCount,
}) => {
  const [term, setTerm] = useState(initTerm);
  useEffect(() => {
    setTerm(initTerm);
  }, [initTerm]);

  const getPaginatorQuery = () => {
    const params = {};

    if (term) {
      params.term = term;
    }

    if (tag) {
      params.tag = tag.id;
    }

    params.page = page; // Добавляем последним для красоты :)

    return params;
  };

  return (
    <Layout title="Результаты поиска">
      <div className="py-10">
        <div className="container">
          <h1>Результаты поиска</h1>
          <form className="my-5">
            <div className="input-group">
              <input
                type="text"
                name="term"
                className="form-control"
                value={term}
                onChange={(e) => setTerm(e.target.value)}
              />
              <div className="input-group-append">
                <button type="submit" className="btn btn-primary">Искать</button>
              </div>
            </div>
            {tag && (
              <>
                <input type="hidden" name="tag" value={tag.id} />
                <p>Поиск по тегу: {tag.title}</p>
              </>
            )}
          </form>
          {results.length > 0 ? (
            <>
              <p>
                {pluralize(
                  total,
                  'Результатов не найдено.',
                  'Найден %d результат:',
                  'Найдено %d результата:',
                  'Найдено %d результатов:',
                )}
              </p>
              <ul className="list-unstyled">
                {results.map(({ type, data: item }) => {
                  switch (type) {
                    case 'programs': return <ProgramResult {...item} key={`p-${item.id}`} />;
                    case 'episodes': return <EpisodeResult {...item} key={`e-${item.id}`} />;
                    case 'persons': return <PersonResult {...item} key={`h-${item.id}`} />;
                    case 'news': return <NewsResult {...item} key={`n-${item.id}`} />;
                    case 'team': return <TeamResult {...item} key={`t-${item.id}`} />;
                    default: return null;
                  }
                })}
              </ul>
              <Pagination
                page={page}
                count={pageCount}
                route={{ pathname: '/search', query: getPaginatorQuery() }}
              />
            </>
          ) : !term && !tag && (
            <>
              Пример:{' '}
              <Link href="/search?term=Бах">
                <a style={{ borderBottom: '1px dotted grey' }}>Бах</a>
              </Link>
            </>
          )}
        </div>
      </div>
    </Layout>
  );
};

Search.getInitialProps = async (context) => {
  const { term, tag: tagId, page = 1 } = context.query;
  if (!term && !tagId) {
    return { term, tagId };
  }

  const {
    docs: results,
    total,
    tag,
    size,
  } = await fetch(compileUrl('/search', { term, tag: tagId, page }));

  return {
    results,
    total,
    tag,
    term,
    page: Number(page),
    pageCount: Math.ceil(total / size),
  };
};

Search.propTypes = {
  results: PropTypes.array,
  tag: PropTypes.string,
  term: PropTypes.string,
  total: PropTypes.number,
  page: PropTypes.number,
  pageCount: PropTypes.number,
};

Search.defaultProps = {
  results: [],
  tag: null,
  term: '',
  total: 0,
  page: 1,
  pageCount: 0,
};

export default Search;
