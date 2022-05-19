import PropTypes from 'prop-types';
import getConfig from 'next/config';

const { STATIC_URL } = getConfig().publicRuntimeConfig;

const Image = ({
  alt,
  ext,
  hash,
  height,
  id,
  src: initialSrc,
  width,
  ...rest
}) => {
  let src = initialSrc;
  if (id && hash && ext) {
    src = `${STATIC_URL}/images/${id}/${hash}.${ext}`;
  }

  if (src) {
    return (
      <img
        alt={alt}
        width={width}
        height={height}
        src={src}
        {...rest}
      />
    );
  }

  // Just do not show image.
  const intWidth = parseInt(width, 10);
  const intHeight = parseInt(height, 10);

  if (!intWidth || !intHeight) {
    return null;
  }

  return (
    <svg width={width} height={height} {...rest} viewBox={`0 0 ${intWidth} ${intHeight}`}>
      <rect width={width} height={height} fill="#CCC" />
      {intWidth > 70 && intHeight > 50 && (
        <image
          width="66"
          height="46"
          x="50%"
          y="50%"
          transform="translate(-33,-23)"
          href="/static/logo-min@3x.png"
        />
      )}
    </svg>
  );
};

Image.propTypes = {
  alt: PropTypes.string,
  ext: PropTypes.string,
  hash: PropTypes.string,
  height: PropTypes.number,
  id: PropTypes.number,
  src: PropTypes.string,
  width: PropTypes.number,
};

Image.defaultProps = {
  alt: null,
  ext: null,
  hash: null,
  height: null,
  id: null,
  src: null,
  width: null,
};

export default Image;
