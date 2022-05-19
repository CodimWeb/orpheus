import { useCallback, useEffect } from 'react';
import PropTypes from 'prop-types';
import cs from 'classnames';
import Router from 'next/router';

import { SvgIcon } from 'components';
import { PlayerModal, usePlayer } from 'components/player';
import { channelList } from '../../temp/PlayerTempData'; // Доступные каналы (названия и потоки)

const Player = ({ className, showInfo, showVol }) => {
  const {
    bitrate,
    channelId,
    current,
    modal,
    muted,
    playing,
    schedule,
    setBitrate,
    setChannelId,
    setMuted,
    setPlaying,
    setVolume,
    volume,
  } = usePlayer();

  useEffect(()=>{
    if(window.location.pathname == '/player') {
      document.body.classList.add('open-player');
    } 
  });

  useEffect(() => {
    return () => {
      document.body.classList.remove('open-player');
    }
  }, []);

  const showModal = useCallback(() => {
    Router.push('/player');
    document.body.classList.add('open-player');
  }, []);

  const hideModal = useCallback(() => {
    if (!modal) {
      return;
    }
    if (window.history.length > 1) {
      window.history.go(-1);
      document.body.classList.remove('open-player');
    } else {
      document.body.classList.remove('open-player');
      Router.push('/');
    }
  }, [modal]);

  const togglePlaying = useCallback(() => setPlaying((v) => !v), [setPlaying]);
  const toggleMuted = useCallback(() => setMuted((v) => !v), [setMuted]);

  const navPlayBtnHandler = useCallback((e) => {
    e.preventDefault();
    showModal();
  }, [showModal]);

  // @todo Player-vol должен по клику отъезжать на место Nav-tracksBtn,
  // открывая регулировку громкости. Отключение звука - временная заглушка
  return (
    <>
      <div className={cs('Player', 'd-flex', 'align-items-center', className)}>
        {showVol && (
          <div className={cs({ 'Player-vol': true, muted })}>
            <SvgIcon name="vol" onClick={toggleMuted} />
          </div>
        )}
        <div
          className={cs({ 'Player-play': true, playing })}
          title={`${current.author}${current.author && current.details && ' — '}${current.details.join(', ')}`}
        >
          <SvgIcon name="play" onClick={togglePlaying} />
        </div>
        {showInfo && (
          <div className="Player-info">
            <div className="Player-track">
              {current.author}{current.details && current.details.length > 0 && ` — ${current.details[0]}`}
            </div>
            <div className="Player-descr">
              {current.details && current.details.length > 1 && current.details.slice(1).join(', ')}
            </div>
          </div>
        )}
        <a href="/player" className="Nav-tracksBtn" onClick={navPlayBtnHandler}>
          <SvgIcon name="list" />
        </a>
      </div>
      {modal && (
        <PlayerModal
          bitrate={bitrate}
          channelId={channelId}
          channelList={channelList}
          current={current}
          onHide={hideModal}
          playing={playing}
          schedule={schedule}
          setBitrate={setBitrate}
          setChannelId={setChannelId}
          setVolume={setVolume}
          togglePlaying={togglePlaying}
          volume={volume}
        />
      )}
    </>
  );
};

Player.propTypes = {
  className: PropTypes.string,
  showInfo: PropTypes.bool,
  showVol: PropTypes.bool,
};

Player.defaultProps = {
  className: '',
  showInfo: false,
  showVol: false,
};

export default Player;
