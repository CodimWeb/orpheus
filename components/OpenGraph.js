import getConfig from 'next/config';
import Head from 'next/head';
import PropTypes from 'prop-types';

const { STATIC_URL } = getConfig().publicRuntimeConfig;

const getImageUrl = (image) => {
  if (typeof image === 'string') {
    return image;
  }

  if (typeof image === 'object') {
    const { id, hash, ext } = image;
    return (id && hash && ext) ? `${STATIC_URL}/images/${id}/${hash}.${ext}` : null;
  }

  return null;
};

const OpenGraph = ({
  url,
  type,
  title,
  description,
  image,
}) => (
  <Head>
    {url && <meta property="og:url" content={url} />}
    {type && <meta property="og:type" content={type} />}
    {title && <meta property="og:title" content={title} />}
    {description && <meta property="og:description" content={description} />}
    {image && <meta property="og:image" content={getImageUrl(image)} />}
  </Head>
);

const OpenGraphType = {
  description: PropTypes.string,
  image: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.shape({
      id: PropTypes.oneOfType([
        PropTypes.number,
        PropTypes.string,
      ]),
    }),
  ]),
  title: PropTypes.string,
  type: PropTypes.string,
  url: PropTypes.string,
};

OpenGraph.propTypes = OpenGraphType;

OpenGraph.defaultProps = {
  description: null,
  image: null,
  title: null,
  type: null,
  url: null,
};

export const OpenGraphStructure = PropTypes.exact(OpenGraphType);
export default OpenGraph;
