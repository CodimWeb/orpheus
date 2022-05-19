import PropTypes from 'prop-types';
import Link from 'next/link';

import { ChannelsList } from 'components/player';

const LeftAside = ({ channelList, channelId, setChannelId }) => (
  <>
    <Link href="/">
      <a className="PlayerOverlay-logo">
        <img src="/static/logo-min@3x.png" alt="Main logo" />
      </a>
    </Link>
    <ChannelsList {...{ channelList, channelId, setChannelId }} />

    {/*
    <div className="flex-fill" />
    <a href="#" className="PlayerOverlay-link text-light">
      <InlineSVG src={require('../static/svg/note.svg')} />
      Подкасты
    </a>
    */}
  </>
);

LeftAside.propTypes = {
  channelList: PropTypes.array.isRequired,
  channelId: PropTypes.number.isRequired,
  setChannelId: PropTypes.func.isRequired,
};

export default LeftAside;
