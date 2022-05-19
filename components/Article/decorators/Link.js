import PropTypes from 'prop-types';
import Link from 'next/link';

export const isLocalLinkData = (data) => data.program
  || data.episode || data.person || data.team || data.news;

export const ZenLink = ({ entityKey, contentState, children }) => {
  const { url, data = {} } = contentState.getEntity(entityKey).getData();
  const { target, as, ...props } = data;

  if (isLocalLinkData(data)) {
    return (
      <Link href={url} as={as} target={target}>
        <a {...props}>{children}</a>
      </Link>
    );
  }

  return (
    <a
      href={url}
      target={target || '_blank'}
      rel="nofollow noreferrer"
      {...props}
    >
      {children}
    </a>
  );
};

ZenLink.propTypes = {
  children: PropTypes.node,
  contentState: PropTypes.shape({
    getEntity: PropTypes.func,
  }).isRequired,
  entityKey: PropTypes.string.isRequired,
};

ZenLink.defaultProps = {
  children: null,
};

export const findLinkEntities = (contentBlock, callback, contentState) => {
  contentBlock.findEntityRanges(
    (character) => {
      const entityKey = character.getEntity();
      return (
        entityKey !== null
        && contentState.getEntity(entityKey).getType() === 'LINK'
      );
    },
    callback,
  );
};

export default {
  strategy: findLinkEntities,
  component: ZenLink,
};
