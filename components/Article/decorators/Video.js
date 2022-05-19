import PropTypes from 'prop-types';
import ReactPlayer from 'react-player';

export const ZenVideo = ({ contentState, entityKey }) => {
  const { src } = contentState.getEntity(entityKey).getData();
  return (
    <div className="Player-wrapper">
      <ReactPlayer
        url={src}
        height="100%"
        width="100%"
        className="Player"
        controls
      />
    </div>
  );
};

ZenVideo.propTypes = {
  contentState: PropTypes.shape({
    getEntity: PropTypes.func,
  }).isRequired,
  entityKey: PropTypes.string.isRequired,
};

export const findVideoEntities = (contentBlock, callback, contentState) => {
  contentBlock.findEntityRanges(
    (character) => {
      const entityKey = character.getEntity();
      return (
        entityKey !== null
        && contentState.getEntity(entityKey).getType() === 'VIDEO'
      );
    },
    callback,
  );
};

export default {
  strategy: findVideoEntities,
  component: ZenVideo,
};
