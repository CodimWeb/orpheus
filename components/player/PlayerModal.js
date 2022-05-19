import PropTypes from 'prop-types';
import Link from 'next/link';
import Collapsible from 'react-collapsible';

import { Image, SvgIcon } from 'components';
import {
  ChannelsList,
  LeftAside,
  PlayerControls,
  Schedule,
} from 'components/player';
import { onEnterOrSpacePress } from 'services/keyboard';

const PlayerModal = ({
  bitrate,
  channelId,
  channelList,
  current,
  onHide,
  playing,
  schedule,
  setBitrate,
  setChannelId,
  setVolume,
  togglePlaying,
  volume,
}) => (
  <div>
    <div className="PlayerOverlay bg-dark pt-9 pb-8">
      <div className="PlayerOverlay-cover" />
      <div
        className="PlayerOverlay-close"
        onClick={onHide}
        role="button"
        tabIndex="-1"
        onKeyPress={onEnterOrSpacePress(onHide)}
      >
        <SvgIcon name="close-big-ico" />
      </div>
      <Schedule items={schedule} />
      <div className="container full-height" style={{ height: '100%' }}>
        <div className="row" style={{ height: '100%' }}>
          <div className="col-4 d-none d-xl-block">
            <LeftAside {...{ channelList, channelId, setChannelId }} />
          </div>
          <div className="col-1" />
          <div className="col-9">
            <PlayerControls
              bitrate={bitrate}
              bitrateList={channelId === 1 ? [64, 128, 192] : [64, 128, 256]}
              playing={playing}
              setBitrate={setBitrate}
              setVolume={setVolume}
              togglePlaying={togglePlaying}
              volume={volume}
            />
            <div className="row">
              <div className="col-3 d-none d-xl-block">
                <div className="PlayerOverlay-trackImg">
                  <Image width={220} height={220} {...current.cover} />
                </div>
              </div>
              <div className="col-6 text-light">
                <div className="d-block d-xl-none mb-2">
                  <Collapsible
                    trigger={(
                      <div className="d-flex align-items-center">
                        <div className="PlayerOverlay-collapsibleTitle h2">В эфире</div>
                        <div className="flex-fill" />
                        <SvgIcon className="PlayerOverlay-arrowLeft" name="arrow-left-white" />
                      </div>
                      )}
                  >
                    <ChannelsList {...{ channelList, channelId, setChannelId }} />
                  </Collapsible>
                </div>
                <div className="PlayerOverlay-text text-muted d-none d-xl-block">Сейчас в эфире</div>
                <div className="h1-a py-4">{current.author}</div>
                <div className="PlayerOverlay-text">
                  {current.details && current.details.map((text, i) => <div key={i}>{text}</div>)}
                </div>
              </div>
            </div>
            <div className="flex-fill" />
            <div className="d-block d-xl-none mb-6" />
            <Link href="/schedule">
              <a className="PlayerOverlay-link text-light">
                <SvgIcon name="list" />
                  Смотреть сетку вещания
              </a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  </div>
);

PlayerModal.propTypes = {
  bitrate: PropTypes.number.isRequired,
  channelId: PropTypes.number.isRequired,
  channelList: PropTypes.array.isRequired,
  current: PropTypes.shape({
    author: PropTypes.string,
    cover: PropTypes.object,
    details: PropTypes.arrayOf(PropTypes.string),
  }).isRequired,
  onHide: PropTypes.func.isRequired,
  playing: PropTypes.bool.isRequired,
  schedule: PropTypes.array.isRequired,
  setBitrate: PropTypes.func.isRequired,
  setChannelId: PropTypes.func.isRequired,
  setVolume: PropTypes.func.isRequired,
  togglePlaying: PropTypes.func.isRequired,
  volume: PropTypes.number.isRequired,
};

export default PlayerModal;
