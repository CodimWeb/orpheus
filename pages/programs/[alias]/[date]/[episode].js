import { useState } from 'react';
import PropTypes from 'prop-types';

import {
  Article,
  Audio,
  dateFormat,
  EpisodesList,
  Layout,
  OpenGraph,
  Playlist,
  SocialBar,
  TagCloud,
} from 'components';
import { Advert, AsideProgram } from 'components/asides';
import { Breadcrumb, BreadcrumbArrow, BreadcrumbItem } from 'components/breadcrumbs';
import fetch from 'services/api';
import { onEnterOrSpacePress } from 'services/keyboard';

import playlistItems from '../../../../temp/EpisodePlaylistTempData';

const EpisodeView = ({ article, last, ad }) => {
  const [showPlaylist, setShowPlaylist] = useState(false);
  return (
    <Layout title={article.title}>
      <OpenGraph
        type="article"
        title={article.title}
        description={article.anons}
        image={article.cover}
      />
      <section className="container pt-8 pb-12">
        <div className="row">
          <div className="col-2" />
          <div className="col-8">
            <Breadcrumb>
              <BreadcrumbItem title="Радио классической музыки «Орфей»" href="/" />
              <BreadcrumbArrow />
              {article.program.inArchive ? (
                <BreadcrumbItem title="Программы в архиве" href="/programs#archive" />
              ) : (
                <BreadcrumbItem title="Программы в эфире" href="/programs" />
              )}
              <BreadcrumbArrow />
              <BreadcrumbItem
                title={article.program.title}
                href="/programs/[alias]"
                as={`/programs/${article.program.alias}`}
              />
              <BreadcrumbArrow />
            </Breadcrumb>
          </div>
        </div>
        <div className="row align-items-start justify-content-between pt-4">
          <div className="col-1">
            <SocialBar title={article.title} />
          </div>
          <div className="col-1" />
          <div className="col-8">
            <h1 className="pb-8">{article.title}</h1>
            <div className="h4 mb-3">{article.broadcasts.map((date) => <div key={date}>{dateFormat(date)}</div>)}</div>
            <Article rawState={article.description} />
            <TagCloud items={article.tags} />
            {article.audioId && <Audio id={article.audioId} filename={article.audioFilename} />}
            {/*
            <div className="row mt-6 mb-4">
                <div className="col">
                  <h4 style={{ cursor: 'pointer' }}>
                    {showPlaylist ? (
                      <a onClick={() => setShowPlaylist(false)}>Свернуть содержание выпуска</a>
                    ) : (
                      <a onClick={() => setShowPlaylist(true)}>Показать содержание выпуска</a>
                    )}
                  </h4>
                </div>
                <div className="flex-fill" />
                <div className="col">
                  <audio controls />
                </div>
            </div>
            */}
          </div>
          <div className="col-1" />
          <aside className="col-3">
            <AsideProgram {...article.program} />
            <Advert {...ad} />
          </aside>
        </div>
        {showPlaylist && (
          <section className="bg-light">
            <Playlist items={playlistItems} />
            <a
              className="h4"
              onClick={() => setShowPlaylist(false)}
              onKeyPress={onEnterOrSpacePress(() => setShowPlaylist(false))}
              role="button"
              tabIndex="-1"
              style={{ cursor: 'pointer' }}
            >
              Свернуть содержание выпуска
            </a>
          </section>
        )}
        {last && last.length > 0 && (
          <section className="bg-light pt-10 pb-12">
            <div className="container">
              <h2 className="pb-6">Последние выпуски программы</h2>
              <EpisodesList items={last} />
            </div>
          </section>
        )}
      </section>
    </Layout>
  );
};

EpisodeView.getInitialProps = async (context) => {
  const id = context.query.episode.split('-').shift();
  return fetch(`/episodes/${id}`); // @todo Добавить проверку alias
};

EpisodeView.propTypes = {
  article: PropTypes.shape({
    broadcasts: PropTypes.arrayOf(PropTypes.string),
    description: PropTypes.string,
    title: PropTypes.string,
    program: PropTypes.shape({
      alias: PropTypes.string,
      inArchive: PropTypes.bool,
      title: PropTypes.string,
    }),
    tags: PropTypes.array,
    anons: PropTypes.string,
    cover: PropTypes.object,
    audioId: PropTypes.number,
    audioFilename: PropTypes.string,
  }).isRequired,
  ad: PropTypes.object.isRequired,
  last: PropTypes.array.isRequired,
};

export default EpisodeView;
