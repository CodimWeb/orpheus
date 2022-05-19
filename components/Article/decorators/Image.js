import PropTypes from 'prop-types';

import { Image } from 'components';

export const ZenImage = ({ entityKey, contentState }) => {
  const p = contentState.getEntity(entityKey).getData();
  if (p.width) {
    p.width = parseFloat(p.width);
  }
  if (p.height) {
    p.height = parseFloat(p.height);
  }
  if (p.id) {
    p.id = parseFloat(p.id);
  }
  return <Image {...p} />;
};

ZenImage.propTypes = {
  contentState: PropTypes.shape({
    getEntity: PropTypes.func,
  }).isRequired,
  entityKey: PropTypes.string.isRequired,
};

export const findImageEntities = (contentBlock, callback, contentState) => {
  contentBlock.findEntityRanges(
    (character) => {
      const entityKey = character.getEntity();
      return (
        entityKey !== null
        && contentState.getEntity(entityKey).getType() === 'IMAGE'
      );
    },
    callback,
  );
};

export default {
  strategy: findImageEntities,
  component: ZenImage,
};
