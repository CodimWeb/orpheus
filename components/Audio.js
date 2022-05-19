import getConfig from 'next/config';

const { STATIC_URL } = getConfig().publicRuntimeConfig;

const split = (value, chunkSize) => {
  if (value.length === 0) {
    return '';
  }

  if (chunkSize <= 0) {
    return 'value';
  }

  const result = [];
  let startIndex = 0;
  let i = -1;
  const loops = Math.ceil(value.length / chunkSize);
  // eslint-disable-next-line no-plusplus
  while (++i < loops) {
    result.push(value.slice(startIndex, startIndex + chunkSize));
    startIndex += chunkSize;
  }
  return result.join('/');
};

const Audio = ({ id, filename }) => {
  const pathParts = [];
  let str = String(id);
  do {
    pathParts.push(str.substr(0, 3));
    str = str.substr(3);
  } while (str.length);
  const path = `${STATIC_URL}/audio/${pathParts.join('/')}/${filename}`;
  return <audio controls src={path} style={{ width: '100%' }} className="my-4" />;
};

export default Audio;
