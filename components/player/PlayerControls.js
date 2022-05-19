import PropTypes from 'prop-types';
import cs from 'classnames';

import { SvgIcon } from 'components';
import { VolumeSlider } from 'components/player';
import { onEnterOrSpacePress } from 'services/keyboard';

const PlayerControls = ({
  bitrate,
  bitrateList,
  playing,
  setBitrate,
  setVolume,
  togglePlaying,
  volume,
}) => (
  <div className="LivePlayer d-flex align-items-center mb-9">
    <div className={cs({ 'LivePlayer-play': true, playing })}>
      <SvgIcon name="play" onClick={togglePlaying} />
    </div>
    <VolumeSlider value={volume} onChange={setVolume} />
    <div className="LivePlayer-vol">
      <SvgIcon name="vol" />
    </div>
    {bitrateList.map((b) => (
      <div
        key={b}
        className={cs({
          'LivePlayer-quality': true,
          'is-active': b === bitrate,
        })}
        onClick={() => setBitrate(b)}
        role="button"
        tabIndex="-1"
        onKeyPress={onEnterOrSpacePress(() => setBitrate(b))}
      >
        {b} kbps
      </div>
    ))}
  </div>
);

PlayerControls.propTypes = {
  bitrate: PropTypes.number.isRequired,
  bitrateList: PropTypes.arrayOf(PropTypes.number).isRequired,
  playing: PropTypes.bool.isRequired,
  setBitrate: PropTypes.func.isRequired,
  setVolume: PropTypes.func.isRequired,
  togglePlaying: PropTypes.func.isRequired,
  volume: PropTypes.number.isRequired,
};

export default PlayerControls;
