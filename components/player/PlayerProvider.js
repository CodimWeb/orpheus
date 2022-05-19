import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
  useRef,
} from 'react';
import PropTypes from 'prop-types';

import usePlayerSchedule from 'services/playerSchedule';
import { usePersistentState } from 'services/state';
import { channelList, fonotronChannelURL } from '../../temp/PlayerTempData'; // Доступные каналы (названия и потоки)

const PlayerContext = createContext();

export const usePlayer = () => useContext(PlayerContext);

const PlayerProvider = ({ children, router }) => {
  const playerRef = useRef();
  const [bitrate, setBitrate] = usePersistentState(128, { key: 'pl-br' }); // Текущий битрейт
  const [channelId, setChannelId] = usePersistentState(1, { key: 'pl-ch' }); // ID текущего канала
  const [muted, setMuted] = useState(false); // Без звука
  const [playing, setPlaying] = useState(false); // Нативный плеер
  const [volume, setVolume] = usePersistentState(0.5, { key: 'pl-vol' }); // Уровень громкости

  const channel = useMemo(() => channelList.find((c) => channelId === c.id), [channelId]);

  const effectiveBitrate = useMemo(() => {
    if (channel.id === 1 && bitrate === 256) {
      return 192;
    }
    if (channel.id !== 1 && bitrate === 192) {
      return 256;
    }
    return bitrate;
  }, [channel, bitrate]);

  const src = useMemo(() => {
    if (!playing) {
      return null;
    }
    if (channel && !channel.urls) {
      return fonotronChannelURL({ id: channel.id, bitrate: effectiveBitrate });
    }
    return channel && channel.urls[effectiveBitrate];
  }, [channel, effectiveBitrate, playing]);

  const { current, schedule } = usePlayerSchedule({
    channelId,
    channelName: channel && channel.title,
  });


  useEffect(() => {  
    if (playing === true) {
      playerRef.current.play();
    } else if (playing === false) {
      playerRef.current.pause();
    }
  }, [playing]);

  useEffect(() => {
    playerRef.current.volume = volume;
  }, [playerRef, volume]);

  useEffect(() => {
    if (playing) {
      const element = playerRef.current;
      const listener = () => {
        element.play();
      };
      element.addEventListener('loadeddata', listener);
      return () => {
        element.removeEventListener('loadeddata', listener);
      };
    }
    return () => {};
  }, [playerRef, playing]);

  return (
    <PlayerContext.Provider
      value={{
        bitrate: effectiveBitrate,
        channel,
        channelId,
        current,
        modal: router.pathname === '/player', // Модальное окно открыто?
        muted,
        playing,
        schedule,
        setBitrate,
        setChannelId,
        setMuted,
        setPlaying,
        setVolume,
        volume,
      }}
    >
      <audio
        ref={playerRef}
        src={src}
        volume={volume}
        muted={muted}
      />
      {children}
    </PlayerContext.Provider>
  );
};

PlayerProvider.propTypes = {
  children: PropTypes.node,
  router: PropTypes.shape({
    pathname: PropTypes.string,
  }).isRequired,
};

PlayerProvider.defaultProps = {
  children: null,
};

export default PlayerProvider;
